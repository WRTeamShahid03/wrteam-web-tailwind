import React from 'react'
import Image from 'next/image'
import processIcon1 from '@/assets/images/exclusiveLicensePage/process1.png'
import processIcon2 from '@/assets/images/exclusiveLicensePage/process2.png'
import processIcon3 from '@/assets/images/exclusiveLicensePage/process3.png'
import processIcon4 from '@/assets/images/exclusiveLicensePage/process4.png'
import arrowImg from '@/assets/images/exclusiveLicensePage/arrowImg.png'
import { servicesProcessDataTypes } from '@/types'

const ProcessSect = () => {


    const processData = [
        {
            id: 0,
            img: processIcon1,
            title: "Contact Us",
            desc: "Reach out via our form or email support@wrteam.in",
        },
        {
            id: 1,
            img: processIcon2,
            title: "Schedule a Meeting",
            desc: "Discuss details and requirements with us.",
        },
        {
            id: 2,
            img: processIcon3,
            title: "Get a Quote",
            desc: "Receive a customized quote after the meeting.",
        },
        {
            id: 3,
            img: processIcon4,
            title: "Make Payment",
            desc: "Review the contract, pay, and get your license.",
        },
    ];

    return (
        <section className='commonMT commonBg py-8 md:py-12'>
            <div className="container space-y-8 md:space-y-12 lg:space-y-20">
                <div className="flexColCenter lg:w-[70%] mx-auto text-center commonTextGap">
                    <span className='sectionTag'><span>Process To</span> Buy</span>
                    <h4 className='sectionTitle'>How to <span>Secure</span> Your Exclusive <span>License</span></h4>
                    <p className='sectionPara'>Follow these detailed steps to get started with your exclusive license, ensuring you effectively utilize all the benefits and opportunities it offers, and set yourself up for maximum success.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {
                        processData.map((data: servicesProcessDataTypes) => {
                            return <div className='flexColCenter text-center gap-4' key={data.id}>
                                <div className='relative'>
                                    <Image src={arrowImg} height={0} width={0} alt='arrowImg' className={`hidden lg:block absolute w-[94px] h-[72px] max-1199:left-[108%] left-44 top-6 ${data.id === 3 ? '!hidden' : ''}`} />
                                    <Image src={data.img} height={0} width={0} alt='process-icon' className='w-[130px] h-auto' />
                                </div>
                                <span className='font-extrabold max-1199:text-xl text-2xl'>{data.title}</span>
                                <span className='w-[80%] font-medium'>{data.desc}</span>
                            </div>
                        })
                    }

                </div>
            </div>
        </section>
    )
}

export default ProcessSect