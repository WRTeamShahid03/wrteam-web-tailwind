"use client";
import React, { useEffect, useState, Suspense } from "react";
import { axiosClient } from "@/lib/api";
import { BlogCategory, BlogCategoryResponse } from "@/types/blogsCategories";
import { useRouter, useSearchParams } from "next/navigation";

// Create a client component that uses useSearchParams
const CategoryContent = () => {
  const [categories, setCategories] = useState<BlogCategory[]>([]);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axiosClient.get<BlogCategoryResponse>(
          "/api/blogs-category",
          {
            timeout: 10000,
          }
        );

        if (response?.data?.data?.data) {
          setCategories(response.data.data.data);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const handleCategoryClick = (categoryId: number, slug: string) => {
    // Update URL with query params
    if (categoryId === 0) {
      // Reset to all blogs
      router.push("/blogs");
    } else {
      router.push(`/blogs?category_slug=${slug}`);
    }
  };

  const currentCategorySlug = searchParams.get("category_slug");

  // Render categories list
  return (
    <div className="flexColCenter !items-start gap-6">
      <div
        className={`flexCenter !justify-between w-full font-semibold border-b border-[#51535892] pb-4 cursor-pointer hover:primaryColor ${!currentCategorySlug ? "primaryColor" : "textSecondary"
          }`}
        onClick={() => handleCategoryClick(0, "")}
      >
        <span>All Categories</span>
        <span>
          ({categories.reduce((acc, cat) => acc + cat.blogs_count, 0)})
        </span>
      </div>

      {categories.map((category) => (
        <div
          key={category.id}
          className={`flexCenter !justify-between w-full font-semibold border-b border-[#51535892] last:border-b-0 pb-4 last:pb-0 cursor-pointer hover:primaryColor  ${currentCategorySlug === category.slug.toString()
            ? "primaryColor"
            : "textSecondary"
            }`}
          onClick={() => handleCategoryClick(category.id, category.slug)}
        >
          <span>{category.name}</span>
          <span>({category.blogs_count})</span>
        </div>
      ))}
    </div>
  );
};

// Main component that wraps the category content with Suspense
const RightSideContent = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState<BlogCategory[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setIsLoading(true);
        const response = await axiosClient.get<BlogCategoryResponse>(
          "/api/blogs-category",
          {
            timeout: 10000,
          }
        );

        if (response?.data?.data?.data) {
          setCategories(response.data.data.data);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    isLoading ? <div className="max-1199:col-span-12 col-span-4">
      <div className="border border-[#51535892] rounded-[16px] p-5 space-y-8">
        <div className='relative after:content-[""] after:absolute after:left-0 after:-bottom-2 after:primaryBg after:h-[5px] after:w-[14%] after:rounded-[8px]'>
          <h3 className="font-semibold text-2xl">Category</h3>
        </div>

        <div className="flexColCenter !items-start gap-6">
          {[1, 2, 3].map((item) => (
            <div key={item} className="w-full">
              <div className="flexCenter !justify-between w-full border-b border-[#51535892] last:border-b-0 pb-4 last:pb-0">
                <div className="h-6 bg-gray-200 animate-pulse rounded w-32"></div>
                <div className="h-6 bg-gray-200 animate-pulse rounded w-8"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
      :
      categories.length > 0 &&
      <div className="max-1199:col-span-12 col-span-4">
        <div className="border border-[#51535892] rounded-[16px] p-5 space-y-8">
          <div className='relative after:content-[""] after:absolute after:left-0 after:-bottom-2 after:primaryBg after:h-[5px] after:w-[14%] after:rounded-[8px]'>
            <h3 className="font-semibold text-2xl">Category</h3>
          </div>
          <Suspense fallback={<div>Loading categories...</div>}>
            <CategoryContent />
          </Suspense>
        </div>
      </div>
  );
};

export default RightSideContent;
