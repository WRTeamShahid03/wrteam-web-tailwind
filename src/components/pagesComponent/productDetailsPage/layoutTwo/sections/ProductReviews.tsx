'use client'
import Image from 'next/image'
import React, { useCallback, useRef } from 'react'
import envatoIcon from '../../../../../assets/images/envatoTestimonial.png'
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from 'react-icons/fa';
import { FaRegCheckCircle } from "react-icons/fa";
// Import Swiper React components
import { Swiper, SwiperSlide, SwiperRef } from 'swiper/react';
import { ProductTestimonial } from '@/types';

interface ProductReviewsProps {
    testimonials: ProductTestimonial[];
    productName: string;
}

const ProductReviews: React.FC<ProductReviewsProps> = ({ testimonials, productName }): React.ReactNode => {

    const sliderRef = useRef<SwiperRef | null>(null);

    const handlePrev = useCallback((): void => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback((): void => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);

    return (
        <section className='commonMT productDetailPrimaryBg py-8 md:py-12 lg:py-20'>
            <div className="container">
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                    <div className='bg-white p-3 md:p-12 rounded-[8px] relative'>
                        <Swiper
                            ref={sliderRef}
                            slidesPerView={1}
                            loop={true}
                            spaceBetween={20}
                            freeMode={true}
                            className='layoutTwoTestimonials'
                        >
                            {testimonials.map((testimonial: ProductTestimonial) => (
                                <SwiperSlide key={testimonial.id}>
                                    <div className='flex flex-col gap-8 relative max-575:gap-4'>
                                        <div className='flex gap-3 items-center border-b-2 border-[#6c757d1f] max-575:pb-4 pb-8'>
                                            <div>
                                                <Image src={envatoIcon} height={41} width={41} alt='envatoIcon' className='max-575:w-[30px] max-575:h-[30px]'/>
                                            </div>
                                            <div className='flex flex-col gap-2'>
                                                <span className='font-[600]'>{testimonial.name}</span>
                                                <span className='font-[600]'>{testimonial.rating_for}</span>
                                            </div>
                                        </div>
                                        <div className=''>
                                            <p className='sectionPara max-575:text-[14px]'>{testimonial.review}</p>
                                        </div>
                                    </div>

                                </SwiperSlide>
                            ))}
                        </Swiper>                        
                        <div className='flex items-center max-399:gap-2 gap-4 absolute max-575:top-[10px] between-576-767:top-[10px] top-[30px] max-399:right-0 right-[30px] bg-white z-[1] p-5'>
                            <span className='productDetailPrimaryBg productPrimaryColor max-575:p-2 p-4 rounded-full after:!z-[1] overflow-hidden cursor-pointer' onClick={handlePrev}>
                                <FaChevronLeft />
                            </span>
                            <span className='productDetailPrimaryBg productPrimaryColor max-575:p-2 p-4 rounded-full after:!z-[1] overflow-hidden cursor-pointer' onClick={handleNext}>
                                <FaChevronRight />
                            </span>
                        </div>
                    </div>
                    <div className='flexColCenter commonTextGap !items-start'>
                        <h4 className='sectionTitle'>Our Product Has Received Rave Reviews.</h4>
                        <p className='sectionPara'>
                            Discover what our customers are saying about their experience with our {productName}
                        </p>
                        <p className='text-black font-[600]'>Join thousands of satisfied users who trust us</p>
                        <div className='flex flex-col gap-3'>
                            <div className='flex items-center gap-4'>
                                <FaRegCheckCircle className='productPrimaryColor' size={18} />
                                <span className='sectionPara'>Cross Platform Compatibility</span>
                            </div>
                            <div className='flex items-center gap-4'>
                                <FaRegCheckCircle className='productPrimaryColor' size={18} />
                                <span className='sectionPara'>Reliable Performance</span>
                            </div>
                            <div className='flex items-center gap-4'>
                                <FaRegCheckCircle className='productPrimaryColor' size={18} />
                                <span className='sectionPara'>Data Security Fortress</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default ProductReviews