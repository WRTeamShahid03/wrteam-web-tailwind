import { NextResponse } from "next/server";
import axios from "axios";

export async function GET(request: Request) {
  try {
    // Get page parameter from URL
    const { searchParams } = new URL(request.url);
    const page = searchParams.get('page');
    
    // Build query parameters
    const params: Record<string, string> = {};
    if (page) params.page = page;
    
    // Make API call with only page parameter if it exists
    const response = await axios.get(
      "http://backend.wrteam.in/api/team-members",
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