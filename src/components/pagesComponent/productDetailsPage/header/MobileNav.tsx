"use client";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import ServicesDropdown from "./dropdowns/ServicesDropdown";
import MorePagesDropdown from "./dropdowns/MorePagesDropdown";

interface dataProps {
  whatsappUrl: string;
  checkoutUrl?: string;
}

const MobileNav: React.FC<dataProps> = ({ whatsappUrl, checkoutUrl }) => {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <button
            type="button"
            aria-label="Open navigation menu"
            className="productPrimaryBg block text-white p-1 rounded-sm"
          >
            <RxHamburgerMenu size={26} />
          </button>
        </SheetTrigger>
        <SheetContent className="overflow-y-scroll w-[90%]">
          <SheetTitle className="hidden"></SheetTitle>
          <div className="">
            <ul className="flex flex-col items-start gap-6 textPrimary font-semibold">
              <Link
                href={"/"}
                className='relative transition-all duration-300 hover:productPrimaryColor after:contents-[""] after:absolute after:-bottom-1 after:left-0 after:bg-transparent after:h-[3px] after:w-full hover:after:productPrimaryBg'
              >
                Home
              </Link>
              <Link
                href={"/products"}
                title="Products"
                className='relative transition-all duration-300 hover:productPrimaryColor after:contents-[""] after:absolute after:-bottom-1 after:left-0 after:bg-transparent after:h-[3px] after:w-full hover:after:productPrimaryBg'
              >
                Products
              </Link>
              <ServicesDropdown />
              <Link
                href={"#help-and-support"}
                title="Help"
                className='relative transition-all duration-300 hover:productPrimaryColor after:contents-[""] after:absolute after:-bottom-1 after:left-0 after:bg-transparent after:h-[3px] after:w-full hover:after:productPrimaryBg'
              >
                Help
              </Link>
              <MorePagesDropdown />
            </ul>
          </div>
          <div className="mt-6 flex items-center flex-wrap gap-4">
            <Link
              href={whatsappUrl}
              title="Book Personalized Demo"
              target="_blank"
              className="bg-transparent p-2 rounded-md flexCenter max-399:text-sm w-[128px] productDetailPrimaryColor font-semibold border-[1px] productDetailPrimaryBorder"
            >
              Book Demo
            </Link>
            <Link
              href={checkoutUrl || '#license'}
              title="Buy Now"
              target="_blank"
              className="productPrimaryBg p-2 rounded-md flexCenter max-399:text-sm w-[128px] text-white font-semibold border-[1px] productDetailPrimaryBorder"
            >
              Buy Now
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MobileNav;
