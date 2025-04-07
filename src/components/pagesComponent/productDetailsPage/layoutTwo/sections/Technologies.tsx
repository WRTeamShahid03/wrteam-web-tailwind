import Image from 'next/image'
import React from 'react'
import techImg from '../../../../../assets/images/productDetailPage/layoutTwo/techSect.webp'
import flutter from '../../../../../assets/images/productDetailPage/layoutTwo/flutter.svg'
import { TechnologySection } from '@/types'
const Technologies: React.FC<TechnologySection> = ({ title, description, technologies }) => {
    return (
        <section className='productDetailPrimaryBg max-1199:py-10 py-32 commonMT max-1199:px-2'>
            <div className='grid max-1199:grid-cols-1 grid-cols-2'>
                <div className='max-1199:hidden'>
                    <Image src={techImg} height={0} width={0} alt='tech-img' className='w-auto h-auto' />
                </div>

                <div className='flex flex-col gap-y-8 lg:gap-y-12'>
                    <h4 className='sectionTitle max-1199:text-center'>{title}</h4>
                    <div className='flex flex-wrap gap-4 md:gap-7 lg:gap-14 max-1199:justify-center'>
                        {technologies.map((technology, index: number): React.ReactNode => (
                            <div className='border border-[#bfccd5] rounded-[8px] p-5 flexColCenter commonTextGap w-[90px] h-[130px] md:w-[200px] md:h-auto bg-white' key={index}>
                                <div className='h-[30px] w-[30px]'>
                                    <Image src={technology.image_url} height={0} width={0} alt='tech-used-img' className='w-full h-full' />
                                </div>
                                <span className='font-bold'>{technology.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Technologies