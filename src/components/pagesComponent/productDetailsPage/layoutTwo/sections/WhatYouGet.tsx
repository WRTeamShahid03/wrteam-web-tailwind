'use client'
import React, { useRef, useCallback } from 'react'
import MarqueSect from './MarqueSect'
import Image from 'next/image'
import playIcon from '../../../../../assets/images/portfolio/playstore.svg'
import Link from 'next/link'
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

const WhatYouGet = () => {

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

        }
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
        <section className='relative -mt-60 bg-white pt-48'>
            <MarqueSect />

            <div className='container space-y-8 md:space-y-12 lg:space-y-16'>

                <div className='flexColCenter commonTextGap lg:w-[50%] mx-auto text-center commonMT'>
                    <h2 className='sectionTitle !font-bold'>What Will You Get With eClassify?</h2>
                    <p className='sectionPara'>With eClassify, you get everything needed to build a classified ads website and app. It comes with full flutter & laravel source code for the app, website, and admin panel, ensuring you can get started quickly and efficiently.</p>
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
                            renderBullet: renderBullet
                        }}
                        navigation
                        className='comesWithSwiper'
                        breakpoints={breakpoints}
                    >
                        <SwiperSlide>

                            <div className="flexColCenter commonTextGap text-center border-2 border-[#d8e0e6] rounded-[8px] py-4 px-4 md:py-8 md:px-6">
                                <div className='p-3 md:p-5 rounded-full commonBg flexCenter'>
                                    <Image src={playIcon} height={0} width={0} alt='icon' className='w-[25px] md:w-[35px] h-[25px] md:h-[35px]' />
                                </div>
                                <span className='md:text-lg lg:text-xl font-bold'>Customer App (Android)</span>
                                <p className='text-sm md:text-base text-[#5c788c] font-medium'>Classified marketplace for customers on Android</p>
                                <Link href={''} title='Explore Demo' className='productPrimaryColor flexCenter gap-1 font-medium'>
                                    <span>Explore Demo</span>
                                    <BiRightArrowAlt />
                                </Link>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>

                            <div className="flexColCenter commonTextGap text-center border-2 border-[#d8e0e6] rounded-[8px] py-4 px-4 md:py-8 md:px-6">
                                <div className='p-3 md:p-5 rounded-full commonBg flexCenter'>
                                    <Image src={playIcon} height={0} width={0} alt='icon' className='w-[25px] md:w-[35px] h-[25px] md:h-[35px]' />
                                </div>
                                <span className='md:text-lg lg:text-xl font-bold'>Customer App (Android)</span>
                                <p className='text-sm md:text-base text-[#5c788c] font-medium'>Classified marketplace for customers on Android</p>
                                <Link href={''} title='Explore Demo' className='productPrimaryColor flexCenter gap-1 font-medium'>
                                    <span>Explore Demo</span>
                                    <BiRightArrowAlt />
                                </Link>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>

                            <div className="flexColCenter commonTextGap text-center border-2 border-[#d8e0e6] rounded-[8px] py-4 px-4 md:py-8 md:px-6">
                                <div className='p-3 md:p-5 rounded-full commonBg flexCenter'>
                                    <Image src={playIcon} height={0} width={0} alt='icon' className='w-[25px] md:w-[35px] h-[25px] md:h-[35px]' />
                                </div>
                                <span className='md:text-lg lg:text-xl font-bold'>Customer App (Android)</span>
                                <p className='text-sm md:text-base text-[#5c788c] font-medium'>Classified marketplace for customers on Android</p>
                                <Link href={''} title='Explore Demo' className='productPrimaryColor flexCenter gap-1 font-medium'>
                                    <span>Explore Demo</span>
                                    <BiRightArrowAlt />
                                </Link>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>

                            <div className="flexColCenter commonTextGap text-center border-2 border-[#d8e0e6] rounded-[8px] py-4 px-4 md:py-8 md:px-6">
                                <div className='p-3 md:p-5 rounded-full commonBg flexCenter'>
                                    <Image src={playIcon} height={0} width={0} alt='icon' className='w-[25px] md:w-[35px] h-[25px] md:h-[35px]' />
                                </div>
                                <span className='md:text-lg lg:text-xl font-bold'>Customer App (Android)</span>
                                <p className='text-sm md:text-base text-[#5c788c] font-medium'>Classified marketplace for customers on Android</p>
                                <Link href={''} title='Explore Demo' className='productPrimaryColor flexCenter gap-1 font-medium'>
                                    <span>Explore Demo</span>
                                    <BiRightArrowAlt />
                                </Link>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>

                            <div className="flexColCenter commonTextGap text-center border-2 border-[#d8e0e6] rounded-[8px] py-4 px-4 md:py-8 md:px-6">
                                <div className='p-3 md:p-5 rounded-full commonBg flexCenter'>
                                    <Image src={playIcon} height={0} width={0} alt='icon' className='w-[25px] md:w-[35px] h-[25px] md:h-[35px]' />
                                </div>
                                <span className='md:text-lg lg:text-xl font-bold'>Customer App (Android)</span>
                                <p className='text-sm md:text-base text-[#5c788c] font-medium'>Classified marketplace for customers on Android</p>
                                <Link href={''} title='Explore Demo' className='productPrimaryColor flexCenter gap-1 font-medium'>
                                    <span>Explore Demo</span>
                                    <BiRightArrowAlt />
                                </Link>
                            </div>
                        </SwiperSlide>


                    </Swiper>
                    <div className='mt-6 sm:mt-0 flexCenter gap-4 sm:!block'>
                        <div className="primaryBg w-max h-max rounded-full relative sm:absolute top-0 bottom-0 sm:m-auto -left-4 z-[1] cursor-pointer" onClick={handlePrev} >
                            <span><GrFormPrevious color='white' size={30}/></span>
                        </div>
                        <div className="primaryBg w-max h-max rounded-full relative sm:absolute top-0 bottom-0 sm:m-auto -right-4 z-[1] cursor-pointer" onClick={handleNext}>
                            <span><GrFormNext color='white' size={30}/></span>
                        </div>
                    </div>
                </div>
            </div>

        </section >
    )
}

export default WhatYouGet