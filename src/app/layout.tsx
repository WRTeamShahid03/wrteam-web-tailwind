import "./globals.css";
import { Toaster } from "react-hot-toast";
import { Archivo, Montserrat, Poppins, Roboto } from "next/font/google";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
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
const archivo = Archivo({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-archivo",
  display: "swap",
});

// // Default metadata (will be overridden by page-specific metadata)
// export const metadata: Metadata = {
//   title: {
//     template: "%s | WRTeam",
//     default: "WRTeam - Web and Mobile App Development",
//   },
//   description:
//     "WRTeam specializes in creating custom web and mobile applications for businesses of all sizes.",
//   icons: {
//     icon: "./favicon.ico",
//   },
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <head>
        <html lang="en" />
        <meta name="google-site-verification" content="YEM013Z9B_iSdZEpTl001Tw1e-xXhOiMof7xqYqRd7Y" />
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
        <link rel="icon" href="https://www.wrteam.in/favicon.ico" sizes="32x32" type="image/png" />
        {/* <!-- Google Tag Manager --> */}
        <script dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l] = w[l] || [];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                                        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                                        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','GTM-MG5P53R')

                `}}></script>
        {/* <!-- End Google Tag Manager --> */}

        {/* whatsapp widget  */}
        <script
          type="text/javascript"
          src="https://d3mkw6s8thqya7.cloudfront.net/integration-plugin.js"
          id="aisensy-wa-widget"
          widget-id="aaa1a0"
        >
        </script>

        {/* <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var sbSiteSecret = '373837b5-5528-4c86-aa44-48d1f2a1b479';
                window.sitebehaviourTrackingSecret = sbSiteSecret;
                var scriptElement = document.createElement('script');
                scriptElement.async = true;
                scriptElement.id = 'site-behaviour-script-v2';
                scriptElement.src = 'https://sitebehaviour-cdn.fra1.cdn.digitaloceanspaces.com/index.min.js?sitebehaviour-secret=' + sbSiteSecret;
                document.head.appendChild(scriptElement); 
              })();
            `,
          }}
        /> */}

      </head>
      <body
        className={`${montserrat.variable} ${poppins.variable} ${roboto.variable} ${archivo.variable} font-sans`}
        suppressHydrationWarning
      >
        <ClientBackgroundInitializer />
        <Toaster position="top-center" reverseOrder={false} />
        {children}
      </body>
    </html>
  );
}
