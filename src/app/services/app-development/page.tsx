import AppDevelopment from '@/components/pagesComponent/services/AppDevelopment'
import React from 'react'
import { Metadata } from 'next'
import JsonLd from '@/components/Schema/JsonLd';

// Generate metadata for the page
async function fetchSeoData() {
  try {
    const response = await fetch(
      `https://backend.wrteam.in/api/seo-settings?type=app_development`,
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
export async function generateMetadata(): Promise<Metadata> {
  const seoData = await fetchSeoData();

  if (!seoData || seoData.error) {
    // Fallback metadata if product data not found
    return {
      title: process.env.NEXT_PUBLIC_TITLE,
      description: process.env.NEXT_PUBLIC_DESCRIPTION,
      keywords: process.env.NEXT_PUBLIC_META_KEYWORD,
      alternates: {
        canonical: `https://www.wrteam.in/services/app-development`,
      }
    };
  }

  const seo = seoData.data;

  // Use SEO fields if available, otherwise fallback to product data
  return {
    title: seo.title || process.env.NEXT_PUBLIC_TITLE,
    description: seo.description || process.env.NEXT_PUBLIC_DESCRIPTION,
    keywords: seo.keywords || process.env.NEXT_PUBLIC_META_KEYWORD,
    openGraph: {
      title: seo.title || process.env.NEXT_PUBLIC_TITLE,
      description: seo.description || process.env.NEXT_PUBLIC_DESCRIPTION,
      images: seo.image ? [seo.image] : [],
      type: "website",
      siteName: "WRTeam",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title || process.env.NEXT_PUBLIC_TITLE,
      description: seo.description || process.env.NEXT_PUBLIC_DESCRIPTION,
      images: seo.image ? [seo.image] : [],
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `https://www.wrteam.in/services/app-development`,
    }
  };
}

export default function Page() {
  const ourJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "App Development Services",
    "description": "WRTeam is a mobile application development company in Bhuj, India, offering expert mobile app development services. As a mobile application development firm and consultant, our skilled mobile app developers deliver innovative and scalable mobile app solutions.",
    "serviceType": "Mobile App Development",
    "provider": {
      "@type": "Organization",
      "name": "WRTeam",
      "url": "https://www.wrteam.in",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.wrteam.in/_next/static/media/logo.4609846a.svg"
      }
    },
    "areaServed": {
      "@type": "Place",
      "name": "India"
    },
    "url": "https://www.wrteam.in/services/app-development",
    "image": "https://www.wrteam.in/_next/static/media/AppDevlopment.f90978d1.webp",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.7",
      "reviewCount": "210"
    }
  };

  return (
    <main>
      <JsonLd data={ourJsonLd} />
      <AppDevelopment />
    </main>
  )
}