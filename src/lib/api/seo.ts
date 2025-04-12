// SEO API utilities

export interface SeoData {
  title: string;
  description: string;
  keywords: string;
  image: string;
}

export interface ApiResponse {
  error: boolean;
  message: string;
  data: SeoData;
  code: number;
}

/**
 * Fetches SEO data from the API for a specific page type
 * @param type The page type (e.g., "home", "about", "contact")
 * @returns The SEO data for the specified page type
 */
export async function fetchSeoData(type: string): Promise<SeoData> {
  try {
    const response = await fetch(
      `https://backend.wrteam.in/api/seo-settings?type=${type}`,
      // { next: { revalidate: 3600 } } // Revalidate every hour
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch SEO data: ${response.statusText}`);
    }

    const data: ApiResponse = await response.json();

    if (data.error) {
      throw new Error(`API Error: ${data.message}`);
    }

    return data.data;
  } catch (error) {
    console.error("Error fetching SEO data:", error);
    
    // Return default SEO data if the API fails
    return {
      title: process.env.NEXT_PUBLIC_TITLE || "",
      description: process.env.NEXT_PUBLIC_DESCRIPTION || "",
      keywords: process.env.NEXT_PUBLIC_META_KEYWORD || "", 
      image: process.env.NEXT_PUBLIC_SEO_IMAGE || "",
    };
  }
} 