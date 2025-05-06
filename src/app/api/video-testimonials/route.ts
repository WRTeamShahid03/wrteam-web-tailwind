import { NextResponse } from 'next/server';
import { axiosClient, createApiError } from '@/lib/api';
import { ApiResponse } from '@/lib/api/apiUtils';

const EXTERNAL_API_URL = 'https://backend.wrteam.in/api/video-testimonials';

export async function GET() {
  try {
    // Using our axiosClient instead of standalone axios
    const response = await axiosClient.get(EXTERNAL_API_URL, {
      timeout: 8000 // 8 second timeout
    });
    
    // Return the data with proper headers
    return NextResponse.json(response.data, {
      status: 200,
      headers: {
        'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300',
      },
    });
  } catch (error) {
    // Use our standardized error handling
    const apiError = createApiError(error);
    
    return NextResponse.json(
      {
        error: true,
        message: apiError.message,
        data: null,
        code: apiError.code,
      } as ApiResponse<null>,
      { status: apiError.code }
    );
  }
}
