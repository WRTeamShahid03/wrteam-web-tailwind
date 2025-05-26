import Layout from "@/components/layout/Layout";
import React from "react";
import RightSideContent from "./RightSideContent";
import BlogCard from "./BlogCard";
import { Blog } from "@/types/blogs";
import BlogPagination from "./BlogPagination";
import Breadcrumb from "@/components/commonComponents/Breadcrumb";

/**
 * Server component for blog listing with server-side data fetching
 * Optimized for SEO and performance
 */
async function fetchBlogs(page: number, categorySlug?: string | null) {
  try {
    // Construct the URL with appropriate parameters
    let url = `${
      process.env.NEXT_PUBLIC_API_URL || "https://backend.wrteam.in"
    }/api/blogs?page=${page}`;
    if (categorySlug) {
      url += `&category_slug=${categorySlug}`;
    }

    // Server-side fetch with revalidation
    const response = await fetch(url);

    const data = await response.json();

    if (data?.data?.data && Array.isArray(data.data.data)) {
      return {
        blogs: data.data.data,
        totalBlogs: data.data.total || 0,
        lastPage: data.data.last_page || 1,
      };
    }

    return { blogs: [] as Blog[], totalBlogs: 0, lastPage: 1 };
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return { blogs: [] as Blog[], totalBlogs: 0, lastPage: 1 };
  }
}

// Format date for display
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

// Server component with page and category parameters
const Blogs = async ({
  currentPage = 1,
  categorySlug = null,
}: {
  currentPage?: number;
  categorySlug?: string | null;
}) => {
  // Fetch blogs on the server
  const { blogs, lastPage } = await fetchBlogs(currentPage, categorySlug);

  return (
    <Layout>
      <Breadcrumb blueText="Blogs" secondElement="Blogs" />
      <section className="container commonMT">
        <div className="grid grid-cols-12 gap-y-8 lg:gap-6">
          <div className="max-1199:col-span-12 col-span-8">
            {blogs.length === 0 ? (
              <div className="text-center py-10">
                <p>No blogs found.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-6">
                {blogs.map((blog: Blog) => (
                  <BlogCard key={blog.id} blog={blog} formatDate={formatDate} />
                ))}
              </div>
            )}

            {/* Pagination controls - Client component */}
            {lastPage > 1 && (
              <BlogPagination
                currentPage={currentPage}
                lastPage={lastPage}
                categorySlug={categorySlug}
              />
            )}
          </div>

          <div className="col-span-12 lg:col-span-4">
            <RightSideContent />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blogs;
