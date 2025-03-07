'use client'
import Breadcrumb from '@/components/commonComponents/Breadcrumb'
import Layout from '@/components/layout/Layout'
import Image from 'next/image'
import React from 'react'
import mainImg from '../../../assets/images/services/digital-marketing/Digital_Marketing Service.webp'

// swiper Imgs 
import seo from '../../../assets/images/services/digital-marketing/SEO.webp'
import smm from '../../../assets/images/services/digital-marketing/SMM.webp'
import emailMarketing from '../../../assets/images/services/digital-marketing/Email Marketing.webp'
import localMarketing from '../../../assets/images/services/digital-marketing/Local Marketing.webp'

import timelyUpdadtes from '../../../assets/images/services/icons/Benefits/Timely Updates-.png'
import quality from '../../../assets/images/services/icons/Benefits/Testing & Quality Assurance.png'
import support from '../../../assets/images/services/icons/Benefits/Ongoing Support.png'
import eliteAuthor from '../../../assets/images/services/icons/Benefits/Elite Author on Codecanyon – 1.png'
import { servicesBenefitsDataTypes, servicesBuildDataTypes } from '@/types'

import ProcessSect from './ProcessSect'
import processImg from '../../../assets/images/services/digital-marketing/13-10-05-Our Work Process Digital Marketing  service.webp'
import processImg2 from '../../../assets/images/services/digital-marketing/13-10-05-Our Work Process_Digital Marketing_service copy.webp'
import processIcon1 from '../../../assets/images/services/icons/Process/Development.png'
import processIcon2 from '../../../assets/images/services/icons/Process/Maintenance & Support.png'
import processIcon3 from '../../../assets/images/services/icons/Process/Design & Planning.png'
import processIcon4 from '../../../assets/images/services/icons/Process/Analysis of Demands.png'
import processIcon5 from '../../../assets/images/services/icons/Process/Testing & Quality Assurance.png'
import processIcon6 from '../../../assets/images/services/icons/Process/Deployment.png'
import arrowImg from '../../../assets/images/services/ArrowLeftDown.svg'

import buildBg from '../../../assets/images/contactFormBg.webp'
import emailmarIcon from '../../../assets/images/services/digital-marketing/icon/email_marketing.png'
import emailmarIconHover from '../../../assets/images/services/digital-marketing/icon/email_marketingHover.png'
import fbAdds from '../../../assets/images/services/digital-marketing/icon/FB_ADD.png'
import fbAddsHover from '../../../assets/images/services/digital-marketing/icon/FB_ADDHover.png'
import googleAdds from '../../../assets/images/services/digital-marketing/icon/google_ads.png'
import googleAddsHover from '../../../assets/images/services/digital-marketing/icon/google_adsHover.png'
import googleAna from '../../../assets/images/services/digital-marketing/icon/Google_Analytics.png'
import googleAnaHover from '../../../assets/images/services/digital-marketing/icon/Google_AnalyticsHover.png'
import seoIcon from '../../../assets/images/services/digital-marketing/icon/seo.png'
import seoIconHover from '../../../assets/images/services/digital-marketing/icon/seoHover.png'
import seoYT from '../../../assets/images/services/digital-marketing/icon/YT_seo.png'
import seoYTHover from '../../../assets/images/services/digital-marketing/icon/YT_seoHover.png'
import ServicesSwiper from './ServicesSwiper'

const DigitalMarketing: React.FC = () => {

    const newSwiperData = [
        {
            id: 0,
            title: 'SEO (Search Engine Optimization)',
            desc: `Avail SEO service from top digital marketers with expertise in generating organic results, & specialization in making & implementing strategies for technical SEO, off-page SEO, local SEO, etc. `,
            img: seo,
            alt: 'most effective SEO strategies  and services with experts of WRTeam kutch-gujrat'
        },
        {
            id: 1,
            title: 'SMM (Social Media Marketing)',
            desc: `Social media plays a crucial role in making the brand identity, we are a creative team that helps you create your brand’s unique identity. Our team comprises digital marketers with specialized expertise in various social media platforms like Facebook, Instagram, and YouTube. `,
            img: smm,
            alt: 'best social media management service provider WRTeam bhuj'
        },
        {
            id: 2,
            title: 'Email Marketing',
            desc: 'Best email marketing service provider! We use tested strategies that help your business utilize its full potential. Our digital marketers ensure your emails reach the right audience, boosting customer engagement and conversions.',
            img: emailMarketing,
            alt: 'E-mail marketing services by experts are also available at WRTeam  bhuj Gujrat'
        },
        {
            id: 3,
            title: 'Local Marketing',
            desc: 'WRTeam helps businesses increase their brand exposure and connect with their local customers. Our special approaches to local SEO and local ads help businesses to reach new customers and increase foot traffic to your actual locations.',
            img: localMarketing,
            alt: 'get a local SEO service & local marketing with expert marketers of WRTeam gujrat india'
        },
    ];


    const benefitsCardData = [
        {
            id: 0,
            icon: timelyUpdadtes,
            title: 'Global Reach'

        },
        {
            id: 1,
            icon: quality,
            title: 'Cost Effective'

        },
        {
            id: 2,
            icon: support,
            title: 'Measurable Results'

        },
        {
            id: 3,
            icon: eliteAuthor,
            title: 'Targeted Advertising'

        },
    ];

    const processCardData = [
        {
            id: 0,
            icon: processIcon1,
            title: 'Market Research',
            desc: 'Our experts will do in-depth analyses of your business & align it with current market trends and demands.'

        },
        {
            id: 1,
            icon: processIcon2,
            title: 'Competitor Analysis',
            desc: 'We analyze your competitor’s strategies, strengths & weaknesses to design the best strategy for you.'

        },
        {
            id: 2,
            icon: processIcon3,
            title: 'Strategy Building',
            desc: 'We customize a perfect strategy for your business by considering the targeted audience, market trends & competition.'

        },
        {
            id: 3,
            icon: processIcon4,
            title: 'Strategy Implementation',
            desc: 'Our digital marketing experts ensure 360° strategy implementation to get the best results from all directions.'

        },
        {
            id: 4,
            icon: processIcon5,
            title: 'Performance Monitoring',
            desc: 'Our experts regularly go through the performance of implemented strategies and make changes for the best outcomes.'

        },
        {
            id: 5,
            icon: processIcon6,
            title: 'Reporting',
            desc: 'We provide transparent reports to keep you informed about your campaign impact and areas for improvement'

        },
    ];

    const buildCardData = [
        {
            id: 0,
            icon: emailmarIcon,
            hoverIcon: emailmarIconHover,
            title: 'Email Marketing',
            alt: 'bulk email marketing service provider-WRTeam bhuj gujrat'

        },
        {
            id: 1,
            icon: fbAdds,
            hoverIcon: fbAddsHover,
            title: 'Facebook Ads',
            alt: 'Facebook marketing and handling service provider-WRTeam bhuj'

        },
        {
            id: 2,
            icon: googleAdds,
            hoverIcon: googleAddsHover,
            title: 'Google Ads',
            alt: 'best google ads service provider in Gujrat-WRTeam bhuj kutch'

        },
        {
            id: 3,
            icon: googleAna,
            hoverIcon: googleAnaHover,
            title: 'Google Analytics',
            alt: 'hire a team of  best Google analytics experts at WRTeam Bhuj Gujrat'

        },
        {
            id: 4,
            icon: seoIcon,
            hoverIcon: seoIconHover,
            title: 'SEO',
            alt: 'get your work done with SEO experts at WRTeam kutch gujrat'

        },
        {
            id: 5,
            icon: seoYT,
            hoverIcon: seoYTHover,
            title: 'SEO Youtube',
            alt: 'top YouTube  SEO by experts at WRTeam gujrat India'

        },
    ];



    return (
        <Layout>
            <Breadcrumb title='Digital Marketing' blueText='Services' secondElement='Services' thirdElement='Digital Marketing Services' />
            <section className='container commonMT'>
                <div className="grid max-1199:grid-cols-1 grid-cols-2 gap-8">
                    <div className='flexColCenter !items-start commonTextGap'>
                        <span className='sectionTag'>Digital Marketing <span>Services</span></span>
                        <h2 className='sectionTitle'>Grow your business with the Best <span>Digital Marketing</span> Services</h2>
                        <p className='sectionPara'>Allow your business to grow globally with our best digital marketing services, get every marketing service in one place from expert marketers.</p>
                    </div>

                    <div className='flexCenter'>
                        <div className='flexCenter relative before:contents-[""] before:absolute before:top-[6px] before:left-0 before:right-0 before:bottom-0 before:m-auto before:w-[86%] before:h-[96%] before:primaryBg before:-z-[1] before:rotate-[185deg] before:rounded-[16px]'>
                            <Image src={mainImg} height={0} width={0} loading='lazy' alt='most effective SEO strategies  and services with experts of WRTeam kutch-gujrat' className='w-[85%] h-auto' />
                        </div>
                    </div>
                </div>
            </section>

            {/* swiper  */}
            <section className='commonBg pt-8 pb-12 md:pt-16 md:pb-24 commonMT'>
                <div className="container space-y-10">
                    <div className='flexColCenter commonTextGap'>
                        <span className='sectionTag'><span>What</span> We Can Do <span>For You</span></span>
                        <h3 className='sectionTitle'>Services <span>We Can Help </span>You With</h3>
                    </div>
                    <ServicesSwiper data={newSwiperData} />
                </div>
            </section>

            {/* benefits */}
            <section className='container commonMT space-y-12'>
                <div className='grid lg:grid-cols-2 gap-6'>
                    <div className='flexColCenter !items-start commonTextGap'>
                        <span className='sectionTag'>Extensive <span>Benefits</span></span>
                        <h4 className="sectionTitle">Avail <span>Digital Marketing</span> by Experts for Precise and Targeted Results.</h4>
                    </div>
                    <div className='flexCenter'>
                        <p className='sectionPara'>Expand your business globally with digital marketing experts, get global reach, and cost-effective results by targeted advertising.</p>
                    </div>
                </div>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                    {
                        benefitsCardData.map((item: servicesBenefitsDataTypes) => {
                            return <div className='flexColCenter !items-start gap-7 border-[2px] border-[#545A684D] rounded-[16px] p-5 group transition-all duration-300 hover:bg-white hover:shadow-[-16px_16px_46px_#2830421F] hover:border-transparent' key={item.id}>
                                <div className='flexCenter primaryBg w-[60px] md:w-[74px] h-[56px] md:h-[74px] rounded-md shadow-[0px_8px_26px_#176BF15C]'>
                                    <Image src={item.icon} height={0} width={0} loading='lazy' alt={item.title} className='w-[30px] md:w-[40px] h-auto' />
                                </div>
                                <p className='font-bold text-lg'>{item.title}</p>
                            </div>
                        })
                    }

                </div>
            </section>

            {/* process  */}
            <section className='container commonMT space-y-16'>
                <ProcessSect data={processCardData.slice(0, 3)} isReverse={false} sectionTitle='Grow your business with the Best Digital Marketing Services' blueText='Digital Marketing' sectionImg={processImg} alt='all types of digital marketing services are available at the best IT consultants-WRTeam Bhuj Gujrat' />
                <div className='container max-1199:hidden'>
                    <Image src={arrowImg} height={0} width={0} loading='lazy' alt='arrowDown' className='w-[58%] 2xl:w-[62%] -mt-[40px] -mb-[40px] 2xl:-mb-[80px] mx-[-18px] 2xl:mx-[-60px] h-auto' />
                </div>
                <ProcessSect data={processCardData.slice(3, processCardData.length)} isReverse={true} sectionTitle='' blueText='' sectionImg={processImg2} alt='detailed digital marketing work process report at WRTeam kutch' />
            </section>

            {/* build  */}
            <section className='commonMT commonMB'>
                <div className='h-[400px] relative -z-[1]' style={{ background: `rgb(2 0 16 / 61%) url(${buildBg.src})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'darken' }}>
                    <div className="primaryBg relative z-[2] h-full w-full opacity-[0.5]"></div>
                </div>
                <div className="container max-1199:-mt-[350px] -mt-[250px]">
                    <div className="bg-white shadow-[0px_0px_46px_#2830421F] relative z-[2] py-4 md:py-8 lg:py-12 rounded-[16px] overflow-hidden">
                        <div className="grid grid-cols-12 gap-y-4">
                            <div className="max-1199:col-span-12 col-span-5 flexColCenter !items-start commonTextGap border-r p-4 md:p-12">
                                <span className='sectionTag'><span>We</span> Build</span>
                                <h6 className='sectionTitle'>Avail Our <span>Expertise</span> In The Following Work Area.</h6>
                                <p className='sectionPara'>Experience excellence with our services, powered by top-notch platforms for unmatched performance and innovation.</p>
                            </div>
                            <div className="max-1199:col-span-12 col-span-7 !p-[0px_25px] md:max-1199:!p-[0px_65px] lg:!p-[85px]">
                                <div className='grid grid-cols-2 sm:grid-cols-3 gap-12'>
                                    {
                                        buildCardData.map((item: servicesBuildDataTypes) => {
                                            return <div className="flexColCenter gap-4 group transition-all duration-300" key={item.id}>
                                                <div className='commonBg rounded-md h-[90px] w-[90px] flexCenter group-hover:primaryBg transition-all duration-300'>
                                                    <Image src={item.icon} height={0} width={0} loading='lazy' alt={item.alt} className='w-[55px] h-auto group-hover:hidden block transition-all duration-300' />
                                                    <Image src={item.hoverIcon} height={0} width={0} loading='lazy' alt={item.alt} className='w-[55px] h-auto group-hover:block hidden transition-all duration-300' />
                                                </div>
                                                <span className='font-semibold md:text-lg'>{item.title}</span>
                                            </div>
                                        })
                                    }
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default DigitalMarketing