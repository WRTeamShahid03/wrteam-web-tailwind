'use client'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import logo from '../../../../assets/images/logo.svg'
import Link from 'next/link'

import AOS from "aos";
import "aos/dist/aos.css";
import { usePathname } from 'next/navigation'
import ServicesDropdown from './dropdowns/ServicesDropdown'
import MorePagesDropdown from './dropdowns/MorePagesDropdown'

interface ProductDetailHeaderProps {
  icon_image?: string;
}

const ProductDetailHeader = ({ icon_image }: ProductDetailHeaderProps) => {
    const router = usePathname();
    const navRef = useRef<HTMLDivElement | null>(null);
    const [scroll, setScroll] = useState(0);

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

    return (
        <header className={`py-4 sticky top-0 w-full z-[10] ${scroll > (navRef.current?.offsetTop || 0) ? "stickky bg-white shadow-sm" : "!bg-none"}`}>
            <div className="container">
                <div ref={navRef} className='flex items-center justify-between nav'>
                    <Link href={'/'}>
                        {icon_image ? (
                            <Image 
                                src={icon_image}
                                width={162}
                                height={46}
                                className='object-cover' 
                                alt="WRTeam Logo"
                                unoptimized={true}
                                loader={({ src }) => src}
                            />
                        ) : (
                            <Image 
                                src={logo}
                                width={250}
                                height={100}
                                className='!w-[175px] md:!w-[200px] xl:!w-[250px] h-auto' 
                                alt="WRTeam Logo"
                            />
                        )}
                    </Link>
                    <div className='hidden lg:block'>
                        <ul className='flex items-center lg:gap-6 xl:gap-12 textPrimary font-semibold'>
                            <Link href={'/'} className='relative transition-all duration-300 hover:primaryColor after:contents-[""] after:absolute after:-bottom-1 after:left-0 after:bg-transparent after:h-[3px] after:w-full hover:after:primaryBg'>
                                Home
                            </Link>
                            <Link href={'/products'} title='Products' className='relative transition-all duration-300 hover:primaryColor after:contents-[""] after:absolute after:-bottom-1 after:left-0 after:bg-transparent after:h-[3px] after:w-full hover:after:primaryBg'>
                                Products
                            </Link>
                            <ServicesDropdown />
                            <Link href={'#assistanceSection'} title='Help' className='relative transition-all duration-300 hover:primaryColor after:contents-[""] after:absolute after:-bottom-1 after:left-0 after:bg-transparent after:h-[3px] after:w-full hover:after:primaryBg'>
                                Help
                            </Link>
                            <MorePagesDropdown/>
                        </ul>
                    </div>

                    <div>
                        <Link href={'#'} title='Book Personalized Demo' className='productCommonBtn'>
                            Book Personalized Demo
                        </Link>
                    </div>

                    {/* <div className='block lg:hidden'>
            <MobileNav />
          </div> */}
                </div>
            </div>
        </header>
    )
}

export default ProductDetailHeader;