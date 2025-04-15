'use client'
import React from 'react'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Link from 'next/link'
import { RxHamburgerMenu } from "react-icons/rx";
import ServicesDropdown from '../commonComponents/dropdowns/ServicesDropdown';
import MorePagesDropdown from '../commonComponents/dropdowns/MorePagesDropdown';
import OurWorkDropdown from '../commonComponents/dropdowns/OurWorkDropdown';
import { FaArrowRight } from 'react-icons/fa6';
import { LucidePhoneCall } from 'lucide-react';
import { usePathname } from 'next/navigation';

const MobileNav = () => {

    const pathname = usePathname();

    return (
        <>
            <Sheet>
                <SheetTrigger asChild>
                    <span className='primaryBg block text-white p-1 rounded-sm'><RxHamburgerMenu size={26} /></span>
                </SheetTrigger>
                <SheetContent className='overflow-y-scroll w-[90%]'>
                    <SheetTitle className='hidden'>
                    </SheetTitle>
                    <div className=''>
                        <ul className='flex flex-col items-start gap-6 textPrimary font-semibold'>
                            <Link href={'/'} className={`relative transition-all duration-300 after:contents-[""] after:absolute after:-bottom-[36px] max-1199:after:-bottom-2 after:left-0 after:bg-transparent after:h-[3px] after:w-full hover:after:bg-black ${pathname === '/' && 'after:!bg-black font-semibold'}`}>
                                Home
                            </Link>
                            <Link href={'/products'} className={`relative transition-all duration-300 after:contents-[""] after:absolute after:-bottom-[36px] max-1199:after:-bottom-2 after:left-0 after:bg-transparent after:h-[3px] after:w-full hover:after:bg-black ${pathname === '/products' && 'after:!bg-black font-semibold'}`}>
                                Products
                            </Link>
                            <ServicesDropdown />
                            <MorePagesDropdown />
                            <OurWorkDropdown />
                            <Link href={'/exclusive-license'} className={`relative transition-all duration-300 after:contents-[""] after:absolute after:-bottom-[36px] max-1199:after:-bottom-2 after:left-0 after:bg-transparent after:h-[3px] after:w-full hover:after:bg-black ${pathname === '/exclusive-license' && 'after:!bg-black font-semibold'}`}>
                                Exclusive License
                            </Link>
                            <Link href={'/hire-us'} className='secondaryBg text-white max-1680:py-2 max-1680:px-4 py-4 px-8 rounded-[8px] flexCenter gap-2'>
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
                        </ul>
                    </div>
                </SheetContent>
            </Sheet>
        </>
    )
}

export default MobileNav