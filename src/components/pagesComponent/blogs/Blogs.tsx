'use client'
import Layout from '@/components/layout/Layout'
import Image from 'next/image'
import React from 'react'
import blogImg from '@/assets/images/blogimg.jpg'
import { MdDateRange } from "react-icons/md";
import { BsArrowRightCircle } from 'react-icons/bs';
import Link from 'next/link'

const Blogs = () => {
    return (
        <Layout>
            <section className='container commonMT commonMB'>
                <div className='grid grid-cols-12 gap-y-8 lg:gap-6'>
                    <div className="max-1199:col-span-12 col-span-8">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className='flexColCenter !items-start border border-[#51535892] rounded-[16px] overflow-hidden space-y-2'>
                                <div className='relative'>
                                    <span className='primaryBg absolute top-2 text-xs rounded-e-sm font-medium text-white py-1 px-2'>Documentation</span>
                                    <Image src={blogImg} height={0} width={0} alt='blog-img' />
                                </div>
                                <div className='flexColCenter !items-start p-3 gap-3'>
                                    <div className='flexCenter gap-2 textSecondary text-sm font-semibold'>
                                        <span><MdDateRange className='primaryColor' size={20} /></span>
                                        <span>Sep 30, 2024</span>
                                    </div>
                                    <h1 className='font-bold text-lg md:text-2xl line-clamp-2'> Meaning Of SourceCode | Everything a Developer Nee...</h1>
                                    <p className='sectionPara !leading-6 line-clamp-3'>Have a detailed understanding of source codes | Meaning of source code, components of source code, Importance of source code, an</p>
                                    <Link href={'/'} title='detail-page' className='flex items-center gap-2 border border-[#51535892] py-1 px-2 rounded-[8px] transition-all duration-300 hover:primaryBg hover:text-white text-sm md:text-base'>Read More <BsArrowRightCircle /> </Link>
                                </div>
                            </div>
                            <div className='flexColCenter !items-start border border-[#51535892] rounded-[16px] overflow-hidden space-y-2'>
                                <div className='relative'>
                                    <span className='primaryBg absolute top-2 text-xs rounded-e-sm font-medium text-white py-1 px-2'>Documentation</span>
                                    <Image src={blogImg} height={0} width={0} alt='blog-img' />
                                </div>
                                <div className='flexColCenter !items-start p-3 gap-3'>
                                    <div className='flexCenter gap-2 textSecondary text-sm font-semibold'>
                                        <span><MdDateRange className='primaryColor' size={20} /></span>
                                        <span>Sep 30, 2024</span>
                                    </div>
                                    <h1 className='font-bold text-lg md:text-2xl line-clamp-2'> Meaning Of SourceCode | Everything a Developer Nee...</h1>
                                    <p className='sectionPara !leading-6 line-clamp-3'>Have a detailed understanding of source codes | Meaning of source code, components of source code, Importance of source code, an</p>
                                    <Link href={'/'} title='detail-page' className='flex items-center gap-2 border border-[#51535892] py-1 px-2 rounded-[8px] transition-all duration-300 hover:primaryBg hover:text-white text-sm md:text-base'>Read More <BsArrowRightCircle /> </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="max-1199:col-span-12 col-span-4">
                        <div className='border border-[#51535892] rounded-[16px] p-5 space-y-8'>
                            <div className='relative after:content-[""] after:absolute after:left-0 after:-bottom-2 after:primaryBg after:h-[5px] after:w-[14%] after:rounded-[8px]'>
                                <h2 className='font-semibold text-2xl'>Category</h2>
                            </div>
                            <div className='flexColCenter !items-start gap-6'>
                                <div className='flexCenter !justify-between w-full textSecondary font-semibold border-b border-[#51535892] pb-4'>
                                    <Link href={'/'}>Documentation</Link>
                                    <span>(4)</span>
                                </div>
                                <div className='flexCenter !justify-between w-full textSecondary font-semibold border-b border-[#51535892] pb-4'>
                                    <Link href={'/'}>Documentation</Link>
                                    <span>(4)</span>
                                </div>
                                <div className='flexCenter !justify-between w-full textSecondary font-semibold border-b border-[#51535892] pb-4 last:pb-0 last:border-transparent'>
                                    <Link href={'/'}>Documentation</Link>
                                    <span>(4)</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Blogs