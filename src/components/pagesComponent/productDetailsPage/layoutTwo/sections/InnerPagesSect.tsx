'use client'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import bgLines from '../../../../../assets/images/productDetailPage/layoutTwo/bgLines.svg'
import Image from 'next/image'
import { Swiper, SwiperSlide, SwiperRef } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'
import { PanelWiseFeatureSection, Tab } from '@/types';


const InnerPagesSect: React.FC<PanelWiseFeatureSection> = ({ title, description, tabs,layoutOne }): React.ReactNode => {
    const [activeTab, setActiveTab] = useState<Tab>(tabs[0]);

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

    const sliderRef = useRef<SwiperRef | null>(null);

    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);

    const handleTabClick = (tab: Tab): void => {
        setActiveTab(tab);
    }


    return (
        <section className='py-12 lg:py-20  relative after:content-[""] after:absolute after:h-full after:w-full after:productSecondaryBg after:top-0 after:left-0 after:-z-[1] after:opacity-90' style={{ background: `${!layoutOne && `url(${bgLines.src})`}`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
            <div className="container space-y-6 md:space-y-8 lg:space-y-12">
                <div className='flexColCenter commonTextGap md:w-[60%] lg:w-[40%] m-auto text-center'>
                    <h2 className='sectionTitle text-white'>{title}</h2>
                    <p className='sectionPara !text-[#ffffff8f]' dangerouslySetInnerHTML={{ __html: description || '' }} />

                </div>
                <div className='w-full'>

                    <div className='flexCenter gap-6 overflow-x-scroll md:overflow-auto pb-3 md:pb-0 w-max md:w-full'>
                        {tabs.map((tab: Tab, index: number): React.ReactNode => {
                            return (
                                <button key={index} className={`p-3 border border-white rounded-[8px]  ${activeTab.tab_name === tab.tab_name ? 'bg-white text-black' : 'text-white'}`} onClick={() => handleTabClick(tab)}>
                                    {tab.tab_name}
                                </button>
                            )
                        })}
                    </div>
                </div>

                <div className='relative'>
                    <Swiper
                        ref={sliderRef}
                        slidesPerView={3}
                        loop={true}
                        spaceBetween={20}
                        freeMode={true}
                        modules={[FreeMode, Pagination]}
                        className='mt-8 md:mt-14 lg:mt-16'
                        breakpoints={breakpoints}
                    >
                        {activeTab.details.map((detail, index: number): React.ReactNode => (
                            <SwiperSlide key={index}>
                                <div className='flexColCenter gap-6 !items-start bg-white rounded-[8px] p-5'>
                                    <Image src={detail.image_url} height={0} width={0} alt='feature-img' className='h-[164px] sm:h-[286px] w-full rounded-[8px] border-2 border-[#64748b]' />
                                    <div className='flexColCenter gap-2 !items-start'>
                                        <span className='font-semibold'>{detail.title}</span>
                                        <p className='sectionPara !text-sm line-clamp-3  ' dangerouslySetInnerHTML={{ __html: detail.short_description || '' }} />
                                        <span className='productPrimaryColor font-semibold -mt-1 text-sm'>Read More</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}

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