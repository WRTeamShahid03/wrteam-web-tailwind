// src/app/api/get-vacancies/route.ts
import { NextResponse } from "next/server";
import axios from "axios";

export async function GET() {
  try {
    // Try to fetch vacancies from your backend API
    try {
      const response = await axios.get(
        "https://backend.wrteam.in/api/get-vacancies",
        {
          headers: {
            Accept: "application/json",
          },
          timeout: 5000,
        }
      );

      // Return the vacancies data
      return NextResponse.json(response.data);
    } catch (error) {
      console.log(
        "API request failed, using fallback data:",
        error instanceof Error ? error.message : String(error)
      );
    }
  } catch (error: unknown) {
    // Type cast error to access properties
    const err = error as {
      message: string;
      response?: {
        data: unknown;
        status: number;
      };
    };

    // Error handling
    console.error("API Error:", {
      message: err.message,
      response: err.response?.data,
      status: err.response?.status,
    });

    // Return error response
    return NextResponse.json(
      {
        error: true,
        message: "Failed to fetch vacancies",
        details: err.message,
      },
      { status: 500 }
    );
  }
}
