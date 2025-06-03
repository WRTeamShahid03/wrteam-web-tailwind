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

  const [showSaleStripe, setShowSaleStripe] = useState(true)

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
                <ServicesDropdown servicesDropdown={servicesDropdown} setServicesDropdown={setServicesDropdown} showSaleStripe={showSaleStripe}/>
                <MorePagesDropdown morePagesDropdown={morePagesDropdown} setMorePagesDropdown={setMorePagesDropdown} showSaleStripe={showSaleStripe}  />
                <OurWorkDropdown ourWorkDropdown={ourWorkDropdown} setOurWorkDropdown={setOurWorkDropdown} showSaleStripe={showSaleStripe}/>
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