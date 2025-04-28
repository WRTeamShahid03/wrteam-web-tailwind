'use client'
import { workChainDataTypes } from '@/types'
import Image from 'next/image'
import React, { useEffect, useState, useRef } from 'react'
import { BsArrowDownCircle, BsArrowUpCircle } from 'react-icons/bs'


import circle from '../../../assets/images/services/icons/Shape_1.svg'
import dottsShape from '../../../assets/images/services/icons/Shape_2.png'
import crossShape from '../../../assets/images/services/icons/Shape_3.png'
import triangle from '../../../assets/images/services/icons/Shape_4.svg'


interface dataProps {
    data: workChainDataTypes[]
}

const ServicesSwiper: React.FC<dataProps> = ({ data }) => {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    const mainSlideRef = useRef<HTMLDivElement>(null);
    const sidebarRef = useRef<HTMLDivElement>(null);

    const slideHeight = 500; // Change this to match your slide height

    const changeSlide = (direction: 'up' | 'down') => {
        setActiveSlideIndex(prevIndex => {
            let newIndex = prevIndex;

            if (direction === 'up') {
                newIndex++;
                if (newIndex >= data.length) {
                    newIndex = 0;
                }
            } else if (direction === 'down') {
                newIndex--;
                if (newIndex < 0) {
                    newIndex = data.length - 1;
                }
            }

            return newIndex;
        });
    };

    useEffect(() => {
        // Apply transform based on activeSlideIndex
        if (mainSlideRef.current && sidebarRef.current) {
            const translateYValue = activeSlideIndex * slideHeight;
            mainSlideRef.current.style.transform = `translateY(-${translateYValue}px)`;
            sidebarRef.current.style.transform = `translateY(${-translateYValue}px)`;
        }
    }, [activeSlideIndex]);

    return (
        <section className="mt-24 relative">
            <div className="leftDivshapes hidden lg:block">
                <Image height={0} width={0} loading="lazy" src={crossShape} alt="crossShape" className='crossShape absolute -left-[70px] top-[30%] w-[35px]' />
                <Image height={0} width={0} loading="lazy" src={dottsShape} alt="dottsShape" className='dottsShape absolute -left-[10%] -bottom-[8%] w-[110px]' />
            </div>
            <div className="rightDivshapes hidden lg:block">
                <Image height={0} width={0} loading="lazy" src={circle} alt="circle" className='circleShape absolute -top-[4%] right-[6%] w-[110px]' />
                <Image height={0} width={0} loading="lazy" src={triangle} alt="triangle" className='triangleShape absolute -bottom-[10%] right-[10%] w-[40px]' />
            </div>
            <div className="relative overflow-hidden w-full h-[500px] rounded-2xl">
                <div ref={sidebarRef} className="h-full lg:w-1/2 absolute top-0 left-0 transition-transform duration-500 ease-in-out">
                    {data.map((ele) => (
                        <div
                            className="h-full w-full flex flex-col items-center justify-center text-black px-2 md:px-16 bg-white"
                            key={ele.id}
                        >
                            <h3 className="font-extrabold text-xl md:text-3xl text-center text-[#212121] mb-5 -mt-8">{ele.title}</h3>
                            <p className="text-center text-sm md:text-base leading-6 md:leading-8 text-[#212121] font-semibold">{ele.desc}</p>
                        </div>
                    ))}
                </div>
                <div ref={mainSlideRef} className="h-full absolute top-0 left-1/2  hidden lg:block w-1/2 transition-transform duration-500 ease-in-out">
                    {data.map((ele) => (
                        <div className="bg-no-repeat bg-cover h-full w-full" key={ele.id}>
                            <Image height={0} width={0} loading="lazy" src={ele.img} alt={ele.alt} className='h-full' />
                        </div>
                    ))}
                </div>
                <div className="controls max-1199:flexCenter max-1199:bottom-0 max-1199:absolute max-1199:right-0 max-1199:left-0">
                    <button
                        className="lg:absolute lg:left-1/2 max-1199:-top-12 top-1/2 z-[1] primaryBg transform lg:-translate-x-full rounded-l text-white p-4 border-none cursor-pointer hover:text-gray-200 focus:outline-none"
                        onClick={() => changeSlide('down')}
                    >
                        <BsArrowDownCircle className="text-lg" />
                    </button>
                    <button
                        className="lg:absolute lg:left-1/2 max-1199:-top-12 top-1/2 z-[1] primaryBg transform lg:-translate-y-full rounded-r text-white p-4 border-none cursor-pointer hover:text-gray-200 focus:outline-none"
                        onClick={() => changeSlide('up')}
                    >
                        <BsArrowUpCircle className="text-lg" />
                    </button>
                </div>
            </div>
        </section>
    )
}

export default ServicesSwiper