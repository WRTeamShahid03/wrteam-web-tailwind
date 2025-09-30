'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Countdown from 'react-countdown'
import line from '../../assets/images/stripeLine.svg'
import circle1 from '../../assets/images/stripeRightImg.svg'
import squareShape from '../../assets/images/stripeLeftImg.svg'
import grabDeal from '../../assets/images/grapDealBg.png'
import { RiArrowRightCircleFill } from "react-icons/ri";
import saleImg from '../../assets/images/saleImg.svg'
import { motion } from 'framer-motion'

const SaleStripe = ({ setShowSaleStripe }: { setShowSaleStripe: (value: boolean) => void }) => {

    const [isClient, setIsClient] = useState<boolean>(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    // Set target date to June 12th, 2025 at 7:30 PM
    const targetDate = new Date(2025, 7, 28, 19, 30, 0);

    // Renderer for the countdown
    const renderer = ({ days, hours, minutes, seconds, completed }: { days: number, hours: number, minutes: number, seconds: number, completed: boolean }) => {
        if (completed) {
            return null;
        }

        const formatNumber = (num: number) => String(num).padStart(2, '0');

        return (
            <div className="flex items-baseline justify-center gap-1 sm:gap-2 bg-white rounded-[6px] p-1 mt-2 lg:mt-0">
                {days > 0 && (
                    <>
                        <div className='flex items-center'>
                            <div className="text-black font-black text-xs sm:text-sm rounded-md px-1 sm:px-2 py-1 flex items-center justify-center gap-1">
                                <span className='text-base sm:text-lg font-bold'>{formatNumber(days)}</span>
                                <span className="text-[10px] sm:text-xs font-medium hidden sm:inline">Days</span>
                                <span className="text-[14px] sm:text-xs font-medium sm:hidden">D</span>
                            </div>
                        </div>
                        <span className="text-xs sm:text-sm font-bold text-[#FF6B21]">:</span>
                    </>
                )}
                <div className="flex flex-col items-center">
                    <div className="text-black font-black text-xs sm:text-sm rounded-md px-1 sm:px-2 py-1 flex items-center justify-center gap-1">
                        <span className='text-base sm:text-lg font-bold'>{formatNumber(hours)}</span>
                        <span className="text-[10px] sm:text-xs font-medium hidden sm:inline">Hours</span>
                        <span className="text-[14px] sm:text-xs font-medium sm:hidden">H</span>
                    </div>
                </div>
                <span className="text-xs sm:text-sm font-bold text-[#FF6B21]">:</span>
                <div className="flex flex-col items-center">
                    <div className="text-black font-black text-xs sm:text-sm rounded-md px-1 sm:px-2 py-1 flex items-center justify-center gap-1">
                        <span className='text-base sm:text-lg font-bold'>{formatNumber(minutes)}</span>
                        <span className="text-[10px] sm:text-xs font-medium hidden sm:inline">Minutes</span>
                        <span className="text-[14px] sm:text-xs font-medium sm:hidden">M</span>
                    </div>
                </div>
                <span className="text-xs sm:text-sm font-bold text-[#FF6B21]">:</span>
                <div className="flex flex-col items-center">
                    <div className="text-black font-black text-xs sm:text-sm rounded-md px-1 sm:px-2 py-1 flex items-center justify-center gap-1">
                        <span className='text-base sm:text-lg font-bold'>{formatNumber(seconds)}</span>
                        <span className="text-[10px] sm:text-xs font-medium hidden sm:inline">Seconds</span>
                        <span className="text-[14px] sm:text-xs font-medium sm:hidden">S</span>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className='bg-[#FF6B21] text-white xl:h-[80px] flexCenter !font-lexend relative px-4 lg:px-0 overflow-hidden'>
            <div className='max-1199:hidden'>
                <Image src={circle1} alt='sale' width={0} height={0} className='absolute top-0 left-0 w-auto h-auto  z-[1] hidden lg:block' />
                <Image src={squareShape} alt='sale' width={0} height={0} className='absolute top-0 right-0 w-auto h-auto  z-[1] hidden lg:block' />
            </div>
            <div className="mx-auto w-full">
                <div className='flex flex-col sm:flex-row flex-wrap sm:flex-nowrap items-center justify-center gap-3 sm:gap-6 md:gap-10 relative z-[2] py-3 between-1200-1399:!py-0 xl:py-0 w-full'>
                    <div className='max-1199:hidden'>
                        <Image src={saleImg} alt='sale' width={0} height={0} className='w-auto h-auto  z-[1] hidden lg:block' />
                    </div>
                    <span className='max-399:text-sm text-[16px] sm:text-[18px] md:text-[22px] between-1200-1399:!text-xl lg:text-[26px] font-extrabold !font-lexend textShadowSale lg:!saleText text-center sm:text-left' data-fill-text="Mid-Year Sale Extended — Last Chance!">Freedom Sale: Extended 2 Days | <span className='max-399:bg-transparent bg-white text-[#2B49DD] px-2 py-1 rounded-md'>50% OFF</span></span>
                    <div className='flex flex-col sm:flex-row flex-wrap xl:flex-nowrap items-center gap-3 sm:gap-4'>
                        {/* <div className='flex items-center sm:flex-col'>
                            <span className='font-bold text-base sm:text-lg'>Limited</span>
                            <span className='font-bold text-xs ml-2 sm:ml-0'>Time Only ⌛</span>
                        </div> */}
                        {/* <Image src={line} alt='line' width={0} height={0} className='w-[80px] sm:w-[100px] h-[80px] sm:h-[100px] hidden sm:block' /> */}
                        <div className='rive-animation-div'>

                        </div>
                        <motion.div
                            className="flex !flex-row items-center gap-4"
                            animate={{
                                x: [10, -10, 10],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >

                            <div className='relative'>
                                <Link href={'https://www.wrteam.in/freedom-sale?utm_source=website&utm_medium=strip&utm_campaign=freedom-sale'} target='_blank'
                                    className='p-2 md:py-3 sm:px-4 md:px-6 bg-white text-[#364ED2] rounded-full border-2 border-[#ffad3f] text-sm sm:text-base font-semibold !font-lexend whitespace-nowrap flexCenter gap-2'>Grab Deal <RiArrowRightCircleFill size={18} /></Link>
                            </div>
                        </motion.div>
                        {
                            isClient && (
                                <div className='countdown-timer'>

                                    <Countdown
                                        date={targetDate}
                                        renderer={renderer}
                                        onComplete={() => setShowSaleStripe(false)}
                                        onMount={({ completed }) => {
                                            if (completed) {
                                                setTimeout(() => setShowSaleStripe(false), 0);
                                            }
                                        }}

                                    />
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SaleStripe;
