'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import line from '../../assets/images/stripeLine.svg'
import shape1 from '../../assets/images/circleShape.png'
import circle1 from '../../assets/images/circle1.png'
import circle2 from '../../assets/images/circle2.png'
import squareShape from '../../assets/images/squaresShape.png'
import limitedShape from '../../assets/images/limitedBg.png'
import grabDeal from '../../assets/images/grapDealBg.png'

const SaleStripe = () => {
    return (
        <div className='bg-[#FF6B21] text-white lg:h-[60px] flexCenter !font-archivo relative'>
            <div>
                <Image src={circle1} alt='sale' width={0} height={0} className='absolute top-0 left-12 w-auto h-auto customFilter z-[1] hidden lg:block' />
                <Image src={circle2} alt='sale' width={0} height={0} className='absolute bottom-0 left-12 w-auto h-auto customFilter z-[1] hidden lg:block' />
                <Image src={circle2} alt='sale' width={0} height={0} className='absolute bottom-0 left-28 w-auto h-auto customFilter z-[1] hidden lg:block' />
                <Image src={circle1} alt='sale' width={0} height={0} className='absolute top-0 left-1/2 w-auto h-auto customFilter z-[1] hidden lg:block' />
                <Image src={squareShape} alt='sale' width={0} height={0} className='absolute top-0 right-4 w-auto h-[58px] customFilter z-[1] hidden lg:block' />

            </div>
            <div className="container">
                <div className='flex items-center gap-2 justify-between relative z-[2] flex-wrap py-2 lg:py-0'>
                    <span className='sm:text-[20px] md:text-[22px] lg:text-[26px] font-extrabold !font-archivo textShadowSale saleText' data-fill-text="Mid-Year Sale is Live.!  Get Flat 50% OFF">Mid-Year Sale is Live.!  Get Flat 50% OFF</span>

                    <div className='flex items-center gap-4'>
                        <div className='flex items-center flex-col'>
                            <span className='font-bold'>Limited</span>
                            <span className='font-bold text-xs'>Time Only ⌛</span>
                        </div>
                        <Image src={line} alt='line' width={0} height={0} className='w-[100px] h-[100px] hidden sm:block' />
                        <div className=''>
                            <Image src={grabDeal} alt='line' width={0} height={0} className='absolute top-0 w-[140px] h-[12px] z-[1] hidden lg:block' />
                            <Link href={'/products'} className='bg-white py-2 px-6 text-black rounded-[8px] font-bold border-2 border-[#ffad3f]'>Grap Deal</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SaleStripe
