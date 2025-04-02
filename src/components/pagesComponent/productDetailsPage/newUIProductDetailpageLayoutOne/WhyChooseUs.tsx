"use client";
import { useRef, ReactNode } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import type { SwiperRef } from "swiper/react";
import Image from "next/image";
import { Feature, WhyChooseUsProps } from "@/types";




export default function WhyChooseUs({ title, description, features, mainImage }: WhyChooseUsProps) {

  const sliderRef = useRef<SwiperRef>(null);

  // Swiper breakpoints for responsiveness
  const breakpoints = {
    640: { slidesPerView: 2, spaceBetween: 20 },
    768: { slidesPerView: 3, spaceBetween: 30 },
  };

  // Function to render a feature card
  const renderFeatureCard = (feature: Feature, isResponsive = false) => (
    <div className="flex flex-col items-start h-full">
      <div className="mb-4">
        <Image
          src={feature?.image_url}
          alt={feature?.name}
          width={40}
          height={40}
        />
      </div>
      <h3 className={`font-bold mb-2 ${isResponsive ? "text-lg" : "text-xl"}`}>
        {feature?.name}
      </h3>

      <div dangerouslySetInnerHTML={{ __html: feature?.detail || "" }} className="text-gray-700" />
    </div>
  );

  return (
    <div className="py-16 container commonMT">
      {/* Section Header */}
      <div className="text-center mb-10 lg:mb-16">
        <h2 className="text-4xl font-bold mb-5">{title}</h2>
        <div dangerouslySetInnerHTML={{ __html: description || "" }} className="text-gray-700 max-w-3xl mx-auto" />
      </div>

      {/* Desktop layout - Three-column layout (Only visible on lg screens and up) */}
      <div className="hidden lg:grid lg:grid-cols-3 gap-6 mb-12">
        {/* Left column */}
        <div className="p-6 pl-0 flex flex-col space-y-12">
          {features?.slice(0, 3).map((feature, index) => (
            <div key={index} className="flex flex-col items-start">
              <div className="mb-4">
                <Image
                  src={feature?.image_url}
                  alt={feature?.name}
                  width={40}
                  height={40}
                  className="w-10 h-10 sm:w-12 sm:h-12 group-hover:filter group-hover:brightness-200 transition-all duration-300 delay-100 group-hover:opacity-0"
                />

              </div>
              <h3 className="text-xl font-bold mb-2">{feature.name}</h3>
              <div dangerouslySetInnerHTML={{ __html: feature.detail || "" }} className="text-gray-700" />
            </div>
          ))}
        </div>

        {/* Middle column with device showcase */}
        <div className="p-6 flex items-center justify-center">
          <img
            src={mainImage}
            alt={title}
            className="max-w-full h-auto"
            onError={(e) => {
              // Fallback if image fails to load
              e.currentTarget.style.display = "none";
            }}
          />
        </div>

        {/* Right column */}
        <div className="p-6 pe-0 flex flex-col space-y-12">
          {features?.slice(3).map((feature, index) => (
            <div key={index} className="flex flex-col items-start">
              <div className="mb-4">
                <Image
                  src={feature?.image_url}
                  alt={feature?.name}
                  width={40}
                  height={40}
                />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.name}</h3>
              <div dangerouslySetInnerHTML={{ __html: feature.detail || "" }} className="text-gray-700" />
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
          {features?.map((feature, index) => (
            <SwiperSlide key={index} className="h-auto">
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
