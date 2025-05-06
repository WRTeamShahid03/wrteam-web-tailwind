import { NextResponse } from "next/server";
import axios from "axios";

export async function GET(request: Request) {
  try {
    // Get filter parameters from URL
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const category_id = searchParams.get('category_id');
    const subcategory_id = searchParams.get('subcategory_id');
    const slug = searchParams.get('slug');
    const category_slug = searchParams.get('category_slug');
    const subcategory_slug = searchParams.get('subcategory_slug');
    const page = searchParams.get('page');
    
    // Build query parameters
    const params: Record<string, string> = {};
    if (id) params.id = id;
    if (category_id) params.category_id = category_id;
    if (subcategory_id) params.subcategory_id = subcategory_id;
    if (slug) params.slug = slug;
    if (category_slug) params.category_slug = category_slug;
    if (subcategory_slug) params.subcategory_slug = subcategory_slug;
    if (page) params.page = page;
    
    // Add parameters to API call
    const response = await axios.get(
      "https://backend.wrteam.in/api/blogs",
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
