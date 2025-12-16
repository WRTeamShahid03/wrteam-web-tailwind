'use client'
import Link from 'next/link'
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

interface WhatsAppLinks {
    [key: string]: string;
  }

const StickyBookDemo = () => {

    const router = useParams();
    const slug = router?.slug;


    const [whatsappUrl, setWhatsappUrl] = useState < string > (
        "/https://cbl.link/q8Zb3AN"
    );

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
        <div className='fixed bottom-20 lg:bottom-5 left-0 right-0 z-50 w-[90%] sm:w-max m-auto rounded-2xl bg-white py-3 px-6 shadow-[0px_4px_16px_0px_rgba(0,0,0,0.24)] flexCenter gap-4 sm:gap-10 flex-wrap'>
            <span className='font-bold sm:text-lg md:text-xl'>Get Your Personalized Demo</span>
            <Link
                // href={whatsappUrl}
                href="/book-a-meeting"
                title="Book Personalized Demo"
                target="_blank"
                className="productPrimaryBg p-2 sm:p-3 rounded-md flexCenter max-399:text-sm max-399:w-[130px] w-[151px] text-white font-semibold border-[1px] productDetailPrimaryBorder"
            >
                Book Now
            </Link>
        </div>
    )
}

export default StickyBookDemo