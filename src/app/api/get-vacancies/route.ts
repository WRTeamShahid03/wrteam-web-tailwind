// src/app/api/get-vacancies/route.ts
import { NextResponse } from "next/server";
import axios from "axios";

export async function GET() {
  try {
    // Try to fetch vacancies from your backend API
    const response = await axios.get(
      "https://backend.wrteam.in/api/get-vacancies",
      {
        headers: {
          Accept: "application/json",
        },
        timeout: 10000,
      }
    );

    // Return the vacancies data
    return NextResponse.json(response.data);
  } catch (error: unknown) {
    // Log the error for debugging
    console.error(
      "API request failed:",
      error instanceof Error ? error.message : String(error)
    );

    // Type cast error to access properties
    const err = error as {
      message: string;
      response?: {
        data: unknown;
        status: number;
      };
    };

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
