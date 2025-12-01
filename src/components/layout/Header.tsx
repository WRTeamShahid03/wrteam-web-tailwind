'use client'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import logo from '../../assets/images/logo.svg'
import Link from 'next/link'
import MobileNav from './MobileNav'
import ServicesDropdown from '../commonComponents/dropdowns/ServicesDropdown'
import MorePagesDropdown from '../commonComponents/dropdowns/MorePagesDropdown'

import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowRight } from 'react-icons/fa'
import { LucidePhoneCall } from 'lucide-react'
import OurWorkDropdown from '../commonComponents/dropdowns/OurWorkDropdown'
import { usePathname } from 'next/navigation'
import TopBar from './TopBar'
import SaleStripe from './SaleStripe'
import RiveAnimation from './RiveAnimation'
import { parseSaleDate, isSaleDatePassed } from '../../lib/utils'

const Header = () => {

  const pathname = usePathname();

  const navRef = useRef<HTMLDivElement | null>(null);
  const [scroll, setScroll] = useState<number>(0);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener("scroll", handleScroll);
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  const [servicesDropdown, setServicesDropdown] = useState<boolean>(false);
  const [morePagesDropdown, setMorePagesDropdown] = useState<boolean>(false);
  const [ourWorkDropdown, setOurWorkDropdown] = useState<boolean>(false);

  // Get target date from environment variable and check if sale has ended
  // Format: "02/12/2025-6:30PM" (DD/MM/YYYY-HH:MMAM or DD/MM/YYYY-HH:MMPM)
  const saleDateString = process.env.NEXT_PUBLIC_SALE_END_DATE;
  const targetDate = parseSaleDate(saleDateString);
  
  // Initialize showSaleStripe based on whether the sale date has passed
  const [showSaleStripe, setShowSaleStripe] = useState(() => {
    // Only show if target date exists and hasn't passed yet
    return targetDate !== null && !isSaleDatePassed(targetDate);
  });

  // Check periodically if the sale date has passed and hide the stripe automatically
  useEffect(() => {
    // If no target date is set, don't show the stripe
    if (!targetDate) {
      setShowSaleStripe(false);
      return;
    }

    // Check immediately if sale has passed
    if (isSaleDatePassed(targetDate)) {
      setShowSaleStripe(false);
      return;
    }

    // Calculate time remaining until target date
    const now = new Date();
    const timeRemaining = targetDate.getTime() - now.getTime();

    // If time has already passed, hide immediately
    if (timeRemaining <= 0) {
      setShowSaleStripe(false);
      return;
    }

    // Set a timeout to hide the stripe when the target time is reached
    const timeoutId = setTimeout(() => {
      setShowSaleStripe(false);
    }, timeRemaining);

    // Also check every minute to ensure we catch any edge cases
    const intervalId = setInterval(() => {
      if (isSaleDatePassed(targetDate)) {
        setShowSaleStripe(false);
      }
    }, 60000); // Check every minute

    // Cleanup function to clear timeout and interval
    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [targetDate]);

  useEffect(() => {
    if (servicesDropdown) {
      setMorePagesDropdown(false);
      setOurWorkDropdown(false);
    }
  }, [servicesDropdown])

  useEffect(() => {
    if (morePagesDropdown) {
      setServicesDropdown(false);
      setOurWorkDropdown(false);
    }
  }, [morePagesDropdown])

  useEffect(() => {
    if (ourWorkDropdown) {
      setServicesDropdown(false);
      setMorePagesDropdown(false);
    }
  }, [ourWorkDropdown])


  return (
    <header className={`sticky top-0 w-full z-[20] border-b shadow-none ${scroll > (navRef.current?.offsetTop || 0) ? "stickky" : ""}`}>
      {/* {
        showSaleStripe &&
        <RiveAnimation setShowSaleStripe={setShowSaleStripe}/>
      } */}
      {
        showSaleStripe && (
          <SaleStripe setShowSaleStripe={setShowSaleStripe} />
        )
      }
      <TopBar />
      <div className='py-6 bg-white'>
        <div className="max-1680:!container 2xl:max-w-[1620px] mx-auto">

          <div ref={navRef} className='flex items-center justify-between nav'>
            <Link href={'/'} title='WRTeam Logo'>
              <Image src={logo} width={0} height={0} className='w-[175px] between-1200-1399:w-[175px] md:w-[200px] xl:w-[248px] h-auto' alt='WRTeam Logo' />
            </Link>
            <div className='max-1199:hidden block'>
              <nav className='flex items-center lg:gap-6 between-1200-1399:gap-4 between-1200-1399:text-[15px] between-1400-1680:gap-5 xl:gap-12 textPrimary'>
                <Link href={'/'} className={`relative transition-all duration-300 after:contents-[""] after:absolute between-1400-1680:after:-bottom-[36px] after:-bottom-[40px] after:left-0 after:bg-transparent after:h-[3px] after:w-full hover:after:bg-black font-medium ${pathname === '/' && 'after:!bg-black font-semibold'}`}>
                  Home
                </Link>
                <Link href={'/products'} className={`relative transition-all duration-300 after:contents-[""] after:absolute between-1400-1680:after:-bottom-[36px] after:-bottom-[40px] after:left-0 after:bg-transparent after:h-[3px] after:w-full hover:after:bg-black font-medium ${pathname === '/products' && 'after:!bg-black font-semibold'}`}>
                  Products
                </Link>
                <ServicesDropdown servicesDropdown={servicesDropdown} setServicesDropdown={setServicesDropdown} showSaleStripe={showSaleStripe} />
                <MorePagesDropdown morePagesDropdown={morePagesDropdown} setMorePagesDropdown={setMorePagesDropdown} showSaleStripe={showSaleStripe} />
                <OurWorkDropdown ourWorkDropdown={ourWorkDropdown} setOurWorkDropdown={setOurWorkDropdown} showSaleStripe={showSaleStripe} />
                <Link href={'/exclusive-license'} className={`relative transition-all duration-300 after:contents-[""] after:absolute between-1400-1680:after:-bottom-[36px] after:-bottom-[40px] after:left-0 after:bg-transparent after:h-[3px] after:w-full hover:after:bg-black font-medium ${pathname === '/exclusive-license' && 'after:!bg-black font-semibold'}`}>
                  Exclusive License
                </Link>
                <Link href={'/hire-us'} className='bg-[#181C24] text-white max-1680:py-2 max-1680:px-4 py-4 px-8 rounded-[8px] flexCenter gap-2'>
                  <span>Hire Us</span>
                  <FaArrowRight />
                </Link>
                <div className='flexCenter gap-2'>
                  <div className='flexCenter primaryBg text-white h-[48px] w-[48px] rounded-full'>
                    <LucidePhoneCall />
                  </div>
                  <div className='flex flex-col font-semibold'>
                    <span>24/7 Available</span>
                    <Link href={'tel:+91 97979 45459'} title='+91 97979 45459' className='primaryColor'> +91 97979 45459</Link>
                  </div>
                </div>
              </nav>
            </div>

            <div className='max-1199:block hidden'>
              <MobileNav
                servicesDropdown={servicesDropdown}
                setServicesDropdown={setServicesDropdown}
                morePagesDropdown={morePagesDropdown}
                setMorePagesDropdown={setMorePagesDropdown}
                ourWorkDropdown={ourWorkDropdown}
                setOurWorkDropdown={setOurWorkDropdown}
              />
            </div>
          </div>
        </div>

      </div>
    </header>
  )
}

export default Header;