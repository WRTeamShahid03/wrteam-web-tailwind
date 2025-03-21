'use client'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import bgLines from '../../../../../assets/images/productDetailPage/layoutTwo/bgLines.svg'
import img from '../../../../../assets/images/productDetailPage/layoutTwo/innerPage.webp'
import Image from 'next/image'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'


const InnerPagesSect: React.FC = () => {


    const breakpoints = {
        0: {
            slidesPerView: 1.2,
        },
        768: {
            slidesPerView: 1.3,

        },
        992: {
            slidesPerView: 2.7,

        },
        1200: {
            slidesPerView: 2.7,
        },
        1400: {
            slidesPerView: 2.7,

        }
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
        <section className='py-12 lg:py-20  relative affter:content-[""] after:absolute after:h-full after:w-full after:productSecondaryBg after:top-0 after:left-0 after:-z-[1] after:opacity-90' style={{ background: `url(${bgLines.src})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
            <div className="container space-y-6 md:space-y-8 lg:space-y-12">
                <div className='flexColCenter commonTextGap md:w-[60%] lg:w-[40%] m-auto text-center'>
                    <h2 className='sectionTitle text-white'>Key Features That Make eClassify Stand Out</h2>
                    <p className='sectionPara !text-[#ffffff8f]'>
                        eClassify includes everything needed to launch and manage a classified ads platform effortlessly. From secure payments to seamless setup, every feature simplifies running your buy-and-sell marketplace.
                    </p>
                </div>
                <div className='w-full'>
                <div className='flexCenter gap-6 overflow-x-scroll md:overflow-auto pb-3 md:pb-0 w-max md:w-full'>
                    <button className='p-3 border border-white rounded-[8px] text-white'>
                        Application
                    </button>
                    <button className='p-3 border border-white rounded-[8px] text-white'>
                        Application
                    </button>
                    <button className='p-3 border border-white rounded-[8px] text-white'>
                        Application
                    </button>
                </div>
                </div>

                <div className='relative'>
                    <Swiper
                        ref={sliderRef}
                        slidesPerView={3}
                        loop={true}
                        spaceBetween={20}
                        freeMode={true}
                        modules={[FreeMode]}
                        navigation
                        className='mt-8 md:mt-14 lg:mt-16'
                        breakpoints={breakpoints}
                    >
                        <SwiperSlide>
                            <div className='flexColCenter gap-6 !items-start bg-white rounded-[8px] p-5'>
                                <Image src={img} height={0} width={0} alt='feature-img' className='h-[164px] sm:h-[286px] w-full rounded-[8px] border-2 border-[#64748b]' />
                                <div className='flexColCenter gap-2 !items-start'>
                                    <span className='font-semibold'>Dynamic Home Layout</span>
                                    <p className='sectionPara !text-sm line-clamp-3'>Enhance user experience and engagement with a customizable home page featuring filter options and various layout designs.</p>
                                    <span className='productPrimaryColor font-semibold -mt-1 text-sm'>Read More</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='flexColCenter gap-6 !items-start bg-white rounded-[8px] p-5'>
                                <Image src={img} height={0} width={0} alt='feature-img' className='h-[164px] sm:h-[286px] w-full rounded-[8px] border-2 border-[#64748b]' />
                                <div className='flexColCenter gap-2 !items-start'>
                                    <span className='font-semibold'>Dynamic Home Layout</span>
                                    <p className='sectionPara !text-sm line-clamp-3'>Enhance user experience and engagement with a customizable home page featuring filter options and various layout designs.</p>
                                    <span className='productPrimaryColor font-semibold -mt-1 text-sm'>Read More</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='flexColCenter gap-6 !items-start bg-white rounded-[8px] p-5'>
                                <Image src={img} height={0} width={0} alt='feature-img' className='h-[164px] sm:h-[286px] w-full rounded-[8px] border-2 border-[#64748b]' />
                                <div className='flexColCenter gap-2 !items-start'>
                                    <span className='font-semibold'>Dynamic Home Layout</span>
                                    <p className='sectionPara !text-sm line-clamp-3'>Enhance user experience and engagement with a customizable home page featuring filter options and various layout designs.</p>
                                    <span className='productPrimaryColor font-semibold -mt-1 text-sm'>Read More</span>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>

                    <div className='hidden between-1200-1399:block xl:block'>
                        <div className="bg-[#0f172a] w-max h-max p-2 rounded-full absolute top-0 bottom-0 m-auto -left-6 z-[1] cursor-pointer" onClick={handlePrev} >
                            <span><BiLeftArrowAlt color='white' size={28} /></span>
                        </div>
                        <div className="bg-[#0f172a] w-max h-max  p-2 rounded-full absolute top-0 bottom-0 m-auto -right-6 z-[1] cursor-pointer" onClick={handleNext}>
                            <span><BiRightArrowAlt color='white' size={28} /></span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default InnerPagesSect