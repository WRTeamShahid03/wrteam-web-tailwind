'use client'

import { useRive } from "@rive-app/react-canvas";
import { useState, useEffect } from 'react';

export default function RiveAnimation() {
  const { RiveComponent: DiyoRive } = useRive({
    src: '/diwali_sale_strip_components.riv',
    autoplay: true,
    artboard: "Diyo",
  });

  const { RiveComponent: DiyoRive2 } = useRive({
    src: '/diwali_sale_strip_components.riv',
    autoplay: true,
    artboard: "Diyo",
  });

  const { RiveComponent: LeftRangoliRive } = useRive({
    src: '/diwali_sale_strip_components.riv',
    autoplay: true,
    artboard: "Rangoli",
    animations: "idle",
  });

  const { RiveComponent: RightRangoliRive } = useRive({
    src: '/diwali_sale_strip_components.riv',
    autoplay: true,
    artboard: "Rangoli",
    animations: "idle",
  });

  const { RiveComponent: SaleLogoRive } = useRive({
    src: '/diwali_sale_strip_components.riv',
    autoplay: true,
    artboard: "Sale Logo",
  });

  const { RiveComponent: ButtonRive } = useRive({
    src: '/diwali_sale_strip_components.riv',
    autoplay: true,
    artboard: "Button",
  });

  const { RiveComponent: DiscountRive } = useRive({
    src: '/diwali_sale_strip_components.riv',
    autoplay: true,
    artboard: "DIsccount",
  });

  const { RiveComponent: RocketRive } = useRive({
    src: '/diwali_sale_strip_components.riv',
    autoplay: true,
    artboard: "Rocket",
  });

  return (
    <div className='w-full h-auto min-h-[60px] sm:min-h-[70px] md:min-h-[54px] relative bg-gradient-to-r from-orange-50 to-yellow-50 overflow-hidden py-2 sm:py-2.5 md:py-2'>
      
      {/* Background Decorative Elements */}
      <div className="absolute top-[-100px] sm:top-[-120px] md:top-[-140px] lg:top-[-148px] left-[-40px] sm:left-[-50px] md:left-[-60px] h-[120px] sm:h-[150px] md:h-[180px] lg:h-[200px] w-[120px] sm:w-[150px] md:w-[180px] lg:w-[200px] opacity-80">
        <LeftRangoliRive />
      </div>

      <div className="absolute top-[-100px] sm:top-[-120px] md:top-[-140px] lg:top-[-148px] right-[-40px] sm:right-[-50px] md:right-[-60px] h-[120px] sm:h-[150px] md:h-[180px] lg:h-[200px] w-[120px] sm:w-[150px] md:w-[180px] lg:w-[200px] opacity-80">
        <RightRangoliRive />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 h-full flex flex-col md:flex-row items-center justify-center md:justify-between px-2 sm:px-3 md:px-6 lg:px-8 gap-1 md:gap-4">
        
        {/* Left Section: Sale Logo - ALWAYS VISIBLE */}
        <div className="hidden md:flex items-center flex-shrink-0 " >
          <div className="w-12 h-8 sm:w-14 sm:h-9 md:w-16 md:h-10 lg:w-20 lg:h-11 xl:w-24 xl:h-12">
            <SaleLogoRive />
          </div>
        </div>

        {/* Center Section: Main Content (Two Rows on Mobile/Tablet, Single Row on Desktop) */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 flex-grow">
          
          {/* First Row/Section: Diwali Sale Message */}
          <div className="flex items-center justify-center gap-1 sm:gap-1.5 md:gap-2 lg:gap-3">
            {/* First Diya */}
            <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-9 lg:w-12 lg:h-10 flex-shrink-0 hidden md:block ">
              <DiyoRive />
            </div>

            {/* Diwali Sale Text */}
            <div className="hidden md:block text-[11px] sm:text-[13px] md:text-[16px] lg:text-[18px] xl:text-[22px] font-black leading-tight tracking-tight bg-gradient-to-r from-[#B50000] via-[#7C0079] to-black bg-clip-text text-transparent whitespace-nowrap" style={{
              fontFamily: 'Lexend'
            }}>
              Diwali Sale with
            </div>
<div className="flex md:hidden items-center flex-shrink-0 ">
<div className="w-12 h-8 sm:w-14 sm:h-9 md:w-16 md:h-10 lg:w-20 lg:h-11 xl:w-24 xl:h-12">
            <SaleLogoRive />
          </div>
          <div className="text-[11px] sm:text-[13px] md:text-[16px] lg:text-[18px] xl:text-[22px] font-black leading-tight tracking-tight bg-gradient-to-r from-[#B50000] via-[#7C0079] to-black bg-clip-text text-transparent whitespace-nowrap" style={{
              fontFamily: 'Lexend'
            }}>
              with
            </div>
</div>
            {/* Discount Icon */}
            <div className="w-8 h-6 sm:w-9 sm:h-7 md:w-10 md:h-7 lg:w-11 lg:h-8 xl:w-12 xl:h-8 flex-shrink-0">
              <DiscountRive />
            </div>

            {/* Discount Text */}
            <div className="text-[11px] sm:text-[13px] md:text-[16px] lg:text-[18px] xl:text-[22px] font-black leading-tight tracking-tight bg-gradient-to-r from-[#B50000] via-[#7C0079] to-black bg-clip-text text-transparent whitespace-nowrap" style={{
              fontFamily: 'Lexend'
            }}>
              Discount
            </div>

            {/* Second Diya */}
            <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-9 lg:w-12 lg:h-10 flex-shrink-0 hidden md:block ">
              <DiyoRive2 />
            </div>
          </div>

          {/* Second Row/Section: Limited Time Offer + Rocket (Desktop only) + Buy Now Button */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4">
            {/* Limited Time Offer Text */}
            <div className="text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] font-black leading-tight bg-gradient-to-r from-[#B50000] via-[#7C0079] to-black bg-clip-text text-transparent whitespace-nowrap" style={{
              fontFamily: 'Lexend'
            }}>
              Limited Time Offer!
            </div>

            {/* Rocket - ONLY VISIBLE ON DESKTOP (MD and above) */}
            <div className="hidden md:block w-24 h-4 md:w-32 md:h-5 lg:w-40 lg:h-5 xl:w-48 xl:h-6 flex-shrink-0">
              <RocketRive />
            </div>

            {/* Buy Now Button */}
            <div className="w-20 h-7 sm:w-24 sm:h-8 md:w-28 md:h-9 lg:w-32 lg:h-10 xl:w-36 xl:h-10 flex-shrink-0">
              <ButtonRive />
            </div>
          </div>
        </div>

        {/* Right Section: Empty spacer for balance on desktop */}
        <div className="hidden md:block w-16 lg:w-20 xl:w-24 flex-shrink-0"></div>
      </div>
    </div>
  );
}