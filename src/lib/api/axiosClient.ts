import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

/**
 * Base URL for API requests
 * Uses relative path for Next.js API routes to avoid CORS issues
 */
const BASE_URL = '';

/**
 * Default request timeout in milliseconds
 */
const DEFAULT_TIMEOUT = 10000;

/**
 * Configuration for the axios instance
 */
const axiosConfig: AxiosRequestConfig = {
  baseURL: BASE_URL,
  timeout: DEFAULT_TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
};

/**
 * Create a new Axios instance with custom configuration
 */
const axiosClient: AxiosInstance = axios.create(axiosConfig);

/**
 * Request interceptor for API calls
 */
axiosClient.interceptors.request.use(
  (config) => {
    // You can add auth token here
    // const token = localStorage.getItem('token');
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/**
 * Response interceptor for API calls
 */
axiosClient.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    // Handle different error statuses
    const statusCode = error.response?.status;
    
    // You can handle different status codes differently
    switch (statusCode) {
      case 401:
        // Handle unauthorized errors (e.g., redirect to login)
        // window.location.href = '/login';
        break;
      case 403:
        // Handle forbidden errors
        break;
      case 404:
        // Handle not found errors
        break;
      case 500:
        // Handle server errors
        break;
      default:
        // Handle other errors
        break;
    }

    return Promise.reject(error);
  }
);

export default axiosClient; 