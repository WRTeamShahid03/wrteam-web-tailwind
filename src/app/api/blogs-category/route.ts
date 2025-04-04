import { NextResponse } from "next/server";
import axios from "axios";

export async function GET(request: Request) {
  try {
    // Make API call without any parameters
    const response = await axios.get(
      "http://backend.wrteam.in/api/blogs-categories",
      {
        headers: {
          Accept: "application/json",
        },
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