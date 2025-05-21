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

interface ProductDetailHeaderProps {
  icon_image?: string;
  codecanyonLink?: string;
}

// Define an interface for the whatsapp links
interface WhatsAppLinks {
  [key: string]: string;
}

const ProductDetailHeader = ({ icon_image, codecanyonLink }: ProductDetailHeaderProps) => {
  const router = useParams();
  const navRef = useRef<HTMLDivElement | null>(null);
  const [scroll, setScroll] = useState(0);

  const slug = router?.slug;

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
        scrollWithOffset(hash, -200); // adjust offset as needed
      }
  
      if (hash === "#license") {
        scrollWithOffset(hash, -500);
      }
    }
  }, []);
  
  useEffect(() => {
    const whatsappLinks: WhatsAppLinks = {
      "eshop-flutter-multi-vendor-ecommerce-full-app":
        "https://wa.me/+916359302924?text=Hello+sir,+I+want+a+personalised+demo",
      "eclassify-classified-buy-and-sell-marketplace-flutter-app-with-laravel-admin-panel":
        "https://wa.me/+916359302924?text=Hello+sir,+I+want+a+personalised+demo",
      "egrocer-online-grocery-store-ecommerce-marketplace-flutter-full-app-with-admin-panel":
        "https://wa.me/+916359302924?text=Hello+sir,+I+want+a+personalised+demo",
      "erestro-single-vendor-restaurant-flutter-app-food-ordering-app-with-admin-panel":
        "https://wa.me/+916359302924?text=Hello+sir,+I+want+a+personalised+demo",
      "erestro-flutter-multi-restaurant-vendor-marketplace-food-ordering-app-for-hyperlocal-business":
        "https://wa.me/+916359302924?text=Hello+sir,+I+want+a+personalised+demo",
      "ebroker-real-estate-property-buy-rent-sell-flutter-app-with-laravel-admin-panel-web-version":
        "https://wa.me/+916359302924?text=Hello+sir,+I+want+a+personalised+demo",
    };

    if (typeof slug === "string") {
      setWhatsappUrl(whatsappLinks[slug] || "https://cbl.link/q8Zb3AN");
    }
  }, [slug, whatsappUrl]);

  return (
    <header
      className={`py-4 sticky top-0 w-full z-[20] ${scroll > (navRef.current?.offsetTop || 0)
          ? "stickky bg-white shadow-sm"
          : "!bg-none"
        }`}
    >
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
                unoptimized={true}
                loader={({ src }) => src}
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
                href={"#assistanceSection"}
                title="Help"
                className='relative transition-all duration-300 hover:productPrimaryColor after:contents-[""] after:absolute after:-bottom-1 after:left-0 after:bg-transparent after:h-[3px] after:w-full hover:after:productPrimaryBg'
              >
                Help
              </Link>
              <MorePagesDropdown />
            </ul>
          </div>

          <div className="hidden lg:block">
            <Link
              href={whatsappUrl}
              title="Book Personalized Demo"
              target="_blank"
              className="productCommonBtn"
            >
              Book Personalized Demo
            </Link>
          </div>

          <div className="block lg:hidden">
            <MobileNav whatsappUrl={whatsappUrl} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default ProductDetailHeader;
