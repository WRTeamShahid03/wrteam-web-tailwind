'use client';
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { FaPlay } from 'react-icons/fa';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import clientImg from '@/assets/images/homePage/clientImg.jpeg';
import VideoPlayerModal from '@/components/commonComponents/VideoPlayerModal';
import { axiosClient } from '@/lib/api';
import { VideoTestimonial } from '@/types/videoTestimonials';

// Skeleton loader for video testimonial
const VideoTestimonialSkeleton = () => {
  return (
    <div className="rounded-[30px] overflow-hidden shadow-xl border-[5px] border-white/25 h-full m-2 transition-transform duration-300 ease-in-out">
      <div className="relative h-[500px] bg-gradient-to-b from-gray-700 to-black overflow-hidden md:h-[600px] animate-pulse">
        <div className="absolute bottom-0 left-0 w-full p-4 textLinearBg">
          <div className="bg-gray-400 h-6 w-36 rounded mb-2"></div>
          <div className="bg-gray-500 h-4 w-48 rounded"></div>
        </div>
        <div className="absolute bottom-4 right-4 flex items-center justify-center">
          <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center">
            <div className="bg-white/50 w-6 h-6 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const VideoTestimonials = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [videoTestimonials, setVideoTestimonials] = useState<VideoTestimonial[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchVideoTestimonials = async () => {
      try {
        setIsLoading(true);
        const response = await axiosClient.get('/api/video-testimonials');

        if (response?.data?.data && Array.isArray(response.data.data)) {


          setVideoTestimonials(response.data.data);
        }
      } catch (error) {
        console.error('Error fetching video testimonials:', error);
        // Keep empty array as fallback
      } finally {
        setIsLoading(false);
      }
    };

    fetchVideoTestimonials();
  }, []);


  return (
    <>

      {
        isLoading ?
          <div className="bg-[#181C24] py-16 videoTestimonials commonMT">
            <div className="container">
            <div className="text-center mb-10 flex flex-col items-center gap-3 md:gap-5">
                <span className="bg-[#FFFFFF29] text-white py-2 px-4 rounded-md text-sm font-semibold">
                  Real Stories from Our Clients
                </span>
                <h2 className="text-white text-3xl md:text-4xl font-semibold">
                  Client Success Stories – Watch Their Experience
                </h2>
              </div>

              <Swiper
                modules={[Pagination, Navigation]}
                spaceBetween={20}
                slidesPerView={1}
                loop={false}
                onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
                pagination={{
                  clickable: true,
                  el: '.swiper-custom-pagination',
                  bulletClass: 'swiper-pagination-bullet custom-bullet',
                  bulletActiveClass: 'swiper-pagination-bullet-active custom-bullet-active',
                }}
                breakpoints={{
                  768: {
                    slidesPerView: 2,
                  },
                  992: {
                    slidesPerView: 3,
                  },
                  1200: {
                    slidesPerView: 4,
                  },
                }}
                className="testimonials-swiper [&>.swiper-wrapper]:py-5"
              >
                {
                  Array(4).fill(0).map((_, index) => (
                    <SwiperSlide key={`skeleton-${index}`} className="testimonial-slide">
                      <VideoTestimonialSkeleton />
                    </SwiperSlide>
                  ))}
              </Swiper>

              <div className="swiper-custom-pagination flex justify-center gap-2 mt-6"></div>
            </div>
          </div>
          :
          videoTestimonials.length > 0 &&
           <div className="bg-[#181C24] py-16 videoTestimonials commonMT">
            <div className="container">
              <div className="text-center mb-10 flex flex-col items-center gap-3 md:gap-5">
                <span className="bg-[#FFFFFF29] text-white py-2 px-4 rounded-md text-sm font-semibold">
                  Real Stories from Our Clients
                </span>
                <h2 className="text-white text-3xl md:text-4xl font-semibold">
                  Client Success Stories – Watch Their Experience
                </h2>
              </div>

              <Swiper
                modules={[Pagination, Navigation]}
                spaceBetween={20}
                slidesPerView={1}
                loop={false}
                onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
                pagination={{
                  clickable: true,
                  el: '.swiper-custom-pagination',
                  bulletClass: 'swiper-pagination-bullet custom-bullet',
                  bulletActiveClass: 'swiper-pagination-bullet-active custom-bullet-active',
                }}
                breakpoints={{
                  768: {
                    slidesPerView: 2,
                  },
                  992: {
                    slidesPerView: 3,
                  },
                  1200: {
                    slidesPerView: 4,
                  },
                }}
                className="testimonials-swiper [&>.swiper-wrapper]:py-5 [&>.swiper-wrapper]:items-center"
              >
                {
                  // Show testimonials when loaded
                  videoTestimonials.map((testimonial: VideoTestimonial, index: number) => (
                    <SwiperSlide
                      key={testimonial.id}
                      className={`testimonial-slide transition-all duration-300 ease-in-out`}
                    >
                      <div className="overflow-hidden shadow-xl h-full m-2 transition-transform duration-300 ease-in-out rounded-[18px]">
                        <div className="relative h-[380px] bg-gradient-to-b from-transparent to-black overflow-hidden md:h-[407px] rounded-[18px] border-[5px] border-[#FFFFFF3D] ">
                          <Image
                            src={testimonial.thumbnail}
                            alt={testimonial.name}
                            width={0}
                            height={0}
                            className="object-cover w-full h-full"
                          />
                          <div className="absolute bottom-0 left-0 w-full p-4 textLinearBg text-white">
                            <span className="text-lg font-semibold">{testimonial.name}</span>
                            <p className="text-sm">{testimonial.product.product_title}</p>
                          </div>
                          <VideoPlayerModal videoUrl={testimonial.url} />
                        </div>
                      </div>
                    </SwiperSlide>
                  ))
                }
              </Swiper>

              <div className="swiper-custom-pagination flex justify-center gap-2 mt-6"></div>
            </div>
          </div>
      }


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
    width: 24px;
    height: 12px;
    border-radius: 100px;
    background: rgba(255, 255, 255, 0.5);
    opacity: 1;
    cursor: pointer;
  }
  .swiper-pagination-bullet-active {
    background: white;
  }
`}</style>
    </>
  );
};

export default VideoTestimonials;
