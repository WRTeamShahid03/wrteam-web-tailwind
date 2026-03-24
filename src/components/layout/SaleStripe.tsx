"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Countdown from "react-countdown";
import { RiAlarmFill } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa6";

// Images
import leftEffect from "../../assets/images/marchMegaSale/left_effect.svg";
import rightEffect from "../../assets/images/marchMegaSale/right_effect.svg";
import marchMegaSaleLogo from "../../assets/images/marchMegaSale/march__mega_sale.svg";
import fiftyOffBadge from "../../assets/images/marchMegaSale/50_off.svg";
import marchIcon from "../../assets/images/marchMegaSale/march_icon.svg";

// Utils
import { isCountdownVisible, isSaleActive } from "../../lib/utils";

// Config
import saleConfig from "../../config/sale.config";

// ─── Sub-components ──────────────────────────────────────────────────────────

const SaleLogo = ({ className }: { className: string }) => (
  <Image src={marchMegaSaleLogo} alt="March Mega Sale" className={className} priority />
);

const OfferBadge = ({ className }: { className: string }) => (
  <Image src={fiftyOffBadge} alt="50% off" className={className} priority />
);

const MarchIcon = ({ className }: { className: string }) => (
  <Image src={marchIcon} alt="" aria-hidden="true" className={className} priority />
);

/** Shown in center when countdown is NOT active */
const DefaultCenter = ({ badgeClass, iconClass }: { badgeClass: string; iconClass: string }) => (
  <div className="flex items-center justify-center gap-2">
    <MarchIcon className={iconClass} />
    <OfferBadge className={badgeClass} />
    <MarchIcon className={iconClass} />
  </div>
);

/**
 * Urgency text shown when countdown IS active.
 * Matches Figma: "Hurry! Last Chance to Get" + "50% Off" outlined badge.
 */
const UrgencyText = ({ textClass = "text-base", badgeClass = "text-base" }: { textClass?: string; badgeClass?: string }) => (
  <div className="flex items-center gap-2 flex-wrap justify-center">
    <span className={`text-red-800 font-extrabold whitespace-nowrap ${textClass}`}>
      Hurry! Last Chance to Get
    </span>
    <span className={`bg-white text-red-800 font-black px-4 py-1.5 rounded-2xl outline outline-1 outline-red-800 whitespace-nowrap ${badgeClass}`}>
      50% Off
    </span>
  </div>
);

/**
 * CTA button.
 * - label: changes to "Claim Offer Now" when countdown active
 * - iconWrapped: arrow inside a circle (desktop default style)
 * - gradientIcon: Figma countdown style — gradient circle arrow
 */
const BuyNowLink = ({
  className,
  iconSize = 10,
  iconWrapped = false,
  gradientIcon = false,
  label = "Buy Now",
}: {
  className: string;
  iconSize?: number;
  iconWrapped?: boolean;
  gradientIcon?: boolean;
  label?: string;
}) => (
  <Link href="/extended-license-sale" className={className}>
    {label}
    {iconWrapped ? (
      <span
        className={`rounded-full p-1 flex items-center justify-center ${
          gradientIcon
            ? "bg-gradient-to-r from-red-800 to-red-500 text-white"
            : "bg-red-800 text-white"
        }`}
      >
        <FaArrowRight size={iconSize} />
      </span>
    ) : (
      <FaArrowRight size={iconSize} />
    )}
  </Link>
);

/** "Limited Time" label — shown on desktop when countdown is NOT active */
const TimerLabel = () => (
  <div className="flex items-center gap-2 text-red-800 font-bold whitespace-nowrap">
    <RiAlarmFill className="w-6 h-6 2xl:w-10 2xl:h-10" />
    <span className="text-sm 2xl:text-base">Limited Time Only</span>
  </div>
);

const SaleCountdown = ({
  isClient,
  renderer,
}: {
  isClient: boolean;
  renderer: any;
}) => {
  const { countdownStartDate, saleEndDate } = saleConfig;
  if (!isClient || !isCountdownVisible(countdownStartDate, saleEndDate)) return null;
  return <Countdown date={saleEndDate} renderer={renderer} />;
};

// ─── Main component ───────────────────────────────────────────────────────────

const SaleStripe = ({ setShowSaleStripe }: any) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => setIsClient(true), []);

  const { saleStartDate, saleEndDate, countdownStartDate } = saleConfig;

  useEffect(() => {
    if (!isSaleActive(saleStartDate, saleEndDate)) {
      setShowSaleStripe(false);
    }
  }, []);

  const showCountdown = isClient && isCountdownVisible(countdownStartDate, saleEndDate);
  const ctaLabel = showCountdown ? "Claim Offer Now" : "Buy Now";

  // ⏳ Countdown renderer — Figma style when active
  const renderer = ({ days, hours, minutes, seconds, completed }: any) => {
    if (completed) return null;

    const f = (n: number) => String(n).padStart(2, "0");

    // Mobile: w-8 compact. Tablet: w-14. Laptop (lg): w-11. Desktop (xl): w-14.
    const Box = ({ v, l }: { v: number; l: string }) => (
      <div className="w-8 sm:w-14 lg:w-11 xl:w-14 px-1 sm:px-2 lg:px-1.5 xl:px-2.5 py-1 sm:py-1.5 bg-white rounded-md backdrop-blur-sm flex flex-col items-center justify-center gap-0.5 shadow-sm">
        <span className="text-gray-900 text-xs sm:text-lg lg:text-sm xl:text-lg font-bold leading-tight">{f(v)}</span>
        <span className="text-red-800 text-[7px] sm:text-[10px] font-normal leading-tight">
          <span className="sm:hidden">{l.charAt(0)}</span>
          <span className="hidden sm:inline">{l}</span>
        </span>
      </div>
    );

    return (
      <div className="flex items-center gap-2">
        <Box v={days} l="Days" />
        <Box v={hours} l="Hours" />
        <Box v={minutes} l="Minutes" />
        <Box v={seconds} l="Seconds" />
      </div>
    );
  };

  return (
    <div className="w-full relative overflow-hidden bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,_#FFEDEF_0%,_#FFE3E5_100%)]">

      {/* Decorative effects — hidden on mobile */}
      <div className="hidden sm:block absolute left-0 top-0 h-full w-[45%]">
        <Image src={leftEffect} alt="" fill className="object-cover" />
      </div>
      <div className="hidden sm:block absolute right-0 top-0 h-full w-[45%]">
        <Image src={rightEffect} alt="" fill className="object-cover" />
      </div>

      {/* ================= MOBILE ================= */}
      {showCountdown ? (
        // Countdown active: logo row, then [50% Off + countdown] row, then button
        <div className="flex flex-col items-center gap-1.5 px-3 py-2 sm:hidden">
          <SaleLogo className="h-7 object-contain" />
          <div className="flex items-center justify-center gap-2 w-full">
            <span className="bg-white text-red-800 font-black px-2.5 py-1 rounded-xl outline outline-1 outline-red-800 text-xs whitespace-nowrap shrink-0">
              50% Off
            </span>
            <SaleCountdown isClient={isClient} renderer={renderer} />
          </div>
          <BuyNowLink
            className="bg-red-800 text-white text-[13px] px-4 py-1.5 rounded-full flex items-center gap-1.5 w-full justify-center"
            iconSize={10}
            label={ctaLabel}
          />
        </div>
      ) : (
        // No countdown: logo then badge + button in one row
        <div className="flex flex-col items-center gap-2 px-3 py-2 sm:hidden">
          <SaleLogo className="h-[40px] object-contain" />
          <div className="flex items-center justify-between w-full gap-3">
            <OfferBadge className="h-8 object-contain" />
            <BuyNowLink
              className="bg-red-800 text-white text-[13px] px-4 py-1.5 rounded-full flex items-center gap-1.5 w-full justify-center"
              iconSize={10}
              label={ctaLabel}
            />
          </div>
        </div>
      )}

      {/* ================= TABLET ================= */}
      {showCountdown ? (
        // Countdown active: 2-row centered layout
        <div className="hidden sm:flex lg:hidden flex-col items-center justify-center gap-2 px-4 py-3">
          <div className="flex items-center gap-3">
            <SaleLogo className="h-7 w-auto shrink-0 object-contain" />
            <UrgencyText textClass="text-sm" badgeClass="text-sm" />
          </div>
          <div className="flex items-center gap-3">
            <SaleCountdown isClient={isClient} renderer={renderer} />
            <BuyNowLink
              className="px-4 py-2 bg-white rounded-[100px] outline outline-2 outline-white/50 backdrop-blur-[9.80px] flex items-center gap-2 whitespace-nowrap text-red-800 font-semibold text-sm hover:scale-105 transition"
              iconSize={11}
              iconWrapped
              gradientIcon
              label={ctaLabel}
            />
          </div>
        </div>
      ) : (
        // No countdown: logo | text | center badges | button
        <div className="hidden sm:flex lg:hidden items-center justify-between px-4 py-2 gap-3">
          <SaleLogo className="h-6 w-auto shrink-0 object-contain" />
         
          <DefaultCenter
            badgeClass="h-8 w-auto object-contain"
            iconClass="h-6 w-auto object-contain"
          />
          <BuyNowLink
            className="bg-red-800 text-white text-sm px-4 py-2 rounded-full flex items-center gap-1.5 shrink-0 justify-center whitespace-nowrap"
            iconSize={12}
            label={ctaLabel}
          />
        </div>
      )}

      {/* ================= LAPTOP ================= */}
      <div className={`hidden lg:flex xl:hidden items-center px-4 py-2.5 gap-3 ${showCountdown ? "justify-center" : "justify-between"}`}>

        <div className="flex items-center gap-2 shrink-0">
          <SaleLogo className={showCountdown ? "h-6 w-auto" : "h-8 w-auto"} />
          {showCountdown ? (
            <UrgencyText textClass="text-sm" badgeClass="text-xs" />
          ) : (
            <span className="text-red-800 font-bold text-lg whitespace-nowrap">
              Mega Savings on Premium Solutions
            </span>
          )}
        </div>

        {!showCountdown && (
          <div className="flex items-center justify-center flex-1">
            <DefaultCenter
              badgeClass="h-10 w-auto object-contain"
              iconClass="h-5 w-auto object-contain"
            />
          </div>
        )}

        <div className="flex items-center gap-2 shrink-0">
          <SaleCountdown isClient={isClient} renderer={renderer} />
          <BuyNowLink
            className={
              showCountdown
                ? "px-4 py-2 bg-white rounded-[100px] outline outline-2 outline-white/50 backdrop-blur-[9.80px] flex items-center gap-1.5 whitespace-nowrap hover:scale-105 transition text-red-800 text-sm font-semibold"
                : "bg-red-800 text-white px-5 py-2 rounded-full flex items-center gap-2 whitespace-nowrap hover:scale-105 transition"
            }
            iconSize={11}
            iconWrapped={showCountdown}
            gradientIcon={showCountdown}
            label={ctaLabel}
          />
        </div>
      </div>

      {/* ================= DESKTOP ================= */}
      <div className={`hidden xl:flex relative z-10 items-center px-6 2xl:px-10 py-4 max-w-[1600px] 2xl:max-w-[1800px] mx-auto gap-6 2xl:gap-9 ${showCountdown ? "justify-center" : "justify-between"}`}>

        {/* LEFT */}
        <div className="flex items-center gap-3 2xl:gap-4 shrink-0">
          <SaleLogo className="h-8 2xl:h-10 w-auto" />
          {showCountdown ? (
            <UrgencyText
              textClass="text-xl 2xl:text-3xl"
              badgeClass="text-xl 2xl:text-3xl"
            />
          ) : (
            <span className="text-red-800 text-xl 2xl:text-2xl font-bold whitespace-nowrap">
              Mega Savings on Premium Solutions
            </span>
          )}
        </div>

        {/* CENTER — only rendered when countdown is not active */}
        {!showCountdown && (
          <div className="flex items-center justify-center gap-2 2xl:gap-3 flex-1 max-w-[420px] 2xl:max-w-[560px]">
            <DefaultCenter
              badgeClass="h-12 2xl:h-16 w-auto object-contain"
              iconClass="h-6 2xl:h-10 w-auto object-contain"
            />
          </div>
        )}

        {/* RIGHT */}
        <div className="flex items-center gap-3 2xl:gap-4 shrink-0">
          {!showCountdown && <TimerLabel />}
          <SaleCountdown isClient={isClient} renderer={renderer} />
          <BuyNowLink
            className={
              showCountdown
                ? "px-6 py-3.5 bg-white rounded-[100px] outline outline-2 outline-white/50 backdrop-blur-[9.80px] flex items-center gap-2 whitespace-nowrap hover:scale-105 transition text-red-800 text-lg font-semibold"
                : "bg-white px-4 2xl:px-6 py-2.5 2xl:py-3 rounded-full text-red-800 text-sm 2xl:text-base font-semibold flex items-center gap-2 whitespace-nowrap hover:scale-105 transition"
            }
            iconSize={10}
            iconWrapped
            gradientIcon={showCountdown}
            label={ctaLabel}
          />
        </div>
      </div>

    </div>
  );
};

export default SaleStripe;
