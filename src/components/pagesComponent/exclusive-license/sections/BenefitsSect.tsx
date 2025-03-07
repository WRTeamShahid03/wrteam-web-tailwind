import React from 'react'
import Image from 'next/image'
import benefits from '@/assets/images/exclusiveLicensePage/benefitsImg.png'
import icon1 from '@/assets/images/exclusiveLicensePage/icon1.png'
import icon2 from '@/assets/images/exclusiveLicensePage/icon2.png'
import icon3 from '@/assets/images/exclusiveLicensePage/icon3.png'
import icon4 from '@/assets/images/exclusiveLicensePage/icon4.png'

const BenefitsSect = () => {

    const benefitsCardData = [
        {
            id: 0,
            icon: icon1,
            title: '01. Developers and Agencies',
            desc: `Perfect for those who want to offer unique solutions without competition.`

        },
        {
            id: 1,
            icon: icon2,
            title: '02. Entrepreneurs',
            desc: 'Ideal for creating a distinctive market presence with a unique product.'

        },
        {
            id: 2,
            icon: icon3,
            title: '03. Businesses',
            desc: `Customize and brand the product to meet specific needs.`

        },
        {
            id: 3,
            icon: icon4,
            title: '04. Digital Asset Investors',
            desc: `Enhance your portfolio with exclusive, valuable digital assets.`

        },
    ];

    return (
        <section className='commonMT commonBg py-8 md:py-12'>
            <div className="container">
                <div className='grid grid-cols-12 gap-y-10 md:gap-y-12 between-1200-1399:gap-y-24 xl:gap-28'>

                    <div className='max-1199:order-1 flexColCenter !items-start commonTextGap max-1199:col-span-12 between-1200-1399:col-span-12 col-span-6 w-full'>
                        <span className='sectionTag'><span>Is This For</span> You?</span>
                        <h2 className='sectionTitle'>Who Can <span>Benefit</span> from Our <span>Exclusive</span> Licenses?</h2>
                        <div className='flexColCenter !items-start gap-6'>
                            {
                                benefitsCardData.map((item) => {
                                    return <div className='grid grid-cols-12 gap-5' key={item.id} data-aos="fade-up" data-aos-once="true" data-aos-duration="800">
                                        <div className='flexCenter primaryBg rounded-md col-span-3 sm:col-span-2 w-[64px] sm:w-[100%] h-[64px] sm:h-[100%] m-auto transition-all duration-300 hover:secondaryBg'>
                                            <Image src={item.icon} height={0} width={0} alt='' className='w-[35px] md:w-[35px] h-auto' />
                                        </div>
                                        <div className='col-span-9 sm:col-span-10 flex flex-col gap-1'>
                                            <span className='font-semibold text-lg md:text-xl'>{item.title}</span>
                                            <p className='textSecondary font-[600] text-[14px] sm:text-base'>{item.desc}</p>
                                        </div>
                                    </div>
                                })
                            }

                        </div>
                    </div>

                    <div className="max-1199:order-2 max-1199:col-span-12 col-span-6 between-1200-1399:col-span-12 relative flexCenter">
                        <div className=''>
                            <Image src={benefits} width={0} height={0} alt='' className='w-auto md:w-full h-auto' />
                        </div>

                    </div>



                </div>
            </div>
        </section>
    )
}

export default BenefitsSect