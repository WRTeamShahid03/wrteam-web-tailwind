import BlogDetailPage from "@/components/pagesComponent/blogs/BlogDetailPage";
import { Metadata } from "next";
import React from "react";
import { use } from "react";

// Generate metadata for the blog page
export async function generateMetadata(
  props: {
    params: Promise<{ slug: string }>;
  }
): Promise<Metadata> {
  const params = await props.params;
  // Get the slug from the URL
  const slug = params.slug;

  try {
    // Fetch the blog post data for meta tags
    const response = await fetch(
      `${
        process.env.NEXT_PUBLIC_API_URL || "https://backend.wrteam.in"
      }/api/blogs?slug=${slug}`
    );
    const data = await response.json();

    // If blog post data was found, use it for metadata
    if (data?.data) {
      const blog = data.data;

      return {
        title: blog.seo_title || `${blog.title} | WRTeam Blog`,
        description: blog.seo_description || blog.short_description,
        keywords: blog.seo_keywords || "",
        openGraph: {
          title: blog.seo_title || blog.title,
          description: blog.seo_description || blog.short_description,
          images: blog.seo_image
            ? [blog.seo_image]
            : blog.image
            ? [blog.image]
            : [],
          type: "article",
        },
      };
    }
  } catch (error) {
    console.error("Error fetching blog metadata:", error);
  }

  // Fallback metadata
  return {
    title: "Blog Post | WRTeam",
    description: "Read our latest blog post",
  };
}

// Server component for the blog page
export default function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // Use the 'use' hook to handle the Promise synchronously
  const { slug } = use(params);
  return <BlogDetailPage slug={slug} />;
}
