'use client'
import Image from 'next/image'
import React from 'react'
import mobileApp from '../../../assets/images/homePage/AppImage.webp'
import webImg from '../../../assets/images/homePage/WebImage.webp'
import appProIcon from '../../../assets/images/homePage/appProIcon.png'
import webIcon from '../../../assets/images/homePage/webProIcon.png'
import Link from 'next/link'
import { BsArrowRightCircle } from 'react-icons/bs'

const Solutions: React.FC = () => {
    return (
        <section className='commonBg py-12 md:py-16 lg:py-20 commonMT'>

            <div className='container space-y-12 md:space-y-16 lg:space-y-20'>
                <div className='flexColCenter commonTextGap lg:w-[70%] xl:w-[50%] text-center m-auto'>
                    <span className='sectionTag'>Our <span>Solutions</span></span>
                    <h5 className='sectionTitle'><span>Digital Solutions</span> We Offer, as the <span>Best Software</span> Development Company.</h5>
                    <p className='sectionPara'>We are serving a huge variety of digital solutions specially designed for various businesses that help to create websites and mobile apps for e-commerce, restaurants, mobile games, etc.</p>
                </div>

                <div>
                    <div className='grid lg:grid-cols-2 gap-12 !justify-items-center'>
                        <div className='flexCenter gap-8 flex-wrap xl:flex-nowrap'>
                            <div>
                                <Image src={mobileApp} height={0} width={0} loading="lazy" alt='create a mobile app for both Android & ios with WRTeam(bhuj) experts' className='w-auto h-auto rounded-[30px] shadow-[rgba(0,0,0,0.45)_0px_30px_20px_-20px]' />
                            </div>
                            <div className='flexColCenter xl:!items-start gap-6'>
                                <div className='primaryBg p-4 rounded-full'>
                                    <Image src={appProIcon} height={0} width={0} loading="lazy" alt='appIcon' className='h-auto w-auto' />
                                </div>
                                <span className='sectionTitle'>Mobile App Products</span>
                                <Link href={'/products'} title='Discover More' className='flex items-center gap-2 commonBtn'>Discover More <BsArrowRightCircle /></Link>
                            </div>
                        </div>
                        <div className='flexCenter gap-8 flex-wrap xl:flex-nowrap'>
                            <div>
                                <Image src={webImg} height={0} width={0} loading="lazy" alt='web development service for every type of website with WRTeam(bhuj) experts' className='w-auto h-auto rounded-[30px] shadow-[rgba(0,0,0,0.45)_0px_30px_20px_-20px]' />
                            </div>
                            <div className='flexColCenter xl:!items-start gap-6'>
                                <div className='primaryBg p-4 rounded-full'>
                                    <Image src={webIcon} height={0} width={0} loading="lazy" alt='webIcon' className='h-auto w-auto' />
                                </div>
                                <span className='sectionTitle'>Web App Products</span>
                                <Link href={'/products'} title='Discover More' className='flex items-center gap-2 commonBtn'>Discover More <BsArrowRightCircle /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Solutions