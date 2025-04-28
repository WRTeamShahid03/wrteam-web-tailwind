"use client";

import React, { useEffect } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface TeamPaginationProps {
  currentPage: number;
  totalPages: number;
}

const TeamPagination = ({ currentPage, totalPages }: TeamPaginationProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Use effect to scroll to team section when the page param changes
  // useEffect(() => {
  //   // Find the team section element
  //   const teamSection = document.getElementById("team-section");
  //   if (teamSection) {
  //     // Get the current position of the team section
  //     const teamPosition = teamSection.getBoundingClientRect().top;
  //     const offsetPosition = teamPosition + window.scrollY - 100; // 100px offset for better visibility

  //     // Smooth scroll to the team section
  //     window.scrollTo({
  //       top: offsetPosition,
  //       behavior: "smooth",
  //     });
  //   }
  // }, [searchParams]);

  const handlePageChange = (page: number) => {
    // Navigate to the same page with a query parameter but prevent default scroll
    router.push(`${pathname}?page=${page}`, { scroll: false });
  };

  return (
    <div className="flex justify-center mt-10">
      <div className="flex items-center gap-2">
        <button
          onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
          disabled={currentPage === 1}
          className={`w-10 h-10 flexCenter rounded-full secondaryBg text-white ${
            currentPage === 1 ? "cursor-not-allowed " : ""
          }`}
        >
          <FaChevronLeft />
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`w-10 h-10 rounded-full ${
              page === currentPage
                ? "primaryBg text-white"
                : "secondaryBg text-white"
            }`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() =>
            handlePageChange(Math.min(currentPage + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className={`w-10 h-10 flexCenter rounded-full secondaryBg text-white ${
            currentPage === totalPages ? "cursor-not-allowed" : ""
          }`}
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default TeamPagination;
