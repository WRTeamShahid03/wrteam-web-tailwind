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

    // Fetch portfolio products from the external API
    const response = await axios.get(
      `https://backend.wrteam.in/api/portfolio-products`,
      {
        params: { slug },
        headers: {
          Accept: "application/json",
        },
        timeout: 15000,
      }
    );

    return NextResponse.json(response.data);
  } catch (error) {
    console.error("Error fetching portfolio products:", error);
    return NextResponse.json(
      { error: "Failed to fetch portfolio products" },
      { status: 500 }
    );
  }
}

