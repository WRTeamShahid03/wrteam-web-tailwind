"use client";

import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import type { Swiper as SwiperType } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// Feature card interface for type safety
interface FeatureCard {
  id: number;
  title: string;
  description: string;
  image: string;
  bgColor: string;
  category: string; // Added category field to filter features by tab
}

// Sample feature data
const features: FeatureCard[] = [
  {
    id: 1,
    title: "Exam Timetable",
    description:
      "Accessible app exam timetable enables effortless planning and preparation for students and parents.",
    image:
      "https://placehold.co/250x200/e0f2fe/1e40af?text=Exam+Timetable&font=roboto",
    bgColor: "bg-blue-50",
    category: "student",
  },
  {
    id: 2,
    title: "Result View",
    description:
      "Instantly access exam results in the app, eliminating the need to wait for mailed copies. Check grades conveniently and swiftly.",
    image:
      "https://placehold.co/250x200/fee2e2/be123c?text=Result+View&font=roboto",
    bgColor: "bg-red-50",
    category: "student",
  },
  {
    id: 3,
    title: "Elective Subjects",
    description:
      "The app lets students choose their elective subjects based on their interests.",
    image:
      "https://placehold.co/250x200/fef3c7/92400e?text=Elective+Subjects&font=roboto",
    bgColor: "bg-amber-50",
    category: "student",
  },
  {
    id: 4,
    title: "Attendance Tracking",
    description:
      "Teachers can easily mark and track student attendance with our intuitive interface.",
    image:
      "https://placehold.co/250x200/d1fae5/065f46?text=Attendance+Tracking&font=roboto",
    bgColor: "bg-green-50",
    category: "student",
  },
  {
    id: 5,
    title: "Class Management",
    description:
      "Teachers can easily manage and track student classes with our intuitive interface.",
    image:
      "https://placehold.co/250x200/d1fae5/065f46?text=Class+Management&font=roboto",
    bgColor: "bg-green-50",
    category: "teacher",
  },
  {
    id: 6,
    title: "Grade Management",
    description:
      "Comprehensive tools for managing and recording student grades and academic progress.",
    image:
      "https://placehold.co/250x200/f3e8ff/7e22ce?text=Grade+Management&font=roboto",
    bgColor: "bg-purple-50",
    category: "teacher",
  },
  {
    id: 7,
    title: "School Analytics",
    description:
      "Access detailed reports and analytics on school performance and operations.",
    image:
      "https://placehold.co/250x200/fef9c3/854d0e?text=School+Analytics&font=roboto",
    bgColor: "bg-yellow-50",
    category: "admin",
  },
  {
    id: 8,
    title: "Multi-School Management",
    description:
      "Oversee multiple schools from a central dashboard with comprehensive reporting.",
    image:
      "https://placehold.co/250x200/e0e7ff/4338ca?text=Multi-School&font=roboto",
    bgColor: "bg-indigo-50",
    category: "superadmin",
  },
];

// Tab categories
const tabs = [
  { id: "student", label: "Student & Parents App" },
  { id: "teacher", label: "Teacher & Staff App" },
  { id: "admin", label: "Admin panel" },
  { id: "superadmin", label: "Super Admin" },
];

const FeaturesSection = () => {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState("student");
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

  // Filter features based on active tab
  const filteredFeatures = features.filter(
    (feature) => feature.category === activeTab
  );

  // Get active tab label
  const activeTabLabel =
    tabs.find((tab) => tab.id === activeTab)?.label || "Select App";

  // Handle tab change - reset swiper and navigation states
  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    setIsBeginning(true);
    setIsEnd(false);
    setIsDropdownOpen(false);

    // Reset swiper to first slide when changing tabs
    if (swiperRef.current) {
      swiperRef.current.slideTo(0);
    }
  };

  return (
    <section className="py-8 md:py-16 bg-emerald-500">
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-2 md:mb-3">
            Check Out All the Cool Features of eSchool SaaS
          </h2>
          <p className="text-white text-sm md:text-base max-w-3xl mx-auto">
            See how this online school management system makes school life
            easier! Manage student data, classroom activities, and teacher
            workflows all in one place.
          </p>
        </div>

        {/* Tab buttons - Desktop */}
        <div className="hidden md:flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={`font-medium py-2.5 px-6 rounded-md transition-colors ${
                activeTab === tab.id
                  ? "bg-white text-gray-800"
                  : "bg-transparent text-white border border-white hover:bg-emerald-600"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Mobile Dropdown Tab Selector */}
        <div className="relative md:hidden mb-6">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full flex items-center justify-between bg-white text-gray-800 font-medium py-3 px-4 rounded-md shadow"
          >
            <span>{activeTabLabel}</span>
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
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`w-full text-left py-3 px-4 hover:bg-gray-100 transition-colors ${
                    activeTab === tab.id ? "bg-gray-100 font-medium" : ""
                  }`}
                >
                  {tab.label}
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
            {filteredFeatures.length > 0 ? (
              filteredFeatures.map((feature) => (
                <SwiperSlide key={feature.id} className="h-auto">
                  <div
                    className={`rounded-lg overflow-hidden ${feature.bgColor} shadow-md w-full`}
                    style={{ height: isMobile ? "320px" : "350px" }}
                  >
                    <div className="h-36 md:h-48 p-4 md:p-6 flex items-center justify-center">
                      <Image
                        src={feature.image}
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
                        {feature.description}
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
