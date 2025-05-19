"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/commonComponents/SectionHeading";
import PageHeader from "@/components/commonComponents/PageHeader";
import Layout from "@/components/layout/Layout";
import { BiRightArrowCircle } from "react-icons/bi";

// Skeleton component for loading states
const SkeletonItem = () => (
  <div className="bg-[#2E71FE0A] rounded-xl p-4 sm:p-6 shadow-sm animate-pulse">
    <div className="flex items-start mb-4">
      <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-md bg-gray-200"></div>
      <div className="flex-1 ml-3 sm:ml-4">
        <div className="h-5 bg-gray-200 rounded w-3/4 mb-2"></div>
        <div className="h-3 bg-gray-200 rounded w-full"></div>
      </div>
    </div>
    <div className="h-48 sm:h-64 w-full rounded-md mb-4 bg-gray-200"></div>
    <div className="flex flex-wrap gap-2">
      <div className="h-6 bg-gray-200 rounded-full w-20"></div>
      <div className="h-6 bg-gray-200 rounded-full w-24"></div>
      <div className="h-6 bg-gray-200 rounded-full w-16"></div>
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

// Add this interface above the PortfolioItem interface
interface Product {
  id?: number | string;
  name?: string;
  product_title?: string;
  // Add other properties as needed
}

interface PortfolioItem {
  id: string | number;
  title: string;
  description: string;
  image: string;
  hasDemo?: boolean;
  tags: string[];
  category?: string;
  // API-specific fields
  app_headline?: string;
  app_image?: string;
  tag?: string;
  play_store_link?: string;
  app_store_link?: string;
  website_link?: string;
  short_description?: string;
  products?: Product;
}

// Add this interface for the API response item
interface PortfolioApiItem {
  id?: number | string;
  products?: Product;
  app_headline?: string;
  short_description?: string;
  image?: string;
  app_image?: string;
  tag?: string;
  play_store_link?: string;
  app_store_link?: string;
  website_link?: string;
}

export default function DevelopmentPortfolio() {
  // State to track which tab is active
  const [activeTab, setActiveTab] = useState("all");
  // State to track which card is being hovered
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
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

  // Fetch categories from API
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          "/api/portfolio-categories?type=developer"
        );
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
      let url = `/api/portfolio?type=developer&offset=${currentOffset}&limit=${limit}`;

      if (categoryId !== "all") {
        url += `&category_id=${categoryId}`;
      }

      const response = await fetch(url);
      const data = await response.json();

      // Check for valid response structure before processing
      if (data && !data.error) {
        // Handle different possible response structures
        let itemsData = [];

        if (data.data && Array.isArray(data.data)) {
          // If data.data is directly an array
          itemsData = data.data;
        } else if (
          data.data &&
          data.data.data &&
          Array.isArray(data.data.data)
        ) {
          // If data.data.data is an array (pagination structure)
          itemsData = data.data.data;
        } else if (Array.isArray(data)) {
          // If data itself is an array
          itemsData = data;
        }

        if (itemsData.length > 0) {
          // Map API response to our PortfolioItem format
          const items = itemsData.map((item: PortfolioItem) => ({
            id: item.id || Math.random().toString(36).substr(2, 9),
            title: item.app_headline || "Untitled Project",
            description: item.description || "",
            image: item.image || item.app_image || "/placeholder.jpg",
            hasDemo: !!(
              item.play_store_link ||
              item.app_store_link ||
              item.website_link
            ),
            tags: item.tag
              ? item.tag.split(",").map((t: string) => t.trim())
              : ["App Development"],
            play_store_link: item.play_store_link,
            app_store_link: item.app_store_link,
            website_link: item.website_link,
            products: item.products,
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
    fetchPortfolioItems(activeTab, true);
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
    setActiveTab(value);
    setHasMoreItems(true);
    fetchPortfolioItems(value);
    setShowFilterDropdown(false);
  };

  console.log("portfolioItems", portfolioItems)

  return (
    <Layout>
      <div className="w-full overflow-hidden">
        {/* Page header with breadcrumbs */}
        <PageHeader
          title="Development Portfolio"
          breadcrumbs={[
            { name: "Home", path: "/" },
            { name: "Our Work" },
            { name: "Development" }, // Current page, no path
          ]}
        />

        <div className="container commonMT">
          {/* Section heading */}
          <SectionHeading
            badge="Our Code, Your Power"
            title="Development That Delivers"
            description="Explore our top-performing projects, built with clean code, solid architecture, and the latest tech. See how we turn ideas into scalable, high-performance, and user-friendly digital solutions."
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
                      {filters.find((filter) => filter.value === activeTab)
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
                          className={`w-full text-left px-4 py-3 text-sm hover:bg-gray-50 ${activeTab === filter.value
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
                        className={`px-6 py-3 rounded-md text-base ${activeTab === filter.value
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {[1, 2, 3, 4].map((item, index) => (
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

          {/* Portfolio grid - Display items */}
          {!loadingItems && portfolioItems.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 pb-10">
              {portfolioItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="bg-[#2E71FE0A] rounded-xl max-575:p-2 p-4 sm:p-6 shadow-sm relative overflow-hidden cursor-pointer border border-[#2E71FE1F]"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ all: 0.3 }}
                  onHoverStart={() => setHoveredCard(item.id.toString())}
                  onHoverEnd={() => setHoveredCard(null)}
                >
                  <div className="flexCenter mb-4">
                    <motion.span
                      className={`max-575:hidden text-lg sm:text-xl font-bold transition-colors duration-200 flex items-center justify-center h-[72px] w-[72px] rounded-md ${hoveredCard === item.id.toString()
                        ? "primaryBg text-white"
                        : "bg-white"
                        }`}
                    >
                      {index + 1}
                    </motion.span>
                    <div className="flex-1 ml-3 sm:ml-4">
                      <h3 className="font-semibold max-479:text-sm  text-base sm:text-lg">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-xs sm:text-sm mt-2">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Project image with demo popup on hover */}
                  <div
                    className={`h-48 sm:h-auto w-full rounded-md mb-4 sm:mb-5 relative overflow-hidden ${hoveredCard === item.id.toString()
                      ? "bg-[#00000066]"
                      : "bg-[#D9D9D9]"
                      }`}
                  >
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover md:h-[300px] md:w-[597px]"
                      />
                    )}

                    {/* Demo popup appears only inside the image container */}
                    <AnimatePresence>
                      {item.hasDemo && hoveredCard === item.id.toString() && (
                        <motion.div
                          className="absolute bottom-0 left-0 right-0 bg-white p-4 sm:p-6 rounded-lg shadow-lg z-10 m-6"
                          initial={{ y: 100, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: 100, opacity: 0 }}
                          transition={{ all: 0.3 }}
                        >
                          <p className="text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                            Experience the Demo
                          </p>
                          <div className="flex flex-wrap gap-3 sm:gap-6">
                            {item.app_store_link && (
                              <a
                                href={item.app_store_link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border-b border-gray-400 pb-0.5 flex items-center gap-1"
                              >
                                <span className="text-xs sm:text-sm">
                                  App Store
                                </span>
                                <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center">
                                  <BiRightArrowCircle />
                                </span>
                              </a>
                            )}

                            {item.play_store_link && (
                              <a
                                href={item.play_store_link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border-b border-gray-400 pb-0.5 flex items-center gap-1"
                              >
                                <span className="text-xs sm:text-sm">
                                  Play Store
                                </span>
                                <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center">
                                  <BiRightArrowCircle />
                                </span>
                              </a>
                            )}

                            {item.website_link && (
                              <a
                                href={item.website_link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border-b border-gray-400 pb-0.5 flex items-center gap-1"
                              >
                                <span className="text-xs sm:text-sm">
                                  Website
                                </span>
                                <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center">
                                  <BiRightArrowCircle />
                                </span>
                              </a>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 sm:gap-3 mt-2">
                    {item.tags.map((tag, index) => (
                      <div className="flex flex-wrap gap-2" key={index}>
                        <span
                          className={`inline-block px-3 py-2 sm:px-4 sm:py-2 ${hoveredCard === item.id.toString()
                            ? "bg-white"
                            : "bg-white"
                            } text-[10px] sm:text-xs rounded-full border border-[#2A2E35] font-medium`}
                        >
                          {tag === "App UI"
                            ? "App UI"
                            : tag === "UX/UI"
                              ? "UI/UX"
                              : tag}
                        </span>
                        {
                          item?.products?.name &&
                          <span
                            className={`inline-block px-3 py-2 sm:px-4 sm:py-2 ${hoveredCard === item.id.toString()
                              ? "bg-white"
                              : "bg-white"
                              } text-[10px] sm:text-xs rounded-full border border-[#2A2E35] font-medium`}
                          >
                            {item?.products?.product_title}
                          </span>
                        }
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}

              {/* Show skeleton items when loading more */}
              {loadingMore && (
                <>
                  {[1, 2].map((item, index) => (
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
      </div>
    </Layout>
  );
}
