import "./globals.css";
import { Toaster } from "react-hot-toast";
import { Montserrat, Poppins, Roboto } from "next/font/google";
import Script from "next/script";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import ClientBackgroundInitializer from "@/components/ClientBackgroundInitializer";
import { Metadata } from "next";

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

// Default metadata (will be overridden by page-specific metadata)
export const metadata: Metadata = {
  title: {
    template: '%s | WRTeam',
    default: 'WRTeam - Web and Mobile App Development',
  },
  description: 'WRTeam specializes in creating custom web and mobile applications for businesses of all sizes.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      </head>
      <body
        className={`${montserrat.variable} ${poppins.variable} ${roboto.variable} font-sans`}
        suppressHydrationWarning
      >
        <ClientBackgroundInitializer />
        <Toaster position="top-center" reverseOrder={false} />
        {children}
      </body>
    </html>
  );
}
