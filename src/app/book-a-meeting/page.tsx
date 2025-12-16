import BookAMeeting from '@/components/pagesComponent/bookAMeeting/BookAMeeting'
import React from 'react'
import type { Metadata } from 'next'

const isProduction = process.env.NEXT_PUBLIC_APP_ENV === "production";  
// Generate metadata for the page
async function fetchSeoData() {
  try {
    const response = await fetch(
      `https://backend.wrteam.in/api/seo-settings?type=book_a_meeting`,
      {
        next: { revalidate: 0 },
        cache: 'no-store'
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch SEO data: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching SEO data:", error);
    return null;
  }
}

// Generate metadata for the book a meeting page
export async function generateMetadata(): Promise<Metadata> {
  const seoData = await fetchSeoData();

  if (!seoData || seoData.error) {
    // Fallback metadata if SEO data not found
    return {
      title: 'Book a Meeting - Free Consultation | WRTeam',
      description: 'Schedule a free 30-minute consultation with WRTeam. Book your seat for expert advice on app development, web development, and digital solutions.',
      keywords: 'book meeting, free consultation, schedule meeting, WRTeam consultation, book appointment',
    };
  }

  const seo = seoData.data;

  // Use SEO fields if available, otherwise fallback to default data
  return {
    title: seo.title || 'Book a Meeting - Free Consultation | WRTeam',
    description:
      seo.description || 'Schedule a free 30-minute consultation with WRTeam. Book your seat for expert advice on app development, web development, and digital solutions.',
    keywords:
      seo.keywords || 'book meeting, free consultation, schedule meeting, WRTeam consultation, book appointment',
    openGraph: {
      title: seo.title || 'Book a Meeting - Free Consultation | WRTeam',
      description:
        seo.description || 'Schedule a free 30-minute consultation with WRTeam. Book your seat for expert advice on app development, web development, and digital solutions.',
      images: seo.image
        ? [seo.image]
        : [],
      type: "website",
      siteName: "WRTeam",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title || 'Book a Meeting - Free Consultation | WRTeam',
      description:
        seo.description || 'Schedule a free 30-minute consultation with WRTeam. Book your seat for expert advice on app development, web development, and digital solutions.',
      images: seo.image
        ? [seo.image]
        : [],
    },
    robots: {
      index: isProduction,
      follow: isProduction,
    },
    alternates: {
      canonical: `https://www.wrteam.in/book-a-meeting`,
    },
  };
}

const Page = () => {
  return <BookAMeeting />
}

export default Page

