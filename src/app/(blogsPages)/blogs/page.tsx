import React from "react";
import { use } from "react";
import Blogs from "@/components/pagesComponent/blogs/Blogs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs | WRTeam",
  description:
    "Explore our collection of insightful blogs about web and mobile app development",
  alternates: {
    canonical: `https://www.wrteam.in/blogs`,
  },
};

export default function BlogsPage({
  searchParams,
}: {
  searchParams: Promise<{
    page?: string | undefined;
    category_slug?: string | undefined;
  }>;
}) {
  // Use the 'use' hook to handle the Promise synchronously
  const resolvedParams = use(searchParams);

  // Convert page parameter to number with fallback to 1
  const currentPage = resolvedParams.page
    ? parseInt(resolvedParams.page, 10)
    : 1;

  // Get category slug from URL parameters
  const categorySlug = resolvedParams.category_slug ?? null;

  return <Blogs currentPage={currentPage} categorySlug={categorySlug} />;
}
