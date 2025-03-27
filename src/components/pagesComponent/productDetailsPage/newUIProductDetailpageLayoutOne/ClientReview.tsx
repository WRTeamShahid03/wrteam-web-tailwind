import React, { useRef } from "react";
import { FaStar } from "react-icons/fa";
// Import Swiper components and styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

// Updated review data to match the image
const reviewsData = [
  {
    id: 1,
    name: "onifkay",
    rating: 5,
    text: "They thought of everything, and they keep making more improvements. Kudos",
    category: "For Feature Availability",
  },
  {
    id: 2,
    name: "ashk8",
    rating: 5,
    text: "I regularly purchase code from Codecanyon, but the experience with WRTeam has been the best till date. The support is prompt and excellent. The code works smoothly.",
    category: "For Customer Support",
  },
  {
    id: 3,
    name: "smartegy2010",
    rating: 5,
    text: "They are doing great and the software is really great :)",
    category: "For Customer Support",
  },
  {
    id: 4,
    name: "anderolsen",
    rating: 5,
    text: "One of the best apps I've ever seen. Attentive and fast support!",
    category: "For Customer Support",
  },
  {
    id: 5,
    name: "johndoe",
    rating: 5,
    text: "Easy to customize and integrate. Great documentation!",
    category: "For Customer Support",
  },
];

export default function ClientReview() {
  // Create a ref for the Swiper instance
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="w-full py-12 bg-blue-900 text-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">
            What Customers Have to say about
          </h2>
          <h3 className="text-3xl font-bold">eSchool SaaS</h3>
        </div>

        {/* Reviews Container */}
        <div className="relative px-8">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            className="py-8 pb-24 md:pb-12"
          >
            {reviewsData.map((review) => (
              <SwiperSlide key={review.id} className="h-auto pb-6">
                <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg flex flex-col h-full md:h-[250px] relative mb-6">
                  {/* Rating and Category */}
                  <div className="flex items-center mb-4 flex-wrap">
                    <div className="flex mr-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400 text-lg" />
                      ))}
                    </div>
                    <span className="ml-2 text-sm font-bold text-black">
                      {review.category}
                    </span>
                  </div>

                  {/* Review Text */}
                  <div className="flex-grow">
                    <p className="text-gray-800 text-base">{review.text}</p>
                  </div>

                  {/* Reviewer Name */}
                  <div className="text-right mt-4 pt-2 border-t border-gray-100">
                    <p className="font-semibold text-black">{review.name}</p>
                  </div>

                  {/* Green Icon */}
                  <div className="absolute -bottom-6 left-8 z-10">
                    <div className="w-12 h-12 bg-green-400 rounded-full flex items-center justify-center shadow-md">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="w-7 h-7 text-white"
                        fill="currentColor"
                      >
                        <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.834 9.686l-4.166.575 3.032 2.914-.74 4.139 3.708-1.982 3.708 1.983-.74-4.139 3.032-2.915-4.166-.575-1.834-3.784-1.834 3.784z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Desktop Navigation Buttons */}
          <div className="hidden md:block">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="absolute top-1/2 -translate-y-1/2 left-[-3%] z-10 bg-transparent text-white border-2 border-white w-10 h-10 rounded-full flex items-center justify-center shadow-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
              </svg>
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="absolute top-1/2 -translate-y-1/2 right-[-3%] z-10 bg-transparent text-white border-2 border-white w-10 h-10 rounded-full flex items-center justify-center shadow-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation Buttons */}
          <div className="flex justify-center items-center mt-6 mb-4 md:hidden">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="bg-white text-blue-900 w-10 h-10 rounded-full flex items-center justify-center mr-4 shadow-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
              </svg>
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="bg-white text-blue-900 w-10 h-10 rounded-full flex items-center justify-center shadow-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
              </svg>
            </button>
          </div>
        </div>

        <style jsx>{`
          @media (min-width: 768px) {
            :global(.swiper-wrapper) {
              align-items: stretch;
            }
          }
        `}</style>
      </div>
    </div>
  );
}
