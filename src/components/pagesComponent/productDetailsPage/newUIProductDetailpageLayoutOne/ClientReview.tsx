import React, { useRef } from "react";
import { FaStar } from "react-icons/fa";
// Import Swiper components and styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { ProductTestimonial } from "@/types";
import envatoIcon from '../../../../assets/images/envatoTestimonial.png'
import Image from "next/image";


export default function ClientReview({ testimonials, productName }: { testimonials: ProductTestimonial[], productName: string }) {
  // Create a ref for the Swiper instance
  const swiperRef = useRef<SwiperType | null>(null);

  const breakpoints = {
    0: {
        slidesPerView: 1.2,
        // spaceBetween: 40
    },
    576: {
        slidesPerView: 1.3,
        // spaceBetween: 40
    },
    768: {
        slidesPerView: 1.3,

    },
    992: {
        slidesPerView: 2.2,

    },
    1400: {
        slidesPerView: 3,

    }
};

  return (
    <div className="w-full py-12 productSecondaryBg text-white">
      <div className="container layoutOneTestimonials relative">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h4 className="sectionTitle !font-bold mb-2">
            What Customers Have to say about
          </h4>
          <h5 className="text-3xl font-bold">{productName}</h5>
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
            breakpoints={breakpoints}
            className="py-8 pb-24 md:pb-12"
          >
            {testimonials.map((review) => (
              <SwiperSlide key={review.id} className="h-auto pb-6">
                <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg flex flex-col h-full md:h-[250px] relative mb-6">
                  {/* Rating and Category */}
                  <div className="flex items-center mb-4 flex-wrap">
                    <div className="flex mr-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="text-[#ffa800] text-lg" />
                      ))}
                    </div>
                    <span className="ml-2 text-sm font-bold text-black">
                      {review.rating_for}
                    </span>
                  </div>

                  {/* Review Text */}
                  <div className="flex-grow">
                    <p className="text-gray-800 text-base line-clamp-5">{review.review}</p>
                  </div>

                  {/* Reviewer Name */}
                  <div className="text-right mt-4 pt-2">
                    <p className="font-semibold text-black">{review.name}</p>
                  </div>

                  {/* Green Icon */}
                  <div className="absolute -bottom-6 left-8 z-10">
                    <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-[0_2px_8px_0_rgba(99,99,99,.2)]">
                      <Image src={envatoIcon} height={36} width={30} alt="envatoIcon"/>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Desktop Navigation Buttons */}
          <div className="max-1199:hidden block">
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
          <div className="max-1199:flex justify-center items-center mt-6 mb-4 hidden">
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
