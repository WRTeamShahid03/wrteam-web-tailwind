'use client'
import React, { useCallback, useRef, useState } from 'react'
import bgLines from '../../../../../assets/images/productDetailPage/layoutTwo/bgLines.svg'
import Image from 'next/image'
import { Swiper, SwiperSlide, SwiperRef } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'
import { PanelWiseFeatureSection, Tab } from '@/types';
import leftShape from '../../../../../assets/images/productDetailPage/layoutTwo/leftShape.png'
import rightShape from '../../../../../assets/images/productDetailPage/layoutTwo/rightShape.png'
import ReadMoreModal from '@/components/commonComponents/ReadMoreModal';


const InnerPagesSect: React.FC<PanelWiseFeatureSection> = ({ title, description, tabs, layoutOne }) => {
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
        <section className={`py-12 lg:py-20  relative after:content-[""] after:absolute after:h-full after:w-full ${layoutOne ? '!commonBgAndShape' : 'after:productSecondaryBg'}  after:top-0 after:left-0 after:-z-[1] after:opacity-90`} style={{ background: `${!layoutOne && `url(${bgLines.src})`}`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
            <div className="container space-y-6 md:space-y-8 lg:space-y-12">
                <div className='flexColCenter commonTextGap md:w-[60%] lg:w-[50%] m-auto text-center'>
                    <h3 className='sectionTitle text-white'>{title}</h3>
                    <p className='sectionPara !text-[#f1f5f9]' dangerouslySetInnerHTML={{ __html: description || '' }} />

                </div>
                <div className='w-full'>

                    <div className='flex overflow-x-auto md:overflow-x-visible md:flex-wrap gap-3 pb-2 md:pb-0 scrollbar-hide justify-center max-1199:justify-start'>
                        {tabs.map((tab: Tab, index: number): React.ReactNode => {
                            return (
                                <button key={index} className={`px-4 py-3 rounded-md text-sm font-medium whitespace-nowrap flex-shrink-0 ${activeTab.tab_name === tab.tab_name
                                        ? "bg-white text-black"
                                        : "border-2 border-white bg-transparent text-white"
                                    }`}
                                    onClick={() => handleTabClick(tab)}>
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
                                <div className='flexColCenter gap-4 sm:gap-6 !items-start bg-white rounded-[8px] p-5'>
                                    <Image
                                        src={detail.image_url}
                                        width={259}
                                        height={160}
                                        sizes="(max-width: 768px) 100vw, 259px"
                                        alt='feature-img'
                                        className='w-full h-auto rounded-[8px] border-2 border-[#64748b] object-cover'
                                    />

                                    <div className='flexColCenter gap-2 !items-start !justify-start max-399:h-[144px] between-400-575:h-[140px]'>
                                        <span className='font-bold'>{detail.title}</span>
                                        <p className='sectionPara !font-medium !text-sm max-575:hidden between-400-575:h-[110px] between-576-767:h-[86px] between-768-991:h-[66px] between-992-1199:h-[104px] between-1200-1399:h-[86px] h-[72px]' >
                                            {
                                                detail.short_description?.length > 196 ?
                                                    <>
                                                        `${detail?.short_description?.slice(0, 196)}...
                                                        {
                                                            detail?.short_description.length > 196 &&
                                                            <ReadMoreModal desc={detail?.short_description} />
                                                        }
                                                    </>
                                                    :
                                                    detail.short_description
                                            }
                                        </p>
                                        <p className='sectionPara !font-medium !text-sm max-[356px]:h-[144px] max-399:h-[130px] max-575:block hidden' >
                                            {
                                                detail.short_description?.length > 100 ?
                                                    <>
                                                        `${detail?.short_description?.slice(0, 100)}...
                                                        {
                                                            detail?.short_description.length > 100 &&
                                                            <ReadMoreModal desc={detail?.short_description} />
                                                        }
                                                    </>
                                                    :
                                                    detail.short_description
                                            }
                                        </p>
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

            {
                layoutOne &&
                <div className='hidden lg:block'>
                    <div className="absolute top-0 left-0">
                        <Image src={leftShape} alt='leftShape' height={0} width={0} className='w-full h-full' />
                    </div>
                    <div className="absolute -bottom-[30px] right-0">
                        <Image src={rightShape} alt='rightShape' height={0} width={0} className='w-full h-full' />
                    </div>
                </div>
            }

        </section>
    )
}

export default InnerPagesSect