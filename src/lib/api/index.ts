import axiosClient from "./axiosClient";
import {
  ApiResponse,
  ApiError,
  handleApiResponse,
  createApiError,
  handleApiError,
} from "./apiUtils";

// Re-export everything for easier importing
export { axiosClient, handleApiResponse, createApiError, handleApiError };
export type { ApiResponse, ApiError };

/**
 * Generic function to fetch data from API with proper error handling
 * Specifically designed to handle the WRTeam API response format
 */
export const fetchData = async <T>(
  url: string,
  config = {}
): Promise<ApiResponse<T>> => {
  try {
    const response = await axiosClient.get<ApiResponse<T>>(url, config);
    return response.data;
  } catch (error) {
    throw error;
  }
};

/**
 * Generic function to post data to API with proper error handling
 */
export const postData = async <T, D = unknown>(
  url: string,
  data: D,
  config = {}
): Promise<T> => {
  try {
    const response = await axiosClient.post<ApiResponse<T>>(url, data, config);
    return handleApiResponse<T>(response);
  } catch (error) {
    throw error;
  }
};

/**
 * Generic function to update data via API with proper error handling
 */
export const updateData = async <T, D = unknown>(
  url: string,
  data: D,
  config = {}
): Promise<T> => {
  try {
    const response = await axiosClient.put<ApiResponse<T>>(url, data, config);
    return handleApiResponse<T>(response);
  } catch (error) {
    throw error;
  }
};

/**
 * Generic function to delete data via API with proper error handling
 */
export const deleteData = async <T>(url: string, config = {}): Promise<T> => {
  try {
    const response = await axiosClient.delete<ApiResponse<T>>(url, config);
    return handleApiResponse<T>(response);
  } catch (error) {
    throw error;
  }
};
