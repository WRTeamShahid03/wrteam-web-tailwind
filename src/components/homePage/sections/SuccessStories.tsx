"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
// Import Swiper types
import type { SwiperRef } from "swiper/react";

// Sample client data - replace with actual data/images
const clientData = [
  {
    id: 1,
    name: "Martin Mathew",
    company: "eShop Plus",
    // Using exact image from screenshot
    image:
      "https://img.freepik.com/free-photo/portrait-happy-male-with-broad-smile_176532-8175.jpg",
  },
  {
    id: 2,
    name: "Steve John",
    company: "eRestro - Multi Vendor",
    // Using exact image from screenshot
    image:
      "https://img.freepik.com/free-photo/young-indian-businessman-wearing-suit-against-white-wall_231208-313.jpg",
  },
  {
    id: 3,
    name: "Martin Mathew",
    company: "eShop Plus",
    // Using exact image from screenshot - duplicate of first for consistency
    image:
      "https://img.freepik.com/free-photo/portrait-happy-male-with-broad-smile_176532-8175.jpg",
  },
];

export default function SuccessStories() {
  const sliderRef = useRef<SwiperRef>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-[#0D0E12] py-16 overflow-hidden commonMT">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1 rounded-md text-white text-sm mb-3 bg-[#262829]">
            Real Stories from Our Clients
          </div>
          <h2 className="text-white text-3xl md:text-4xl font-bold">
            Client Success Stories – Watch Their Experience
          </h2>
        </div>

        {/* Add extra wrapper with overflow visible */}
        <div className="overflow-visible mx-auto max-w-full">
          {/* Slider */}
          <div className="relative overflow-visible px-0 sm:px-4 md:px-10">
            <Swiper
              ref={sliderRef}
              slidesPerView={1}
              // centeredSlides={true}
              spaceBetween={10}
              loop={true}
              initialSlide={1}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
                992: {
                  slidesPerView: 3,
                },
              }}
              modules={[Pagination]}
              className="mb-12 py-6"
            >
              {clientData.map((client, index) => (
                <SwiperSlide
                  key={client.id}
                  className={`!overflow-visible ${
                    activeIndex + 1 === index ? "active-slide" : ""
                  }`}
                >
                  {() => (
                    <div
                      className={`overflow-hidden relative transition-all duration-300 border-2 rounded-xl  ${
                        activeIndex + 1 === index
                          ? "transform scale-105 shadow-xl z-10 border-gray-500/50 ring-1 ring-white/50"
                          : "opacity-70 scale-95 border-gray-500/50"
                      }`}
                    >
                      <div
                        className="relative w-full"
                        style={{ height: "500px" }}
                      >
                        <Image
                          src={client.image}
                          alt={client.name}
                          fill
                          className="object-cover rounded-lg"
                          unoptimized={true}
                        />

                        {/* Gradient overlay at bottom of image */}
                        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black/80 to-transparent"></div>
                      </div>

                      {/* Client info positioned at bottom */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                        <div className="flex justify-between items-center">
                          <div>
                            <h3 className="text-white font-semibold text-lg">
                              {client.name}
                            </h3>
                            <p className="text-gray-400 text-sm">
                              {client.company}
                            </p>
                          </div>
                          <button className="bg-white rounded-full p-2 text-black hover:scale-110 transition-transform">
                            <FaPlay size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom manual pagination */}
            <div className="flex justify-center mt-8 space-x-4">
              {clientData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (sliderRef.current && sliderRef.current.swiper) {
                      sliderRef.current.swiper.slideToLoop(index);
                    }
                  }}
                  className={`w-3 h-3 rounded-full transition-all ${
                    activeIndex === index
                      ? "bg-white scale-110"
                      : "bg-gray-500/50"
                  }`}
                  aria-label={`Slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Center play button that was removed */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 hidden">
              <button className="bg-white rounded-full p-5 text-black hover:scale-110 transition-transform shadow-lg">
                <FaPlay size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Add some global styles for Swiper pagination */}
      <style jsx global>{`
        .swiper-pagination {
          position: relative !important;
          bottom: -30px !important;
          left: 0;
          width: 100%;
          height: 20px;
          text-align: center;
        }
        .swiper-pagination-bullet {
          width: 0.75rem;
          height: 0.75rem;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.5);
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background: white;
          transform: scale(1.2);
        }
      `}</style>
    </section>
  );
}
