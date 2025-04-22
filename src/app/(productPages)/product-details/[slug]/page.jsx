import React from "react";
import ProductDetailsPage from "@/components/pagesComponent/productDetailsPage/ProductDetailsPage";
import { Metadata } from "next";
import OldProductDetailPage from "@/components/pagesComponent/productDetailsPage/oldUi/OldProductDetailPage";
import { SoftwareProductSchema } from "@/components/JsonLdSchema";

// Function to fetch product data from the API
async function fetchProductData(slug) {
  try {
    const response = await fetch(
      `https://backend.wrteam.in/api/products?slug=${slug}`,
      { next: { revalidate: 3600 } } // Revalidate every hour
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
export async function generateMetadata({ params }) {
  // Make sure params is properly resolved before accessing its properties
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const productData = await fetchProductData(slug);

  if (!productData || productData.error) {
    // Fallback metadata if product data not found
    return {
      title: "Product Not Found | WRTeam",
      description: "The requested product could not be found.",
    };
  }

  const product = productData.data;

  // Use SEO fields if available, otherwise fallback to product data
  return {
    title: product.seo_title || product.name,
    description:
      product.seo_description ||
      `${product.product_title} - ${product.price}$ - Buy now`,
    keywords:
      product.seo_keywords ||
      `${product.product_title}, buy, app, mobile, flutter`,
    openGraph: {
      title: product.seo_title || product.name,
      description:
        product.seo_description ||
        `${product.product_title} - ${product.price}$ - Buy now`,
      images: product.seo_image
        ? [product.seo_image]
        : product.banner_image
        ? [product.banner_image]
        : [],
      type: "website",
      siteName: "WRTeam",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: product.seo_title || product.name,
      description:
        product.seo_description ||
        `${product.product_title} - ${product.price}$ - Buy now`,
      images: product.seo_image
        ? [product.seo_image]
        : product.banner_image
        ? [product.banner_image]
        : [],
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `https://wrteam.in/product-details/${slug}`,
    },
    other: {
      "product:price:amount": product.price?.toString() || "",
      "product:price:currency": "USD",
    },
  };
}

export default async function Page({ params, searchParams }) {
  // Make sure params is properly resolved
  const resolvedParams = await params;
  // Also resolve searchParams if needed
  const resolvedSearchParams = await searchParams;

  // Fetch product data
  const productData = await fetchProductData(resolvedParams.slug);
  const product = productData?.data;
  const isNewUI = product?.display_new_ui;

  // Pass the slug to the ProductDetailsPage component
  return (
    <div>
      {/* Add structured data schema for the product */}
      {product && <SoftwareProductSchema product={product} />}

      {isNewUI === 1 ? (
        <ProductDetailsPage
          slug={resolvedParams.slug}
          productData={product}
          searchParams={resolvedSearchParams}
        />
      ) : (
        <OldProductDetailPage
          slug={resolvedParams.slug}
          productData={product}
          searchParams={resolvedSearchParams}
        />
      )}
    </div>
  );
}
