"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/commonComponents/SectionHeading";
import PageHeader from "@/components/commonComponents/PageHeader";
import Layout from "@/components/layout/Layout";

export default function DevelopmentPortfolio() {
  // State to track which tab is active (All, App Development, Web Development)
  const [activeTab, setActiveTab] = useState("all");
  // State to track which card is being hovered
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  // State for mobile filter dropdown
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  // Reference for dropdown click outside detection
  const filterDropdownRef = useRef<HTMLDivElement>(null);

  // Filter options with display names
  const filters = [
    { value: "all", label: "All" },
    { value: "app", label: "App Development" },
    { value: "web", label: "Web Development" },
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
    setShowFilterDropdown(false);
  };

  // Sample portfolio items data
  const portfolioItems = [
    {
      id: "01",
      title: "SwiftPay - Secure and fast mobile payment app",
      description:
        "Fast, secure, and hassle-free mobile payments anytime, anywhere.",
      category: "app",
      image: "/placeholder.jpg",
      hasDemo: true,
      tags: ["App Development", "App UI", "UX/UI"],
    },
    {
      id: "02",
      title: "SwiftPay - Secure and fast mobile payment app",
      description:
        "Fast, secure, and hassle-free mobile payments anytime, anywhere.",
      category: "app",
      image: "/placeholder.jpg",
      hasDemo: true,
      tags: ["App Development", "App UI", "UX/UI"],
    },
    {
      id: "03",
      title: "SwiftPay - Secure and fast mobile payment app",
      description:
        "Fast, secure, and hassle-free mobile payments anytime, anywhere.",
      category: "app",
      image: "/placeholder.jpg",
      tags: ["App Development", "App UI", "UX/UI"],
    },
    {
      id: "04",
      title: "E-Commerce Portal - Modern web shopping platform",
      description:
        "Feature-rich online shopping experience with secure checkout and inventory management.",
      category: "web",
      image: "/placeholder.jpg",
      tags: ["Web Development", "E-Commerce", "UX/UI"],
    },
    {
      id: "05",
      title: "Analytics Dashboard - Real-time data visualization",
      description:
        "Interactive dashboard for business intelligence with customizable reports and insights.",
      category: "web",
      image: "/placeholder.jpg",
      hasDemo: true,
      tags: ["Web Development", "Dashboard", "Analytics"],
    },
    {
      id: "06",
      title: "Corporate Website - Professional business presence",
      description:
        "Responsive company website with modern design and optimized user experience.",
      category: "web",
      image: "/placeholder.jpg",
      tags: ["Web Development", "Corporate Site", "Responsive"],
    },
  ];

  // Filter items based on active tab
  const filteredItems =
    activeTab === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeTab);

  return (
    <Layout>
      <div className="w-full overflow-hidden">
        {/* Page header with breadcrumbs */}
        <PageHeader
          title="Development Portfolio"
          breadcrumbs={[
            { name: "Home", path: "/" },
            { name: "Our Work", path: "/our-work" },
            { name: "Development" }, // Current page, no path
          ]}
        />

        <div className="container commonMT px-4 sm:px-6 lg:px-8">
          {/* Section heading */}
          <SectionHeading
            badge="Our Work, Your Inspiration"
            title="Designs That Speak for Themselves"
            description="Discover our finest creations, meticulously crafted with precision and passion. Explore how we turn ideas into innovative, functional, and visually stunning experiences!"
          />

          {/* Responsive Filter Component */}
          <div className="mb-8 sm:mb-10">
            {/* Mobile dropdown filter */}
            <div className="sm:hidden relative" ref={filterDropdownRef}>
              <button
                onClick={() => setShowFilterDropdown(!showFilterDropdown)}
                className="w-full flex items-center justify-between px-4 py-3 bg-white border border-gray-300 rounded-lg shadow-sm"
              >
                <span>
                  {filters.find((filter) => filter.value === activeTab)?.label}
                </span>
                <svg
                  className={`w-5 h-5 transition-transform ${
                    showFilterDropdown ? "rotate-180" : ""
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
                      className={`w-full text-left px-4 py-3 text-sm hover:bg-gray-50 ${
                        activeTab === filter.value
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
              <div className="flex space-x-3">
                {filters.map((filter) => (
                  <button
                    key={filter.value}
                    className={`px-6 py-3 rounded-md text-base ${
                      activeTab === filter.value
                        ? "bg-black text-white"
                        : "bg-white border border-gray-300"
                    }`}
                    onClick={() => setActiveTab(filter.value)}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Portfolio grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                className="bg-gray-50 rounded-xl p-4 sm:p-6 shadow-sm relative overflow-hidden cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                onHoverStart={() => setHoveredCard(item.id)}
                onHoverEnd={() => setHoveredCard(null)}
              >
                <div className="flex items-start mb-4">
                  <motion.span
                    className={`text-lg sm:text-xl font-bold transition-colors duration-200 flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-md ${
                      hoveredCard === item.id
                        ? "bg-blue-600 text-white"
                        : "bg-white"
                    }`}
                  >
                    {item.id}
                  </motion.span>
                  <div className="flex-1 ml-3 sm:ml-4">
                    <h3 className="font-semibold text-base sm:text-lg">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Placeholder image with demo popup on hover */}
                <div
                  className={`h-48 sm:h-64 w-full rounded-md mb-4 sm:mb-5 relative overflow-hidden ${
                    hoveredCard === item.id ? "bg-gray-600" : "bg-gray-300"
                  }`}
                >
                  {/* Demo popup appears only inside the image container */}
                  <AnimatePresence>
                    {item.hasDemo && hoveredCard === item.id && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 bg-white p-4 sm:p-6 rounded-lg shadow-lg z-10 m-6"
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 100, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <p className="text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                          Experience the Demo
                        </p>
                        <div className="flex flex-wrap gap-3 sm:gap-6">
                          <div className="border-b border-gray-400 pb-0.5 flex items-center gap-1">
                            <span className="text-xs sm:text-sm">
                              App Store
                            </span>
                            <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-full border flex items-center justify-center">
                              <svg
                                width="9"
                                height="9"
                                className="sm:w-[11px] sm:h-[11px]"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M7 12H17M17 12L13 8M17 12L13 16"
                                  stroke="black"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </span>
                          </div>
                          <div className="border-b border-gray-400 pb-0.5 flex items-center gap-1">
                            <span className="text-xs sm:text-sm">
                              Play Store
                            </span>
                            <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-full border flex items-center justify-center">
                              <svg
                                width="9"
                                height="9"
                                className="sm:w-[11px] sm:h-[11px]"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M7 12H17M17 12L13 8M17 12L13 16"
                                  stroke="black"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </span>
                          </div>
                          <div className="border-b border-gray-400 pb-0.5 flex items-center gap-1">
                            <span className="text-xs sm:text-sm">Website</span>
                            <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-full border flex items-center justify-center">
                              <svg
                                width="9"
                                height="9"
                                className="sm:w-[11px] sm:h-[11px]"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M7 12H17M17 12L13 8M17 12L13 16"
                                  stroke="black"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 sm:gap-3 mt-2">
                  {item.tags.map((tag, index) => (
                    <span
                      key={index}
                      className={`inline-block px-2 py-1 sm:px-4 sm:py-2 ${
                        hoveredCard === item.id ? "bg-slate-100" : "bg-white"
                      } text-[10px] sm:text-xs rounded-full border`}
                    >
                      {tag === "App UI"
                        ? "App UI"
                        : tag === "UX/UI"
                        ? "UI/UX"
                        : tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Load more button */}
          <div className="text-center my-8">
            <button className="px-4 py-2 sm:px-6 sm:py-2 bg-black text-white text-sm sm:text-base rounded-md">
              Load More
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
