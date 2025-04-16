import { NextResponse } from "next/server";
import axios from "axios";

export async function GET(request: Request) {
  try {
    // Get filter parameters from URL
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type');
    
    // Build query parameters
    const params: Record<string, string> = {};
    if (type) params.id = type;
    
    // Add parameters to API call
    const response = await axios.get(
      "http://backend.wrteam.in/api/settings",
      {
        headers: {
          Accept: "application/json",
        },
        params,
        timeout: 10000
      }
    );

    return NextResponse.json(response.data);
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: "Failed to fetch blogs" },
      { status: 500 }
    );
  }
}
