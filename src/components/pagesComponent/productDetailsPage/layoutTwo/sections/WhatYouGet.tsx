"use client";
import React, { useRef, useCallback } from "react";
import MarqueSect from "./MarqueSect";
import Image from "next/image";
import Link from "next/link";
import { BiRightArrowAlt } from "react-icons/bi";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper types
import type { SwiperRef } from "swiper/react";
// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import { ProductElement, ProductTestimonial } from "@/types";

interface WhatYouGetProps {
  title: string;
  description: string;
  elements: ProductElement[];
  testimonials: ProductTestimonial[];
}

const WhatYouGet: React.FC<WhatYouGetProps> = ({
  title,
  description,
  elements,
}) => {
  const breakpoints = {
    0: {
      slidesPerView: 1.3,
    },
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
    1400: {
      slidesPerView: 4,
    },
  };

  const renderBullet = (index: number, className: string) => {
    return `<span class="${className}" style="
            outline: 1px solid #000;
            font-size: 20px;
            padding: 8px;
            border: 2px solid #fff;"
             id="renderBullets">
    </span>`;
  };

  const sliderRef = useRef<SwiperRef>(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;

    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <section className="relative -mt-60 bg-white pt-48">
      <MarqueSect />

      <div className="container space-y-8 md:space-y-12 lg:space-y-16" id="explore-demo">
        <div className="flexColCenter commonTextGap lg:w-[50%] mx-auto text-center commonMT">
          <h2 className="sectionTitle !font-bold">{title}</h2>
          <p
            className="sectionPara"
            dangerouslySetInnerHTML={{ __html: description || "" }}
          />
        </div>

        <div className="relative">
          <Swiper
            ref={sliderRef}
            slidesPerView={4}
            loop={true}
            spaceBetween={20}
            freeMode={true}
            modules={[FreeMode, Pagination]}
            pagination={{
              clickable: true,
              renderBullet: renderBullet,
            }}
            // navigation
            className="comesWithSwiper"
            breakpoints={breakpoints}
          >
            {elements.map((element, index) => (
              <SwiperSlide key={index}>
                <div className="flexColCenter commonTextGap text-center border-2 border-[#d8e0e6] rounded-[8px] py-4 px-4 md:py-8 md:px-6">
                  <div className="p-3 md:p-5 rounded-full commonBg flexCenter">
                    <Image
                      src={element.image_url}
                      height={0}
                      width={0}
                      alt="icon"
                      className="w-[25px] md:w-[35px] h-[25px] md:h-[35px]"
                    />
                  </div>
                  <span className="md:text-lg lg:text-xl font-bold">
                    {element.name}
                  </span>
                  <p
                    className="text-sm md:text-base text-[#5c788c] font-medium"
                    dangerouslySetInnerHTML={{ __html: element.details || "" }}
                  />
                  <Link
                    href={element.link || ""}
                    target="_blank"
                    title="Explore Demo"
                    className="productPrimaryColor flexCenter gap-1 font-medium"
                  >
                    <span>Explore Demo</span>
                    <BiRightArrowAlt />
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {elements.length > 4 && (
            <div className="mt-6 sm:mt-0 flexCenter gap-4 sm:!block">
              <div
                className="primaryBg w-max h-max rounded-full relative sm:absolute top-0 bottom-0 sm:m-auto -left-4 z-[1] cursor-pointer"
                onClick={handlePrev}
              >
                <span>
                  <GrFormPrevious color="white" size={30} />
                </span>
              </div>
              <div
                className="primaryBg w-max h-max rounded-full relative sm:absolute top-0 bottom-0 sm:m-auto -right-4 z-[1] cursor-pointer"
                onClick={handleNext}
              >
                <span>
                  <GrFormNext color="white" size={30} />
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WhatYouGet;
