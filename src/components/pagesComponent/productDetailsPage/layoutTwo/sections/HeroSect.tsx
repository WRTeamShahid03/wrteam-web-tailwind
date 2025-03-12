import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import img from '../../../../../assets/images/productDetailPage/layoutTwo/heroSect.webp'

const HeroSect = () => {
    return (
        <section className='productDetailPrimaryBg py-20'>
            <div className='flexColCenter commonTextGap lg:w-[35%] mx-auto text-center'>
                <h1 className='sectionTitle !font-bold'>Build Your Own Classified Marketplace with Prebuilt Classified Ads Script</h1>
                <p className='sectionPara'>eClassify is a ready-made classified ads marketplace that lets you create a buy-and-sell marketplace app and website without starting from scratch. It’s the ideal solution for launching your PHP-based classified marketplace platform affordably and effortlessly</p>
                <div className='flexCenter gap-6 font-semibold'>
                    <Link href={''} title='Explore Demo' className='productPrimaryBg rounded-full h-[48px] flexCenter w-[140px] text-white'>
                        Explore Demo
                    </Link>
                    <Link href={''} title='Buy Now' className='bg-transparent rounded-full h-[48px] flexCenter w-[128px] productDetailPrimaryColor border-[2px] productDetailPrimaryBorder'>
                        Buy Now
                    </Link>
                </div>
                <div>
                    <Image src={img} height={0} width={0} alt='product-img'/>
                </div>
            </div>
        </section>
    )
}

export default HeroSect