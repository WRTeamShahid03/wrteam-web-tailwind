"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Countdown from "react-countdown";
import { parseSaleDate, isSaleDatePassed } from "../../lib/utils";
import headerBg from "../../assets/images/header_bg.svg";

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
  const saleDateString = process.env.NEXT_PUBLIC_SALE_END_DATE;
  const targetDate = parseSaleDate(saleDateString);

  // Check if sale date has passed and hide the stripe if it has
  useEffect(() => {
    if (isSaleDatePassed(targetDate)) {
      setShowSaleStripe(false);
    }
  }, [targetDate, setShowSaleStripe]);

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

    const TimeBox = ({ value, label }: { value: number; label: string }) => (
      <div className="flex items-center gap-1 sm:gap-1.5 bg-black/80 px-2 py-1.5 rounded-[6px] shadow-sm">
        <span className="text-white font-bold text-base sm:text-xl leading-none">
          {formatNumber(value)}
        </span>
        <span className="text-white text-[8px] sm:text-[10px] font-medium uppercase leading-none opacity-90">
          {label}
        </span>
      </div>
    );

    return (
      <div className="flex items-center gap-1 sm:gap-2">
        <TimeBox value={totalHours} label="Hours" />
        <span className="text-black font-bold text-lg">:</span>
        <TimeBox value={minutes} label="Minutes" />
        <span className="text-black font-bold text-lg">:</span>
        <TimeBox value={seconds} label="Seconds" />
      </div>
    );
  };

  return (
    <div className="relative w-full h-[50px] sm:h-[60px] flex items-center overflow-hidden">
      {/* Background SVG - Using object-fill to preserve the slanted trapezoid shape */}
      <div className="absolute inset-0 z-0">
        <Image
          src={headerBg}
          alt="background"
          fill
          className="!object-fill"
          priority
        />
      </div>

      <div className="w-full px-4 sm:px-12 lg:px-24 z-10 flex items-center justify-between gap-4 overflow-x-auto no-scrollbar py-1">
        {/* Sale Main Text */}
        <div className="flex-shrink-0">
          <h2 className="text-black font-extrabold text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg tracking-tight uppercase whitespace-nowrap">
            BREAK THE LIMITS – EXTENDED LICENSE AT <span className="text-black">50% OFF!</span>
          </h2>
        </div>

        {/* Countdown and Call to Action Group */}
        <div className="flex items-center gap-2 sm:gap-6 lg:gap-8 flex-shrink-0">
          {/* Countdown */}
          {targetDate && !isSaleDatePassed(targetDate) && isClient && (
            <div className="hidden md:block scale-90 lg:scale-100">
              <Countdown
                date={targetDate}
                renderer={renderer}
                onComplete={() => setShowSaleStripe(false)}
              />
            </div>
          )}

          {/* Limited Time Only Group */}
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="hidden xl:flex flex-col">
              <span className="text-black font-semibold text-[10px] whitespace-nowrap leading-tight text-right">Limited Time Only!</span>
            </div>

            {/* Squiggly Arrow (SVG) */}
            <div className="hidden 2xl:block overflow-visible w-[40px] h-[15px]">
              <svg width="100%" height="100%" viewBox="0 0 60 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 10C10 5 15 15 25 10C35 5 40 15 50 10C53 8.5 55 8 58 10M58 10L54 6M58 10L54 14" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            {/* Red Action Button */}
            <Link
              href="/sale-offer"
              target="_blank"
              className="bg-[#FF0000] text-white rounded-[4px] px-3 sm:px-4 py-1 sm:py-1.5 flex items-center gap-2 text-[10px] sm:text-xs font-extrabold hover:bg-[#D00000] transition-colors shadow-md whitespace-nowrap"
            >
              Get Offer
            </Link>
          </div>
        </div>
      </div>


      {/* Mobile View - Small divider if needed */}
      <style jsx>{`
          .no-scrollbar::-webkit-scrollbar {
              display: none;
          }
          .no-scrollbar {
              -ms-overflow-style: none;
              scrollbar-width: none;
          }
      `}</style>
    </div>
  );
};


export default SaleStripe;
