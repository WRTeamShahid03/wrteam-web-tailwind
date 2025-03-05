'use client'
import Breadcrumb from '@/components/commonComponents/Breadcrumb'
import Layout from '@/components/layout/Layout'
import Image from 'next/image'
import React from 'react'
import discuss1 from '@/assets/images/customization/discuss1.webp'
import discuss2 from '@/assets/images/customization/discuss2.webp'
import discuss3 from '@/assets/images/customization/discuss3.webp'
import arrowImg from '@/assets/images/customization/arrow.svg'
import line from '@/assets/images/customization/lines.svg'
import formSideImg from '@/assets/images/customization/customizationImg.webp'

import { servicesProcessData } from '@/types'
import CustomizationForm from './CustomizationForm'

const Customization: React.FC = () => {

    const data = [
        {
            id: 1,
            img: discuss1,
            title: 'Define Requirements',
            desc: 'Share your needs for customizing our product. The more details you give, the better we can make it suit you.'

        },
        {
            id: 2,
            img: discuss2,
            title: `We'll Discuss the Details`,
            desc: `We'll go through your requirements together, sort out any questions, and make sure we're clear on what you need.`

        },
        {
            id: 3,
            img: discuss3,
            title: 'Sit Back as We Customize',
            desc: `We'll start working on your project once we understand your requirements. We'll keep you updated on how it's going.`

        }
    ];
    return (
        <Layout>
            <Breadcrumb title='Customization' secondElement='Services' thirdElement='Customization' />
            <section className='container commonMT space-y-8 md:space-y-12 lg:space-y-20'>
                <div className='flexColCenter commonTextGap lg:w-[70%] m-auto text-center'>
                    <h2 className='sectionTitle'>Want Customization in <span>Our Products?</span></h2>
                    <p className='sectionPara'>Customize our products to fit you perfectly! Just tell us what you need, and we'll make it happen. Your happiness is our top priority, so let's work together to create exactly what you want.</p>
                </div>

                <div className='grid md:grid-cols-2 lg:grid-cols-3 commonBg rounded-[16px] py-[40px] md:py-[70px] between-1200-1399:px-[20px] px-[20px] md:px-[40px] relative gap-y-12 lg:gap-4 2xl:gap-6'>
                    {
                        data.map((item: servicesProcessData) => {
                            return <div className='flexColCenter gap-4 text-center relative' key={item.id}>
                                <div className='rounded-full border-[2px] border-[#2e71fe] p-2 relative'>
                                    <div className='primaryBg absolute top-0 right-10 z-[1] rounded-full p-0.5'>
                                        <span className='text-white border border-white border-dashed rounded-full w-[44px] h-[44px] flexCenter font-extrabold text-lg'>0{item.id}</span>
                                    </div>
                                    <Image src={item.img} height={0} width={0} alt='' className='w-[206px] h-[206px] rounded-full object-cover brightness-[0.5]' />
                                </div>
                                <span className='text-lg font-semibold'>{item.title}</span>
                                <p className='sectionPara !text-sm md:w-[80%]'>{item.desc}</p>
                            </div>
                        })
                    }

                    <Image src={arrowImg} height={0} width={0} alt='arrow' className='max-1199:hidden w-[140px] 2xl:w-[164px] h-auto absolute top-[24%] left-[28%] m-auto' />
                    <Image src={arrowImg} height={0} width={0} alt='arrow' className='max-1199:hidden w-[140px] 2xl:w-[164px] h-auto absolute top-[24%] right-[28%] m-auto' />

                    <Image src={line} height={0} width={0} alt='arrow' className='hidden md:block w-[28%] h-auto absolute top-[] right-0 m-auto rotate-180 -z-[1]' />
                    <Image src={line} height={0} width={0} alt='arrow' className='hidden md:block w-[28%] h-auto absolute bottom-0 left-0 m-auto -z-[1]' />
                </div>
            </section>

            <section className='container commonMT commonMB'>
                <div className="bg-white rounded-[16px] shadow-[0_0_6px_#00000029] p-4 md:p-8">
                    <div className="grid between-1200-1399:grid-cols-2 xl:grid-cols-2 gap-y-8 md:gap-y-12 between-1200-1399:gap-6 xl:gap-6">
                        <div className='flexColCenter commonTextGap'>
                            <p className='sectionPara'>After reviewing your customization requirements? we will provide an estimated timeframe for completing your project. Our standard rate for customization is $17 per hour.</p>
                            <Image src={formSideImg} height={0} width={0} alt='form-side-img' className='w-auto h-auto rounded-[16px]' />
                        </div>

                        <div className='shadow-[0_0_6px_#00000029] p-4 md:p-6 rounded-[16px]'>
                            <CustomizationForm/>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Customization