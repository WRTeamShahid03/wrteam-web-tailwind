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
import ServicesDropdown from "../commonComponents/dropdowns/ServicesDropdown";
import MorePagesDropdown from "../commonComponents/dropdowns/MorePagesDropdown";
import OurWorkDropdown from "../commonComponents/dropdowns/OurWorkDropdown";
import { FaArrowRight } from "react-icons/fa6";
import { LucidePhoneCall } from "lucide-react";
import { usePathname } from "next/navigation";

interface dataProps {
  servicesDropdown: boolean,
  setServicesDropdown: (value: boolean) => void,
  morePagesDropdown: boolean,
  setMorePagesDropdown: (value: boolean) => void,
  ourWorkDropdown: boolean,
  setOurWorkDropdown: (value: boolean) => void
}

const MobileNav: React.FC<dataProps> = ({ servicesDropdown, setServicesDropdown, morePagesDropdown, setMorePagesDropdown, ourWorkDropdown, setOurWorkDropdown }) => {
  const pathname = usePathname();

  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <button
            type="button"
            aria-label="Open navigation menu"
            className="primaryBg block text-white p-1 rounded-sm"
          >
            <RxHamburgerMenu size={26} />
          </button>

        </SheetTrigger>
        <SheetContent className="overflow-y-scroll w-[90%]">
          <SheetTitle className="hidden"></SheetTitle>
          <div className="">
            <nav className="flex flex-col items-start gap-6 textPrimary font-semibold">
              <Link
                href={"/"}
                className={`relative transition-all duration-300 after:contents-[""] after:absolute after:-bottom-[36px] max-1199:after:-bottom-2 after:left-0 after:bg-transparent after:h-[3px] after:w-full font-medium hover:after:bg-black ${pathname === "/" && "after:!bg-black font-semibold"
                  }`}
              >
                Home
              </Link>
              <Link
                href={"/products"}
                className={`relative transition-all duration-300 after:contents-[""] after:absolute after:-bottom-[36px] max-1199:after:-bottom-2 after:left-0 after:bg-transparent after:h-[3px] after:w-full font-medium hover:after:bg-black ${pathname === "/products" && "after:!bg-black font-semibold"
                  }`}
              >
                Products
              </Link>
              <ServicesDropdown servicesDropdown={servicesDropdown} setServicesDropdown={setServicesDropdown} isMobileNav={true} />
              <MorePagesDropdown morePagesDropdown={morePagesDropdown} setMorePagesDropdown={setMorePagesDropdown} isMobileNav={true} />
              <OurWorkDropdown ourWorkDropdown={ourWorkDropdown} setOurWorkDropdown={setOurWorkDropdown} isMobileNav={true} />
              <Link
                href={"/exclusive-license"}
                className={`relative transition-all duration-300 after:contents-[""] after:absolute after:-bottom-[36px] max-1199:after:-bottom-2 after:left-0 after:bg-transparent after:h-[3px] after:w-full font-medium hover:after:bg-black ${pathname === "/exclusive-license" &&
                  "after:!bg-black font-semibold"
                  }`}
              >
                Exclusive License
              </Link>
              <Link
                href={"/hire-us"}
                className="bg-[#181C24] text-white max-1680:py-2 max-1680:px-4 py-4 px-8 rounded-[8px] flexCenter gap-2"
              >
                <span>Hire Us</span>
                <FaArrowRight />
              </Link>
              <div className="flexCenter gap-2">
                <div className="flexCenter primaryBg text-white h-[48px] w-[48px] rounded-full">
                  <LucidePhoneCall />
                </div>
                <div className="flex flex-col font-semibold">
                  <span>24/7 Available</span>
                  <Link
                    href={"tel:+91 97979 45459"}
                    title="+91 97979 45459"
                    className="primaryColor"
                  >
                    {" "}
                    +91 97979 45459
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MobileNav;
