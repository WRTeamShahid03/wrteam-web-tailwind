'use client'
import React from 'react'
import Image from 'next/image'
import workImg1 from '../../../assets/images/homePage/work_chain_1.webp'
import workImg2 from '../../../assets/images/homePage/work_chain_2.webp'
import workImg3 from '../../../assets/images/homePage/work_chain_3.webp'
import workImg4 from '../../../assets/images/homePage/work_chain_4.webp'
import workLines from '../../../assets/images/homePage/Line.png'
import { workChainDataTypes } from '@/types'

const WorkChain: React.FC = () => {

    const data = [
        {
            id: 1,
            img: workImg1,
            title: 'Choose service',
            desc: 'Choose the service from our list of solutions, Mobile Development, Web Development, UI/UX Design, etc.',
            alt: 'best web development company-WRTeam bhuj-kutch'
        },
        {
            id: 2,
            img: workImg2,
            title: 'Request a meeting',
            desc: 'Connect with our expert developers and have a detailed discussion about your requirements.',
            alt: 'best mobile app service provider-WRTeam India'
        },
        {
            id: 3,
            title: 'Start planning',
            img: workImg3,
            desc: 'Best UI/UX designing servicer provider-WRTeam Bhuj-Gujarat',
            alt: 'best UI/UX designing servicer provider-WRTeam Bhuj gujrat'
        },
        {
            id: 4,
            title: `Let's make it happen`,
            img: workImg4,
            desc: 'Time to build real solutions that work for you.',
            alt: 'best digital marketing service provider -WRTeam bhuj gujrat'
        },
    ]

    return (
        <section className='container commonMT space-y-16 md:space-y-24'>
            <div className='flexColCenter commonTextGap lg:w-[70%] xl:w-[50%] text-center m-auto'>
                <span className='sectionTag'>Our Work <span>Chain</span></span>
                <h4 className='sectionTitle'>From Concept to Creation <span>Simplifying Your Project Journey</span></h4>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 lg:gap-4 xl:gap-6 workChain' style={{background: `url(${workLines.src})`,backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
                {
                    data?.map((item: workChainDataTypes) => {
                        return <div className={`flexColCenter gap-2 md:gap-4 text-center ease-in-out ${item.id === 2 || item.id === 4 ? 'lg:!flex-col-reverse lg:[&>.title]:mb-6' : ''}`} key={item.id}>
                            <div className='relative group transition-all duration-300'>
                                <span className='bg-white rounded-full absolute -top-6  z-[1] left-0 right-0 w-[50px] h-[50px] m-auto flexCenter transition-all duration-300 ease-in-out translate-y-0 group-hover:translate-y-24 font-[500]'>{item.id}</span>
                                <Image src={item.img} height={0} width={0} loading="lazy" alt={item.alt} className='rounded-full filter brightness-[36%] invert-[8%] saturate-[100%] contrast-[96%] sepia-[8%] grayscale-[3%] workchainImg transition-all duration-300' />
                            </div>
                            <span className='text-base md:text-xl font-[600] title'>{item.title}</span>
                            <p className='sectionPara'>{item.desc}</p>
                        </div>
                    })
                }

            </div>

        </section>
    )
}

export default WorkChain