import { NextResponse } from "next/server";
import axios from "axios";

export async function GET(request: Request) {
  try {
    // Get filter parameters from URL
    const { searchParams } = new URL(request.url);
    const productFilter = searchParams.get('product_filter');
    const category = searchParams.get('category');
    const page = searchParams.get('page');
    
    // Build query parameters
    const params: Record<string, string> = {};
    if (productFilter) params.product_filter = productFilter;
    if (category) params.category = category;
    if (page) params.page = page;
    
    // Add parameters to API call
    const response = await axios.get(
      "https://backend.wrteam.in/api/products",
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
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}
