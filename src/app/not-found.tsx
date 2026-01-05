"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, usePathname, useRouter } from "next/navigation"; // ← `next/navigation` for App Router
import noDataImg from "@/assets/images/404_Image.svg";
import saleEndImg from "@/assets/images/sale_end.svg";
import Loader from "@/components/commonComponents/Loader/Loader";
import { FaWhatsapp } from "react-icons/fa6";
import Marquee from "react-fast-marquee";

const Custom404 = () => {
  const router = useRouter();
  const pathname = usePathname();
  // Sale landing pages should now show a dedicated "sale ended" view instead of redirecting home.
  const salePages = [
    "/cyber-week-sale",
    "/steals-of-the-week-sale",
    "/extended-license-sale-25",
    "/new-year-sale",
    "/freedom-sale",
    "/mid-year-sale",
    "/diwali-sale",
    "/cyber-sale",
    "/year-end-sale",
    "/new-year-sale",
  ];
  const isSalePage = salePages.some((salePath) =>
    pathname.startsWith(salePath)
  );
  const [canGoBack, setCanGoBack] = useState(false);
  // Avoid flashing the loader on sale pages by initializing redirecting based on the path type.
  const [redirecting, setRedirecting] = useState(!isSalePage);

  // console.log(pathname);
  useEffect(() => {
    let redirected = false;

    // All redirect logic now runs only for non-sale URLs.
    if (!isSalePage) {
      switch (pathname) {
        case "/products/edemand-multi-vendor-on-demand-home-doorstep-services-marketplace-with-flutter-app-admin-panel":
          router.replace(
            `/product-details/edemand-multi-vendor-on-demand-handy-services-handyman-with-flutter-app-admin-panel-web-version`
          );
          redirected = true;
          break;
        case "/product-detail-page/ebroker-real-estate-property-buyrentsell-flutter-app-with-laravel-admin-panel":
          router.replace(
            `/product-details/ebroker-real-estate-property-buy-rent-sell-flutter-app-with-laravel-admin-panel-web-version`
          );
          redirected = true;
          break;
        case "/product-detail-page/elite-quiz-trivia-quiz-quiz-game-web-version-2":
          router.replace(
            `/product-details/elite-quiz-trivia-quiz-quiz-game-web-version`
          );
          redirected = true;
          break;
        case "/products/app-products":
          router.replace(`/products`);
          redirected = true;
          break;
        case "/products/web-products":
          router.replace(`/products`);
          redirected = true;
          break;
        case "/web-development":
          router.replace(`/services/web-development`);
          redirected = true;
          break;
        case "/app-development":
          router.replace(`/services/app-development`);
          redirected = true;
          break;
        case "/ui-ux-design":
          router.replace(`/services/ui-ux-design`);
          redirected = true;
          break;
        case "/digital-marketing":
          router.replace(`/services/digital-marketing`);
          redirected = true;
          break;
        case "/careers":
          router.replace(`/career`);
          redirected = true;
          break;
        default:
          break;
      }

      // Check product or blog redirect cases
      if (
        (pathname !== "/products/app-products" &&
          pathname !== "/products/web-products" &&
          pathname.startsWith("/products/")) ||
        pathname.startsWith("/product/") ||
        pathname.startsWith("/blogs/")
      ) {
        redirected = true;

        if (
          pathname.startsWith("/products/") ||
          pathname.startsWith("/product/")
        ) {
          const slug = pathname.replace(
            `${pathname.startsWith("/products/") ? "/products/" : "/product/"}`,
            ""
          );
          if (
            slug ===
            "edemand-multi-vendor-on-demand-home-doorstep-services-marketplace-with-flutter-app-admin-panel"
          ) {
            router.replace(
              `/product-details/edemand-multi-vendor-on-demand-handy-services-handyman-with-flutter-app-admin-panel-web-version`
            );
          } else {
            router.replace(`/product-details/${slug}`);
          }
        }

        if (pathname.startsWith("/blogs/")) {
          const slug = pathname.replace(`/blogs/`, "");
          if (slug) {
            router.replace(`/blogs`);
          }
        }
      }
    }

    // For sale pages we intentionally do not redirect; keep loader hidden.
    setRedirecting(redirected);

    if (
      !redirected &&
      !isSalePage &&
      typeof window !== "undefined" &&
      window.history.length > 1
    ) {
      setCanGoBack(true);
    }
  }, [pathname, router, isSalePage]);

  // If we're redirecting, don't show the 404 page
  if (pathname.startsWith("/products/")) {
    return null;
  }

  if (isSalePage) {
    return <SaleEndedView />;
  }

  return redirecting ? (
    <Loader />
  ) : (
    <div className="flex flex-col items-center justify-center gap-5 px-6 pt-8 pb-16 font-montserrat text-center h-screen">
      <h1 className="text-[#031C49] font-extrabold sectionTitle">OPPS...</h1>
      <Image
        src={noDataImg}
        alt="Data not found illustration"
        className="my-8 w-auto h-auto max-w-full max-h-full object-contain"
        priority={false}
      />

      <div className="flex flex-col items-center justify-center gap-5">
        <h2 className="font-extrabold text-[#031C49] sectionTitle">
          Page Not Found!
        </h2>

        <span className="font-semibold text-[#545A68]">
          Looks like you stumbled onto a broken path. Try heading back to the
          Home.
        </span>

        {canGoBack ? (
          <button
            onClick={router.back}
            className="commonBtn mt-3 max-[479px]:text-sm max-[479px]:py-1"
          >
            Go Back
          </button>
        ) : (
          <Link href="/" title="Home">
            <button className="commonBtn">Go To Home</button>
          </Link>
        )}
      </div>
    </div>
  );
};

// Dedicated UI for expired sale pages so visitors get context instead of a redirect.
const SaleEndedView = () => {
  const whatsappChannelUrl = "https://whatsapp.com/channel/0029VaFfBBP2ER6eCc3E8y0M";

  return (
    <>
      <div className="flex min-h-screen flex-col justify-center bg-[#F7F9FC] text-[#0A2D75] items-center relative">

        <div className="mx-auto flex w-full flex-col items-center gap-8 px-6 py-10 lg:flex-row lg:py-14 mb-[60px] lg:mb-0">
          <div className="relative flex w-full justify-center lg:w-1/2">
            <Image
              src={saleEndImg}
              alt="Sale ended illustration"
              className="relative z-[1] h-auto w-full xl:max-w-[550px] max-w-[400px]"
              priority
            />
          </div>
          <div className="flex w-full flex-col gap-4 lg:w-1/2">
            {/* <span className="w-max rounded bg-[#E5F0FF] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#0A2D75]">
              Sale End
            </span> */}
            <h1 className="xl:text-[60px] sm:text-[40px] text-[24px]   font-bold xl:leading-[65px] lg:leading-[40px] leading-[28px] sm:text-4xl text-black">
              <p className="whitespace-nowrap">That Deal Has Ended… </p>
              <p className="whitespace-nowrap">But the Good Stuff </p>
              <p className="whitespace-nowrap">Hasn’t</p>
            </h1>
            <p className="">
              <p className="whitespace-nowrap xl:text-[30px] font-normal text-[12px] xl:leading-[40px] lg:leading-[20px] leading-[20px] text-[#4B5563] sm:text-base">Get early access to WRTeam updates, product </p>
              <p className="whitespace-nowrap xl:text-[30px] font-normal text-[12px] xl:leading-[40px] lg:leading-[20px] leading-[20px] text-[#4B5563] sm:text-base">launches, discounts, and important notifications,</p>
              <p className="whitespace-nowrap xl:text-[30px] font-normal text-[12px] xl:leading-[40px] lg:leading-[20px] leading-[20px] text-[#4B5563] sm:text-base">only on our <span className="font-semibold text-[#0A1A32E5]">
                WhatsApp channel
              </span></p>
            </p>
            <Link
              href={whatsappChannelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-max items-center gap-2 rounded-md bg-[#1E73F0] px-4 py-2 text-sm font-normal text-white shadow-sm transition hover:bg-[#165ac3] focus:outline-none focus:ring-2 focus:ring-[#1E73F0] focus:ring-offset-2"
              title="Join our WhatsApp channel for updates"
            >
              <FaWhatsapp size={24} />
              Join Channel
            </Link>
          </div>
        </div>

        <div className="bg-[#1E73F0] py-3 text-sm font-semibold text-white w-full overflow-hidden absolute bottom-0 h-[60px] flex items-center  ">
          <Marquee direction="right" autoFill speed={50} gradient={false}>
            <div className="flex items-center gap-12 px-4">
              {Array.from({ length: 10 }).map((_, idx) => (
                <span key={`sale-end-${idx}`} className="text-[30px] leading-7">Sale End</span>
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </>
  );
};

export default Custom404;
