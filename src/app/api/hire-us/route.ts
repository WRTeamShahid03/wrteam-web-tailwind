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
    apiFormData.append('budget', formData.get('budget') || '');
    apiFormData.append('phone', formData.get('phone') || '');
    apiFormData.append('message', formData.get('message') || '');
    
    // Send the form data to the backend API
    const response = await axios.post(
      "http://backend.wrteam.in/api/hire-us",
      apiFormData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Accept': 'application/json',
        },
        timeout: 15000
      }
    );
    
    return NextResponse.json(response.data);
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: "Failed to submit hire request" },
      { status: 500 }
    );
  }
}