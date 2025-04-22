"use client";

import React from "react";
import { useRouter, usePathname } from "next/navigation";

interface BlogPaginationProps {
  currentPage: number;
  lastPage: number;
  categorySlug: string | null;
}

export default function BlogPagination({
  currentPage,
  lastPage,
  categorySlug,
}: BlogPaginationProps) {
  const router = useRouter();
  const pathname = usePathname();

  const handlePageChange = (page: number) => {
    // Construct URL with page and optional category parameters
    let url = `${pathname}?page=${page}`;
    if (categorySlug) {
      url += `&category_slug=${categorySlug}`;
    }

    // Navigate with the URL parameters
    router.push(url, { scroll: false });
  };

  return (
    <div className="flex justify-center mt-8">
      <div className="flex items-center gap-2">
        <button
          onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded ${
            currentPage === 1
              ? "bg-gray-200 cursor-not-allowed"
              : "primaryBg text-white"
          }`}
        >
          Previous
        </button>

        {Array.from({ length: lastPage }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`w-10 h-10 rounded-full ${
              page === currentPage ? "primaryBg text-white" : "border"
            }`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => handlePageChange(Math.min(currentPage + 1, lastPage))}
          disabled={currentPage === lastPage}
          className={`px-4 py-2 rounded ${
            currentPage === lastPage
              ? "bg-gray-200 cursor-not-allowed"
              : "primaryBg text-white"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
}
