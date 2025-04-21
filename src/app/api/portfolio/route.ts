import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    // Get filter parameters from URL
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type');
    const category_id = searchParams.get('category_id');
    const offset = searchParams.get('offset') || '0';
    const limit = searchParams.get('limit') || '15';


    // If a specific URL is provided (for pagination links), use that directly
    const directUrl = searchParams.get('url');
    if (directUrl) {
      try {
        const response = await axios.get(directUrl, {
          headers: {
            Accept: "application/json",
          }
        });

        return NextResponse.json(response.data);
      } catch (directError) {
        console.error('Direct URL API Error:', directError);
        throw directError;
      }
    }

    // Build query parameters - first, include all original query parameters
    const params: Record<string, string> = {};

    // Copy all original parameters 
    searchParams.forEach((value, key) => {
      // Skip 'url' parameter as it's handled separately
      if (key !== 'url') {
        params[key] = value;
      }
    });


    try {
      // Add parameters to API call
      const response = await axios.get(
        "https://backend.wrteam.in/api/portfolios",
        {
          headers: {
            Accept: "application/json",
          },
          params,
        }
      );

      // Return the data directly
      return NextResponse.json(response.data);
    } catch (apiError: any) {
      console.error('API Request Error:', {
        message: apiError.message,
        response: apiError.response?.data,
        status: apiError.response?.status,
      });

      return NextResponse.json({
        error: true,
        message: "Error fetching data from external API",
        details: apiError.message,
        data: []
      }, { status: apiError.response?.status || 500 });
    }
  } catch (error: any) {
    console.error('General Error:', error.message, error.stack);
    return NextResponse.json(
      {
        error: true,
        message: "Failed to process request",
        details: error.message,
        data: []
      },
      { status: 500 }
    );
  }
}
