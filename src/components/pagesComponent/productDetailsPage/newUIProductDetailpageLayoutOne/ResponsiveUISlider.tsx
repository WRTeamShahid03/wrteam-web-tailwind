"use client";
import React, { useRef, useState, useCallback } from "react";
import Image from "next/image";
import leftShape from '../../../../assets/images/productDetailPage/layoutTwo/leftShape.png'
import rightShape from '../../../../assets/images/productDetailPage/layoutTwo/rightShape.png'
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper types
import type { SwiperRef } from "swiper/react";
// Import required modules
import { Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { AppWiseFeatureSection } from "@/types";

// Type definitions
type AppType = "student" | "parents" | "teacher" | "staff";
type ScreenType = "profile" | "home" | "login" | "menu";

// Mockup images mapping
const mockupImages: Record<AppType, Record<ScreenType, string>> = {
  student: {
    profile: "/images/mockups/student-profile.png",
    home: "/images/mockups/student-home.png",
    login: "/images/mockups/student-login.png",
    menu: "/images/mockups/student-menu.png",
  },
  parents: {
    profile: "/images/mockups/parents-profile.png",
    home: "/images/mockups/parents-home.png",
    login: "/images/mockups/parents-login.png",
    menu: "/images/mockups/parents-menu.png",
  },
  teacher: {
    profile: "/images/mockups/teacher-profile.png",
    home: "/images/mockups/teacher-home.png",
    login: "/images/mockups/teacher-login.png",
    menu: "/images/mockups/teacher-menu.png",
  },
  staff: {
    profile: "/images/mockups/staff-profile.png",
    home: "/images/mockups/staff-home.png",
    login: "/images/mockups/staff-login.png",
    menu: "/images/mockups/staff-menu.png",
  },
};

// Screen types and their labels
const screenTypes: ScreenType[] = ["profile", "home", "login", "menu"];
const screenLabels: Record<ScreenType, string> = {
  profile: "Profile",
  home: "Home",
  login: "Login",
  menu: "Menu",
};

/**
 * ResponsiveUISlider component shows a responsive UI design showcase
 * with tabs for different app UIs (Student, Parents, Teacher, Staff)
 * and a slider showing different screens for each app type
 */
export default function ResponsiveUISlider({ appFeatures }: { appFeatures?: AppWiseFeatureSection }) {
  // Get the available apps from the data or use an empty array as fallback
  const appTabs = appFeatures?.tabs || [];

  // State for tracking active tab index (default to first tab)
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  // Get the active tab and its features
  const activeTab = appTabs[activeTabIndex] || null;
  const features = activeTab?.features || [];

  // Swiper ref for controlling slides
  const sliderRef = useRef<SwiperRef>(null);

  // Navigation handlers
  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  const breakpoints = {
    0: {
        slidesPerView: 1,
        // spaceBetween: 40
    },
    576: {
        slidesPerView: 2,
        // spaceBetween: 40
    },
    768: {
        slidesPerView: 3,

    },
    992: {
        slidesPerView: 3,

    },
    1200: {
        slidesPerView: 3.8,
    },
    1400: {
        slidesPerView: 3.8,

    }
};

  return (
    <div className="commonBgAndShape py-6 md:py-12 lg:py-16 relative overflow-hidden">
      <div className="container commonMT">

        {/* Header section with title on left and navigation on right */}
        <div className="grid grid-cols-12 mb-12 gap-y-4">
          {/* Title and Navigation - Stack on mobile, row on desktop */}
          <div className="col-span-12 lg:col-span-8 flex flex-col gap-4">
            <h2 className="sectionTitle !font-bold text-white text-center md:text-left">
              {appFeatures?.title || "Take a Look At Responsive UI design"}
            </h2>
            {/* App type tabs - Horizontal scrollable on mobile */}
            <div className="relative mt-4">
              <div className="flex overflow-x-auto md:overflow-x-visible md:flex-wrap gap-3 pb-2 md:pb-0 scrollbar-hide">
                {appTabs.map((tab, index) => (
                  <button
                    key={index}
                    className={`px-4 py-3 rounded-md text-sm font-medium whitespace-nowrap flex-shrink-0 ${activeTabIndex === index
                      ? "bg-white text-black"
                      : "border-2 border-white bg-transparent text-white"
                      }`}
                    onClick={() => setActiveTabIndex(index)}
                  >
                    {tab.app_name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation buttons - Centered on mobile */}
          <div className="hidden col-span-12 lg:col-span-4 lg:flex lg:items-end lg:justify-end">
            {features.length > 3 && (
              <div className="flex items-center justify-center w-full md:w-auto gap-2">
                <button
                  className="w-10 h-10 flex items-center justify-center bg-transparent border text-white border-white rounded-full shadow-md"
                  onClick={handlePrev}
                  aria-label="Previous slide"
                >
                  <BiLeftArrowAlt size={20} />
                </button>
                <button
                  className="w-10 h-10 flex items-center justify-center bg-transparent border text-white border-white rounded-full shadow-md"
                  onClick={handleNext}
                  aria-label="Next slide"
                >
                  <BiRightArrowAlt size={20} />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Swiper without navigation buttons (moved to header) */}
        <div className="relative mx-auto">
          {/* Swiper component */}
          <Swiper
            ref={sliderRef}
            slidesPerView={1}
            spaceBetween={20}
            loop={true}
            breakpoints={breakpoints}
            modules={[Pagination, Navigation]}
            className="pb-12"
          >
            {features.map((feature, index) => (
              <SwiperSlide key={index} className="h-auto">
                <div className="flex flex-col items-center">
                  {/* Mockup image */}
                  <div className="bg-white rounded-lg p-1 shadow-lg mb-4 w-full mx-auto">
                    <div className="relative aspect-[9/19] w-full overflow-hidden rounded-md">
                      <Image
                        src={feature.image_url}
                        alt={feature.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  {/* Label */}
                  <p className="text-white font-medium">{feature.title}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Navigation buttons - Centered on mobile */}
        <div className="flexCenter lg:hidden mt-12">
          {features.length > 3 && (
            <div className="flex items-center justify-center w-full md:w-auto gap-2">
              <button
                className="w-10 h-10 flex items-center justify-center bg-transparent border text-white border-white rounded-full shadow-md"
                onClick={handlePrev}
                aria-label="Previous slide"
              >
                <BiLeftArrowAlt size={20} />
              </button>
              <button
                className="w-10 h-10 flex items-center justify-center bg-transparent border text-white border-white rounded-full shadow-md"
                onClick={handleNext}
                aria-label="Next slide"
              >
                <BiRightArrowAlt size={20} />
              </button>
            </div>
          )}
        </div>

      </div>
      <div className='hidden lg:block'>
        <div className="absolute top-0 left-0">
          <Image src={leftShape} alt='leftShape' height={0} width={0} className='w-full h-full' />
        </div>
        <div className="absolute -bottom-[30px] right-0">
          <Image src={rightShape} alt='rightShape' height={0} width={0} className='w-full h-full' />
        </div>
      </div>
    </div>
  );
}
