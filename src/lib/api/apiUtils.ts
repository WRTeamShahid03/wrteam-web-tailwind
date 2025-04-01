import { AxiosError, AxiosResponse } from 'axios';

/**
 * Standard API response format
 */
export interface ApiResponse<T = any> {
  data: T;
  error: boolean;
  message: string;
  code: number;
}

/**
 * Error response format
 */
export interface ApiError {
  error: boolean;
  message: string;
  code: number;
  details?: any;
}

/**
 * Helper function to handle API responses
 */
export const handleApiResponse = <T>(response: AxiosResponse<ApiResponse<T>>): T => {
  if (response.data.error) {
    throw new Error(response.data.message || 'An error occurred');
  }
  return response.data.data;
};

/**
 * Helper function to create error objects
 */
export const createApiError = (error: unknown): ApiError => {
  if (error instanceof AxiosError) {
    return {
      error: true,
      message: error.response?.data?.message || error.message || 'Request failed',
      code: error.response?.status || 500,
      details: error.response?.data || error.cause,
    };
  }
  
  if (error instanceof Error) {
    return {
      error: true,
      message: error.message || 'An error occurred',
      code: 500,
      details: error.cause,
    };
  }
  
  return {
    error: true,
    message: 'An unknown error occurred',
    code: 500,
    details: error,
  };
};

/**
 * Function to handle API errors and return fallback data
 */
export const handleApiError = <T>(error: unknown, fallbackData?: T): { error: ApiError, data?: T } => {
  const apiError = createApiError(error);
  console.error('API Error:', apiError);
  
  return {
    error: apiError,
    data: fallbackData,
  };
}; 