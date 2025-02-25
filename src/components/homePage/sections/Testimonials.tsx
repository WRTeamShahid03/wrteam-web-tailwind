'use client'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { BiRightArrowAlt, BiLeftArrowAlt } from 'react-icons/bi';
import { LiaStarSolid } from 'react-icons/lia';
import dobleQuotes from '../../../assets/images/homePage/double-quotes-l.svg'
import Image from 'next/image';


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

const Testimonials: React.FC = () => {

    const breakpoints = {
        0: {
            slidesPerView: 1,
            // spaceBetween: 40
        },
        375: {
            slidesPerView: 1,
            // spaceBetween: 40
        },
        576: {
            slidesPerView: 1.5,
            // spaceBetween: 40
        },
        768: {
            slidesPerView: 2,

        },
        992: {
            slidesPerView: 3,

        },
        1200: {
            slidesPerView: 3,
        },
        1400: {
            slidesPerView: 3,

        }
    };


    const renderBullet = (index: number, className: string) => {
        return `<span class="${className}" style="
            outline: 1px solid #000;
            font-size: 20px;
            padding: 8px;
            border: 2px solid #fff;" id="renderBullets">
    </span>`;
    };

    const sliderRef = useRef<any>(null);

    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;

        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);

    return (
        <section className='container commonMT space-y-3 md:space-y-10'>
            <div className='flexColCenter commonTextGap text-center'>
                <span className='sectionTag'>Our <span>Testimonials</span></span>
                <h6 className="sectionTitle">Hear What Our<span> Clients </span> Have to <span>Say!</span></h6>
            </div>
            <div className='relative'>

                <Swiper
                    ref={sliderRef}
                    slidesPerView={3}
                    loop={true}
                    spaceBetween={20}
                    freeMode={true}
                    modules={[FreeMode, Pagination]}
                    pagination={{
                        clickable: true,
                        renderBullet: renderBullet
                    }}
                    navigation
                    className='[&>.swiper-wrapper]:pt-12 [&>.swiper-wrapper]:pb-16'
                    breakpoints={breakpoints}
                >
                    <SwiperSlide>
                        <div className='border border-[#545a68] rounded-[16px] relative flex flex-col gap-4 testimonialCard group transition-all duration-300 hover:primaryBg hover:!text-white group-hover:shadow-[0_26px_36px_#2e71fe42]'>
                            <div className='primaryBg absolute -top-8 rounded-full p-3 shadow-[0_20px_36px_#2e71ef5c] group-hover:bg-white group-hover:shadow-[0_20px_36px_#ffffff5c]'>
                                <Image src={dobleQuotes} height={0} width={0} alt='' className='w-[30px] h-[30px] md:w-auto md:h-auto' />
                            </div>
                            <div className='p-3 pt-14 sm:pt-16'>
                                <p className='sectionPara group-hover:!text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur qui at esse deleniti accusantium magnam consequatur magni odio sed architecto illum, fugit deserunt ad. In temporibus similique quidem officiis accusamus!</p>
                            </div>
                            <div className='p-3 flex items-center justify-between border-t border-[#545a68] flex-wrap gap-y-2'>
                                <div className='flex flex-col gap-1'>
                                    <span className='text-lg md:text-xl lg:text-2xl font-semibold'>TPM</span>
                                    <p className='sectionPara group-hover:!text-white'>For Customer Support</p>
                                </div>
                                <div className='flexCenter gap-2'>
                                    <span className='text-lg md:text-xl lg:text-2xl font-semibold'>5.0</span>
                                    <span className='-mt-2'><LiaStarSolid color='#ffa800' size={26} /></span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='border border-[#545a68] rounded-[16px] relative flex flex-col gap-4 testimonialCard group transition-all duration-300 hover:primaryBg hover:!text-white group-hover:shadow-[0_26px_36px_#2e71fe42]'>
                            <div className='primaryBg absolute -top-8 rounded-full p-3 shadow-[0_20px_36px_#2e71ef5c] group-hover:bg-white group-hover:shadow-[0_20px_36px_#ffffff5c]'>
                                <Image src={dobleQuotes} height={0} width={0} alt='' className='w-[30px] h-[30px] md:w-auto md:h-auto' />
                            </div>
                            <div className='p-3 pt-14 sm:pt-16'>
                                <p className='sectionPara group-hover:!text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur qui at esse deleniti accusantium magnam consequatur magni odio sed architecto illum, fugit deserunt ad. In temporibus similique quidem officiis accusamus!</p>
                            </div>
                            <div className='p-3 flex items-center justify-between border-t border-[#545a68] flex-wrap gap-y-2'>
                                <div className='flex flex-col gap-1'>
                                    <span className='text-lg md:text-xl lg:text-2xl font-semibold'>TPM</span>
                                    <p className='sectionPara group-hover:!text-white'>For Customer Support</p>
                                </div>
                                <div className='flexCenter gap-2'>
                                    <span className='text-lg md:text-xl lg:text-2xl font-semibold'>5.0</span>
                                    <span className='-mt-2'><LiaStarSolid color='#ffa800' size={26} /></span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='border border-[#545a68] rounded-[16px] relative flex flex-col gap-4 testimonialCard group transition-all duration-300 hover:primaryBg hover:!text-white group-hover:shadow-[0_26px_36px_#2e71fe42]'>
                            <div className='primaryBg absolute -top-8 rounded-full p-3 shadow-[0_20px_36px_#2e71ef5c] group-hover:bg-white group-hover:shadow-[0_20px_36px_#ffffff5c]'>
                                <Image src={dobleQuotes} height={0} width={0} alt='' className='w-[30px] h-[30px] md:w-auto md:h-auto' />
                            </div>
                            <div className='p-3 pt-14 sm:pt-16'>
                                <p className='sectionPara group-hover:!text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur qui at esse deleniti accusantium magnam consequatur magni odio sed architecto illum, fugit deserunt ad. In temporibus similique quidem officiis accusamus!</p>
                            </div>
                            <div className='p-3 flex items-center justify-between border-t border-[#545a68] flex-wrap gap-y-2'>
                                <div className='flex flex-col gap-1'>
                                    <span className='text-lg md:text-xl lg:text-2xl font-semibold'>TPM</span>
                                    <p className='sectionPara group-hover:!text-white'>For Customer Support</p>
                                </div>
                                <div className='flexCenter gap-2'>
                                    <span className='text-lg md:text-xl lg:text-2xl font-semibold'>5.0</span>
                                    <span className='-mt-2'><LiaStarSolid color='#ffa800' size={26} /></span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
                <div className='hidden xl:block'>
                    <div className="primaryBg w-max h-max rounded-sm absolute top-0 bottom-0 m-auto -left-14 cursor-pointer" onClick={handlePrev} >
                        <span><BiLeftArrowAlt color='white' size={42} /></span>
                    </div>
                    <div className="primaryBg w-max h-max rounded-sm absolute top-0 bottom-0 m-auto -right-14 cursor-pointer" onClick={handleNext}>
                        <span><BiRightArrowAlt color='white' size={42} /></span>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Testimonials