import type { Metadata } from "next";
import HomePage from "@/components/homePage";
import JsonLd from "@/components/Schema/JsonLd";

// Generate metadata for the page
async function fetchSeoData() {
  try {
    const response = await fetch(
      `https://backend.wrteam.in/api/seo-settings?type=home`,
      {
        next: { revalidate: 0 },
        cache: 'no-store'
      }
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
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "WRTeam",
    "url": "https://www.wrteam.in",
    "logo": "https://www.wrteam.in/_next/static/media/logo.4609846a.svg",
    "description": "WRTeam is a leading mobile app, website, and software development company in Bhuj. We offer expert UI/UX design, IT services, and digital marketing solutions to help businesses grow with scalable and innovative strategies.",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+91 97979 45459",
        "email": "Support@wrteam.in",
        "contactType": "customer support",
        "areaServed": ["IN", "US", "TR", "NG", "GB", "CA"]
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "#262-263, Time Square Empire, SH 42 Mirjapar Highway",
      "addressLocality": "Bhuj",
      "addressRegion": "Gujarat",
      "postalCode": "370001",
      "addressCountry": "India"
    },
    "sameAs": [
      "https://www.facebook.com/wrteam.in",
      "https://www.linkedin.com/company/wrteam/",
      "https://www.instagram.com/wrteam.in/",
      "https://www.youtube.com/channel/UCLt9XRUuiWsqKng4681_6cQ"
    ]
  };
  return (
    <main>
      <JsonLd data={ourJsonLd} />
      <HomePage />
    </main>
  );
}
