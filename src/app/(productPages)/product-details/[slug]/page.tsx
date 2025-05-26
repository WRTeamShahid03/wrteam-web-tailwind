import React from "react";
import { use } from "react";
import { Metadata } from "next";
import ProductDetailsPage from "@/components/pagesComponent/productDetailsPage/ProductDetailsPage";
import OldProductDetailPage from "@/components/pagesComponent/productDetailsPage/oldUi/OldProductDetailPage";
import { SoftwareProductSchema } from "@/components/JsonLdSchema";

// Function to fetch product data from the API
async function fetchProductData(slug: string) {
  try {
    const response = await fetch(
      `https://backend.wrteam.in/api/products?slug=${slug}`,
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
  props: {
    params: Promise<{ slug: string }>;
  }
): Promise<Metadata> {
  const params = await props.params;
  const slug = params.slug;
  const productData = await fetchProductData(slug);

  if (!productData || productData.error) {
    // Fallback metadata if product data not found
    return {
      title: process.env.NEXT_PUBLIC_TITLE,
      description: process.env.NEXT_PUBLIC_DESCRIPTION,
      keywords: process.env.NEXT_PUBLIC_META_KEYWORD,
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
      canonical: `https://www.wrteam.in/product-details/${slug}`,
    },
    other: {
      "product:price:amount": product.price?.toString() || "",
      "product:price:currency": "USD",
    },
  };
}

export default function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // Use the 'use' hook to handle the Promise synchronously
  const { slug } = use(params);
  
  // Use server component async data fetching
  const productData = use(fetchProductData(slug));
  const product = productData?.data;
  const isNewUI = product?.display_new_ui;

  return (
    <div>
      {/* Add structured data schema for the product */}
      {product && <SoftwareProductSchema product={product} />}

      {isNewUI === 1 ? (
        <ProductDetailsPage
          slug={slug}
          productData={product}
        />
      ) : (
        <OldProductDetailPage
          // slug={slug}
          productData={product}
        />
      )}
    </div>
  );
}
