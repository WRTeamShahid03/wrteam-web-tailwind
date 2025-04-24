'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import Image from 'next/image';
import img from '@/assets/images/productDetailPage/clientProductReviewImg.png';


const ClientProductReviews = () => {
    const reviews = [
      {
        id: '01',
        title: 'SwiftPay - Secure and fast mobile payment app',
        description: 'Fast, secure, and hassle-free mobile payments anytime, anywhere.',
        tags: ['App Development', 'App UI', 'UI/UX']
      },
      {
        id: '02',
        title: 'SwiftPay - Secure and fast mobile payment app',
        description: 'Fast, secure, and hassle-free mobile payments anytime, anywhere.',
        tags: ['App Development', 'App UI', 'UI/UX']
      },
      {
        id: '03',
        title: 'SwiftPay - Secure and fast mobile payment app',
        description: 'Fast, secure, and hassle-free mobile payments anytime, anywhere.',
        tags: ['App Development', 'App UI', 'UI/UX']
      },
      {
        id: '04',
        title: 'SwiftPay - Secure and fast mobile payment app',
        description: 'Fast, secure, and hassle-free mobile payments anytime, anywhere.',
        tags: ['App Development', 'App UI', 'UI/UX']
      },
      {
        id: '05',
        title: 'SwiftPay - Secure and fast mobile payment app',
        description: 'Fast, secure, and hassle-free mobile payments anytime, anywhere.',
        tags: ['App Development', 'App UI', 'UI/UX']
      },
    ];
    return (
    <div className="container mx-auto py-16 relative">
      <div className="flex flex-col items-center gap-3 text-center">
        <span className="bg-[#eef1ff] text-[#333] px-4 py-1 rounded text-sm font-medium">
          Read Their Experiences
        </span>
        <h2 className="text-2xl md:text-3xl font-semibold">
          Client Reviews – Hear It in Their Words
        </h2>
      </div>

      <div className="mt-10 relative">
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            0: { slidesPerView: 1.3 },
            1200: { slidesPerView: 2 }
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }}
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <div className="bg-[#2E71FE0A] border border-[#2E71FE1F] rounded-lg p-5 md:p-6 flex flex-col gap-4">
                <div className="flex items-center gap-4 flex-wrap">
                  <span className="bg-white text-[#2A2E35] font-bold text-xl md:text-2xl w-[72px] h-[72px] flex items-center justify-center rounded-lg">
                    {review.id}
                  </span>
                  <div className="flex flex-col justify-center gap-1">
                    <h3 className="text-base md:text-lg font-bold">{review.title}</h3>
                    <p className="text-sm text-[#283042]">{review.description}</p>
                  </div>
                </div>
                <div>
                  <Image src={img} alt="review image" className="w-full h-auto rounded-lg" />
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {review.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="border border-[#2A2E35] text-sm font-medium px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <button className="swiper-button-prev hidden md:flex items-center justify-center absolute top-1/2 !left-[-60px] transform -translate-y-1/2 !w-10 !h-10 p-2 border border-black !text-black rounded-full z-10 after:!content-['']">
          <FiArrowLeft size={16} />
        </button>
        <button className="swiper-button-next hidden md:flex items-center justify-center absolute top-1/2 !right-[-60px] transform -translate-y-1/2 !w-10 !h-10 p-2 border border-black !text-black rounded-full z-10 after:!content-['']">
          <FiArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default ClientProductReviews;
