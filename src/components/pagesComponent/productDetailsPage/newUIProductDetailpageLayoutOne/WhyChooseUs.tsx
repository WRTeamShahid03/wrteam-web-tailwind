"use client";
import { useRef, ReactNode } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import type { SwiperRef } from "swiper/react";

// Interface for feature data
interface FeatureItem {
  id: number;
  title: string;
  description: string;
  icon: ReactNode;
}

// Feature data array for easier management
const featureData: FeatureItem[] = [
  {
    id: 1,
    title: "Scalabe Business Model",
    description: "Seamlessly grows with increasing school and classroom needs.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M10 4v4" />
        <path d="M2 8h20" />
        <circle cx="6" cy="14" r="2" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Super Admin Control",
    description:
      "Full oversight and management of all school operations through an online platform.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Efficient School Administration",
    description:
      "Streamline and optimize daily school management tasks, from student records to attendance tracking.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2v4" />
        <path d="M12 18v4" />
        <path d="M4.93 4.93l2.83 2.83" />
        <path d="M16.24 16.24l2.83 2.83" />
        <path d="M2 12h4" />
        <path d="M18 12h4" />
        <path d="M4.93 19.07l2.83-2.83" />
        <path d="M16.24 7.76l2.83-2.83" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Subscription Module",
    description:
      "Flexible plans tailored to meet diverse institute requirements.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
  {
    id: 5,
    title: "Expensive & Payroll Management",
    description:
      "Accurate tracking and efficient financial management for schools and teachers.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
  },
  {
    id: 6,
    title: "Rolebase Access Management",
    description:
      "Secure user access control for teachers, students, and administrators.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="4" width="18" height="12" rx="2" ry="2" />
        <line x1="2" y1="20" x2="22" y2="20" />
      </svg>
    ),
  },
];

export default function WhyChooseUs() {
  const sliderRef = useRef<SwiperRef>(null);

  // Swiper breakpoints for responsiveness
  const breakpoints = {
    640: { slidesPerView: 2, spaceBetween: 20 },
    768: { slidesPerView: 3, spaceBetween: 30 },
  };

  // Function to render a feature card
  const renderFeatureCard = (feature: FeatureItem, isResponsive = false) => (
    <div className="flex flex-col items-start h-full">
      <div className="mb-4">{feature.icon}</div>
      <h3 className={`font-bold mb-2 ${isResponsive ? "text-lg" : "text-xl"}`}>
        {feature.title}
      </h3>
      <p
        className={`${
          isResponsive ? "text-sm text-gray-700" : "text-gray-700"
        }`}
      >
        {feature.description}
      </p>
    </div>
  );

  return (
    <div className="py-16 container commonMT">
      {/* Section Header */}
      <div className="text-center mb-10 lg:mb-16">
        <h2 className="text-4xl font-bold mb-5">Why Choose eSchool SaaS?</h2>
        <p className="text-gray-700 max-w-3xl mx-auto">
          eSchool SaaS simplifies school management, student management, teacher
          management, class scheduling, and fees management, making it the ideal
          information system for modern educational institutes.
        </p>
      </div>

      {/* Desktop layout - Three-column layout (Only visible on lg screens and up) */}
      <div className="hidden lg:grid lg:grid-cols-3 gap-6 mb-12">
        {/* Left column */}
        <div className="p-6 pl-0 flex flex-col space-y-12">
          {featureData.slice(0, 3).map((feature) => (
            <div key={feature.id} className="flex flex-col items-start">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Middle column with device showcase */}
        <div className="p-6 flex items-center justify-center">
          <img
            src="https://placehold.co/600x400/e2e8f0/1e293b?text=eSchool+SaaS+Devices"
            alt="eSchool SaaS on multiple devices"
            className="max-w-full h-auto"
            onError={(e) => {
              // Fallback if image fails to load
              e.currentTarget.style.display = "none";
            }}
          />
        </div>

        {/* Right column */}
        <div className="p-6 pe-0 flex flex-col space-y-12">
          {featureData.slice(3).map((feature) => (
            <div key={feature.id} className="flex flex-col items-start">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile and Tablet layout - Swiper (Only visible on screens smaller than lg) */}
      <div className="lg:hidden mb-8">
        <Swiper
          ref={sliderRef}
          slidesPerView={1.2}
          spaceBetween={16}
          freeMode={true}
          modules={[FreeMode]}
          breakpoints={breakpoints}
          className="pb-8"
        >
          {featureData.map((feature) => (
            <SwiperSlide key={feature.id} className="h-auto">
              <div className="bg-gray-50 rounded-lg p-6">
                {renderFeatureCard(feature, true)}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Mobile Device Showcase Image (Only visible on screens smaller than lg) */}
      <div className="flex justify-center lg:hidden">
        <img
          src="https://placehold.co/600x400/e2e8f0/1e293b?text=eSchool+SaaS+Devices"
          alt="eSchool SaaS on multiple devices"
          className="max-w-full h-auto"
          onError={(e) => {
            // Fallback if image fails to load
            e.currentTarget.style.display = "none";
          }}
        />
      </div>
    </div>
  );
}
