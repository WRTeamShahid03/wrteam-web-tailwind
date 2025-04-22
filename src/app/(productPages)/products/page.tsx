import Products from "@/components/pagesComponent/products/Products";
import React from "react";
import { generatePageMetadata } from "@/lib/generate-metadata";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata({
    pageType: "web_products",
  });
}

// Server-side fetch function for initial products data
async function fetchInitialProducts(filter?: string, category?: string) {
  try {
    // Build query params
    const params = new URLSearchParams();
    if (filter && filter !== "default") {
      params.append("product_filter", filter);
    }
    if (category && category !== "all") {
      params.append("category", category);
    }

    const queryString = params.toString() ? `?${params.toString()}` : "";

    const response = await fetch(
      `${
        process.env.NEXT_PUBLIC_API_URL || "https://backend.wrteam.in"
      }/api/products${queryString}`,
      {
        next: { revalidate: 3600 }, // Revalidate every hour
        cache: "force-cache", // Use cache for initial load
      }
    );

    if (!response.ok) {
      return { data: [], total: 0, last_page: 1 };
    }

    const data = await response.json();
    return {
      data: data?.data?.data || [],
      total: data?.data?.total || 0,
      last_page: data?.data?.last_page || 1,
    };
  } catch (error) {
    console.error("Error fetching initial products:", error);
    return { data: [], total: 0, last_page: 1 };
  }
}

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  // Pre-resolve searchParams if needed
  const params = await searchParams;

  // Get filter and category from URL params if present
  const filter =
    typeof params.product_filter === "string"
      ? params.product_filter
      : undefined;
  const category =
    typeof params.category === "string" ? params.category : undefined;

  // Fetch initial products data on the server with filters applied
  const initialProducts = await fetchInitialProducts(filter, category);

  return (
    <div>
      <Products
        initialProducts={initialProducts.data}
        initialTotal={initialProducts.total}
        initialLastPage={initialProducts.last_page}
        initialFilter={filter}
        initialCategory={category}
      />
    </div>
  );
}
