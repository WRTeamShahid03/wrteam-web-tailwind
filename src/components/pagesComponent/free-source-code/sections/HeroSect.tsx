import Image from 'next/image'
import React from 'react'
import heroImg from '../../../../assets/images/freeSourceCode/heroImg.png'
import CommonBtnComp from '../CommonBtnComp'

const HeroSect = () => {
    return (
        <div className='container commonMT'>
            <div className="flexColCenter commonTextGap text-center">
                <h1 className='text-2xl md:text-4xl lg:text-5xl/[50px] font-[500] [&_span]:primaryColor'>Get Your Free Quiz iOS App Source Code <span>(Built-with Swift)</span></h1>
                <p className='text-sm sm:text-base md:text-lg'>Download now and start building interactive quizzes with ease. Perfect for devs who want to skip the setup and dive straight into coding!
                </p>
                <div className='relative after:content-[""] after:absolute after:top-[28%] after:h-[40%] after:w-[120px] after:primaryBg after:blur-[80px] after:opacity-40
    before:content-[""] before:absolute before:top-[28%] before:h-[40%] before:w-[120px] before:primaryBg before:blur-[80px] before:opacity-40 before:left-[20%] after:right-[20%]'>
                    <Image src={heroImg} height={0} width={0} alt='hero-img' />
                </div>
                <CommonBtnComp />
            </div>
        </div >
    )
}

export default HeroSect
