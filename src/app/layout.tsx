import "./globals.css";
import { Toaster } from "react-hot-toast";
import {
  Archivo,
  Lexend,
  Montserrat,
  Poppins,
  Roboto,
} from "next/font/google";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import ClientBackgroundInitializer from "@/components/ClientBackgroundInitializer";
import type { Metadata } from "next";
import Script from "next/script";
import ClientCleanup from "@/components/ClientCleanup";

// ---------------- Fonts ----------------
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

// ---------------- ENV ----------------
const isProduction = process.env.NEXT_PUBLIC_APP_ENV === "production";

// ---------------- Metadata ----------------
export const metadata: Metadata = {
  verification: {
    google: "YEM013Z9B_iSdZEpTl001Tw1e-xXhOiMof7xqYqRd7Y",
  },
  icons: {
    icon: "https://www.wrteam.in/favicon.ico",
  },
};

// ---------------- Layout ----------------
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* ---------------- Google Tag Manager ---------------- */}
        {isProduction && (
          <Script
            id="gtm-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];
              w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-MG5P53R');`,
            }}
          />
        )}

        {/* ---------------- WhatsApp Widget ---------------- */}
        {isProduction && (
          <Script
            type="text/javascript"
            id="aisensy-wa-widget"
            src="https://d3mkw6s8thqya7.cloudfront.net/integration-plugin.js"
            strategy="afterInteractive"
            widget-id="aaajmc"
          />
        )}

        {/* ---------------- Cal.com ---------------- */}
        <Script
          id="cal-com-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
Cal("init", "meeting", {origin:"https://app.cal.com"});`,
          }}
        />
      </head>

      <body
        className={`${montserrat.variable} ${poppins.variable} ${roboto.variable} ${archivo.variable} ${lexend.variable} font-sans`}
        suppressHydrationWarning
      >
        {/* ---------------- GTM noscript ---------------- */}
        {isProduction && (
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-MG5P53R"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}

        {/* ---------------- App Providers ---------------- */}
        <ClientBackgroundInitializer />
        <Toaster position="top-center" reverseOrder={false} />
        <ClientCleanup />

        {children}
      </body>
    </html>
  );
}
