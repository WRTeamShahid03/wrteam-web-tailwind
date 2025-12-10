import React from 'react';
import { Metadata } from "next";
import PortfolioDetials from '@/components/pagesComponent/portfolio/PortfolioDetials';
import { fetchWithRetry } from '@/lib/fetchWithRetry';

// Function to fetch portfolio data from the API
async function fetchPortfolioData(slug: string) {
  try {
    const response = await fetchWithRetry(
      `https://backend.wrteam.in/api/portfolios?offset=0&limit=5&slug=${slug}`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch portfolio data: ${response.statusText}`);
    }

    const data = await response.json();

    // Handle different possible response structures
    let portfolioData = null;
    if (data.data && Array.isArray(data.data) && data.data.length > 0) {
      // If data.data is directly an array, take the first item
      portfolioData = data.data[0];
    } else if (data.data && !Array.isArray(data.data)) {
      // If data.data is a single object
      portfolioData = data.data;
    } else if (Array.isArray(data) && data.length > 0) {
      // If data itself is an array
      portfolioData = data[0];
    }

    return portfolioData;
  } catch (error) {
    console.error("Error fetching portfolio data:", error);
    return null;
  }
}

// Generate metadata for the portfolio details page
export async function generateMetadata(
  props: {
    params: Promise<{ slug: string }>;
  }
): Promise<Metadata> {
  const params = await props.params;
  const slug = params.slug;
  const portfolioData = await fetchPortfolioData(slug);

  if (!portfolioData) {
    // Fallback metadata if portfolio data not found
    return {
      title: process.env.NEXT_PUBLIC_TITLE,
      description: process.env.NEXT_PUBLIC_DESCRIPTION,
      keywords: process.env.NEXT_PUBLIC_META_KEYWORD,
    };
  }

  return {
    title: portfolioData.seo_title || process.env.NEXT_PUBLIC_TITLE,
    description: portfolioData.seo_description || process.env.NEXT_PUBLIC_DESCRIPTION,
    keywords: portfolioData.seo_keywords || process.env.NEXT_PUBLIC_META_KEYWORD,
    openGraph: {
      title: portfolioData.seo_title || process.env.NEXT_PUBLIC_TITLE,
      description: portfolioData.seo_description || process.env.NEXT_PUBLIC_DESCRIPTION,
      images: portfolioData.seo_image || portfolioData.app_image ? [portfolioData.image || portfolioData.app_image] : [],
      type: "website",
      siteName: "WRTeam",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: portfolioData.seo_title || process.env.NEXT_PUBLIC_TITLE,
      description: portfolioData.seo_description || process.env.NEXT_PUBLIC_DESCRIPTION,
      images: portfolioData.seo_image || portfolioData.app_image ? [portfolioData.image || portfolioData.app_image] : [],
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `https://www.wrteam.in/our-work/design/${slug}`,
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {

  const { slug } = await params;
  const portfolioData = await fetchPortfolioData(slug);

  return (
    <div>
      <PortfolioDetials portfolioData={portfolioData} />
    </div>
  );
}