"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Countdown from "react-countdown";
import line from "../../assets/images/stripeLine.svg";
import saleImg from "../../assets/images/saleImg.png";
import { motion } from "framer-motion";
import { RiAlarmFill } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa6";
import saleIcon from "../../assets/images/cyber-sale-icons.svg";
import yearEndSaleText from "../../assets/images/yearEndSale/year-end-sale.svg";
import flowerIcon from "../../assets/images/yearEndSale/flower.svg";
import offText from "../../assets/images/yearEndSale/off.svg";
import leftEffect from "../../assets/images/yearEndSale/left-effect.svg";
import rightEffect from "../../assets/images/yearEndSale/right-effect.svg";
import { parseSaleDate, isSaleDatePassed } from "../../lib/utils";
import headerBg from "../../assets/images/header_bg.svg";
import stripeLine from '@/assets/images/stripeLine.svg'

const SaleStripe = ({
  setShowSaleStripe,
}: {
  setShowSaleStripe: (value: boolean) => void;
}) => {
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

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
  const renderer = ({
    days,
    hours,
    minutes,
    seconds,
    completed,
  }: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    completed: boolean;
  }) => {
    if (completed) {
      return null;
    }

    const formatNumber = (num: number) => String(num).padStart(2, "0");
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
            <div className="flex flex-col items-center gap-0">
              <span className="text-base sm:text-lg font-bold text-[#212121]">
                {formatNumber(totalHours)}
              </span>
              <span className="text-[10px] sm:text-xs font-medium hidden sm:inline text-[#212121]">
                Hours
              </span>
            </div>
            <span className="text-[14px] sm:text-xs font-medium sm:hidden text-[#212121]">
              H
            </span>
          </div>
        </div>
        <span className="text-xs sm:text-sm font-bold text-[#231F20]">:</span>
        <div className="flex flex-col items-center">
          <div className="text-black font-black text-xs sm:text-sm rounded-md px-1 sm:px-2 py-1 flex items-center justify-center gap-1">
            <div className="flex flex-col items-center gap-0">
              <span className="text-base sm:text-lg font-bold text-[#212121]">
                {formatNumber(minutes)}
              </span>
              <span className="text-[10px] sm:text-xs font-medium hidden sm:inline text-[#212121]">
                Minutes
              </span>
            </div>
            <span className="text-[14px] sm:text-xs font-medium sm:hidden text-[#212121]">
              M
            </span>
          </div>
        </div>
        <span className="text-xs sm:text-sm font-bold text-[#231F20]">:</span>
        <div className="flex flex-col items-center">
          <div className="text-black font-black text-xs sm:text-sm rounded-md px-1 sm:px-2 py-1 flex items-center justify-center gap-1">
            <div className="flex flex-col items-center gap-0">
              <span className="text-base sm:text-lg font-bold text-[#212121]">
                {formatNumber(seconds)}
              </span>
              <span className="text-[10px] sm:text-xs font-medium hidden sm:inline text-[#212121]">
                Seconds
              </span>
            </div>
            <span className="text-[14px] sm:text-xs font-medium sm:hidden text-[#212121]">
              S
            </span>
          </div>
        </div>
      </div>
    );
  };

  // Year End Sale Countdown Renderer
  const yearEndRenderer = ({
    days,
    hours,
    minutes,
    seconds,
    completed,
  }: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    completed: boolean;
  }) => {
    if (completed) {
      return null;
    }
    const formatNumber = (num: number) => String(num).padStart(2, "0");

    const TimeBox = ({ value, label }: { value: number; label: string }) => (
      <div className="bg-white rounded-[5px] w-[35px]  sm:w-[50px] h-[36px] sm:h-[46px] flex flex-col items-center justify-center">
        <span className="text-[#212121] font-bold text-xs sm:text-lg leading-none mb-[2px]">
          {formatNumber(value)}
        </span>
        <span className="text-[#212121] text-[7px] sm:text-[9px] font-medium leading-none">
          {label}
        </span>
      </div>
    );

    return (
      <div className="flex items-center gap-2 my-2">
        <TimeBox value={days} label="Days" />
        <TimeBox value={hours} label="Hours" />
        <TimeBox value={minutes} label="Minutes" />
        <TimeBox value={seconds} label="Seconds" />
      </div>
    );
  };

  return (
    <>
      <div className="text-white lg:h-[42px] 2xl:h-[50px]  flexCenter relative px-4 lg:px-0 overflow-hidden"
      >

        <div className="absolute inset-0 z-0">
          <Image
            src={headerBg}
            alt="background"
            fill
            className="max-1199:!object-cover object-fill"
            priority
          />
        </div>

        {/* Content Container */}
        <div>
          <div className="relative z-10 hidden lg:flex items-center sm:gap-4 gap-2 xl:gap-12 w-full sm:justify-center max-w-[1920px] justify-between">

            {/* Flash Deals Text */}
            <span className="hidden lg:block text-black font-bold text-sm lg:text-md xl:text-lg whitespace-nowrap">
              Break the Limits – Extended License at 50% Off!
            </span>

            {/* Countdown */}
            {/* {targetDate && !isSaleDatePassed(targetDate) && isClient && (
              <div className="hidden sm:block">
                <Countdown
                  date={targetDate}
                  renderer={yearEndRenderer}
                  onComplete={() => setShowSaleStripe(false)}
                />
              </div>
            )} */}

            <div className="flexCenter gap-3">
              <div className="flexCenter gap-1">
                <span className="font-medium text-black">Limited Time Only!</span>
                <Image src={stripeLine} className="" alt="stripeLine" />
              </div>
            </div>
            <div>
              <Link
                href={
                  "/extended-sale"
                }
                target="_blank"
                className="flex bg-[#F11805] text-white rounded-[8px] sm:px-5 sm:py-2 py-1 px-6 items-center gap-2 text-sm font-bold shadow-md hover:scale-105 transition-transform"
              >
                Get Offer
              </Link>
            </div>
          </div>
          <div className="flexCenter gap-3 flex-wrap py-4 lg:hidden z-10 relative">

            <span className="text-black font-bold text-lg">
              Break the Limits – Extended License at 50% Off!
            </span>
            {/* {targetDate && !isSaleDatePassed(targetDate) && isClient && (
              <div className="">
                <Countdown
                  date={targetDate}
                  renderer={yearEndRenderer}
                  onComplete={() => setShowSaleStripe(false)}
                />
              </div>
            )} */}
            <Link
              href={
                "/extended-sale"
              }
              target="_blank"
              className="flex bg-[#F11805] text-white rounded-[8px] sm:px-5 sm:py-2 py-1 px-6 items-center gap-2 text-sm font-bold shadow-md hover:scale-105 transition-transform"
            >
              Get Offer
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SaleStripe;
