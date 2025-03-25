"use client";
import PageHeader from "@/components/commonComponents/PageHeader";
import SectionHeading from "@/components/commonComponents/SectionHeading";
import Layout from "@/components/layout/Layout";
import { useState, useRef, useEffect } from "react";

export default function DesignPortfolio() {
  // State to track which filter is active
  const [activeFilter, setActiveFilter] = useState("All");
  // State to track which card is being hovered
  const [hoveredCardId, setHoveredCardId] = useState<number | null>(null);
  // State for mobile filter dropdown
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  // Reference for dropdown click outside detection
  const filterDropdownRef = useRef<HTMLDivElement>(null);

  // Filter options
  const filters = [
    "All",
    "Mobile App Design",
    "Website Design",
    "Logo Design",
    "Social Media Design",
  ];

  // Portfolio items data - all are Mobile App Design / Hido VPN for the example
  const portfolioItems = [
    { id: 1, category: "Mobile App Design", title: "Hido VPN" },
    { id: 2, category: "Mobile App Design", title: "Hido VPN" },
    { id: 3, category: "Mobile App Design", title: "Hido VPN" },
    { id: 4, category: "Mobile App Design", title: "Hido VPN" },
    { id: 5, category: "Mobile App Design", title: "Hido VPN" },
    { id: 6, category: "Mobile App Design", title: "Hido VPN" },
    { id: 7, category: "Mobile App Design", title: "Hido VPN" },
    { id: 8, category: "Mobile App Design", title: "Hido VPN" },
    { id: 9, category: "Mobile App Design", title: "Hido VPN" },
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

  // Filter the items based on active filter
  const filteredItems =
    activeFilter === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  // Handle filter selection
  const handleFilterSelect = (filter: string) => {
    setActiveFilter(filter);
    setShowFilterDropdown(false);
  };

  return (
    <Layout>
      <PageHeader
        title="Design Portfolio"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Our Work", path: "/our-work" },
          { name: "Design" }, // Current page, no path
        ]}
      />
      <div className="container commonMT px-4 sm:px-6 lg:px-8">
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
          {/* Mobile dropdown filter */}
          <div className="sm:hidden relative" ref={filterDropdownRef}>
            <button
              onClick={() => setShowFilterDropdown(!showFilterDropdown)}
              className="w-full flex items-center justify-between px-4 py-3 bg-white border border-gray-300 rounded-lg shadow-sm"
            >
              <span>{activeFilter}</span>
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
                    key={filter}
                    className={`w-full text-left px-4 py-3 text-sm hover:bg-gray-50 ${
                      activeFilter === filter ? "bg-gray-100 font-medium" : ""
                    }`}
                    onClick={() => handleFilterSelect(filter)}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Desktop horizontal filter tabs - original design */}
          <div className="hidden sm:flex justify-center">
            <div className="flex space-x-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  className={`px-4 py-2 rounded-md ${
                    activeFilter === filter
                      ? "bg-black text-white"
                      : "bg-white border border-gray-300"
                  }`}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Portfolio grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl overflow-hidden bg-blue-50/30 p-2 sm:p-3"
              onMouseEnter={() => setHoveredCardId(item.id)}
              onMouseLeave={() => setHoveredCardId(null)}
            >
              <div className="rounded-lg overflow-hidden mb-2 sm:mb-3">
                <div className="bg-gray-200 h-40 sm:h-48 lg:h-52 w-full"></div>
              </div>

              <div className="bg-white rounded-lg p-3 sm:p-4 relative">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-xs text-gray-600">{item.category}</p>
                    <h3 className="text-sm font-medium mt-1">{item.title}</h3>
                  </div>

                  {hoveredCardId === item.id && (
                    <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100">
                      <svg
                        width="14"
                        height="14"
                        className="sm:w-4 sm:h-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 6L15 12L9 18"
                          stroke="black"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load more button */}
        <div className="text-center">
          <button className="px-4  my-10 py-2 bg-black text-white rounded-md text-sm">
            Load More
          </button>
        </div>
      </div>
    </Layout>
  );
}
