'use client'
import { workChainData } from '@/types'
import Image from 'next/image'
import React, { useEffect, useState, useRef } from 'react'
import { BsArrowDownCircle, BsArrowUpCircle } from 'react-icons/bs'

interface dataProps {
    data: workChainData[]
}

const ServicesSwiper: React.FC <dataProps> = ({ data }) => {
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
        <section className='devSlider'>
            <div className="sliderWrapper">
                <div className="sidebar" ref={sidebarRef}>
                    {data.map((ele) => (
                        <div style={{ background: "#EDEDED" }} key={ele.id}>
                            <h3 className='newSliderTitle'>{ele.title}</h3>
                            <p>{ele.desc}</p>
                        </div>
                    ))}
                </div>
                <div className="main-slide" ref={mainSlideRef}>
                    {data.map((ele) => (
                        <div key={ele.id}>
                            <Image height={0} width={0} loading="lazy" src={ele.img} alt={ele.alt} />
                        </div>
                    ))}
                </div>
                <div className="controls">
                    <button 
                        className="down-button buttn"
                        onClick={() => changeSlide('down')}
                    >
                        <BsArrowDownCircle />
                    </button>
                    <button 
                        className="up-button buttn"
                        onClick={() => changeSlide('up')}
                    >
                        <BsArrowUpCircle />
                    </button>
                </div>
            </div>
        </section>
    )
}

export default ServicesSwiper