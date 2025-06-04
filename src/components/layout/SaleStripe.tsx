'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import line from '../../assets/images/stripeLine.svg'
import shape1 from '../../assets/images/circleShape.png'
import circle1 from '../../assets/images/circle1.png'
import circle2 from '../../assets/images/circle2.png'
import squareShape from '../../assets/images/squaresShape.png'
import limitedShape from '../../assets/images/limitedBg.png'
import grabDeal from '../../assets/images/grapDealBg.png'

const SaleStripe = ({ setShowSaleStripe }: { setShowSaleStripe: (value: boolean) => void }) => {

    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    function getTargetTime() {
        const today = new Date();
        // Set the sale to end 3 days from now at 23:59:59
        const target = new Date();
        target.setDate(today.getDate() + 3);
        target.setHours(23, 59, 59, 0);
        return target;
    }

    function calculateTimeRemaining() {
        const now = new Date();
        const difference = getTargetTime().getTime() - now.getTime();

        // Return all zero if past end time
        if (difference <= 0) {
            return {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0
            };
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        return {
            days,
            hours,
            minutes,
            seconds
        };
    }

    const [targetTime] = useState(getTargetTime());
    const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

    useEffect(() => {
        const timer = setInterval(() => {
            const remaining = calculateTimeRemaining();
            setTimeRemaining(remaining);

            // Clear interval if countdown is finished
            if (remaining.days === 0 && remaining.hours === 0 &&
                remaining.minutes === 0 && remaining.seconds === 0) {
                clearInterval(timer);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatNumber = (number: number) => {
        return number.toString().padStart(2, '0');
    };


    return (
        <div className='bg-[#FF6B21] text-white lg:h-[60px] flexCenter !font-archivo relative'>
            <div>
                <Image src={circle1} alt='sale' width={0} height={0} className='absolute top-0 left-0 w-auto h-auto customFilter z-[1] hidden lg:block' />
                <Image src={circle2} alt='sale' width={0} height={0} className='absolute bottom-0 left-0 w-auto h-auto customFilter z-[1] hidden lg:block' />
                <Image src={circle2} alt='sale' width={0} height={0} className='absolute bottom-0 left-16 w-auto h-auto customFilter z-[1] hidden lg:block' />
                <Image src={circle1} alt='sale' width={0} height={0} className='absolute top-0 left-[34%] w-auto h-auto customFilter z-[1] hidden lg:block' />
                <Image src={squareShape} alt='sale' width={0} height={0} className='absolute top-0 right-4 w-auto h-[58px] customFilter z-[1] hidden lg:block' />

            </div>
            <div className="max-1680:!container 2xl:max-w-[1620px] mx-auto w-full">
                <div className='flex items-center gap-2 justify-between relative z-[2] flex-wrap py-2 lg:py-0 w-full'>
                    <span className='sm:text-[20px] md:text-[22px] lg:text-[26px] font-extrabold !font-archivo textShadowSale saleText' data-fill-text="Mid-Year Sale is Live.!  Get Flat 50% OFF">Mid-Year Sale is Live.!  Get Flat 50% OFF</span>

                    <div className='flex items-center gap-4'>
                        <div className='flex items-center flex-col'>
                            <span className='font-bold text-lg'>Limited</span>
                            <span className='font-bold text-xs'>Time Only ⌛</span>
                        </div>
                        <Image src={line} alt='line' width={0} height={0} className='w-[100px] h-[100px] hidden sm:block' />
                        <div className='relative'>
                            <Image src={grabDeal} alt='line' width={0} height={0} className='absolute -top-[18px] w-[140px] h-[12px] z-[1] hidden lg:block' />
                            <Link href={'https://www.wrteam.in/mid-year-sale?utm_source=website&utm_medium=strip&utm_campaign=mid-year-sale'} target='_blank' className='bg-white py-2 px-6 text-black rounded-[8px] font-bold border-2 border-[#ffad3f]'>Grap Deal</Link>
                        </div>
                    </div>

                    {/* countdown */}
                    {/* <div className="flex items-baseline justify-center gap-2 bg-white rounded-[12px] p-3">
                        <div className="flex flex-col items-center">
                            <div className="bg-white text-black shadow-[0px_12px_48px_0px_#FFFFFF3D] font-black text-sm rounded-2xl flex items-center justify-center gap-1">
                                {formatNumber(timeRemaining.days)}
                                <span className="text-sm text-black font-medium">Days</span>
                            </div>
                        </div>

                        <span className="text-sm font-bold text-[#FF6B21]">:</span>
                        <div className="flex flex-col items-center">
                            <div className="bg-white text-black shadow-[0px_12px_48px_0px_#FFFFFF3D] font-black text-sm rounded-2xl flex items-center justify-center gap-1">
                                {formatNumber(timeRemaining.hours)}
                                <span className="text-sm text-black font-medium">Hours</span>
                            </div>
                        </div>

                        <span className="text-sm font-bold text-[#FF6B21]">:</span>
                        <div className="flex flex-col items-center">
                            <div className="bg-white text-black shadow-[0px_12px_48px_0px_#FFFFFF3D] font-black text-sm rounded-2xl flex items-center justify-center gap-1">
                                {formatNumber(timeRemaining.minutes)}
                                <span className="text-sm text-black font-medium">Minutes</span>
                            </div>
                        </div>

                        <span className="text-sm font-bold text-[#FF6B21]">:</span>
                        <div className="flex flex-col items-center">
                            <div className="bg-white text-black shadow-[0px_12px_48px_0px_#FFFFFF3D] font-black text-sm rounded-2xl flex items-center justify-center gap-1">
                                {formatNumber(timeRemaining.seconds)}
                                <span className="text-sm text-black font-medium">Seconds</span>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default SaleStripe
