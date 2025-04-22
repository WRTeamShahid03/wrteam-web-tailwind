import React from "react";
import AboutUs from "@/components/pagesComponent/aboutUs/AboutUs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | WRTeam",
  description:
    "WRTeam provides creative and innovative software development services",
};

export default function AboutUsPage({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  // Convert page parameter to number with fallback to 1
  const currentPage = searchParams.page ? parseInt(searchParams.page, 10) : 1;

  return <AboutUs page={currentPage} />;
}
