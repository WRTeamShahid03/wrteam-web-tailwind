'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiFillInstagram } from 'react-icons/ai'
import { BsFacebook, BsLinkedin, BsYoutube } from 'react-icons/bs'
import heroImg from '../../../assets/images/homePage/heroImg.webp'
import { FaCheckCircle } from "react-icons/fa";
import { BiSolidLike } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import teamImg from '../../../assets/images/homePage/teamImg.png'
import bgLine from '../../../assets/images/homePage/Hero_Line.png'
import curlArrow from '../../../assets/images/homePage/Arrow.svg'

const HeroSection: React.FC = () => {
    return (
        <section className='container mt-[100px] md:mt-[120px] lg:mt-[150px]'>
            <div className='bgLineDiv' style={{
            background: `url(${bgLine.src})`,
            backgroundSize: 'contain',
            backgroundPosition: " 24px 140px",
            backgroundRepeat: "no-repeat",
        }}>

            <div className="grid lg:grid-cols-2 gap-4 md:gap-6 relative bg-[#2e71fe14] pt-1 px-3 pb-8 sm:p-8 lg:px-16 lg:pb-0 lg:pt-24 rounded-[20px_20px_17%_20px] lg:rounded-[50px_50px_17%_50px] 
           [clip-path:polygon(0_0,100%_0,100%_90.5%,0_100%)] before:content-[''] before:absolute before:top-0 before:left-0 before:bg-[#2e71fe] before:opacity-[0.09] before:w-[353px] before:h-[353px] before:blur-[50px] after:content-[''] after:absolute after:bottom-[55px] after:left-[190px] after:bg-[#e1006d] after:opacity-[0.07] after:w-[353px] after:h-[353px] after:blur-[50px] overflow-hidden w-full h-full">
                <div>
                    <div className='flexColCenter !items-start gap-5 md:gap-8 pt-5 pb-8'>
                        <span className='sectionTag'>Most Creative Winner!</span>
                        <h1 className='sectionTitle !text-2xl md:!text-4xl lg:!text-5xl/[60px]'>Streamline Your <span>Business</span> Website and Mobile App with the <span className='primaryColor'>Best IT Company</span></h1>
                        <p className='sectionPara'>Upgrade your business administration with WRTeam. Create a customized and feature-loaded website or mobile app with expert and experienced developers at WRTeam, providing digital solutions tailored to your needs.</p>

                        <div className='flexCenter gap-4 md:gap-6'>
                            <Link href={'/about-us'} className='commonBtn w-max h-max overflow-hidden'>About Us</Link>
                            <div className='textSecondary'>
                                <span>Follow Us</span>
                                <div className='flexCenter gap-3 md:gap-4 mt-1'>
                                    <Link target='_blank' title='Facebook' href={process.env.NEXT_PUBLIC_FACEBOOK!}><BsFacebook size={20} /></Link>
                                    <Link target='_blank' title='Instagram' href={process.env.NEXT_PUBLIC_INSTAGRAM!}><AiFillInstagram size={24} /></Link>
                                    <Link target='_blank' title='Linkedin' href={process.env.NEXT_PUBLIC_LINKEDIN!}><BsLinkedin size={20} /> </Link>
                                    <Link target='_blank' title='Youtube' href={process.env.NEXT_PUBLIC_YOUTUBE!}><BsYoutube size={25} /> </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='curlArrow absolute top-0 left-0 right-0 bottom-0 m-auto w-max h-max hidden lg:block'>
                    <Image src={curlArrow} width={0} height={0} alt='curlArrow' className='w-auto h-auto '/>
                </div>

                <div className='relative'>
                    <div className='saleCount hidden commonKeyFramesDiv absolute top-0 right-12 md:flexCenter gap-4 bg-white w-max p-1 pr-4 rounded-[8px] shadow-[0_36px_60px_#545a681a]'>
                        <div className='primaryBg p-2 rounded-sm text-white transition-all duration-300 an'>
                            <FaCheckCircle size={35} />
                        </div>
                        <div className='flexColCenter !items-start font-[700] text-[14px]'>
                            <span>Sale Count</span>
                            <span>(20k+) <span className='textSecondary'>Products</span></span>
                        </div>
                    </div>
                    
                    <Image src={heroImg} width={0} height={0} alt='heroImg' className='w-full h-auto lg:w-[135%] xl:w-[112%] max-w-[200%]' />

                    <div className='reviews hidden absolute top-[16%] right-40 md:flexCenter gap-4 bg-white w-max p-1 pr-4 rounded-[8px] shadow-[0_36px_60px_#545a681a]'>
                        <div className='secondaryBg p-2 rounded-sm text-white'>
                            <BiSolidLike size={35} />
                        </div>
                        <div className='flexColCenter !items-start font-[700] text-[14px] gap-2'>
                            <span className='flex items-center gap-2'><FaStar color='#ffa800' /><FaStar color='#ffa800' /><FaStar color='#ffa800' /><FaStar color='#ffa800' /><FaStar color='#ffa800' /></span>
                            <span>(20k+) <span className='textSecondary'>Products</span></span>
                        </div>
                    </div>

                    <div className='team hidden commonKeyFramesDiv absolute bottom-28 lg:bottom-72 xl:bottom-24 right-12 md:flexColCenter !items-start gap-4 bg-white w-max p-2 pr-4 rounded-[8px] shadow-[0_36px_60px_#545a681a]'>
                        <span className='font-[700] text-[14px]'>Our Creative Team</span>
                        <div className='flexCenter'>
                            <Image src={teamImg} width={0} height={0} alt='team-img' className='w-[180px] xl:w-[200px] h-auto' />
                        </div>
                    </div>

                </div>
            </div>
            </div>
        </section>
    )
}

export default HeroSection