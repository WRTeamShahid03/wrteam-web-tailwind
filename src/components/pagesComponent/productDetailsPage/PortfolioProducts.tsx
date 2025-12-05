"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/commonComponents/SectionHeading";
import { BiRightArrowCircle } from "react-icons/bi";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import type { SwiperRef } from "swiper/react";
// Import Swiper modules
import { FreeMode } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

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

// Interface for Product
interface Product {
  id?: number | string;
  name?: string;
  product_title?: string;
}

// Interface for Portfolio Item
interface PortfolioItem {
  id: string | number;
  title: string;
  description: string;
  image: string;
  hasDemo?: boolean;
  tags: string[];
  play_store_link?: string;
  app_store_link?: string;
  website_link?: string;
  products?: Product;
}

// Interface for API response item
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

interface PortfolioProductsProps {
  slug: string;
}

/**
 * Portfolio Products Component
 * 
 * Displays related portfolio products for a given product slug.
 * Uses the same UI design as DevelopmentPortfolio component.
 */
const PortfolioProducts: React.FC<PortfolioProductsProps> = ({ slug }) => {
  // Swiper ref for controlling slides
  const sliderRef = useRef<SwiperRef>(null);
  // State to track which card is being hovered
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  // State for portfolio items
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([]);
  // State for loading portfolio items
  const [loadingItems, setLoadingItems] = useState(true);
  // State to track swiper position
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  // Navigation handlers
  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  // Fetch portfolio products based on slug
  useEffect(() => {
    const fetchPortfolioProducts = async () => {
      if (!slug) return;

      try {
        setLoadingItems(true);
        const response = await fetch(`/api/portfolio-products?slug=${slug}`);

        if (!response.ok) {
          throw new Error("Failed to fetch portfolio products");
        }

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
            const items = itemsData.map((item: PortfolioApiItem) => ({
              id: item.id || Math.random().toString(36).substr(2, 9),
              title: item.app_headline || "Untitled Project",
              description: item.short_description || "",
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

            setPortfolioItems(items);
          } else {
            setPortfolioItems([]);
          }
        } else {
          setPortfolioItems([]);
        }
      } catch (error) {
        console.error("Error fetching portfolio products:", error);
        setPortfolioItems([]);
      } finally {
        setLoadingItems(false);
      }
    };

    fetchPortfolioProducts();
  }, [slug]);

  // Don't render if no items and not loading
  if (!loadingItems && portfolioItems.length === 0) {
    return null;
  }

  return (
    <div className="w-full overflow-hidden py-8 md:py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section heading */}
        <SectionHeading
          badge="OUR PROJECTS"
          title="Transforming Business Goals Into Powerful Digital Solutions"
          description="Delivering strategic, creative, and results-driven solutions that turn vision into measurable digital impact."
        />

        {/* Portfolio Swiper Container */}
        <div className="relative">
          {/* Portfolio Swiper - Loading state */}
          {loadingItems && (
            <Swiper
              slidesPerView={1.2}
              spaceBetween={16}
              freeMode={true}
              modules={[FreeMode]}
              breakpoints={{
                640: {
                  slidesPerView: 1.5,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 24,
                },
                1024: {
                  slidesPerView: 2.5,
                  spaceBetween: 24,
                },
                1280: {
                  slidesPerView: 3,
                  spaceBetween: 24,
                },
              }}
              className="pb-10"
            >
              {[1, 2, 3, 4].map((item, index) => (
                <SwiperSlide key={`skeleton-${index}`}>
                  <SkeletonItem />
                </SwiperSlide>
              ))}
            </Swiper>
          )}

          {/* Portfolio Swiper - Display items */}
          {!loadingItems && portfolioItems.length > 0 && (
            <>
              <Swiper
                ref={sliderRef}
                slidesPerView={1.2}
                spaceBetween={16}
                freeMode={true}
                modules={[FreeMode]}
                breakpoints={{
                  640: {
                    slidesPerView: 1.5,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 24,
                  },
                  1024: {
                    slidesPerView: 2.5,
                    spaceBetween: 24,
                  },
                  1280: {
                    slidesPerView: 3,
                    spaceBetween: 24,
                  },
                }}
                className="pb-10"
                onSwiper={(swiper) => {
                  setIsBeginning(swiper.isBeginning);
                  setIsEnd(swiper.isEnd);
                }}
                onSlideChange={(swiper) => {
                  setIsBeginning(swiper.isBeginning);
                  setIsEnd(swiper.isEnd);
                }}
              >
            {portfolioItems.map((item, index) => (
              <SwiperSlide key={item.id}>
                <motion.div
                  className="bg-[#2E71FE0A] rounded-xl max-575:p-2 p-4 sm:p-6 shadow-sm relative overflow-hidden cursor-pointer border border-[#2E71FE1F] h-full"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ all: 0.3 as any }}
                  onHoverStart={() => setHoveredCard(item.id.toString())}
                  onHoverEnd={() => setHoveredCard(null)}
                >
                <div className="flexCenter mb-4">
                  <motion.span
                    className={`max-575:hidden text-lg sm:text-xl font-bold transition-colors duration-200 flex items-center justify-center h-[72px] w-[72px] rounded-md ${
                      hoveredCard === item.id.toString()
                        ? "primaryBg text-white"
                        : "bg-white"
                    }`}
                  >
                    {index + 1}
                  </motion.span>
                  <div className="flex-1 ml-3 sm:ml-4">
                    <h2 className="font-semibold max-479:text-sm text-base sm:text-lg">
                      {item.title}
                    </h2>
                    <p className="text-gray-600 text-xs sm:text-sm mt-2">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Project image with demo popup on hover */}
                <div
                  className={`h-48 sm:h-auto w-full rounded-md mb-4 sm:mb-5 relative overflow-hidden ${
                    hoveredCard === item.id.toString()
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
                        transition={{ all: 0.3 as any }}
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
                  {item.tags.map((tag, tagIndex) => (
                    <div className="flex flex-wrap gap-2" key={tagIndex}>
                      <span
                        className={`inline-block px-3 py-2 sm:px-4 sm:py-2 ${
                          hoveredCard === item.id.toString()
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
                      {item?.products?.product_title && (
                        <span
                          className={`inline-block px-3 py-2 sm:px-4 sm:py-2 ${
                            hoveredCard === item.id.toString()
                              ? "bg-white"
                              : "bg-white"
                          } text-[10px] sm:text-xs rounded-full border border-[#2A2E35] font-medium`}
                        >
                          {item?.products?.product_title}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons - Desktop (positioned on sides) */}
          {!loadingItems && portfolioItems.length > 0 && portfolioItems.length > 2 && (
            <div className="hidden lg:block">
              <button
                className={`absolute top-1/2 -translate-y-1/2 -left-6 z-10 rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-opacity ${
                  isBeginning
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed opacity-50"
                    : "primaryBg text-white hover:opacity-90 cursor-pointer"
                }`}
                onClick={handlePrev}
                disabled={isBeginning}
                aria-label="Previous slide"
              >
                <FaArrowLeft size={20} className={isBeginning ? "text-gray-500" : "text-white"} />
              </button>
              <button
                className={`absolute top-1/2 -translate-y-1/2 -right-6 z-10 rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-opacity ${
                  isEnd
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed opacity-50"
                    : "primaryBg text-white hover:opacity-90 cursor-pointer"
                }`}
                onClick={handleNext}
                disabled={isEnd}
                aria-label="Next slide"
              >
                <FaArrowRight size={20} className={isEnd ? "text-gray-500" : "text-white"} />
              </button>
            </div>
          )}

          {/* Custom Navigation Buttons - Mobile (centered below) */}
          {!loadingItems && portfolioItems.length > 0 && portfolioItems.length > 2 && (
            <div className="lg:hidden flex items-center justify-center gap-4 mt-6">
              <button
                className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-opacity ${
                  isBeginning
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed opacity-50"
                    : "primaryBg text-white hover:opacity-90 cursor-pointer"
                }`}
                onClick={handlePrev}
                disabled={isBeginning}
                aria-label="Previous slide"
              >
                <FaArrowLeft size={20} className={isBeginning ? "text-gray-500" : "text-white"} />
              </button>
              <button
                className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-opacity ${
                  isEnd
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed opacity-50"
                    : "primaryBg text-white hover:opacity-90 cursor-pointer"
                }`}
                onClick={handleNext}
                disabled={isEnd}
                aria-label="Next slide"
              >
                <FaArrowRight size={20} className={isEnd ? "text-gray-500" : "text-white"} />
              </button>
            </div>
          )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PortfolioProducts;

