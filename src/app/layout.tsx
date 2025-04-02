'use client'
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { Montserrat, Poppins, Roboto } from "next/font/google";
import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// Define the fonts with their respective weights
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "500"],
  variable: "--font-poppins",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
  display: "swap",
});

// Client component for initializing background colors
function BackgroundInitializer() {
  const pathname = usePathname();
  
  useEffect(() => {
    if (pathname === '/free-source-code' || pathname === '/11-offer-page') {
      document.body.style.backgroundColor = "#090909";
    }
    else if (pathname === '/thank-you') {
      document.body.style.backgroundColor = "#0e1422";
    } else {
      document.body.style.backgroundColor = "initial";
    }
  }, [pathname]);
  
  return null;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>WR Team</title>
        <meta name="description" content="WRTeam" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      </head>
      <body
        className={`${montserrat.variable} ${poppins.variable} ${roboto.variable} font-sans`}
        suppressHydrationWarning
      >
        <BackgroundInitializer />
        <Toaster position="top-center" reverseOrder={false} />
        {children}
      </body>
    </html>
  );
}
