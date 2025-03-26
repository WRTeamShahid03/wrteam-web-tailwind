"use client";
import React, { useRef, useState, useCallback } from "react";
import Image from "next/image";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

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
export default function ResponsiveUISlider() {
  // State for tracking active tab
  const [activeTab, setActiveTab] = useState<AppType>("student");

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

  // Get current mockups based on active tab
  const currentMockups = mockupImages[activeTab];

  return (
    <div className="bg-[#57cc99] py-16 relative overflow-hidden">
      <div className="container commonMT">
        {/* Background gradient elements */}
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-green-400 rounded-full opacity-30"></div>
        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-green-400 rounded-full opacity-30"></div>

        {/* Header section with title on left and navigation on right */}
        <div className="mx-auto mb-8">
          {/* Title and Navigation - Stack on mobile, row on desktop */}
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-4 mb-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center md:text-left">
              Take a Look At Responsive UI design
            </h2>

            {/* Navigation buttons - Centered on mobile */}
            <div className="flex items-center justify-center w-full md:w-auto gap-2">
              <button
                className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md"
                onClick={handlePrev}
                aria-label="Previous slide"
              >
                <GrFormPrevious size={20} />
              </button>
              <button
                className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md"
                onClick={handleNext}
                aria-label="Next slide"
              >
                <GrFormNext size={20} />
              </button>
            </div>
          </div>

          {/* App type tabs - Horizontal scrollable on mobile */}
          <div className="relative mt-4">
            <div className="flex overflow-x-auto md:overflow-x-visible md:flex-wrap gap-3 pb-2 md:pb-0 scrollbar-hide">
              <button
                className={`px-4 py-3 rounded-md text-sm font-medium transition-colors whitespace-nowrap flex-shrink-0 ${
                  activeTab === "student"
                    ? "bg-white text-green-600"
                    : "border-2 border-white bg-transparent text-white hover:bg-green-600/40"
                }`}
                onClick={() => setActiveTab("student")}
              >
                Student App UI
              </button>
              <button
                className={`px-4 py-3 rounded-md text-sm font-medium transition-colors whitespace-nowrap flex-shrink-0 ${
                  activeTab === "parents"
                    ? "bg-white text-green-600"
                    : "border-2 border-white bg-transparent text-white hover:bg-green-600/40"
                }`}
                onClick={() => setActiveTab("parents")}
              >
                Parents App UI
              </button>
              <button
                className={`px-4 py-3 rounded-md text-sm font-medium transition-colors whitespace-nowrap flex-shrink-0 ${
                  activeTab === "teacher"
                    ? "bg-white text-green-600"
                    : "border-2 border-white bg-transparent text-white hover:bg-green-600/40"
                }`}
                onClick={() => setActiveTab("teacher")}
              >
                Teacher App UI
              </button>
              <button
                className={`px-4 py-3 rounded-md text-sm font-medium transition-colors whitespace-nowrap flex-shrink-0 ${
                  activeTab === "staff"
                    ? "bg-white text-green-600"
                    : "border-2 border-white bg-transparent text-white hover:bg-green-600/40"
                }`}
                onClick={() => setActiveTab("staff")}
              >
                Staff App UI
              </button>
            </div>
          </div>
        </div>

        {/* Swiper without navigation buttons (moved to header) */}
        <div className="relative mx-auto">
          {/* Swiper component */}
          <Swiper
            ref={sliderRef}
            slidesPerView={1}
            spaceBetween={20}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              768: { slidesPerView: 3, spaceBetween: 30 },
              1024: { slidesPerView: 3.7, spaceBetween: 40 },
            }}
            modules={[Pagination, Navigation]}
            className="pb-12"
          >
            {screenTypes.map((type) => (
              <SwiperSlide key={type} className="h-auto">
                <div className="flex flex-col items-center">
                  {/* Mockup image */}
                  <div className="bg-white rounded-lg p-1 shadow-lg mb-4 w-full  mx-auto">
                    <div className="relative aspect-[9/19] w-full overflow-hidden rounded-md">
                      <Image
                        src={currentMockups[type]}
                        alt={`${activeTab} ${type} UI`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  {/* Label */}
                  <p className="text-white font-medium">{screenLabels[type]}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
