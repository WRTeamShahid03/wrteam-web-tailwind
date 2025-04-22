"use client";
import React, { useRef, useCallback, useState } from "react";
import Image from "next/image";
import { PageTitle } from "@/components/HeadingComponent";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper types
import type { SwiperRef } from "swiper/react";
// Import required modules
import { FreeMode } from "swiper/modules";

// Import icons
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

// Define interface for slide elements
interface SlideElement {
  id: number;
  name: string;
  details: string;
  image_url?: string;
  type?: string;
  android_link?: string;
  ios_link?: string;
  link?: string;
  panel_link?: string;
}

export default function SliderSection({
  title,
  description,
  elements,
}: {
  title: string;
  description: string;
  elements: SlideElement[];
}) {
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
    0: { slidesPerView: 1.2 },
    460: { slidesPerView: 1.8 },
    576: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
    992: { slidesPerView: 3 },
    1200: { slidesPerView: 4 },
    1400: { slidesPerView: 4 },
  };

  return (
    <div className="container commonMT">
      <div className="mb-12 flex items-end justify-between">
        <div className="flexColCenter !items-start commonTextGap max-399:text-center">
          <PageTitle className="sectionTitle !font-bold">{title}</PageTitle>
          <div
            className="sectionPara !font-medium text-gray-700 max-w-3xl"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
        {/* Navigation Buttons - Desktop version (hidden on mobile) */}
        {elements?.length > 4 && (
          <div className="hidden lg:flex items-end justify-end gap-4 mb-8">
            <button
              className="w-12 h-12 rounded-full productPrimaryBg text-white flex items-center justify-center"
              onClick={handlePrev}
            >
              <FaArrowLeft size={24} className="text-white" />
            </button>
            <button
              className="w-12 h-12 rounded-full productPrimaryBg text-white flex items-center justify-center"
              onClick={handleNext}
            >
              <FaArrowRight size={24} className="text-white" />
            </button>
          </div>
        )}
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
          className="md:pb-6 pb-16" // More bottom padding on mobile for navigation buttons
        >
          {elements.map((card) => (
            <SwiperSlide key={card?.id} className="h-auto">
              <div
                className="flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-500 bg-white h-full relative min-h-[220px] sm:min-h-[250px] overflow-hidden group"
                onMouseEnter={() => setHoveredCard(card?.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Corner accent to hide any border gap */}
                <div className="absolute bottom-0 right-0 w-6 h-6 bg-white"></div>

                {/* Primary circle gradient - smaller and visible first on hover */}
                <div className="absolute -left-[30px] -top-[30px] h-[60px] w-[60px] sm:h-[80px] sm:w-[80px] rounded-full productPrimaryBg opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100 z-10 group-hover:scale-[1.5]"></div>

                {/* Secondary circle gradient - larger expansion on hover with delay */}
                <div className="absolute -left-[80px] -top-[80px] h-[150px] w-[150px] sm:h-full sm:w-full rounded-full bg-blue-900 opacity-0 group-hover:opacity-90 transition-all duration-500 delay-200 z-0 group-hover:scale-[3.5]"></div>

                <div className="w-12 h-12 sm:w-16 sm:h-16 mb-4 sm:mb-6 flex items-center justify-center relative z-20">
                  {card?.image_url ? (
                    <Image
                      src={card?.image_url}
                      alt={card?.name}
                      width={40}
                      height={40}
                      className="w-8 h-8 sm:w-10 sm:h-10 group-hover:filter group-hover:brightness-200 transition-all duration-300 delay-100 group-hover:opacity-0"
                    />
                  ) : (
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-md flex items-center justify-center group-hover:bg-white/20 transition-all duration-300 delay-100 group-hover:opacity-0">
                      <span className="text-blue-500 text-base sm:text-xl group-hover:text-white transition-all duration-300 delay-100">
                        {card?.name}
                      </span>
                    </div>
                  )}
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-center relative z-20 group-hover:text-white transition-all duration-300 delay-100 group-hover:opacity-0">
                  {card?.name}
                </h3>
                <div
                  dangerouslySetInnerHTML={{ __html: card?.details }}
                  className="text-sm sm:text-base text-gray-600 text-center mb-3 sm:mb-4 relative z-20 group-hover:text-white/80 transition-all duration-300 delay-100 group-hover:opacity-0"
                ></div>

                {/* Hover overlay with buttons */}
                {hoveredCard === card?.id && (
                  <div className="absolute inset-0 flex flex-col justify-center items-center z-30 p-4 sm:p-8 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300">
                    {card?.type === "app" ? (
                      <div className="flex flex-col gap-3 sm:gap-4 w-full max-w-[160px] sm:max-w-[200px]">
                        {card?.android_link && (
                          <a
                            href={card?.android_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full py-2 sm:py-3 text-sm sm:text-base productPrimaryBg text-white font-medium rounded text-center hover:bg-green-400 transition-colors duration-300"
                          >
                            Android
                          </a>
                        )}
                        {card?.ios_link && (
                          <a
                            href={card?.ios_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full py-2 sm:py-3 text-sm sm:text-base bg-gray-100 text-gray-800 font-medium rounded text-center hover:bg-white transition-colors duration-300"
                          >
                            iOS
                          </a>
                        )}
                      </div>
                    ) : (
                      <div className="flex flex-col gap-3 sm:gap-4 w-full max-w-[160px] sm:max-w-[200px]">
                        {/* Use panel_link as a fallback if link is null */}
                        {(card?.link || card?.panel_link) && (
                          <a
                            href={card?.link || card?.panel_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full py-2 sm:py-3 text-sm sm:text-base bg-gray-100 text-gray-800 font-medium rounded text-center hover:bg-white transition-colors duration-300"
                          >
                            Explore
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons - Mobile version (hidden on desktop) */}
        <div className="flex lg:hidden items-center justify-center gap-4 mt-8">
          <button
            className="w-12 h-12 rounded-full productPrimaryBg text-white flex items-center justify-center"
            onClick={handlePrev}
          >
            <FaArrowLeft size={24} className="text-white" />
          </button>
          <button
            className="w-12 h-12 rounded-full productPrimaryBg text-white flex items-center justify-center"
            onClick={handleNext}
          >
            <FaArrowRight size={24} className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}
