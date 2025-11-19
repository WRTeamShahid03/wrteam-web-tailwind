'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Countdown from 'react-countdown'
import line from '../../assets/images/stripeLine.svg'
import saleImg from '../../assets/images/saleImg.png'
import { motion } from 'framer-motion'
import { RiAlarmFill } from "react-icons/ri";
import saleIcon from '../../assets/images/cyber-sale-icons.svg'

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
        <div className='bg-[#B037A6] text-white xl:h-[70px] flexCenter !font-lexend relative px-4 lg:px-0 overflow-hidden'>

            <div className="mx-auto w-full">
                <div className='flex items-center justify-center gap-3 sm:gap-6 lg :gap-10 relative z-[2] py-3 xl:py-0 w-full'>
                    <div className='flex items-center gap-4 lg:gap-6 2xl:gap-8 flex-wrap 2xl:flex-nowrap'>

                        <div className='max-1199:hidden'>
                            <Image src={saleImg} alt='sale' width={0} height={0} className='w-auto max-h-[50px]  z-[1] hidden lg:block' />
                        </div>
                        <Image src={saleIcon} alt='sale' width={0} height={0} className='w-auto max-h-[32px]  z-[1] hidden between-1800-2500:block' />
                        <span className='hidden lg:flex max-399:text-sm text-[16px] sm:text-[18px] md:text-[22px] between-1200-1399:!text-xl lg:text-[26px] font-extrabold !font-archivo textShadowSale lg:!saleText text-center sm:text-left uppercase'>Best Deals of the Year</span>
                        <Image src={saleIcon} alt='sale' width={0} height={0} className='w-auto max-h-[32px]  z-[1] hidden between-1800-2500:block' />
                        <span className='!hidden lg:flex bg-[#86E54A] w-max p-2 2xl:p-0 2xl:w-[146px] text-white max-399:text-sm text-[16px] 2xl:text-[20px] font-extrabold py-1 h-[36px] flexCenter rounded-[10px] border-2 border-black textShadowSale2'>50% OFF</span>
                        <span className='max-399:text-sm text-[16px] sm:text-[18px]  font-extrabold !font-archivo block lg:hidden'>Cyber Sale is Live - 50% OFF</span>
                    </div>
                    <div className='flex flex-col sm:flex-row flex-wrap lg:flex-nowrap items-center gap-3 sm:gap-4'>
                        <div className='hidden lg:flex items-center max-399:text-sm text-[16px] sm:text-[18px] md:text-[22px] between-1200-1399:!text-xl lg:text-[26px] font-extrabold !font-archivo gap-2'>
                            <span className='font-black text-[#86E54A] text-3xl md:block hidden'><RiAlarmFill /></span>
                            <span className='textShadowSale'>Limited Time Offerrr</span>
                        </div>
                        <Image src={line} alt='line' width={0} height={0} className='w-[80px] sm:w-[100px] h-[80px] sm:h-[100px] hidden between-1800-2500:block' />
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
                                    className='p-2 2xl:p-0 w-auto 2xl:w-[210px] h-[37px] bg-[#86E54A] text-white rounded-[10px] border-2 border-black max-399:text-sm text-[16px] 2xl:text-[20px] font-extrabold !font-archivo whitespace-nowrap uppercase textShadowSale2 hidden sm:flexCenter'>Grab Deal Now</Link>
                                <Link href={'https://www.wrteam.in/freedom-sale?utm_source=website&utm_medium=strip&utm_campaign=freedom-sale'} target='_blank'
                                    className='p-2 2xl:p-0 w-auto 2xl:w-[210px] h-[37px] block flexCenter bg-[#86E54A] text-white rounded-[10px] border-2 border-black max-399:text-sm text-[16px] 2xl:text-[20px] font-extrabold !font-archivo whitespace-nowrap uppercase textShadowSale2 sm:hidden'>Grab Deal</Link>
                            </div>
                        </motion.div>
                        {/* {
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
                        } */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SaleStripe;
