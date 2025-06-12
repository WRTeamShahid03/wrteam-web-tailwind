import type { Metadata } from "next";
import HomePage from "@/components/homePage";
import { generatePageMetadata } from "@/lib/generate-metadata";
import {
  LocalBusinessSchema,
  OrganizationSchema,
} from "@/components/JsonLdSchema";
import JsonLd from "@/components/Schema/JsonLd";

// Generate metadata for the page
// export async function generateMetadata(): Promise<Metadata> {
//   return generatePageMetadata({
//     pageType: "home",
//     additionalMetadata: {
//       // You can add page-specific overrides here if needed
//     },
//   });
// }

// Generate metadata for the page
async function fetchSeoData() {
  try {
    const response = await fetch(
      `https://backend.wrteam.in/api/seo-settings?type=home`,
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

  // console.log(seoData,"seoData -->");

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
      canonical: `https://www.wrteam.in/`,
    },
  };
}

export default function Home() {

  const ourJsonLd = {
    "@context": "http://schema.org",
    "@type": "Product",
    "name": "Mobile App And Web Development Service",
    "description": "WRTeam is a leading mobile app, website, and software development company in Bhuj. We offer expert UI/UX design, IT services, and digital marketing solutions to help businesses grow with scalable and innovative strategies.",
    "url": "https://www.wrteam.in/",
    "AggregateRating":
    {
      "@type": "AggregateRating",
      "ratingValue": "4.90",
      "reviewCount": "189",
      "worstRating": 1,
      "bestRating": 5
    }
  };

  return (
    <>
      <JsonLd data={ourJsonLd} />
      <OrganizationSchema />
      <LocalBusinessSchema />
      <HomePage />
    </>
  );
}
