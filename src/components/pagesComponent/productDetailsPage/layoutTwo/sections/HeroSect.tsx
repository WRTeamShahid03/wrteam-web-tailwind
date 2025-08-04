import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface HeroSectProps {
    title: string;
    description: string;
    imageUrl: string;
    // buttonText: string;
    // buttonLink: string;
}

const HeroSect: React.FC<HeroSectProps> = ({ title, description, imageUrl }) => {
    return (
        <section className='productDetailPrimaryBg py-10 md:py-16 lg:py-20'>
            <div className='flexColCenter commonTextGap lg:w-[35%] mx-auto text-center'>
                <h1 className='sectionTitle !font-bold'>{title}</h1>
                <p className='sectionPara' dangerouslySetInnerHTML={{ __html: description || '' }} />
                <div className='flexCenter gap-6 font-semibold'>
                    <Link href={'#explore-demo'} title='Explore Demo' className='productPrimaryBg rounded-full h-[48px] flexCenter w-[140px] text-white'>
                        Explore Demo
                    </Link>
                    <Link href={'#license'} title='Buy Now' className='bg-transparent rounded-full h-[48px] flexCenter w-[128px] productDetailPrimaryColor border-[2px] productDetailPrimaryBorder'>
                        Buy Now
                    </Link>
                </div>
                <div className='w-full h-full relative z-[1]'>
                    <Image
                        src={imageUrl}
                        width={800}
                        height={600}
                        alt='product-img'
                        className='w-full h-auto'
                        priority
                        fetchPriority="high"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>
            </div>
        </section>
    )
}

export default HeroSect