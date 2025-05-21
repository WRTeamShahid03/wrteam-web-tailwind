"use client";
import PageHeader from "@/components/commonComponents/PageHeader";
import SectionHeading from "@/components/commonComponents/SectionHeading";
import Layout from "@/components/layout/Layout";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

// Skeleton component for loading states
const SkeletonItem = () => (
  <div className="bg-[#2E71FE0A] rounded-xl p-4 sm:p-6 shadow-sm animate-pulse">
    <div className="rounded-lg overflow-hidden mb-2 sm:mb-3">
      <div className="bg-gray-200 h-40 sm:h-48 lg:h-52 w-full"></div>
    </div>
    <div className="bg-white rounded-lg p-3 sm:p-4">
      <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
      <div className="h-5 bg-gray-200 rounded w-1/2"></div>
    </div>
  </div>
);

interface Category {
  id: number;
  name: string;
  status: number;
  created_at: string;
  updated_at: string;
}

interface Product {
  name: string;
  // Using specific properties instead of index signature
}

interface ApiPortfolioItem {
  id?: number | string;
  products?: Product;
  app_headline?: string;
  tag?: string;
  image?: string;
  app_image?: string;
  play_store_link?: string;
  app_store_link?: string;
  website_link?: string;
  // Using Record<string, unknown> for type safety
  [key: string]: unknown;
  slug?: string;
}

interface PortfolioItem {
  id: string | number;
  title: string;
  category: string;
  image?: string;
  app_headline?: string;
  app_image?: string;
  tag?: string;
  play_store_link?: string;
  app_store_link?: string;
  website_link?: string;
  short_description?: string;
  description?: string;
  products?: Product;
  slug?: string;
}

export default function DesignPortfolio() {
  // State to track which filter is active
  const [activeFilter, setActiveFilter] = useState("all");
  // State to track which card is being hovered
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);
  // State for mobile filter dropdown
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  // State for categories loaded from API
  const [categories, setCategories] = useState<Category[]>([]);
  // State for loading
  const [isLoading, setIsLoading] = useState(true);
  // State for portfolio items
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([]);
  // State for loading portfolio items
  const [loadingItems, setLoadingItems] = useState(true);
  // State for pagination
  const [offset, setOffset] = useState(0);
  const [hasMoreItems, setHasMoreItems] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  // Reference for dropdown click outside detection
  const filterDropdownRef = useRef<HTMLDivElement>(null);
  // Items per page
  const limit = 6;

  const [portfolioCateName, setPortfolioCateName] = useState<string>("");
  const [portfolioSlug, setPortfolioSlug] = useState<string>("");
  // Fetch categories from API
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("/api/portfolio-categories?type=designer");
        const data = await response.json();
        if (data && !data.error) {
          setCategories(data.data);

          // Fetch all items initially
          fetchPortfolioItems("all");
        }
      } catch (error) {
        console.error("Error fetching portfolio categories:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCategories();
  }, []);

  // Function to fetch portfolio items based on selected category
  const fetchPortfolioItems = async (
    categoryId: string,
    isLoadMore = false
  ) => {
    try {
      // Set appropriate loading state
      if (!isLoadMore) {
        setLoadingItems(true);
        // Reset offset when changing category
        setOffset(0);
      } else {
        setLoadingMore(true);
      }

      // Calculate current offset
      const currentOffset = isLoadMore ? offset : 0;

      // Build URL with offset and limit
      let url = `/api/portfolio?type=designer&offset=${currentOffset}&limit=${limit}`;

      if (categoryId !== "all") {
        url += `&category_id=${categoryId}`;
      }

      const response = await fetch(url);
      const data = await response.json();
      console.log('data', data);
      setPortfolioCateName(data?.data[0]?.category?.name);

      // console.log('data?.data[0]?.category?.name',data?.data[0]?.category?.name)

      // Check for valid response structure before processing
      if (data && !data.error) {
        // Handle different possible response structures
        let itemsData = [];

        if (data.data && Array.isArray(data.data)) {
          // If data.data is directly an array
          itemsData = data.data;

          console.log('itemsData', itemsData);

        } else if (Array.isArray(data)) {
          // If data itself is an array
          itemsData = data;
        }

        if (itemsData.length > 0) {
          // Map API response to our PortfolioItem format
          const items = itemsData.map((item: ApiPortfolioItem) => ({
            id: item.id || Math.random().toString(36).substr(2, 9),
            title: item.app_headline || item.products?.name || "Untitled Project",
            category: item.tag?.split(",")[0] || "Design",
            image: item.image || item.app_image || "/placeholder.jpg",
            hasDemo: !!(
              item.play_store_link ||
              item.app_store_link ||
              item.website_link
            ),
            play_store_link: item.play_store_link,
            app_store_link: item.app_store_link,
            website_link: item.website_link,
            slug: item.slug,
          }));

          // Check if we have more items
          const receivedItems = items.length;
          setHasMoreItems(receivedItems >= limit); // If we got a full page, assume there might be more

          // Update offset for next load
          setOffset(currentOffset + receivedItems);

          // If loading more, add to existing items
          if (isLoadMore) {
            setPortfolioItems((prevItems) => [...prevItems, ...items]);
          } else {
            setPortfolioItems(items);
          }
        } else {
          // Empty array case
          if (!isLoadMore) {
            setPortfolioItems([]);
          }
          setHasMoreItems(false);
        }
      } else {
        console.error(
          "API returned error:",
          data.error,
          data.message,
          data.details
        );
        // If no items received, set empty array
        if (!isLoadMore) {
          setPortfolioItems([]);
        }
        setHasMoreItems(false);
      }
    } catch (error) {
      console.error("Error fetching portfolio items:", error);
      if (!isLoadMore) {
        setPortfolioItems([]);
      }
      setHasMoreItems(false);
    } finally {
      setLoadingItems(false);
      setLoadingMore(false);
    }
  };

  // Function to handle loading more items
  const handleLoadMore = () => {
    fetchPortfolioItems(activeFilter, true);
  };

  // Prepare filters with All category first, followed by API categories
  const filters = [
    { value: "all", label: "All" },
    ...categories.map((category) => ({
      value: category.id.toString(),
      label: category.name,
    })),
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        filterDropdownRef.current &&
        !filterDropdownRef.current.contains(event.target as Node)
      ) {
        setShowFilterDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle filter selection
  const handleFilterSelect = (value: string) => {
    setActiveFilter(value);
    setHasMoreItems(true);
    fetchPortfolioItems(value);
    setShowFilterDropdown(false);
  };

  console.log('portfolioItems', portfolioItems);

  return (
    <Layout>
      <PageHeader
        title="Design Portfolio"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Our Work" },
          { name: "Design" }, // Current page, no path
        ]}
      />
      <div className="container commonMT">
        {/* Section heading */}
        <SectionHeading
          badge="Creativity Meets Functionality"
          title="Designs That Speak for Themselves"
          description="Experience the power of design with our thoughtfully crafted
            creations. Every pixel, every color, and every detail is designed
            with precision to deliver visually stunning, user-friendly, and
            impactful designs."
        />

        {/* Responsive Filter Component */}
        <div className="mb-8 sm:mb-10">
          {/* Loading state */}
          {isLoading ? (
            <div className="flex justify-center">
              <div className="h-10 w-40 bg-gray-200 animate-pulse rounded-md"></div>
            </div>
          ) : (
            <>
              {/* Mobile dropdown filter */}
              <div className="sm:hidden relative" ref={filterDropdownRef}>
                <button
                  onClick={() => setShowFilterDropdown(!showFilterDropdown)}
                  className="w-full flex items-center justify-between px-4 py-3 bg-white border border-gray-300 rounded-lg shadow-sm"
                >
                  <span>
                    {filters.find((filter) => filter.value === activeFilter)
                      ?.label || "All"}
                  </span>
                  <svg
                    className={`w-5 h-5 transition-transform ${showFilterDropdown ? "rotate-180" : ""
                      }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {showFilterDropdown && (
                  <div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg">
                    {filters.map((filter) => (
                      <button
                        key={filter.value}
                        className={`w-full text-left px-4 py-3 text-sm hover:bg-gray-50 ${activeFilter === filter.value
                            ? "bg-gray-100 font-medium"
                            : ""
                          }`}
                        onClick={() => handleFilterSelect(filter.value)}
                      >
                        {filter.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Desktop horizontal filter tabs */}
              <div className="hidden sm:flex justify-center">
                <div className="flex flex-wrap gap-3 justify-center">
                  {filters.map((filter) => (
                    <button
                      key={filter.value}
                      className={`px-6 py-3 rounded-md text-base ${activeFilter === filter.value
                          ? "bg-black text-white"
                          : "bg-white border border-gray-300"
                        }`}
                      onClick={() => handleFilterSelect(filter.value)}
                    >
                      {filter.label}
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>

        {/* Portfolio grid - Loading state */}
        {loadingItems && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[1, 2, 3, 4, 5, 6].map((item, index) => (
              <SkeletonItem key={`skeleton-initial-${index}`} />
            ))}
          </div>
        )}

        {/* Portfolio grid - Empty state */}
        {!loadingItems && portfolioItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-gray-500">
              No portfolio items found for this category.
            </p>
          </div>
        )}

        {/* Portfolio grid */}
        {!loadingItems && portfolioItems.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {portfolioItems.map((item) => (
              <Link href={`/our-work/design/${item?.slug}`} title={item.title}>
                <motion.div
                  key={item.id}
                  className="group rounded-2xl overflow-hidden p-2 sm:p-3 bg-[#2E71FE0A] border border-[#2E71FE1F] transition-all duration-300"
                  onMouseEnter={() => setHoveredCardId(item.id.toString())}
                  onMouseLeave={() => setHoveredCardId(null)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="overflow-hidden mb-2 sm:mb-4">
                    {item.image && (
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={0}
                        height={0}
                        className="h-full w-full object-cover lg:w-[388px] lg:h-[230px] rounded-[8px]"
                      />
                    )}
                  </div>
                    <div
                      className={`bg-white rounded-lg p-3 sm:p-4 relative transition-all duration-300 group-hover:shadow-[0px_8px_12px_0px_#4D545414]`}
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-sm text-[#2A2E35]">{portfolioCateName}</p>
                          <h3 className="text-[#181C24] font-bold mt-1 group-hover:primaryColor transition-all duration-300">{item.title}</h3>
                        </div>

                        {/* {hoveredCardId === item.id.toString() && (
                      <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center shadow-sm border border-[#2A2E35] p-2">
                        <FaArrowRight size={14}/>
                      </div>
                    )} */}
                      </div>
                    </div>
                </motion.div>
              </Link>
            ))}

            {/* Show skeleton items when loading more */}
            {loadingMore && (
              <>
                {[1, 2, 3].map((item, index) => (
                  <SkeletonItem key={`skeleton-loadmore-${index}`} />
                ))}
              </>
            )}
          </div>
        )}

        {/* Load more button - only show if we have items and more to load */}
        {!loadingItems && portfolioItems.length > 0 && hasMoreItems && (
          <div className="text-center my-8">
            <button
              className={`px-4 py-2 sm:px-6 sm:py-2 bg-black text-white text-sm sm:text-base rounded-md ${loadingMore ? "opacity-70 cursor-not-allowed" : ""
                }`}
              onClick={handleLoadMore}
              disabled={loadingMore}
            >
              {loadingMore ? "Loading..." : "Load More"}
            </button>
          </div>
        )}
      </div>
    </Layout>
  );
}
