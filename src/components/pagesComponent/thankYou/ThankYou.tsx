'use client'
import Image from 'next/image'
import React from 'react'
import checkIcon from '@/assets/images/checkIcon.svg'

const ThankYou = () => {
    return (
        <section className='container flexColCenter text-white h-screen gap-6 md:gap-12 text-center'>
            <Image src={checkIcon} height={0} width={0} alt='check-icon' className='w-[100px] md:w-auto'/>
            <h1 className='font-semibold text-3xl md:text-5xl lg:text-7xl'>Thank You!</h1>
            <p className='font-semibold text-lg md:text-2xl'>We sent you download link in mail make sure that you received it</p>
        </section>
    )
}

export default ThankYou