"use client";
import React from "react";
import { useRouter, usePathname } from "next/navigation";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

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
    router.push(url, { scroll: true });
  };

  return (
    <div className="flex justify-center mt-12">
      <div className="flex items-center gap-2">
        <button
          onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
          disabled={currentPage === 1}
          className={`w-10 h-10 rounded-full flexCenter text-white secondaryBg ${currentPage === 1 ? "!cursor-not-allowed" : ""}`}
        >
          <FaAngleLeft />
        </button>

        {Array.from({ length: lastPage }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`w-10 h-10 rounded-full flexCenter text-white ${page === currentPage ? "primaryBg" : "border secondaryBg"}`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => handlePageChange(Math.min(currentPage + 1, lastPage))}
          disabled={currentPage === lastPage}
          className={`w-10 h-10 rounded-full flexCenter text-white secondaryBg ${currentPage === lastPage ? "!cursor-not-allowed" : ""}`}
        >
          <FaAngleRight />
        </button>
      </div>
    </div>
  );
}
