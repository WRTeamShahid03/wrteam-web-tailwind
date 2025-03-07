'use client'
import React from 'react'
import bg from '../../../assets/images/homePage/TechnologyImage.webp'
import techBg from '../../../Asset/Images/TechnologyImage.webp'
import flutterTech from '../../../assets/images/homePage/FlutterColor.png'
import react from '../../../assets/images/homePage/ReactColor.png'
import vue from '../../../assets/images/homePage/VueColor.png'
import nextjs from '../../../assets/images/homePage/nextjs-icon.svg'
import laravel from '../../../assets/images/homePage/Laravel.svg'
import android from '../../../assets/images/homePage/Android.svg'
import ios from '../../../assets/images/homePage/iOS.svg'
import Image from 'next/image'
import { technologiesDataTypes } from '@/types'

const Technologies: React.FC = () => {

    const techCardData = [
        {
            id: 1,
            title: "Flutter",
            icon: flutterTech,
            alt: 'top Flutter technology software development service provider-WRTeam(bhuj)'
        },
        {
            id: 2,
            title: "React Js",
            icon: react,
            alt: 'react color experts-WRTeam(bhuj)'
        },
        {
            id: 3,
            title: "Vue JS",
            icon: vue,
            alt: 'tools like Vuecolor experts-WRTeam(bhuj)'
        },
        {
            id: 4,
            title: "Next JS",
            icon: nextjs,
            alt: 'best next.js software developer-WRTeam(bhuj)'
        },
        {
            id: 5,
            title: "Laravel",
            icon: laravel,
            alt: 'best Laravel technology software developer-WRTeam(bhuj)'
        },
        {
            id: 6,
            title: "Android",
            icon: android,
            alt: 'best Android app development service provider-WRTeam(bhuj)'
        },
        {
            id: 7,
            title: "iOS",
            icon: ios,
            alt: 'best IOS app development service provider-WRTEam (Bhuj)'
        },

    ];

    return (
        <section className='commonBg pt-2 pb-12 md:pb-16 lg:pb-20'>
            <div className="container commonMT space-y-8 md:space-y-12">
                <div className='grid lg:grid-cols-2 gap-6'>
                    <div className='flexColCenter !items-start commonTextGap'>
                        <span className='sectionTag'>Technology <span>We Use</span></span>
                        <h3 className='sectionTitle'>Our Developers Have a <span>Strong Grip</span> on Advanced <span>Technologies</span> to Enhance Your Website & App.</h3>
                    </div>
                    <div className='flexCenter'>
                        <p className='sectionPara'>We are a team of web developers specialized in front-end, back-end, & full stack development using advanced technologies like laravel, Vue JS, Next JS, etc. Our team also has app developers specialized in making Android, iOS, & flutter applications.</p>
                    </div>
                </div>
                <div className='rounded-[30px]' style={{ backgroundImage: `url(${bg.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div className='secondaryBg p-6 md:p-14 shadow-[0_16px_36px_#2435525c] opacity-[0.9] rounded-[30px]'>
                        <div className='grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-8 md:gap-12 justify-self-center'>
                            {
                                techCardData.map((data: technologiesDataTypes) => {
                                    return <div className='flexColCenter gap-4 md:gap-6' key={data.id}>
                                        <div className='bg-white group transition-all duration-300 hover:primaryBg flexCenter rounded-[15px] p-[30px] relative z-[1] after:contents-[""] after:absolute after:-bottom-[70px] md:after:-bottom-[100px] after:left-0 after:right-0 after:bg-white after:h-[70px] md:after:h-[100px] after:w-[6px] after:m-auto'>
                                            <Image src={data?.icon} width={0} height={0} loading="lazy" alt={data.alt} className='w-full h-fw-full transition-all duration-300 group-hover:filter group-hover:brightness-0 group-hover:invert-[1]' />
                                        </div>
                                        <span className='bg-black border-[5px] border-white rounded-full p-1 text-center flexCenter font-[900] text-4xl mt-[50px] md:mt-[74px]'></span>
                                        <span className='text-white font-[600] text-lg'>{data.title}</span>
                                    </div>
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Technologies