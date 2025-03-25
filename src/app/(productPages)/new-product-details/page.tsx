"use client";
import React, { useRef, useCallback, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper types
import type { SwiperRef } from "swiper/react";
// Import required modules
import { FreeMode } from "swiper/modules";

// Import icons
import webIcon from "@/assets/images/portfolio/web.svg";
import studentAppIcon from "@/assets/images/portfolio/playstore.svg";
import teacherAppIcon from "@/assets/images/portfolio/iOS-Store.svg";
import Layout from "@/components/layout/Layout";

// Feature cards data
const featureCardsData = [
  {
    id: 0,
    title: "Landing page",
    description: "Landing page to showcase your SaaS",
    icon: webIcon,
    iconAlt: "Web Icon",
    iconFallback: "🖥️",
  },
  {
    id: 1,
    title: "Student & Parent App",
    description: "Flutter app for students and parents",
    icon: studentAppIcon,
    iconAlt: "Student App Icon",
    iconFallback: "📱",
  },
  {
    id: 2,
    title: "Staff & Teacher App",
    description: "Flutter app for teachers and staff members",
    icon: teacherAppIcon,
    iconAlt: "Teacher App Icon",
    iconFallback: "👨‍🏫",
  },
  {
    id: 3,
    title: "Admin Dashboard",
    description: "Powerful admin panel for school management",
    icon: null,
    iconAlt: "Admin Dashboard Icon",
    iconFallback: "⚙️",
  },
  {
    id: 4,
    title: "Reports & Analytics",
    description: "Comprehensive reporting for student performance",
    icon: null,
    iconAlt: "Reports & Analytics Icon",
    iconFallback: "📊",
  },
];

export default function Page() {
  // Swiper refs and controls
  const sliderRef = useRef<SwiperRef>(null);
  // State for tracking which card is being hovered
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  // Swiper breakpoints for responsiveness
  const breakpoints = {
    0: { slidesPerView: 1.2, spaceBetween: 10 },
    480: { slidesPerView: 1.5, spaceBetween: 15 },
    576: { slidesPerView: 2, spaceBetween: 20 },
    768: { slidesPerView: 3, spaceBetween: 20 },
    992: { slidesPerView: 4, spaceBetween: 25 },
    1200: { slidesPerView: 4, spaceBetween: 30 },
  };

  return (
    <Layout>
      <div className="container">
        {/* Section Title */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            What&apos;s Included with eSchool SaaS?
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl">
            Get everything you need for effortless multi-school and institute
            management with this web-based education platform.
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-end gap-4 mb-8">
          <button
            className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center hover:bg-green-600 transition-colors"
            onClick={handlePrev}
          >
            <GrFormPrevious size={24} className="text-white" />
          </button>
          <button
            className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center hover:bg-green-600 transition-colors"
            onClick={handleNext}
          >
            <GrFormNext size={24} className="text-white" />
          </button>
        </div>

        {/* Features Swiper */}
        <div className="relative">
          <Swiper
            ref={sliderRef}
            slidesPerView={1.2}
            spaceBetween={10}
            freeMode={true}
            modules={[FreeMode]}
            loop={true}
            breakpoints={breakpoints}
            className="pb-6"
          >
            {featureCardsData.map((card) => (
              <SwiperSlide key={card.id} className="h-auto">
                <div
                  className="flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-500 bg-white h-full relative min-h-[220px] sm:min-h-[250px] overflow-hidden group"
                  onMouseEnter={() => setHoveredCard(card.id)}
                  onMouseLeave={() => setHoveredCard(null)}
        
                >
                  {/* Corner accent to hide any border gap */}
                  <div className="absolute bottom-0 right-0 w-6 h-6 bg-white"></div>

                  {/* Primary circle gradient - smaller and visible first on hover */}
                  <div className="absolute -left-[30px] -top-[30px] h-[60px] w-[60px] sm:h-[80px] sm:w-[80px] rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 group-hover:scale-[1.5]"></div>

                  {/* Secondary circle gradient - larger expansion on hover with delay */}
                  <div className="absolute -left-[80px] -top-[80px] h-[150px] w-[150px] sm:h-[200px] sm:w-[200px] rounded-full bg-blue-900 opacity-0 group-hover:opacity-90 transition-all duration-500 delay-100 z-0 group-hover:scale-[3.5]"></div>

                  <div className="w-12 h-12 sm:w-16 sm:h-16 mb-4 sm:mb-6 flex items-center justify-center relative z-20">
                    {card.icon ? (
                      <Image
                        src={card.icon}
                        alt={card.iconAlt}
                        width={40}
                        height={40}
                        className="w-8 h-8 sm:w-10 sm:h-10 group-hover:filter group-hover:brightness-200 transition-all duration-500 delay-300 group-hover:opacity-0"
                      />
                    ) : (
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-md flex items-center justify-center group-hover:bg-white/20 transition-all duration-500 delay-300 group-hover:opacity-0">
                        <span className="text-blue-500 text-base sm:text-xl group-hover:text-white transition-all duration-500 delay-300">
                          {card.iconFallback}
                        </span>
                      </div>
                    )}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-center relative z-20 group-hover:text-white transition-all duration-500 delay-300 group-hover:opacity-0">
                    {card.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 text-center mb-3 sm:mb-4 relative z-20 group-hover:text-white/80 transition-all duration-500 delay-300 group-hover:opacity-0">
                    {card.description}
                  </p>

                  {/* Hover overlay with buttons */}
                  {hoveredCard === card.id && (
                    <div className="absolute inset-0 flex flex-col justify-center items-center z-30 p-4 sm:p-8 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="flex flex-col gap-3 sm:gap-4 w-full max-w-[160px] sm:max-w-[200px]">
                        <Link
                          href="#"
                          className="w-full py-2 sm:py-3 text-sm sm:text-base bg-green-500 text-white font-medium rounded text-center hover:bg-green-400 transition-colors"
                        >
                          Android
                        </Link>
                        <Link
                          href="#"
                          className="w-full py-2 sm:py-3 text-sm sm:text-base bg-gray-100 text-gray-800 font-medium rounded text-center hover:bg-white transition-colors"
                        >
                          iOS
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </Layout>
  );
}
