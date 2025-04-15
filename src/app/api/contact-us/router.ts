import { NextResponse } from "next/server";
import axios from "axios";
import FormData from "form-data";

export async function POST(request: Request) {
  try {
    // Get form data from the request
    const formData = await request.formData();
    
    // Create a new FormData object for the backend API
    const apiFormData = new FormData();
    
    // Add the requested fields to the form data
    apiFormData.append('name', formData.get('name') || '');
    apiFormData.append('email', formData.get('email') || '');
    apiFormData.append('subject', formData.get('subject') || '');
    apiFormData.append('phone', formData.get('phone') || '');
    apiFormData.append('message', formData.get('message') || '');
    apiFormData.append('product', formData.get('product') || '');
    
    // Try to fetch the API URL structure or company website to determine proper endpoint
    try {
      // Try with GET first to check API availability and structure
      const checkApi = await axios.get("https://backend.wrteam.in", { 
        timeout: 3000 
      });
      console.log('API check response:', checkApi.status);
    } catch (error) {
      console.log('API check failed, will still try POST:', error instanceof Error ? error.message : String(error));
    }
    
    // Send the form data to the backend API
    // NOTE: Changed to use JSON format instead of form-data since 405 suggests method not allowed
    const jsonData = {

      name: formData.get('name'),
      email: formData.get('email'),
      budget: formData.get('subject'),
      phone: formData.get('phone'),
      message: formData.get('message'),
      product: formData.get('product')
    };
    
    // First try with JSON format
    try {
      const response = await axios.post(
        "https://backend.wrteam.in/api/contact-us",
        jsonData,
        {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          timeout: 10000
        }
      );
      
      // Log the response structure to help debug
      console.log('API Response:', {
        status: response.status,
        statusText: response.statusText,
        data: response.data,
      });
      
      return NextResponse.json(response.data);
    } catch (error) {
      console.log('JSON format failed, trying form-data:', error instanceof Error ? error.message : String(error));
      
      // Fall back to FormData attempt
      const response = await axios.post(
        "https://backend.wrteam.in/api/contact-us",
        apiFormData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Accept': 'application/json',
          },
          timeout: 10000
        }
      );
      
      console.log('Form-data API Response:', {
        status: response.status,
        statusText: response.statusText,
        data: response.data,
      });
      
      return NextResponse.json(response.data);
    }
  } catch (error: any) {
    // Improved error logging
    console.error('API Error:', {
      message: error.message,
      response: error.response?.data,
      status: error.response?.status,
      config: {
        url: error.config?.url,
        method: error.config?.method,
        timeout: error.config?.timeout,
      }
    });
    
    // Return more specific error information
    return NextResponse.json(
      { 
        error: true, 
        message: "Failed to submit contact request",
        details: error.message,
        status: error.response?.status,
        data: error.response?.data
      },
      { status: 500 }
    );
  }
}