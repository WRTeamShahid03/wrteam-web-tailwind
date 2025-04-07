'use client'
import Image from 'next/image'
import React, { useCallback, useRef } from 'react'
import img from '../../../../../assets/images/productDetailPage/layoutTwo/featureImg.svg'
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import { FeatureSection } from '@/types';

const FeatureSections: React.FC<FeatureSection> = ({ title, description, features }) => {

    const sliderRef = useRef<any>(null);

    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;

        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);


    const breakpoints = {
        0: {
            slidesPerView: 1.5,
            // spaceBetween: 40
        },
        576: {
            slidesPerView: 2.5,
            // spaceBetween: 40
        },
        768: {
            slidesPerView: 3,

        },
        992: {
            slidesPerView: 3,

        },
        1200: {
            slidesPerView: 3,
        },
        1400: {
            slidesPerView: 3.2,

        }
    };

    return (
        <div className='productPrimaryBg py-8 md:py-12 lg:py-20 commonMT'>
            <div className="container">
                <div className="grid grid-cols-12 gap-y-12 lg:gap-10">
                    <div className='col-span-12 lg:col-span-5 flexColCenter !items-start gap-8'>
                        <h1 className='sectionTitle text-white'>{title}</h1>
                        <div className='flexCenter gap-4'>
                            <div className="w-[40px] h-[40px] flexCenter rounded-full cursor-pointer bg-white" onClick={handlePrev} >
                                <span className='productPrimaryColor'><GrFormPrevious size={30} /></span>
                            </div>
                            <div className="w-[40px] h-[40px] flexCenter rounded-full cursor-pointer bg-white" onClick={handleNext}>
                                <span className='productPrimaryColor'><GrFormNext size={30} /></span>
                            </div>
                        </div>
                    </div>

                    <div className='col-span-12 lg:col-span-7'>
                        <Swiper
                            ref={sliderRef}
                            slidesPerView={4}
                            loop={true}
                            spaceBetween={20}
                            freeMode={true}
                            modules={[FreeMode]}

                            className='comesWithSwiper'
                            breakpoints={breakpoints}
                        >
                            {features.map((feature, index) => (
                                <SwiperSlide key={index}>
                                    <div className='flexColCenter commonTextGap h-[250px] max-399:p-3 p-6 rounded-[8px] overflow-hidden w-full relative after:content-[""] after:absolute after:top-0 after:left-0 after:h-full after:w-full after:productPrimaryBg after:brightness-[0.75] after:-z-[1]'>
                                        <div className='bg-white p-3 rounded-full'>
                                            <Image src={feature.image_url} height={40} width={40} alt='feature-img' />
                                        </div>
                                        <span className='font-semibold text-white'>{feature.name}</span>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default FeatureSections