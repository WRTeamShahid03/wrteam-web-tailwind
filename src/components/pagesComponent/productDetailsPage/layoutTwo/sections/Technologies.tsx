import Image from 'next/image'
import React from 'react'
import techImg from '../../../../../assets/images/productDetailPage/layoutTwo/techSect.webp'
import flutter from '../../../../../assets/images/productDetailPage/layoutTwo/flutter.svg'

const Technologies: React.FC = () => {
    return (
        <section className='productDetailPrimaryBg max-1199:py-10 py-32 commonMT max-1199:px-2'>
            <div className='grid max-1199:grid-cols-1 grid-cols-2'>
                <div className='max-1199:hidden'>
                    <Image src={techImg} height={0} width={0} alt='tech-img' className='w-auto h-auto' />
                </div>

                <div className='flex flex-col gap-y-8 lg:gap-y-12'>
                    <h4 className='sectionTitle max-1199:text-center'>Technologies That Make eClassify Powerful</h4>
                    <div className='flex flex-wrap gap-4 md:gap-7 lg:gap-14 max-1199:justify-center'>
                        <div className='border border-[#bfccd5] rounded-[8px] p-5 flexColCenter commonTextGap w-[90px] h-[130px] md:w-[200px] md:h-auto bg-white'>
                            <Image src={flutter} height={0} width={0} alt='tech-used-img' />
                            <span className='font-bold'>Flutter 3. x</span>
                        </div>
                        <div className='border border-[#bfccd5] rounded-[8px] p-5 flexColCenter commonTextGap w-[90px] h-[130px] md:w-[200px] md:h-auto bg-white'>
                            <Image src={flutter} height={0} width={0} alt='tech-used-img' />
                            <span className='font-bold'>Flutter 3. x</span>
                        </div>
                        <div className='border border-[#bfccd5] rounded-[8px] p-5 flexColCenter commonTextGap w-[90px] h-[130px] md:w-[200px] md:h-auto bg-white'>
                            <Image src={flutter} height={0} width={0} alt='tech-used-img' />
                            <span className='font-bold'>Flutter 3. x</span>
                        </div>
                        <div className='border border-[#bfccd5] rounded-[8px] p-5 flexColCenter commonTextGap w-[90px] h-[130px] md:w-[200px] md:h-auto bg-white'>
                            <Image src={flutter} height={0} width={0} alt='tech-used-img' />
                            <span className='font-bold'>Flutter 3. x</span>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Technologies