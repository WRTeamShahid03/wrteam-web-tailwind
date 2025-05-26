import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    // Get the type parameter from the URL
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type');
    
    // Construct the API URL
    let apiUrl = 'https://backend.wrteam.in/api/portfolio-categories';
    if (type) {
      apiUrl += `?type=${type}`;
    }
    
    // Fetch data from the external API
    const response = await fetch(apiUrl, {
      headers: {
        'Accept': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`);
    }
    
    const data = await response.json();

    return NextResponse.json(data);
    
  } catch (error) {
    console.error('Error fetching portfolio categories:', error);
    return NextResponse.json(
      { error: 'Failed to fetch portfolio categories' },
      { status: 500 }
    );
  }
}
