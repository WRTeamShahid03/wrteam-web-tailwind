// Remove 'use client' since this will be a Server Component
import React, { Suspense } from "react";
import Layout from "@/components/layout/Layout";
import RightSideContent from "./RightSideContent";
import { MdDateRange } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";
import blogImg from "@/assets/images/blogimg.jpg";
import Breadcrumb from "@/components/commonComponents/Breadcrumb";
import { Blog } from "@/types/blogs";
import RichTextContent from "@/components/commonComponents/RichTextContent";
import SocialShareButtons from "./SocialShareButtons";
import BlogImage from "./BlogImage"; // Import the client component directly
import { calculateReadTime, extractTextFromHTML, formatDate } from "@/utils/helpers";

// Loading component
function BlogLoading() {
  return (
    <div className="col-span-12 lg:col-span-8 py-10">
      <div className="animate-pulse space-y-4">
        <div className="h-6 bg-gray-200 rounded w-1/4"></div>
        <div className="h-10 bg-gray-200 rounded w-3/4"></div>
        <div className="h-80 bg-gray-200 rounded w-full"></div>
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          <div className="h-4 bg-gray-200 rounded w-4/6"></div>
        </div>
      </div>
    </div>
  );
}

// Fetch blog data on the server
async function fetchBlogDetail(slug: string): Promise<Blog | null> {
  try {
    const url = `${process.env.NEXT_PUBLIC_API_URL || "https://backend.wrteam.in"
      }/api/blogs?slug=${slug}`;

    // Server-side fetch with revalidation
    const response = await fetch(url);

    const data = await response.json();

    if (data?.data) {
      return data.data;
    }

    return null;
  } catch (error) {
    console.error("Error fetching blog detail:", error);
    return null;
  }
}


// Blog content component that will be wrapped in Suspense
async function BlogContent({ slug }: { slug: string }) {
  // Fetch blog detail on the server
  const blog = await fetchBlogDetail(slug);

  if (!blog) {
    return (
      <div className="col-span-12 lg:col-span-8 text-center py-10">
        <p>Blog not found.</p>
      </div>
    );
  }


  return (
    <div className="col-span-12 lg:col-span-8">
      <div className="flexColCenter !items-start commonTextGap">
        <div className="flex items-center gap-6">
          <div className="flexCenter gap-2 textSecondary text-sm font-semibold">
            <span>
              <MdDateRange className="primaryColor" size={20} />
            </span>
            <span>{formatDate(blog.created_at)}</span>
          </div>
          <div className="flexCenter gap-2 textSecondary text-sm font-semibold">
            <span>
              <FaRegClock className="primaryColor" size={17} />
            </span>
            <span>{calculateReadTime(blog?.description)} minutes read</span>
          </div>
        </div>
        <h2 className="text-xl md:text-3xl lg:text-4xl/[50px] !font-medium">
          {blog.title}
        </h2>
        <div className="relative overflow-hidden rounded-[16px]">
          <BlogImage
            src={blog.image || (blogImg.src as string)}
            alt={blog.title}
            width={800}
            height={400}
            className="w-full"
            categoryName={blog.category?.name || "Uncategorized"}
          />
        </div>
        <RichTextContent content={blog.description} />

        {/* Social share section - use client component for social sharing functionality */}
        <SocialShareButtons />
      </div>
    </div>
  );
}

// Server component that takes slug as a parameter
const BlogDetailPage = ({ slug }: { slug: string }) => {
  return (
    <Layout>
      <Breadcrumb blueText="Blogs" secondElement="Blogs" thirdElement={slug} />
      <section className="container commonMT">
        <div className="grid grid-cols-12 gap-6">
          <Suspense fallback={<BlogLoading />}>
            <BlogContent slug={slug} />
          </Suspense>

          <div className="col-span-12 lg:col-span-4">
            <RightSideContent />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogDetailPage;
