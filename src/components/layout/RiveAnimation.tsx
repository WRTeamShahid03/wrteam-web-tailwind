'use client'

import { useRive, useStateMachineInput } from "@rive-app/react-canvas";
import Link from "next/link";
import { useCallback } from "react";

export default function RiveAnimation() {
  // Optimized Rive configuration for performance
  const riveConfig = {
    src: '/diwali_sale_strip_components.riv',
    autoplay: true,
    // Performance optimizations
    fit: 'cover',
    alignment: 'center',
    // Reduce animation complexity for smoother performance
    shouldDisableRiveListeners: false,
  };



  const { RiveComponent: DiyoRive } = useRive({
    ...riveConfig,
    artboard: "Diyo",
  });

  const { RiveComponent: DiyoRive2 } = useRive({
    ...riveConfig,
    artboard: "Diyo",
  });

  const { RiveComponent: LeftRangoliRive } = useRive({
    ...riveConfig,
    artboard: "Rangoli",
  });

  const { RiveComponent: RightRangoliRive } = useRive({
    ...riveConfig,
    artboard: "Rangoli",
  });

  const { RiveComponent: SaleLogoRive } = useRive({
    ...riveConfig,
    artboard: "Sale Logo", // Try: "SaleLogo", "Sale_Logo", "sale_logo"
  });

  // Button Rive with State Machine
  const BUTTON_STATE_MACHINE = "State Machine"; // must match exactly in Rive
  const HOVER_INPUT = "Hover"; // case-sensitive
  const HOVER_EXIT_INPUT = "Hover Exit"; // case-sensitive

  const { RiveComponent: ButtonRive, rive } = useRive({
    ...riveConfig,
    artboard: "Button",
    stateMachines: BUTTON_STATE_MACHINE,
    autoplay: true,
  });

  // Get references to the state machine inputs
  const hoverInput = useStateMachineInput(rive, BUTTON_STATE_MACHINE, HOVER_INPUT);
  const hoverExitInput = useStateMachineInput(rive, BUTTON_STATE_MACHINE, HOVER_EXIT_INPUT);

  // Optimized hover handlers with debouncing for smoother performance
  const handleMouseEnter = useCallback(() => {
    if (hoverInput) {
      hoverInput.value = true;
    }
  }, [hoverInput]);

  const handleMouseLeave = useCallback(() => {
    if (hoverExitInput) {
      hoverExitInput.value = true;
    }
  }, [hoverExitInput]);
  const { RiveComponent: DiscountRive } = useRive({
    ...riveConfig,

    artboard: "DIsccount", // Try: "discount", "DiscountIcon", "50_percent"
  });

  const { RiveComponent: RocketRive } = useRive({
    ...riveConfig,
    artboard: "Rocket",
  });


  return (
    <div className='w-full h-auto min-h-[70px] md:min-h-[54px] relative bg-gradient-to-r from-orange-50 to-yellow-50 overflow-hidden py-2 sm:py-2.5 md:py-2' style={{
      willChange: 'transform',
      backfaceVisibility: 'hidden',
      perspective: '1000px'
    }}>

      {/* Background Decorative Elements - Optimized for performance */}
      <div className="block absolute top-[-80px] sm:top-[-120px] md:top-[-140px] lg:top-[-148px] left-[-40px] sm:left-[-50px] md:left-[-60px] h-[120px] sm:h-[150px] md:h-[180px] lg:h-[200px] w-[120px] sm:w-[150px] md:w-[180px] lg:w-[200px] opacity-80" style={{
        willChange: 'transform',
        transform: 'translateZ(0)'
      }}>
        <LeftRangoliRive />
      </div>

      <div className="block absolute top-[-80px] sm:top-[-120px] md:top-[-140px] lg:top-[-148px] right-[-40px] sm:right-[-50px] md:right-[-60px] h-[120px] sm:h-[150px] md:h-[180px] lg:h-[200px] w-[120px] sm:w-[150px] md:w-[180px] lg:w-[200px] opacity-80" style={{
        willChange: 'transform',
        transform: 'translateZ(0)'
      }}>
        <RightRangoliRive />
      </div>

      {/* Main Content Container - Responsive Layout */}
      <div className="relative z-10 w-full h-full flex items-center justify-between container mx-auto" style={{
        willChange: 'transform',
        transform: 'translateZ(0)'
      }}>

        {/* Left Section: Sale Logo */}
        <div className="flex items-center flex-shrink-0 group cursor-pointer">
          <div className="w-16 h-10 lg:w-20 lg:h-11 xl:w-24 xl:h-12 group-hover:scale-105 transition-transform duration-150 ease-out" style={{
            willChange: 'transform'
          }}>
            <SaleLogoRive />
          </div>
        </div>

        {/* Center Section: Main Content Flow */}
        <div className="flex flex-wrap items-center gap-1 sm:gap-1.5 md:gap-2 lg:gap-3 flex-grow justify-center">

          {/* Limited Time Offer Text */}
          <div className="text-[14px] lg:text-[15px] xl:text-[18px] font-black leading-tight bg-gradient-to-r from-[#B50000] via-[#7C0079] to-black bg-clip-text text-transparent whitespace-nowrap" style={{
            fontFamily: 'Lexend'
          }}>
            Limited Time Offer!
          </div>

          {/* First Diya - Hidden on mobile, visible on tablet+ */}
          <div className="hidden xl:block w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 flex-shrink-0">
            <DiyoRive />
          </div>

          {/* Diwali Sale Text - Hidden on mobile, visible on tablet+ */}
          <div className="hidden xl:block text-[9px] sm:text-[11px] md:text-[13px] lg:text-[15px] xl:text-[18px] font-black leading-tight tracking-tight bg-gradient-to-r from-[#B50000] via-[#7C0079] to-black bg-clip-text text-transparent whitespace-nowrap" style={{
            fontFamily: 'Lexend'
          }}>
            Diwali Sale with
          </div>

          {/* 50% Discount Icon */}
          <div className="w-14 h-7 lg:w-9 lg:h-7 xl:w-10 xl:h-8 flex-shrink-0">
            <DiscountRive />
          </div>

          {/* Discount Text */}
          <div className="text-[15px] lg:text-[15px] xl:text-[18px] font-black leading-tight tracking-tight bg-gradient-to-r from-[#B50000] via-[#7C0079] to-black bg-clip-text text-transparent whitespace-nowrap" style={{
            fontFamily: 'Lexend'
          }}>
            Discount
          </div>

          {/* Second Diya - Hidden on mobile, visible on tablet+ */}
          <div className="hidden xl:block w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 flex-shrink-0">
            <DiyoRive2 />
          </div>
        </div>

        {/* Right Section: Rocket + Buy Now Button */}
        <div className="flex items-center gap-1 sm:gap-2 md:gap-3 flex-shrink-0">

          {/* Rocket with Trail - Hidden on mobile, visible on tablet+ */}
          <div className="hidden md:block w-16 h-3 sm:w-20 sm:h-4 md:w-24 md:h-5 lg:w-28 lg:h-5 xl:w-32 xl:h-6 flex-shrink-0">
            <RocketRive />
          </div>

          {/* Buy Now Button with Hover States */}
           <Link target="_blank" href={"http://www.wrteam.in/diwali-sale?utm_source=website&utm_medium=strip&utm_campaign=diwali-sale"}>
             <div
               className="w-20 h-6 sm:w-24 sm:h-8 md:w-28 md:h-9 lg:w-28 lg:h-9 xl:w-32 xl:h-10 flex-shrink-0 cursor-pointer transition-transform duration-150 ease-out"
               onMouseEnter={handleMouseEnter}
               onMouseLeave={handleMouseLeave}
             >
               <ButtonRive />
             </div>
           </Link>
        </div>
      </div>

    </div>
  );
}