import { NextResponse } from "next/server";
import axios from "axios";

export async function GET(request: Request) {
  try {
    // Get slug from URL parameters
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get("slug");

    if (!slug) {
      return NextResponse.json(
        { error: "Slug parameter is required" },
        { status: 400 }
      );
    }

    // Fetch product description from the external API
    const response = await axios.get(
      `https://backend.wrteam.in/api/product-description`,
      {
        params: { slug },
        headers: {
          Accept: "application/json",
        },
        timeout: 15000, // Longer timeout for this detailed API
      }
    );

    return NextResponse.json(response.data);
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch product description" },
      { status: 500 }
    );
  }
}
