"use client";

import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import type { Swiper as SwiperType } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { PanelWiseFeatureSection } from "@/types";

const FeaturesSection = ({ panelFeatures }: { panelFeatures: PanelWiseFeatureSection }) => {

  // State to track the active tab index
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  // State to track navigation button status
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  // State to track if we're on mobile
  const [isMobile, setIsMobile] = useState(false);
  // State for mobile dropdown
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Reference to the swiper instance
  const swiperRef = useRef<SwiperType | null>(null);

  // Function to check if we're on mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkIfMobile();

    // Add event listener
    window.addEventListener("resize", checkIfMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  // Handle tab change - reset swiper and navigation states
  const handleTabChange = (tabIndex: number) => {
    setActiveTabIndex(tabIndex);
    setIsBeginning(true);
    setIsEnd(false);
    setIsDropdownOpen(false);

    // Reset swiper to first slide when changing tabs
    if (swiperRef.current) {
      swiperRef.current.slideTo(0);
    }
  };

  // Get current tab details
  const currentTab = panelFeatures?.tabs?.[activeTabIndex] || null;
  const features = currentTab?.details || [];

  return (
    <section className="py-8 md:py-16 bg-emerald-500">
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-2 md:mb-3">
            {panelFeatures?.title || "Check Out All the Cool Features"}
          </h2>
          <div 
            className="text-white text-sm md:text-base max-w-3xl mx-auto"
            dangerouslySetInnerHTML={{ __html: panelFeatures?.description || "" }}
          />
        </div>

        {/* Tab buttons - Desktop */}
        <div className="hidden md:flex flex-wrap justify-center gap-4 mb-12">
          {panelFeatures?.tabs?.map((tab, index) => (
            <button
              key={index}
              onClick={() => handleTabChange(index)}
              className={`font-medium py-2.5 px-6 rounded-md transition-colors ${
                activeTabIndex === index
                  ? "bg-white text-gray-800"
                  : "bg-transparent text-white border border-white hover:bg-emerald-600"
              }`}
            >
              {tab.tab_name}
            </button>
          ))}
        </div>

        {/* Mobile Dropdown Tab Selector */}
        <div className="relative md:hidden mb-6">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full flex items-center justify-between bg-white text-gray-800 font-medium py-3 px-4 rounded-md shadow"
          >
            <span>{currentTab?.tab_name || "Select Tab"}</span>
            <svg
              className={`w-5 h-5 transition-transform ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {isDropdownOpen && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-md shadow-lg z-20">
              {panelFeatures?.tabs?.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => handleTabChange(index)}
                  className={`w-full text-left py-3 px-4 hover:bg-gray-100 transition-colors ${
                    activeTabIndex === index ? "bg-gray-100 font-medium" : ""
                  }`}
                >
                  {tab.tab_name}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Swiper */}
        <div className="relative">
          <Swiper
            modules={[Navigation]}
            spaceBetween={16}
            slidesPerView={1.2}
            centeredSlides={false}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
              disabledClass: "swiper-button-disabled",
            }}
            breakpoints={{
              480: {
                slidesPerView: 1.5,
                spaceBetween: 16,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 2.5,
                spaceBetween: 24,
              },
              1280: {
                slidesPerView: 2.5,
                spaceBetween: 24,
              },
            }}
            className="pb-8 md:pb-4"
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            onSlideChange={(swiper) => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
          >
            {features.length > 0 ? (
              features.map((feature, index) => (
                <SwiperSlide key={index} className="h-auto">
                  <div
                    className="rounded-lg overflow-hidden bg-gray-50 shadow-md w-full"
                    style={{ height: isMobile ? "320px" : "350px" }}
                  >
                    <div className="h-36 md:h-48 p-4 md:p-6 flex items-center justify-center">
                      <Image
                        src={feature.image_url}
                        alt={feature.title}
                        width={isMobile ? 200 : 250}
                        height={isMobile ? 160 : 200}
                        className="object-contain max-h-full"
                      />
                    </div>
                    <div
                      className="p-4 md:p-5 bg-white"
                      style={{ height: isMobile ? "152px" : "168px" }}
                    >
                      <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2 truncate">
                        {feature.title}
                      </h3>
                      <p className="text-gray-700 text-xs md:text-sm overflow-hidden line-clamp-3">
                        {feature.short_description}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))
            ) : (
              <SwiperSlide>
                <div
                  className="rounded-lg bg-white p-6 md:p-8 text-center flex items-center justify-center"
                  style={{ height: isMobile ? "320px" : "350px" }}
                >
                  <p>No features available for this category yet.</p>
                </div>
              </SwiperSlide>
            )}
          </Swiper>

          {/* Desktop navigation buttons */}
          <div className="hidden md:block">
            <button
              className={`swiper-button-prev-custom absolute top-1/2 -translate-y-1/2 left-[-20px] z-10 bg-black text-white rounded-full w-10 h-10 flex items-center justify-center shadow-md cursor-pointer transition-opacity ${
                isBeginning ? "opacity-40 cursor-not-allowed" : "opacity-100"
              }`}
              disabled={isBeginning}
              onClick={() => swiperRef.current?.slidePrev()}
            >
              ←
            </button>
            <button
              className={`swiper-button-next-custom absolute top-1/2 -translate-y-1/2 right-[-20px] z-10 bg-black text-white rounded-full w-10 h-10 flex items-center justify-center shadow-md cursor-pointer transition-opacity ${
                isEnd ? "opacity-40 cursor-not-allowed" : "opacity-100"
              }`}
              disabled={isEnd}
              onClick={() => swiperRef.current?.slideNext()}
            >
              →
            </button>
          </div>

          {/* Mobile navigation buttons in bottom center */}
          <div className="md:hidden flex justify-center items-center gap-4 mt-6">
            <button
              className={`swiper-button-prev-custom z-10 bg-black text-white rounded-full w-10 h-10 flex items-center justify-center shadow-md cursor-pointer transition-opacity ${
                isBeginning ? "opacity-40 cursor-not-allowed" : "opacity-100"
              }`}
              disabled={isBeginning}
              onClick={() => swiperRef.current?.slidePrev()}
            >
              ←
            </button>
            <button
              className={`swiper-button-next-custom z-10 bg-black text-white rounded-full w-10 h-10 flex items-center justify-center shadow-md cursor-pointer transition-opacity ${
                isEnd ? "opacity-40 cursor-not-allowed" : "opacity-100"
              }`}
              disabled={isEnd}
              onClick={() => swiperRef.current?.slideNext()}
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
