'use client'
import Layout from '@/components/layout/Layout'
import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";
import Link from 'next/link';
import Image from 'next/image';
import scannerImg from '@/assets/images/whatsappQR.png'
import bgImg from '@/assets/images/contactFormBg.webp'
import bgImg2 from '@/assets/images/Social_BG.webp'
import logo from '@/assets/images/logo.svg'
import { BsFacebook, BsLinkedin } from 'react-icons/bs'
import { AiFillInstagram } from 'react-icons/ai'
import { FaYoutube } from 'react-icons/fa6'
import ContactForm from './ContactForm';

const ContactUs: React.FC = () => {
    return (
        <Layout>
            <section className='container commonMT'>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    <div className='flexColCenter gap-3 text-center border border-[#51535892] py-4 px-8 rounded-[16px] transition-all duration-300 hover:primaryBg group'>
                        <div className='w-[74px] h-[74px] flexCenter primaryBg text-white rounded-full group-hover:bg-white transition-all duration-300 group-hover:primary group-hover:primaryColor'><IoLocationOutline size={50} /></div>
                        <span className='font-extrabold text-lg group-hover:text-white'>Our Address</span>
                        <Link href={'#contactUs'} className='sectionPara hover:underline group-hover:text-white'>#262-263, Time Square Empire, SH 42 Mirjapar highway,Bhuj - Kutch 370001 Gujarat India.</Link>
                    </div>
                    <div className='flexColCenter gap-3 text-center border border-[#51535892] py-4 px-8 rounded-[16px] transition-all duration-300 hover:primaryBg group'>
                        <div className='w-[74px] h-[74px] flexCenter primaryBg text-white rounded-full group-hover:bg-white transition-all duration-300 group-hover:primary group-hover:primaryColor'><IoMailOutline size={50} /></div>
                        <span className='font-extrabold text-lg group-hover:text-white'>Email Address</span>
                        <Link href={'mailto:support@wrteam.in'} className='sectionPara hover:underline group-hover:text-white'>support@wrteam.in</Link>
                    </div>
                    <div className='flexColCenter gap-3 text-center border border-[#51535892] py-4 px-8 rounded-[16px] transition-all duration-300 hover:primaryBg group'>
                        <div className='w-[74px] h-[74px] flexCenter primaryBg text-white rounded-full group-hover:bg-white transition-all duration-300 group-hover:primary group-hover:primaryColor'><BiSupport size={50} /></div>
                        <span className='font-extrabold text-lg group-hover:text-white'>Phone Number</span>
                        <Link href={'tel:+91 97979 45459'} className='sectionPara hover:underline group-hover:text-white'>+91 97979 45459</Link>
                    </div>
                    <div className='flexColCenter gap-3 text-center border border-[#51535892] py-4 px-8 rounded-[16px] transition-all duration-300 hover:primaryBg group'>
                        <Image src={scannerImg} height={0} width={0} alt='whatsapp-scanner' className='w-[150px] h-auto rounded-sm' />
                        <span className='font-extrabold text-lg group-hover:text-white'>Quick Scan To Whatsapp</span>
                    </div>
                </div>

            </section>

            <section className='py-8 md:py-12 lg:py-20 commonMT' style={{ background: `#283042 url(${bgImg.src})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundBlendMode: 'darken' }}>
                <div className="container">
                    <div className="grid grid-cols-12 bg-white rounded-[16px] overflow-hidden">
                        <div className="col-span-12 h-[300px] lg:h-full lg:col-span-4"
                            style={{ background: `url(${bgImg2.src})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundBlendMode: 'darken' }}>
                            <div className='primaryBg flexColCenter !items-start !justify-between h-full p-4 opacity-80'>
                                <div>
                                    <Image src={logo} height={0} width={0} loading='lazy' alt='companyLogo' className='w-auto h-auto brightness-[2%] invert-[100%]' />
                                </div>

                                <div className='space-y-4'>
                                    <span className='text-white font-semibold'>Stay connected with us on social media for the latest updates, content, and more. Follow us today!</span>
                                    <div className='flex items-center gap-4'>
                                        <Link target='_blank' title='Facebook' href={process.env.NEXT_PUBLIC_FACEBOOK!}>
                                            <span>  <BsFacebook color='white' size={30} /> </span>
                                        </Link>

                                        <Link target='_blank' title='Instagram' href={process.env.NEXT_PUBLIC_INSTAGRAM!}>
                                            <span>  <AiFillInstagram color='white' size={30} /></span>
                                        </Link>

                                        <Link target='_blank' title='Youtube' href={process.env.NEXT_PUBLIC_YOUTUBE!}>
                                            <span> <FaYoutube color='white' size={30} /> </span>
                                        </Link>

                                        <Link target='_blank' title='Linkedin' href={process.env.NEXT_PUBLIC_LINKEDIN!}>
                                            <span style={{ borderRadius: "100%" }}>  <BsLinkedin color='white' size={30} /> </span>
                                        </Link>
                                    </div>
                                </div>

                            </div>


                        </div>

                        <div className="col-span-12 lg:col-span-8 p-4 lg:p-[50px_115px]">
                            <div className="flexColCenter text-ceter gap-8 md:gap-12">
                                <h1 className='sectionTitle'>Have something to ask or share? or just want to say HI!</h1>
                                <div>
                                    <ContactForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="container commonMT commonMB ">
                <div className='border border-[#707070b3] rounded-[16px] overflow-hidden'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6879.666659015773!2d69.63730994896257!3d23.23263359742167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39511e5b00000001%3A0x99eb1d2a09bf7685!2sWRTeam!5e0!3m2!1sen!2sin!4v1694243415170!5m2!1sen!2sin" width="100%" height="450" style={{ border: "0" }} allowFullScreen={true} referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </section>
        </Layout >
    )
}

export default ContactUs