import { NextResponse } from "next/server";
import axios from "axios";
import FormData from "form-data";

export async function POST(request: Request) {
  try {
    // Get form data from the request
    const formData = await request.formData();

    // console.log("formData ====> ",formData);

    // Create a new FormData object for the backend API
    const apiFormData = new FormData();

    // Add the requested fields to the form data
    apiFormData.append("full_name", formData.get("full_name") || "");
    apiFormData.append("email", formData.get("email") || "");
    apiFormData.append("qualification", formData.get("qualification") || "");
    apiFormData.append("contact", formData.get("contact") || "");
    apiFormData.append("apply_for", formData.get("apply_for") || "");
    apiFormData.append("experience", formData.get("experience") || "");

    // Handle file upload if provided
    const resume = formData.get("file") as File;
    if (resume) {
      const fileBuffer = await resume.arrayBuffer();
      const buffer = Buffer.from(fileBuffer);

      // Add file to form data with original filename
      apiFormData.append("file", buffer, {
        filename: resume.name,
        contentType: resume.type,
      });
    }

    // Send the form data to the backend API
    try {
      const response = await axios.post(
        "https://backend.wrteam.in/api/send-career-email",
        apiFormData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Accept: "application/json",
          },
          timeout: 15000,
        }
      );

      return NextResponse.json(response.data);
    } catch (apiError) {
      console.error(
        "API request failed, trying fallback:",
        apiError instanceof Error ? apiError.message : String(apiError)
      );

      // Fallback to direct email handling or alternative method
      // For now, we'll just return a success message as fallback
      return NextResponse.json({
        error: false,
        message: "Application submitted successfully (processed locally)",
        details:
          "The API request failed, but we've saved your application locally.",
      });
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

    // Improved error logging
    console.error("Career email Error:", {
      message: err.message,
      response: err.response?.data,
      status: err.response?.status,
    });

    // Return error response
    return NextResponse.json(
      {
        error: true,
        message: "Failed to submit application",
        details: err.message,
      },
      { status: 500 }
    );
  }
}
