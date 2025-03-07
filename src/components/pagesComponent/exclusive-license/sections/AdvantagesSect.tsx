import React from 'react'
import Image from 'next/image'
import advantages from '@/assets/images/exclusiveLicensePage/advantagesImg.png'

import adIcon1 from '@/assets/images/exclusiveLicensePage/advantageIcon1.png'
import adIcon2 from '@/assets/images/exclusiveLicensePage/advantageIcon2.png'
import adIcon3 from '@/assets/images/exclusiveLicensePage/advantageIcon3.png'
import adIcon4 from '@/assets/images/exclusiveLicensePage/advantageIcon4.png'
import { servicesProcessDataTypes } from '@/types'

const AdvantagesSect = () => {

    const advantageCardsData = [
        {
            id: 0,
            img: adIcon1,
            title: 'Unlimited Resale',
            desc: `Sell to as many clients as you want.`

        },
        {
            id: 1,
            img: adIcon2,
            title: 'Exclusive Opportunity',
            desc: 'Only one license available per product.'

        },
        {
            id: 2,
            img: adIcon3,
            title: '100% Profit',
            desc: `Keep all the revenue from your sales.`

        },
        {
            id: 3,
            img: adIcon4,
            title: 'Full Control',
            desc: `Manage and leverage the product as you see fit.`

        },
    ];

    return (
        <section className='commonMT'>
            <div className="container">
                <div className='grid grid-cols-12 gap-y-10 md:gap-y-12 between-1200-1399:gap-y-24 between-1200-1399:gap-x-12 xl:gap-28'>

                    <div className="max-1199:order-2 max-1199:col-span-12 col-span-4  relative flexCenter">
                        <div className=''>
                            <Image src={advantages} width={0} height={0} alt='advantage-img' loading='lazy' className='w-auto md:w-full h-auto' />
                        </div>

                    </div>

                    <div className='max-1199:order-1 flexColCenter !items-start commonTextGap max-1199:col-span-12 col-span-8 w-full'>
                        <span className='sectionTag'><span>Exclusive License</span> Advantages</span>
                        <h3 className='sectionTitle'>Why Choose Our <span>Exclusive Licenses?</span></h3>
                        <div className='grid md:grid-cols-2 gap-6'>
                            {
                                advantageCardsData.map((item: servicesProcessDataTypes) => {
                                    return <div className='grid grid-cols-12 gap-5' key={item.id} data-aos="fade-up" data-aos-once="true" data-aos-duration="800">
                                        <div className='flexCenter primaryBg rounded-full col-span-3 sm:col-span-2 w-[48px] sm:w-[54px] h-[48px] sm:h-[54px] m-auto transition-all duration-300 hover:secondaryBg'>
                                            <Image src={item.img} height={0} width={0} alt={item.title} loading='lazy' className='w-[35px] md:w-[35px] h-auto' />
                                        </div>
                                        <div className='col-span-9 sm:col-span-10 flexColCenter !items-start gap-1'>
                                            <span className='font-semibold text-lg md:text-xl'>{item.title}</span>
                                            <p className='textSecondary font-[600] text-[14px] sm:text-base'>{item.desc}</p>
                                        </div>
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

export default AdvantagesSect