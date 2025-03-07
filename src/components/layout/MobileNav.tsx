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

const MobileNav = () => {
    return (
        <>
            <Sheet>
                <SheetTrigger asChild>
                    <span className='primaryBg block text-white p-1 rounded-sm'><RxHamburgerMenu size={26} /></span>
                </SheetTrigger>
                <SheetContent>
                    <SheetTitle className='hidden'>
                    </SheetTitle>
                    <div>
                        <ul className='flex flex-col items-start gap-6 textPrimary font-semibold'>
                            <SheetClose>
                                <Link href={'/'} className='relative transition-all duration-300 hover:primaryColor after:contents-[""] after:absolute after:-bottom-1 after:left-0 after:bg-transparent after:h-[3px] after:w-full hover:after:primaryBg'>
                                    Home
                                </Link>
                            </SheetClose>
                            <SheetClose>
                                <Link href={'/products'} className='relative transition-all duration-300 hover:primaryColor after:contents-[""] after:absolute after:-bottom-1 after:left-0 after:bg-transparent after:h-[3px] after:w-full hover:after:primaryBg'>
                                    Products
                                </Link>
                            </SheetClose>
                            <ServicesDropdown />
                            <SheetClose>
                                <Link href={'/portfolio'} className='relative transition-all duration-300 hover:primaryColor after:contents-[""] after:absolute after:-bottom-1 after:left-0 after:bg-transparent after:h-[3px] after:w-full hover:after:primaryBg'>
                                    Portfolio
                                </Link>
                            </SheetClose>
                            <SheetClose>
                                <Link href={'/about-us'} className='relative transition-all duration-300 hover:primaryColor after:contents-[""] after:absolute after:-bottom-1 after:left-0 after:bg-transparent after:h-[3px] after:w-full hover:after:primaryBg'>
                                    About Us
                                </Link>
                            </SheetClose>
                            <MorePagesDropdown />
                            <SheetClose>
                                <Link href={'/hire-us'} className='commonBtn commonBtnSecondaryBg'>
                                    Hire Us
                                </Link>
                            </SheetClose>
                        </ul>
                    </div>
                </SheetContent>
            </Sheet>
        </>
    )
}

export default MobileNav