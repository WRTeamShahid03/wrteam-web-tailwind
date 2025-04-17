'use client'
import React from 'react'
import Image from 'next/image'
import bg from '../../../assets/images/homePage/CounterImg.webp'
import happy from '../../../assets/images/homePage/Happy Clients-AboutUs.svg'
import projects from '../../../assets/images/homePage/Projects Done.svg'
import reconnect from '../../../assets/images/homePage/ReconecctAboutUs.svg'
import satisfaction from '../../../assets/images/homePage/SatisfactionAboutUs.svg'
import { counterDataTypes } from '@/types'

const Counter: React.FC = () => {

    const data = [
        {
            img: happy,
            counts: '20k+',
            text: 'Happy Clients'
        },
        {
            img: projects,
            counts: '500+',
            text: 'Project Wrapped up'
        },
        {
            img: reconnect,
            counts: '94%',
            text: 'Reconnect'
        },
        {
            img: satisfaction,
            counts: '98%',
            text: 'Satisfaction'
        },
    ]

    return (
        <section className='container commonMT'>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-y-8 relative rounded-[30px] overflow-hidden px-6 sm:px-0 sm:justify-items-center py-6 md:py-12 after:contents-[''] after:absolute after:w-full after:h-full after:top-0 after:left-0 after:primaryBg after:opacity-[0.9]" style={{ background: `url(${bg.src})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                {
                    data?.map((items: counterDataTypes, index: number) => {
                        return <div className='flexCenter !justify-start gap-4 text-white relative z-[1]' key={index}>
                            <div className='bg-white rounded-full p-1 md:p-2 xl:p-3'>
                                <Image src={items.img} width={0} height={0} loading="lazy" alt={items.text} />
                            </div>
                            <div className='flex flex-col gap-2 font-[600]'>
                                <span className='text-3xl md:text-4xl'>{items.counts}</span>
                                <span className='md:text-lg'>{items.text}</span>
                            </div>
                        </div>
                    })
                }
            </div>
        </section>
    )
}

export default Counter