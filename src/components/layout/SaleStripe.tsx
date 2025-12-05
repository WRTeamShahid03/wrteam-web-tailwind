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
import { parseSaleDate, isSaleDatePassed } from '../../lib/utils'

const SaleStripe = ({ setShowSaleStripe }: { setShowSaleStripe: (value: boolean) => void }) => {

    const [isClient, setIsClient] = useState<boolean>(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    // Get target date from environment variable and parse it
    // Format: "02/12/2025-6:30PM" (DD/MM/YYYY-HH:MMAM or DD/MM/YYYY-HH:MMPM)
    const saleDateString = process.env.NEXT_PUBLIC_SALE_END_DATE;
    const targetDate = parseSaleDate(saleDateString);

    // Check if sale date has passed and hide the stripe if it has
    useEffect(() => {
        if (isSaleDatePassed(targetDate)) {
            setShowSaleStripe(false);
        }
    }, [targetDate, setShowSaleStripe]);

    // Renderer for the countdown
    const renderer = ({ days, hours, minutes, seconds, completed }: { days: number, hours: number, minutes: number, seconds: number, completed: boolean }) => {
        if (completed) {
            return null;
        }

        const formatNumber = (num: number) => String(num).padStart(2, '0');
        const totalHours = days * 24 + hours;


        return (
            <div className="flex  items-baseline justify-center gap-1 sm:gap-2 p-1 mt-2 lg:mt-0 rounded-[10px] bg-[#FFF5ED] [box-shadow:0px_3px_0px_0px_#231F20]">
                {/* {days > 0 && (
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
                )} */}
                <div className="flex flex-col items-center">
                    <div className="text-black font-black text-xs sm:text-sm rounded-md px-1 sm:px-2 py-1 flex items-center justify-center gap-1">
                        <div className='flex flex-col items-center gap-0'>
                            <span className='text-base sm:text-lg font-bold text-[#212121]'>{formatNumber(totalHours)}</span>
                            <span className="text-[10px] sm:text-xs font-medium hidden sm:inline text-[#212121]">Hours</span>
                        </div>
                        <span className="text-[14px] sm:text-xs font-medium sm:hidden text-[#212121]">H</span>
                    </div>
                </div>
                <span className="text-xs sm:text-sm font-bold text-[#231F20]">:</span>
                <div className="flex flex-col items-center">
                    <div className="text-black font-black text-xs sm:text-sm rounded-md px-1 sm:px-2 py-1 flex items-center justify-center gap-1">
                        <div className='flex flex-col items-center gap-0'>
                            <span className='text-base sm:text-lg font-bold text-[#212121]'>{formatNumber(minutes)}</span>
                            <span className="text-[10px] sm:text-xs font-medium hidden sm:inline text-[#212121]">Minutes</span>
                        </div>
                        <span className="text-[14px] sm:text-xs font-medium sm:hidden text-[#212121]">M</span>
                    </div>
                </div>
                <span className="text-xs sm:text-sm font-bold text-[#231F20]">:</span>
                <div className="flex flex-col items-center">
                    <div className="text-black font-black text-xs sm:text-sm rounded-md px-1 sm:px-2 py-1 flex items-center justify-center gap-1">
                        <div className='flex flex-col items-center gap-0'>
                        <span className='text-base sm:text-lg font-bold text-[#212121]'>{formatNumber(seconds)}</span>
                        <span className="text-[10px] sm:text-xs font-medium hidden sm:inline text-[#212121]">Seconds</span>
                        </div>
                        <span className="text-[14px] sm:text-xs font-medium sm:hidden text-[#212121]">S</span>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className='bg-[#B037A6] text-white xl:h-[70px] flexCenter relative px-4 lg:px-0 overflow-hidden'>

            <div className="mx-auto w-full">
                <div className='flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 lg :gap-10 relative z-[2] py-3 xl:py-0 w-full'>
                    <div className='flex items-center gap-4 lg:gap-6 2xl:gap-8 flex-wrap 2xl:flex-nowrap'>

                        {/* <div className='max-1199:hidden'>
                            <Image src={saleImg} alt='sale' width={0} height={0} className='w-auto max-h-[50px]  z-[1] hidden lg:block' />
                        </div> */}
                        <Image src={saleIcon} alt='sale' width={0} height={0} className='w-auto max-h-[32px]  z-[1] hidden between-1800-2500:block' />
                        <span className='hidden lg:flex max-399:text-sm text-[16px] sm:text-[18px] md:text-[22px] between-1200-1399:!text-xl lg:text-[22px] font-extrabold  textShadowSale lg:!saleText text-center sm:text-left uppercase'>Cyber Sale Ends Soon</span>
                        <Image src={saleIcon} alt='sale' width={0} height={0} className='w-auto max-h-[32px]  z-[1] hidden between-1800-2500:block' />
                        <span className='hidden lg:flexCenter bg-[#86E54A] w-max p-2 2xl:p-0 2xl:w-[146px] text-white max-399:text-sm text-[16px] 2xl:text-[20px] font-extrabold py-1 h-[36px] rounded-[10px] textShadowSale neo-button'>50% OFF</span>
                        <span className='max-399:text-sm text-[16px] sm:text-[18px]  font-extrabold  block lg:hidden textShadowSale'>Cyber Sale Ends Soon - 50% OFF</span>
                    </div>
                    <div className='flex items-center justify-center flex-wrap lg:flex-nowrap gap-3 sm:gap-4'>
                        <div className='hidden sm:flex max-1465:hidden items-center max-399:text-sm text-[16px] sm:text-[18px] md:text-[22px] between-1200-1399:!text-xl lg:text-[22px] font-extrabold gap-2'>
                            <span className='font-black text-[#86E54A] text-3xl md:block hidden'><RiAlarmFill /></span>
                            <span className='textShadowSale'>Last Few Hours!</span>
                        </div>
                        {/* <Image src={line} alt='line' width={0} height={0} className='w-[80px] sm:w-[100px] h-[80px] sm:h-[100px] hidden between-1800-2500:block' /> */}
                        {/* Countdown timer shown here instead of the line image */}
                        {/* Only show countdown on client side to prevent hydration mismatch */}
                        {/* Only show countdown if target date is valid and not passed */}
                        {targetDate && !isSaleDatePassed(targetDate) && (
                            <div className="flex items-center">
                                {isClient ? (
                                    <Countdown
                                        date={targetDate}
                                        renderer={renderer}
                                        onComplete={() => setShowSaleStripe(false)}
                                        onMount={({ completed }) => {
                                            // If the sale is already over when the component mounts,
                                            // hide the sale stripe immediately.
                                            if (completed) {
                                                setTimeout(() => setShowSaleStripe(false), 0);
                                            }
                                        }}
                                    />
                                ) : (
                                    // Placeholder with same structure to prevent layout shift during SSR
                                    <div className="flex items-baseline justify-center gap-1 sm:gap-2 p-1 mt-2 lg:mt-0 rounded-[10px] bg-[#FFF5ED] [box-shadow:0px_3px_0px_0px_#231F20]">
                                        <div className="flex flex-col items-center">
                                            <div className="text-black font-black text-xs sm:text-sm rounded-md px-1 sm:px-2 py-1 flex items-center justify-center gap-1">
                                                <div className='flex flex-col items-center gap-0'>
                                                    <span className='text-base sm:text-lg font-bold text-[#212121]'>00</span>
                                                    <span className="text-[10px] sm:text-xs font-medium hidden sm:inline text-[#212121]">Hours</span>
                                                </div>
                                                <span className="text-[14px] sm:text-xs font-medium sm:hidden text-[#212121]">H</span>
                                            </div>
                                        </div>
                                        <span className="text-xs sm:text-sm font-bold text-[#231F20]">:</span>
                                        <div className="flex flex-col items-center">
                                            <div className="text-black font-black text-xs sm:text-sm rounded-md px-1 sm:px-2 py-1 flex items-center justify-center gap-1">
                                                <div className='flex flex-col items-center gap-0'>
                                                    <span className='text-base sm:text-lg font-bold text-[#212121]'>00</span>
                                                    <span className="text-[10px] sm:text-xs font-medium hidden sm:inline text-[#212121]">Minutes</span>
                                                </div>
                                                <span className="text-[14px] sm:text-xs font-medium sm:hidden text-[#212121]">M</span>
                                            </div>
                                        </div>
                                        <span className="text-xs sm:text-sm font-bold text-[#231F20]">:</span>
                                        <div className="flex flex-col items-center">
                                            <div className="text-black font-black text-xs sm:text-sm rounded-md px-1 sm:px-2 py-1 flex items-center justify-center gap-1">
                                                <div className='flex flex-col items-center gap-0'>
                                                    <span className='text-base sm:text-lg font-bold text-[#212121]'>00</span>
                                                    <span className="text-[10px] sm:text-xs font-medium hidden sm:inline text-[#212121]">Seconds</span>
                                                </div>
                                                <span className="text-[14px] sm:text-xs font-medium sm:hidden text-[#212121]">S</span>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
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
                                <Link href={'https://www.wrteam.in/cyber-sale?utm_source=website&utm_medium=strip&utm_campaign=cyber-sale'} target='_blank'
                                    className='p-2 2xl:p-0 w-auto 2xl:w-[210px] h-[37px] bg-[#86E54A] text-white rounded-[10px] border-2 border-black max-399:text-sm text-[16px] 2xl:text-[20px] font-extrabold  whitespace-nowrap uppercase textShadowSale hidden sm:flexCenter neo-button'>Grab Deal Now</Link>
                                <Link href={'https://www.wrteam.in/cyber-sale?utm_source=website&utm_medium=strip&utm_campaign=cyber-sale'} target='_blank'
                                    className='p-2 2xl:p-0 w-auto 2xl:w-[210px] h-[37px] block flexCenter bg-[#86E54A] text-white rounded-[10px] border-2 border-black max-399:text-sm text-[16px] 2xl:text-[20px] font-extrabold  whitespace-nowrap uppercase textShadowSale sm:hidden neo-button'>Grab Deal</Link>
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
