import type { Metadata } from "next";
import { fetchSeoData, SeoData } from "./api/seo";

export interface PageMetadataOptions {
  pageType: string;
  additionalMetadata?: Partial<Metadata>;
}

/**
 * Generates metadata for a page using SEO data from the API
 * @param options Options for generating the metadata
 * @returns A Promise that resolves to a Metadata object
 */
export async function generatePageMetadata(
  options: PageMetadataOptions
): Promise<Metadata> {
  const { pageType, additionalMetadata = {} } = options;
  
  // Fetch SEO data for the specified page type
  const seoData = await fetchSeoData(pageType);
  
  // Create base metadata using SEO data
  const baseMetadata: Metadata = {
    title: seoData.title, // This will use the template defined in layout.tsx
    description: seoData.description,
    keywords: seoData.keywords,
    openGraph: {
      title: seoData.title,
      description: seoData.description,
      images: seoData.image ? [seoData.image] : [],
      type: "website",
      siteName: "WRTeam",
    },
    twitter: {
      card: "summary_large_image",
      title: seoData.title,
      description: seoData.description,
      images: seoData.image ? [seoData.image] : [],
      creator: "@wrteam",
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `https://wrteam.in/${pageType === "home" ? "" : pageType}`,
    },
  };
  
  // Merge additional metadata with base metadata
  return {
    ...baseMetadata,
    ...additionalMetadata,
    // Deep merge for objects like openGraph and twitter
    openGraph: {
      ...baseMetadata.openGraph,
      ...additionalMetadata.openGraph,
    },
    twitter: {
      ...baseMetadata.twitter,
      ...additionalMetadata.twitter,
    },
  };
} 