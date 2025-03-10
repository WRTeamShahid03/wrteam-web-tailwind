import Image from 'next/image'
import React from 'react'
import dontMiss from '../../../../assets/images/freeSourceCode/dontMiss.png'
import CommonBtnComp from '../CommonBtnComp'

const Footer = () => {
    return (
        <footer className='container commonMT mb-4'>
            <div className='grid grid-cols-12 gap-4'>
                <div className='col-span-12 lg:col-span-8'>
                    <div className="flexCenter">
                        <div className='relative after:content-[""] after:absolute after:top-[28%] after:h-[40%] after:w-[120px] after:primaryBg after:blur-[80px] after:opacity-40
    before:content-[""] before:absolute before:top-[28%] before:h-[40%] before:w-[120px] before:primaryBg before:blur-[80px] before:opacity-40 before:left-[20%] after:right-[20%]'>
                            <Image src={dontMiss} height={0} width={0} alt='dont-miss-img' className='w-auto h-auto' />
                        </div>
                        <div>
                            <h4 className='text-xl md:text-3xl lg:text-4xl/[50px] font-[500] [&_span]:primaryColor !font-roboto'>Don't Miss Out! Grab Your Free Code and Get Building!</h4>
                        </div>
                    </div>
                </div>
                <div className='col-span-12 lg:col-span-4'>
                    <CommonBtnComp />
                </div>
            </div>

        </footer>
    )
}

export default Footer
