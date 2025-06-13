import "./globals.css";
import { Toaster } from "react-hot-toast";
import { Archivo, Lexend, Montserrat, Poppins, Roboto } from "next/font/google";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import ClientBackgroundInitializer from "@/components/ClientBackgroundInitializer";
import { Metadata } from "next";
import Script from "next/script";
import Head from "next/head";

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
const archivo = Archivo({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-archivo",
  display: "swap",
});

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-lexend",
  display: "swap",
});

export const metadata: Metadata = {
  other: {
    'google-site-verification': 'YEM013Z9B_iSdZEpTl001Tw1e-xXhOiMof7xqYqRd7Y',
  },
  icons: {
    icon: 'https://www.wrteam.in/favicon.ico',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        {/* <!-- Google Tag Manager --> */}
        <Script
          id="gtm-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
      (function(w,d,s,l,i){w[l]=w[l]||[];
      w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
      var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
      j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
      f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-MG5P53R');
    `,
          }}
        >
        </Script>
        {/* <!-- End Google Tag Manager --> */}

        {/* whatsapp widget  */}
        <Script
          type="text/javascript"
          src="https://d3mkw6s8thqya7.cloudfront.net/integration-plugin.js"
          id="aisensy-wa-widget"
          widget-id="aaafas"
        >
        </Script>

      </Head>
      <body
        className={`${montserrat.variable} ${poppins.variable} ${roboto.variable} ${archivo.variable} font-sans`}
        suppressHydrationWarning
      >
        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MG5P53R"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {/* <!-- End Google Tag Manager (noscript) --> */}

        <ClientBackgroundInitializer />
        <Toaster position="top-center" reverseOrder={false} />
        {children}
      </body>
    </html>
  );
}
