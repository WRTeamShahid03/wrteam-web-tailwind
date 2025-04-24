import React from "react";
import Blogs from "@/components/pagesComponent/blogs/Blogs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs | WRTeam",
  description:
    "Explore our collection of insightful blogs about web and mobile app development",
};

export default async function BlogsPage({
  searchParams,
}: {
  searchParams: { page?: string | undefined; category_slug?: string | undefined };
}) {
  // Convert page parameter to number with fallback to 1
  const currentPage = searchParams.page ? parseInt(searchParams.page, 10) : 1;

  // Get category slug from URL parameters
  const categorySlug = searchParams.category_slug ?? null;

  return <Blogs currentPage={currentPage} categorySlug={categorySlug} />;
}
