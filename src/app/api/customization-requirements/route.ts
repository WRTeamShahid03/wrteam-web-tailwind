import { NextResponse } from "next/server";
import axios from "axios";
import FormData from "form-data";

export async function POST(request: Request) {
  try {
    // Get form data from the request
    const formData = await request.formData();
    
    // Create a new FormData object for the backend API
    const apiFormData = new FormData();
    
    // Add text fields to the form data
    apiFormData.append('user_name', formData.get('user_name') || '');
    apiFormData.append('contact', formData.get('contact') || '');
    apiFormData.append('email', formData.get('email') || '');
    apiFormData.append('product_name', formData.get('product_name') || '');
    apiFormData.append('requirement_explanation', formData.get('requirement_explanation') || '');
    
    // Add the file if it exists
    const requirementFile = formData.get('requirement_file') as File;
    if (requirementFile && requirementFile.size > 0) {
      const fileBuffer = await requirementFile.arrayBuffer();
      const buffer = Buffer.from(fileBuffer);
      
      apiFormData.append('requirement_file', buffer, {
        filename: requirementFile.name,
        contentType: requirementFile.type,
      });
    }
    
    // Send the form data to the backend API
    const response = await axios.post(
      "http://backend.wrteam.in/api/customisation-requirement/submit",
      apiFormData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Accept': 'application/json',
        },
        timeout: 30000 // Longer timeout for file uploads
      }
    );
    
    return NextResponse.json(response.data);
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: "Failed to submit customization request" },
      { status: 500 }
    );
  }
}
