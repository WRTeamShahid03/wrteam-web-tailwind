'use client';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { FaPlay } from 'react-icons/fa';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const VideoTestimonials = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Martin Mathew',
      company: 'eShop Plus',
      image: 'https://img.freepik.com/free-photo/portrait-happy-male-with-broad-smile_176532-8175.jpg',
      videoUrl: '#',
    },
    {
      id: 2,
      name: 'Steve John',
      company: 'eHustle - Multi Vendor',
      image: 'https://img.freepik.com/free-photo/portrait-happy-male-with-broad-smile_176532-8175.jpg',
      videoUrl: '#',
    },
    {
      id: 3,
      name: 'Martin Mathew',
      company: 'eShop Plus',
      image: 'https://img.freepik.com/free-photo/portrait-happy-male-with-broad-smile_176532-8175.jpg',
      videoUrl: '#',
    },
    {
      id: 4,
      name: 'Martin Mathew',
      company: 'eShop Plus',
      image: 'https://img.freepik.com/free-photo/portrait-happy-male-with-broad-smile_176532-8175.jpg',
      videoUrl: '#',
    },
    {
      id: 5,
      name: 'Martin Mathew',
      company: 'eShop Plus',
      image: 'https://img.freepik.com/free-photo/portrait-happy-male-with-broad-smile_176532-8175.jpg',
      videoUrl: '#',
    },
  ];

  return (
    <div className="bg-gray-900 py-16 videoTestimonials commonMT">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 flex flex-col items-center gap-3">
          <span className="bg-gray-800 text-white py-2 px-4 rounded-md text-sm">
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
          }}
          className="testimonials-swiper [&>.swiper-wrapper]:py-5"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide
              key={testimonial.id}
              className={`testimonial-slide transition-all duration-300 ease-in-out ${
                activeSlide === index - 1 ? 'active-slide scale-105 opacity-100' : 'opacity-70 scale-95'
              }`}
            >
              <div className="rounded-[30px] overflow-hidden shadow-xl border-[5px] border-white/25 h-full m-2 transition-transform duration-300 ease-in-out">
                <div className="relative h-[600px] bg-gradient-to-b from-transparent to-black overflow-hidden md:h-[500px]">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={0}
                    height={0}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-b from-neutral-800 to-black text-white">
                    <h5 className="text-lg font-semibold">{testimonial.name}</h5>
                    <p className="text-sm">{testimonial.company}</p>
                  </div>
                  <a
                    href={testimonial.videoUrl}
                    className="absolute bottom-4 right-4 w-10 h-10 bg-white text-gray-900 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <FaPlay />
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="swiper-custom-pagination flex justify-center gap-2 mt-6"></div>
      </div>
    </div>
  );
};

export default VideoTestimonials;
