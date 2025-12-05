"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import logo from "../../../../assets/images/logo.svg";
import Link from "next/link";

import AOS from "aos";
import "aos/dist/aos.css";
import { useParams } from "next/navigation";
import ServicesDropdown from "./dropdowns/ServicesDropdown";
import MorePagesDropdown from "./dropdowns/MorePagesDropdown";
import MobileNav from "./MobileNav";
import SaleStripe from "@/components/layout/SaleStripe";
import RiveAnimation from "@/components/layout/RiveAnimation";
import { parseSaleDate, isSaleDatePassed } from "@/lib/utils";

interface ProductDetailHeaderProps {
  icon_image?: string;
  codecanyonLink?: string;
  layoutType?: number;
  checkoutUrl?: string;
}

// Define an interface for the whatsapp links
interface WhatsAppLinks {
  [key: string]: string;
}

const ProductDetailHeader = ({ icon_image, codecanyonLink, layoutType, checkoutUrl }: ProductDetailHeaderProps) => {
  const router = useParams();
  const navRef = useRef<HTMLDivElement | null>(null);
  const [scroll, setScroll] = useState(0);
  const slug = router?.slug;

  // Get target date from environment variable and check if sale has ended
  // Format: "02/12/2025-6:30PM" (DD/MM/YYYY-HH:MMAM or DD/MM/YYYY-HH:MMPM)
  const saleDateString = process.env.NEXT_PUBLIC_SALE_END_DATE;
  const targetDate = parseSaleDate(saleDateString);
  
  // Initialize showSaleStripe based on whether the sale date has passed
  const [showSaleStripe, setShowSaleStripe] = useState(() => {
    // Only show if target date exists and hasn't passed yet
    return targetDate !== null && !isSaleDatePassed(targetDate);
  });

  const [whatsappUrl, setWhatsappUrl] = useState<string>(
    "/https://cbl.link/q8Zb3AN"
  );

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

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
    // Wait for the DOM to load completely
    if (typeof window !== "undefined") {
      const hash = window.location.hash;

      const scrollWithOffset = (selector: string, offset = 100) => {
        const element = document.querySelector(selector);
        if (element) {
          const y = element.getBoundingClientRect().top + window.pageYOffset - offset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      };

      if (hash === "#explore-demo") {
        if (layoutType === 1) {
          scrollWithOffset(hash, 100); // adjust offset as needed
        }
        else {
          scrollWithOffset(hash, -200);
        }
      }

      if (hash === "#license") {
        scrollWithOffset(hash, -600);
      }
    }
  }, []);

  useEffect(() => {
    const whatsappLinks: WhatsAppLinks = {
      "eshop-flutter-multi-vendor-ecommerce-full-app":
        "https://wa.me/+916359302924?text=Hello+sir,+I+want+a+personalised+eshop-flutter-multi-vendor+demo",
      "eclassify-classified-buy-and-sell-marketplace-flutter-app-with-laravel-admin-panel":
        "https://wa.me/+916359302924?text=Hello+sir,+I+want+a+personalised+eclassify+demo",
      "egrocer-online-grocery-store-ecommerce-marketplace-flutter-full-app-with-admin-panel":
        "https://wa.me/+916359302924?text=Hello+sir,+I+want+a+personalised+egrocer+demo",
      "erestro-single-vendor-restaurant-flutter-app-food-ordering-app-with-admin-panel":
        "https://wa.me/+916359302924?text=Hello+sir,+I+want+a+personalised+erestro-single-vendor+demo",
      "erestro-flutter-multi-restaurant-vendor-marketplace-food-ordering-app-for-hyperlocal-business":
        "https://wa.me/+916359302924?text=Hello+sir,+I+want+a+personalised+erestro-flutter-multi+demo",
      "ebroker-real-estate-property-buy-rent-sell-flutter-app-with-laravel-admin-panel-web-version":
        "https://wa.me/+916359302924?text=Hello+sir,+I+want+a+personalised+ebroker+demo",
    };

    if (typeof slug === "string") {
      setWhatsappUrl(whatsappLinks[slug] || "https://cbl.link/q8Zb3AN");
    }
  }, [slug, whatsappUrl]);

  return (
    <header
      className={`sticky top-0 w-full z-[20] ${scroll > (navRef.current?.offsetTop || 0)
        ? "stickky shadow-sm"
        : "!bg-none"
        }`}
    >
      {/* {
        showSaleStripe &&
        <RiveAnimation setShowSaleStripe={setShowSaleStripe} />
      } */}
      {
        showSaleStripe && (
          <SaleStripe setShowSaleStripe={setShowSaleStripe} />
        )
      }
      <div className="bg-white py-4">
        <div className="container">
          <div ref={navRef} className="flex items-center justify-between nav">
            <Link href={codecanyonLink ? codecanyonLink : "/"}>
              {icon_image ? (
                <Image
                  src={icon_image}
                  width={162}
                  height={46}
                  className="object-cover"
                  alt="WRTeam Logo"
                />

              ) : (
                <Image
                  src={logo}
                  width={250}
                  height={100}
                  className="!w-[175px] md:!w-[200px] xl:!w-[250px] h-auto"
                  alt="WRTeam Logo"
                />
              )}
            </Link>
            <div className="hidden lg:block">
              <ul className="flex items-center lg:gap-6 xl:gap-12 textPrimary font-semibold">
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

            <div className="hidden lg:flex items-center gap-4">
              <Link
                href={whatsappUrl}
                title="Book Personalized Demo"
                target="_blank"
                className="bg-transparent p-3 rounded-md flexCenter max-399:text-sm max-399:w-[130px] w-[151px] productDetailPrimaryColor font-semibold border-[1px] productDetailPrimaryBorder"
              >
                Book Demo
              </Link>
              <Link
                href={checkoutUrl || '#license'}
                title="Buy Now"
                target="_blank"
                className="productPrimaryBg p-3 rounded-md flexCenter max-399:text-sm max-399:w-[130px] w-[131px] text-white font-semibold border-[1px] productDetailPrimaryBorder"
              >
                Buy Now
              </Link>
            </div>

            <div className="block lg:hidden">
              <MobileNav whatsappUrl={whatsappUrl} checkoutUrl={checkoutUrl} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ProductDetailHeader;
