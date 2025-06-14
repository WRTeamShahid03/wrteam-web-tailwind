import { NextResponse } from "next/server";
import axios from "axios";

export async function GET(request: Request) {
  try {
    // Get filter parameters from URL
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type');
    const category_id = searchParams.get('category_id');
    const offset = searchParams.get('offset') || '0';
    const limit = searchParams.get('limit') || '15';
    const slug = searchParams.get('slug');
    
    // Build query parameters
    const params: Record<string, string> = {};
    if (type) params.type = type;
    if (category_id) params.category_id = category_id;
    if (offset) params.offset = offset;
    if (limit) params.limit = limit;
    if (slug) params.slug = slug;
    
    // Add parameters to API call
    const response = await axios.get(
      "https://backend.wrteam.in/api/portfolios",
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
      { error: "Failed to fetch portfolios" },
      { status: 500 }
    );
  }
}
