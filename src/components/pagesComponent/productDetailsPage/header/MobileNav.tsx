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
}

const MobileNav: React.FC<dataProps> = ({ whatsappUrl }) => {
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
                href={"#assistanceSection"}
                title="Help"
                className='relative transition-all duration-300 hover:productPrimaryColor after:contents-[""] after:absolute after:-bottom-1 after:left-0 after:bg-transparent after:h-[3px] after:w-full hover:after:productPrimaryBg'
              >
                Help
              </Link>
              <MorePagesDropdown />
            </ul>
          </div>
          <div className="mt-6">
            <Link
              href={whatsappUrl}
              title="Book Personalized Demo"
              target="_blank"
              className="productCommonBtn"
            >
              Book Personalized Demo
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MobileNav;
