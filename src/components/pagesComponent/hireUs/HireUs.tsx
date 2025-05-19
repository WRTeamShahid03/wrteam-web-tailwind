'use client'
import Layout from '@/components/layout/Layout'
import Image from 'next/image'
import React from 'react'
import flutter from '@/assets/images/hireUs/FlutterColor.png'
import react from '@/assets/images/hireUs/ReactColor.png'
import vue from '@/assets/images/hireUs/VueColor.png'
import nextjs from '@/assets/images/hireUs/nextjs-icon.svg'
// import node from '@/assets/images/hireUs/NodeColor.png'
import laravel from '@/assets/images/hireUs/Laravel.svg'
import android from '@/assets/images/hireUs/Android.svg'
import ios from '@/assets/images/hireUs/iOS.svg'
import HireUsForm from './HireUsForm'

import technicalExperties from '@/assets/images/hireUs/Technical Expertise.webp'
import QualityAssurance from "@/assets/images/hireUs/Quality Assurance.webp"
import CustomerSupport from '@/assets/images/hireUs/Excellent Customer Support.webp'
import ClientSatisfaction from '@/assets/images/hireUs/Client Satisfaction.webp'

import creativity from '@/assets/images/hireUs/Creativity.png'
import trust from '@/assets/images/hireUs/Trust.png'
import quality from '@/assets/images/hireUs/Quality.png'
import teamWork from '@/assets/images/hireUs/Team Work.png'
import { hireUsTechsDataTypes, servicesProcessDataTypes } from '@/types'



const HireUs = () => {

    const techs = [
        {
            id: 0,
            img: flutter,
            title: 'Flutter',
            bg: '#3ac1f229',
            alt: 'best flutter developers in Gujrat-WRTeam gujrat india'
        },
        {
            id: 1,
            img: react,
            title: 'React Js',
            bg: '#34beea29',
            alt: 'best react.js service available at WRTeam bhuj gujrat'
        },
        {
            id: 2,
            img: vue,
            title: 'Vue Js',
            bg: '#45ab6f29',
            alt: 'Vue service is available at WRTeam Bhuj'
        },
        {
            id: 3,
            img: nextjs,
            title: 'Next Js',
            bg: '#28304229',
            alt: 'best next.js service provider in gujrat India'
        },
        {
            id: 4,
            img: laravel,
            title: 'Laravel',
            bg: '#e71d1f29',
            alt: 'Top Laravel developers & experts at WRTeam bhuj gujrat'
        },
        {
            id: 5,
            img: android,
            title: 'Android',
            bg: '#84b92b29',
            alt: 'best android app development service provider in India-WRTeam'
        },
        {
            id: 6,
            img: ios,
            title: 'iOS',
            bg: '#28304229',
            alt: 'best IOS app development service provider in India-WRTeam'
        },
    ];

    const whyHireusData = [
        {
            id: 0,
            img: technicalExperties,
            title: "Technical Expertise",
            desc: "Our experienced developers ensure innovative app & website crafting.",
        },
        {
            id: 1,
            img: QualityAssurance,
            title: "Quality Assurance",
            desc: "Thorough testing guarantees a seamless, glitch-free, responsive app & website.",
        },
        {
            id: 2,
            img: CustomerSupport,
            title: "Customer Support",
            desc: "We're about relationships. Our dedicated support team is here for you.",
        },
        {
            id: 3,
            img: ClientSatisfaction,
            title: "Client Satisfaction",
            desc: "Our track record reflects our commitment to exceed expectations.",
        },
    ];

    const fourStepsData = [
        {
            id: 0,
            img: creativity,
            title: "Creativity",
            desc: "Creativity is directly related to Revolutionizing your Great Idea to Big Thing! Thinking creatively opens up the possibilities.",
        },
        {
            id: 1,
            img: trust,
            title: "Trust",
            desc: "Trust is not only related to giving a 100% refund policy, it's all about an effort to make it happen.",
        },
        {
            id: 2,
            img: quality,
            title: "Quality",
            desc: "Quality is the only thing that the team is not ready to compromise with, We believe delivering in high quality.",
        },
        {
            id: 3,
            img: teamWork,
            title: "Team Work",
            desc: "Our creative team is our power. WRTeam means we work together to bring real value through our projects.",
        },
    ];



    return (
        <Layout>
            <section className='commonBg py-8 md:py-16'>
                <div className="container space-y-6 md:space-y-8 lg:space-y-12">
                    <div className="flexColCenter commonTextGap text-center">
                        <span className='sectionTag'><span>Hire</span> Us</span>
                        <h1 className='sectionTitle'>Need <span>Assistance</span> With Your Project?</h1>
                    </div>
                    <div className="bg-white rounded-[16px] lg:w-[80%] mx-auto p-4 md:p-16 space-y-8 lg:space-y-12">
                        <div className='md:w-[70%] lg:w-[50%] m-auto text-center'>
                            <p className='sectionPara'>We stay on top of the latest tech advancements to ensure your project is completed quickly and uses the best of the Apps & Web solutions and frameworks suitable for your project.</p>
                        </div>

                        <div className='grid lg:grid-cols-2 gap-y-12'>
                            <div className='grid grid-cols-2 gap-y-10'>
                                {
                                    techs.map((ele: hireUsTechsDataTypes) => {
                                        return <div className='flexCenter !justify-start gap-3' key={ele.id}>
                                            <div className={`rounded-[8px] p-1.5 sm:p-3`} style={{ background: ele.bg }}>
                                                <Image src={ele.img} height={0} width={0} loading='lazy' alt={ele.alt} className='w-[30px] sm:w-[60px] h-auto' />
                                            </div>
                                            <span className='sm:text-lg font-semibold'>{ele.title}</span>
                                        </div>
                                    })
                                }
                            </div>

                            <div>
                                <HireUsForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='container commonMT space-y-6 lg:space-y-12'>
                <div className='flexColCenter commonTextGap text-center m-auto lg:w-[60%]'>
                    <span className='sectionTag'>Why <span>Hire Us</span></span>
                    <h2 className='sectionTitle'>We Are <span>Experts</span> Dedicated to Making Your Concept <span>Come True!</span></h2>
                </div>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 lg:gap-6'>
                    {
                        whyHireusData.map((element: servicesProcessDataTypes) => {
                            return <div className="flexColCenter p-8 text-center gap-4" key={element.id}>
                                <div>
                                    <Image src={element.img} height={0} width={0} alt={element.title} loading='lazy' className='w-full h-auto' />
                                </div>
                                <h3 className='font-extrabold text-xl md:text-2xl'>{element.title}</h3>
                                <p className='textSecondary'>{element.desc}</p>
                            </div>
                        })
                    }

                </div>
            </section>

            <section className='container commonMT space-y-6 lg:space-y-12'>
                <div className='flexColCenter commonTextGap text-center m-auto lg:w-[60%]'>
                    <h4 className='sectionTitle'>4 Steps to <span>Success</span> With <span>WRTeam</span></h4>
                </div>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 lg:gap-6 relative after:content-[""] after:absolute after: left-0 after:top-[88px] after:w-full after:border-[#006eeb75] lg:after:border-b after:border-dashed'>
                    <span className='hidden lg:block z-[1] bg-white border-[#2e71fe] border-[4px] rounded-full p-1 w-[12px]  h-[12px] absolute top-20 left-0'></span>
                    <span className='hidden lg:block z-[1] bg-white border-[#2e71fe] border-[4px] rounded-full p-1 w-[12px]  h-[12px] absolute top-20 right-0'></span>
                    {
                        fourStepsData.map((element: servicesProcessDataTypes) => {
                            return <div className="flexColCenter p-6 text-center gap-4 relative z-[1]" key={element.id}>
                                <div>
                                    <Image src={element.img} height={0} width={0} alt={element.title} loading='lazy' className='w-full h-auto' />
                                </div>
                                <h5 className='font-extrabold text-xl md:text-2xl primaryColor'>{element.title}</h5>
                                <p className='textSecondary'>{element.desc}</p>
                            </div>
                        })
                    }

                </div>
            </section>

        </Layout>
    )
}

export default HireUs