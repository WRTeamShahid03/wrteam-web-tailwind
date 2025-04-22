import React from "react";
import AboutUs from "@/components/pagesComponent/aboutUs/AboutUs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | WRTeam",
  description:
    "WRTeam provides creative and innovative software development services",
};

export default async function AboutUsPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  // Convert page parameter to number with fallback to 1
  const params = await searchParams;
  const currentPage = params.page ? parseInt(params.page, 10) : 1;

  return <AboutUs page={currentPage} />;
}
