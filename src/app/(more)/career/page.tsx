import Careers from "@/components/pagesComponent/careers/Careers";
import { generatePageMetadata } from "@/lib/generate-metadata";
import { Metadata } from "next";


// export async function generateMetadata(): Promise<Metadata> {
//   return generatePageMetadata({
//     pageType: "career_seo",
//   });
// }

// Generate metadata for the page
async function fetchSeoData() {
  try {
    const response = await fetch(
      `https://backend.wrteam.in/api/seo-settings?type=career_seo`,
      { next: { revalidate: 3600 } } // Revalidate every hour
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch product data: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching product data:", error);
    return null;
  }
}

// Generate metadata for the product details page
export async function generateMetadata(
): Promise<Metadata> {
  const seoData = await fetchSeoData();

  if (!seoData || seoData.error) {
    // Fallback metadata if product data not found
    return {
      title: process.env.NEXT_PUBLIC_TITLE,
      description: process.env.NEXT_PUBLIC_DESCRIPTION,
      keywords: process.env.NEXT_PUBLIC_META_KEYWORD,
    };
  }

  const seo = seoData.data;

  // Use SEO fields if available, otherwise fallback to product data
  return {
    title: seo.title || process.env.NEXT_PUBLIC_TITLE,
    description:
      seo.description || process.env.NEXT_PUBLIC_DESCRIPTION,
    keywords:
      seo.keywords || process.env.NEXT_PUBLIC_META_KEYWORD,
    openGraph: {
      title: seo.title || process.env.NEXT_PUBLIC_TITLE,
      description:
        seo.description || process.env.NEXT_PUBLIC_DESCRIPTION,
      images: seo.image
        ? [seo.image]
        : [],
      type: "website",
      siteName: "WRTeam",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title || process.env.NEXT_PUBLIC_TITLE,
      description:
        seo.description || process.env.NEXT_PUBLIC_DESCRIPTION,
      images: seo.image
        ? [seo.image]
        : [],
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `https://www.wrteam.in/career`,
    },
  };
}


export default function page() {
  return (
    <div>
        <Careers/>
    </div>
  )
}
