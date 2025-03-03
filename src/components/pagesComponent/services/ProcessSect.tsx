import Image, { StaticImageData } from 'next/image'
import React from 'react'
import { servicesProcessData } from '@/types'

interface dataProps {
    data: servicesProcessData[],
    isReverse: boolean,
    sectionImg: StaticImageData
}

const ProcessSect: React.FC<dataProps> = ({ data, isReverse, sectionImg }) => {
    return (
        <section className=''>
            <div className="grid max-1199:grid-cols-1 grid-cols-2 max-1199:gap-y-16 gap-8">
                <div className={`flexCenter max-1199:order-1 ${isReverse && 'order-2'}`}>
                    <div className='flexCenter relative before:contents-[""] before:absolute before:top-[6px] before:left-0 before:right-0 before:bottom-0 before:m-auto before:w-[86%] before:h-[96%] before:primaryBg before:-z-[1] before:rotate-[185deg] before:rounded-[16px]'>
                        <Image src={sectionImg} height={0} width={0} alt='web-dev' className='w-[85%] h-auto' />
                    </div>
                </div>
                <div className={`flexColCenter !items-start commonTextGap ${isReverse && 'order-1'}`}>
                    {
                        !isReverse &&
                        <span className='sectionTag'>Our <span>Work Process</span></span>
                    }
                    {!isReverse &&
                        <h5 className='sectionTitle'>How Does Our <span>Web Development</span> Team Create a Website?</h5>
                    }
                    <div className='flexColCenter !items-start gap-6'>
                        {
                            data.map((item) => {
                                return <div className='grid grid-cols-12 gap-5' key={item.id}>
                                    <div className='flexCenter primaryBg rounded-md col-span-3 sm:col-span-2 w-[64px] sm:w-[100%] h-[64px] sm:h-[100%] m-auto transition-all duration-300 hover:secondaryBg'>
                                        <Image src={item.icon} height={0} width={0} alt='' className='w-[35px] md:w-[35px] h-auto' />
                                    </div>
                                    <div className='col-span-9 sm:col-span-10 flex flex-col gap-1'>
                                        <span className='font-bold text-lg md:text-xl'>{item.title}</span>
                                        <p className='textSecondary font-[600] text-[14px] sm:text-base'>{item.desc}</p>
                                    </div>
                                </div>
                            })
                        }

                    </div>
                </div>

            </div>
        </section>
    )
}

export default ProcessSect