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
      <div className="strip-bg text-white xl:h-[70px] flexCenter relative px-4 lg:px-0 overflow-hidden min-h-[60px] ">
        {/* Background Effects */}
        <Image
          src={leftEffect}
          alt="effect"
          className="absolute left-0 top-0 h-full w-auto object-cover z-0 pointer-events-none"
        />
        <Image
          src={rightEffect}
          alt="effect"
          className="absolute right-0 top-0 h-full w-auto object-cover z-0 pointer-events-none"
        />

        {/* Content Container */}
        <div>
        <div className="relative z-10 flex items-center sm:gap-4 gap-2 xl:gap-6 w-full sm:justify-center max-w-[1920px] justify-between mt-2">
          {/* Left Buy Now Button (Hidden on smaller screens, shown if space permits or based on design) */}
          {/* <Link
            href={
              "https://www.wrteam.in/year-end-sale?utm_source=website&utm_medium=strip&utm_campaign=year-end-sale"
            }
            target="_blank"
            className=" 2xl:flex bg-white text-[#D01818] rounded-full px-5 py-2 items-center gap-2 text-sm font-bold shadow-md hover:scale-105 transition-transform hidden sm:block"
          >
            Buy Now{" "}
            <FaArrowRight className="bg-[#D01818] text-white rounded-full p-[3px] text-sm" />
          </Link> */}

          {/* Year End Sale Text Image */}
          <Image
            src={yearEndSaleText}
            alt="Year End Sale"
            className="h-[25px] md:h-[30px] lg:h-[25px] xl:h-[40px] w-auto object-contain"
          />

          {/* Flash Deals Text */}
          <span className="hidden lg:block text-white font-bold text-sm lg:text-md xl:text-xl whitespace-nowrap">
            Flash Deals - Year-End Savings
          </span>

          {/* Flower Icon */}
          <Image
            src={flowerIcon}
            alt="flower"
            className="hidden lg:block h-[24px] w-auto object-contain"
          />

          {/* 60% OFF Image */}
          <Image
            src={offText}
            alt="60% OFF"
            className="h-[30px] sm:h-[22px] lg:h-[30px] xl:h-[40px] w-auto object-contain"
          />

          {/* Flower Icon */}
          <Image
            src={flowerIcon}
            alt="flower"
            className="hidden lg:block h-[24px] w-auto object-contain"
          />

          {/* Countdown */}
          {targetDate && !isSaleDatePassed(targetDate) && isClient && (
            <div className="hidden sm:block">
              <Countdown
                date={targetDate}
                renderer={yearEndRenderer}
                onComplete={() => setShowSaleStripe(false)}
              />
            </div>
          )}

          {/* Right Buy Now Button */}
          <Link
            href={
              "https://www.wrteam.in/year-end-sale"
            }
            target="_blank"
            className=" bg-white text-[#D01818] rounded-full sm:px-5 sm:py-2 py-1 px-2 items-center gap-2 text-sm font-bold shadow-md hover:scale-105 transition-transform hidden sm:flex"
          >
            Buy Now{" "}
            <FaArrowRight className="bg-[#D01818] text-white rounded-full p-[3px] text-sm" />
          </Link>
        </div>
        <div className="flex justify-center items-center gap-2 my-2 sm:hidden z-10 relative">
            {targetDate && !isSaleDatePassed(targetDate) && isClient && (
            <div className="">
              <Countdown
                date={targetDate}
                renderer={yearEndRenderer}
                onComplete={() => setShowSaleStripe(false)}
              />
            </div>
          )}
          <Link
            href={
              "https://www.wrteam.in/year-end-sale"
            }
            target="_blank"
            className="flex bg-white text-[#D01818] rounded-full sm:px-5 sm:py-2 py-1 px-2 items-center gap-2 text-sm font-bold shadow-md hover:scale-105 transition-transform"
          >
            Buy Now{" "}
            <FaArrowRight className="bg-[#D01818] text-white rounded-full p-[3px] text-sm" />
          </Link>
        </div>
        </div>
      </div>
    </>
  );
};

export default SaleStripe;
