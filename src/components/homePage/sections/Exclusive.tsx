'use client'
import Image from 'next/image'
import React from 'react'
import eliteAuthor from '../../../assets/images/homePage/Elite Author.png'
import winnerTeam from '../../../assets/images/homePage/Winner Team.png'
import saleCount from '../../../assets/images/homePage/Sale Count.png'
import Link from 'next/link'

const Exclusive: React.FC = () => {
    return (
        <section className='secondaryBg commonMT py-12 md:py-20 lg:py-28'>
            <div className="container space-y-14 md:space-y-16 lg:space-y-20">
                <div className='flexColCenter gap-6 md:gap-10 lg:w-[70%] xl:w-[58%] text-center m-auto'>
                    <span className='bg-[#ffffff1f] text-white py-3 px-8 rounded-[8px] text-sm sm:text-base'>Exclusive on CodeCanyon</span>
                    <h5 className='text-xl md:text-2xl lg:text-3xl text-white font-[600]'>Your Gateway to <span className='bg-gradient-to-b from-[#e9b947] to-[#9d7b2d] bg-clip-text text-transparent'>Premium</span> Solutions</h5>
                    <p className='text-[#d1d1d1] text-sm sm:text-base'>Proudly recognised as an elite author on Codecanyon. Our premium, innovative customized applications, and website source code are prioritized and user-centric and undergo consistent updates to stay ahead of the competition.</p>
                </div>

                <div className='flexCenter flex-wrap gap-10'>
                    <div>
                        <Image src={eliteAuthor} height={0} width={0} alt='' className='m-auto w-[80%] h-auto' />
                    </div>
                    <div>
                        <Image src={winnerTeam} height={0} width={0} alt='' className='m-auto w-[80%] h-auto' />
                    </div>
                    <div>
                        <Image src={saleCount} height={0} width={0} alt='' className='m-auto w-[80%] h-auto' />
                    </div>
                </div>

                <div className='flexCenter'>
                    <Link href={'https://1.envato.market/75rdmQ'} target='_blank' title='explore' className='bg-[#ffffff1f] text-white rounded-[60px] flexCenter text-lg md:text-xl font-semibold w-[180px] h-[50px] md:w-[250px] md:h-[64px] transition-all duration-300 hover:bg-[#82b541] hover:shadow-[0_8px_28px_#82b54152]'>
                        Explore
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Exclusive