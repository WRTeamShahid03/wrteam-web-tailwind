'use client'
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { Montserrat, Poppins, Roboto } from "next/font/google";
import Head from "next/head";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const pathname = usePathname();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (pathname === '/free-source-code' || pathname === '/11-offer-page') {
      document.body.style.backgroundColor = "#090909";
    }
    else if (pathname === '/thank-you') {
      document.body.style.backgroundColor = "#0e1422";
    } else {
      document.body.style.backgroundColor = "initial";
    }

    if (pathname === '/') {
      setLoading(false)
    }

  }, [pathname]);

  return (
    <html lang="en">
      <Head>
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      </Head>
      <body
        className={`${montserrat.variable} ${poppins.variable} ${roboto.variable} font-sans`}
      >
        <Toaster position="top-center" reverseOrder={false} />
        {children}
      </body>
    </html>
  );
}
