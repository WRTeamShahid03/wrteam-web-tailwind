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
            'Accept': 'application/json',
          },
          timeout: 5000
        }
      );
      
      // Return the vacancies data
      return NextResponse.json(response.data);
      
    } catch (error) {
      console.log('API request failed, using fallback data:', error instanceof Error ? error.message : String(error));

    }
  } catch (error: any) {
    // Error handling
    console.error('API Error:', {
      message: error.message,
      response: error.response?.data,
      status: error.response?.status
    });
    
    // Return error response
    return NextResponse.json(
      { 
        error: true, 
        message: "Failed to fetch vacancies",
        details: error.message
      },
      { status: 500 }
    );
  }
}