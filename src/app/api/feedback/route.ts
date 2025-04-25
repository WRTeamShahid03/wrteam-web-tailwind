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
    apiFormData.append("name", formData.get("name") || "");
    apiFormData.append("product", formData.get("product") || "");
    apiFormData.append("message", formData.get("message") || "");

    // Try to fetch the API URL structure or company website to determine proper endpoint
    try {
      // Try with GET first to check API availability and structure
      const checkApi = await axios.get("https://backend.wrteam.in", {
        timeout: 3000,
      });
      console.log("API check response:", checkApi.status);
    } catch (error) {
      console.log(
        "API check failed, will still try POST:",
        error instanceof Error ? error.message : String(error)
      );
    }

    // Send the form data to the backend API
    // NOTE: Changed to use JSON format instead of form-data since 405 suggests method not allowed
    const jsonData = {
      name: formData.get("name"),
      product: formData.get("product"),
      message: formData.get("message"),
    };

    // First try with JSON format
    try {
      const response = await axios.post(
        "https://backend.wrteam.in/api/feedback",
        jsonData,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          timeout: 10000,
        }
      );

      return NextResponse.json(response.data);
    } catch (error) {
      console.log(
        "JSON format failed, trying form-data:",
        error instanceof Error ? error.message : String(error)
      );

      // Fall back to FormData attempt
      const response = await axios.post(
        "https://backend.wrteam.in/api/feedback",
        apiFormData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Accept: "application/json",
          },
          timeout: 10000,
        }
      );

      return NextResponse.json(response.data);
    }
  } catch (error: unknown) {
    // Type cast error to access properties
    const err = error as {
      message: string;
      response?: {
        data: unknown;
        status: number;
      };
      config?: {
        url: string;
        method: string;
        timeout: number;
      };
    };

    // Improved error logging
    console.error("API Error:", {
      message: err.message,
      response: err.response?.data,
      status: err.response?.status,
      config: {
        url: err.config?.url,
        method: err.config?.method,
        timeout: err.config?.timeout,
      },
    });

    // Return more specific error information
    return NextResponse.json(
      {
        error: true,
        message: "Failed to submit contact request",
        details: err.message,
        status: err.response?.status,
        data: err.response?.data,
      },
      { status: 500 }
    );
  }
}
