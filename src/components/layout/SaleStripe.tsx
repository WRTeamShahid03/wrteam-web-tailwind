'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Countdown from 'react-countdown'
import line from '../../assets/images/stripeLine.svg'
import circle1 from '../../assets/images/circle1.png'
import circle2 from '../../assets/images/circle2.png'
import squareShape from '../../assets/images/squaresShape.png'
import grabDeal from '../../assets/images/grapDealBg.png'

const SaleStripe = ({ setShowSaleStripe }: { setShowSaleStripe: (value: boolean) => void }) => {

    const [isClient, setIsClient] = useState<boolean>(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    // Set target date to June 12th, 2025 at 7:30 PM
    const targetDate = new Date(2025, 5, 12, 19, 39, 0);

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
        <div className='bg-[#FF6B21] text-white xl:max-h-[60px] flexCenter !font-lexend relative px-4 lg:px-0'>
            <div>
                <Image src={circle1} alt='sale' width={0} height={0} className='absolute top-0 left-0 w-auto h-auto customFilter z-[1] hidden lg:block' />
                <Image src={circle2} alt='sale' width={0} height={0} className='absolute bottom-0 left-0 w-auto h-auto customFilter z-[1] hidden lg:block' />
                <Image src={circle2} alt='sale' width={0} height={0} className='absolute bottom-0 left-16 w-auto h-auto customFilter z-[1] hidden lg:block' />
                <Image src={circle1} alt='sale' width={0} height={0} className='absolute top-0 left-[34%] w-auto h-auto customFilter z-[1] hidden lg:block' />
                <Image src={squareShape} alt='sale' width={0} height={0} className='absolute top-0 right-4 w-auto h-[58px] customFilter z-[1] hidden lg:block' />
            </div>
            <div className="max-1680:!container 2xl:max-w-[1620px] mx-auto w-full">
                <div className='flex flex-col sm:flex-row flex-wrap xl:flex-nowrap items-center gap-3 sm:gap-2 justify-between relative z-[2] py-3 lg:py-0 w-full'>
                    <span className='text-[16px] sm:text-[20px] md:text-[22px] lg:text-[26px] font-extrabold !font-lexend textShadowSale lg:!saleText text-center sm:text-left' data-fill-text="Mid-Year Sale Extended — Last Chance!">Mid-Year Sale Extended — Last Chance!</span>
                    <div className='flex flex-col sm:flex-row flex-wrap xl:flex-nowrap items-center gap-3 sm:gap-4'>
                        <div className='flex items-center sm:flex-col'>
                            <span className='font-bold text-base sm:text-lg'>Limited</span>
                            <span className='font-bold text-xs ml-2 sm:ml-0'>Time Only ⌛</span>
                        </div>
                        <Image src={line} alt='line' width={0} height={0} className='w-[80px] sm:w-[100px] h-[80px] sm:h-[100px] hidden sm:block' />
                        <div className='flex !flex-row items-center gap-4'>
                            <div className='relative'>
                                <Image src={grabDeal} alt='line' width={0} height={0} className='absolute -top-[20px] w-[140px] h-[30px] -z-[1] hidden xl:block' />
                                <Link href={'https://www.wrteam.in/mid-year-sale?utm_source=website&utm_medium=strip&utm_campaign=mid-year-sale'} target='_blank'
                                    className='py-3 px-4 sm:px-6 bg-white text-black rounded-[8px] border-2 border-[#ffad3f] text-xs sm:text-sm font-semibold !font-lexend whitespace-nowrap'>Grab Deal</Link>
                            </div>
                        </div>
                        {
                            isClient && (
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
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SaleStripe;
