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
 */
const UrgencyText = ({ textClass = "text-base", badgeClass = "text-base" }: { textClass?: string; badgeClass?: string }) => (
  <div className="flex items-center gap-2 flex-wrap justify-center">
    <span className={`text-red-800 font-extrabold whitespace-nowrap ${textClass}`}>
      Hurry! Last Chance to Get
    </span>
    <span className={`bg-white text-red-800 font-black px-4 py-1 rounded-2xl outline outline-1 outline-red-800 whitespace-nowrap ${badgeClass}`}>
      50% Off
    </span>
  </div>
);

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
  <Link href="/march-mega-sale" className={className}>
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

/** "Limited Time" label */
const TimerLabel = () => (
  <div className="flex items-center gap-1.5 text-red-800 font-bold whitespace-nowrap">
    <RiAlarmFill className="w-4 h-4 2xl:w-5 2xl:h-5" />
    <span className="text-sm 2xl:text-sm">Limited Time Only</span>
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

  // ⏳ Countdown renderer
  const renderer = ({ days, hours, minutes, seconds, completed }: any) => {
    if (completed) return null;

    const f = (n: number) => String(n).padStart(2, "0");

    const Box = ({ v, l }: { v: number; l: string }) => (
      <div className="w-8 sm:w-12 lg:w-10 xl:w-12 px-1 sm:px-2 lg:px-1.5 xl:px-2 py-0.5 sm:py-1 bg-white rounded-md backdrop-blur-sm flex flex-col items-center justify-center gap-0.5 shadow-sm">
        <span className="text-gray-900 text-xs sm:text-base lg:text-sm xl:text-base font-bold leading-tight">{f(v)}</span>
        <span className="text-red-800 text-[7px] sm:text-[9px] font-normal leading-tight">
          <span className="sm:hidden">{l.charAt(0)}</span>
          <span className="hidden sm:inline">{l}</span>
        </span>
      </div>
    );

    return (
      <div className="flex items-center gap-1.5">
        <Box v={days} l="Days" />
        <Box v={hours} l="Hours" />
        <Box v={minutes} l="Minutes" />
        <Box v={seconds} l="Seconds" />
      </div>
    );
  };

  return (
    <div className="w-full relative overflow-hidden bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,_#FFEDEF_0%,_#FFE3E5_100%)]">

      {/* Marquee keyframe */}
      <style>{`
        @keyframes saleMarquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>

      {/* Decorative effects — hidden on mobile */}
      <div className="hidden sm:block absolute left-0 top-0 h-full w-[45%]">
        <Image src={leftEffect} alt="" fill className="object-cover" />
      </div>
      <div className="hidden sm:block absolute right-0 top-0 h-full w-[45%]">
        <Image src={rightEffect} alt="" fill className="object-cover" />
      </div>

      {/* ================= MOBILE ================= */}
      <div className="flex items-center sm:hidden py-2 overflow-hidden">

        {/* Scrolling marquee track */}
        <div className="flex-1 overflow-hidden min-w-0">
          <div
            className="flex items-center w-max"
            style={{ animation: "saleMarquee 20s linear infinite" }}
          >
            {/* Two identical copies for seamless looping */}
            {[0, 1, 2, 3].map((idx) => (
              <div key={idx} className="flex items-center gap-3 px-4 shrink-0">
                <SaleLogo className="h-8 object-contain shrink-0" />
                <span className="text-red-800 font-extrabold text-[16px] whitespace-nowrap shrink-0">
                  {showCountdown ? "Hurry! Last Chance to Get" : "Mega Savings on Premium Solutions"}
                </span>
                <OfferBadge className="h-8 object-contain shrink-0" />
              </div>
            ))}
          </div>
        </div>

        {/* Fixed button at stripe end */}
        <div className="shrink-0 border-l border-red-300 pl-2.5 pr-3">
          <BuyNowLink
            className="bg-red-800 text-white text-[11px] px-3 py-1.5 rounded-full flex items-center gap-1 whitespace-nowrap"
            iconSize={8}
            label={ctaLabel}
          />
        </div>
      </div>

      {/* ================= TABLET ================= */}
      {showCountdown ? (
        // Countdown active: centered 2-row
        <div className="hidden sm:flex lg:hidden flex-col items-center justify-center gap-1.5 px-4 py-2">
          <div className="flex items-center gap-3">
            <SaleLogo className="h-6 w-auto shrink-0 object-contain" />
            <UrgencyText textClass="text-sm" badgeClass="text-sm" />
          </div>
          <div className="flex items-center gap-3">
            <SaleCountdown isClient={isClient} renderer={renderer} />
            <BuyNowLink
              className="px-3 py-1.5 bg-white rounded-[100px] outline outline-2 outline-white/50 backdrop-blur-[9.80px] flex items-center gap-2 whitespace-nowrap text-red-800 font-semibold text-sm hover:scale-105 transition"
              iconSize={11}
              iconWrapped
              gradientIcon
              label={ctaLabel}
            />
          </div>
        </div>
      ) : (
        // No countdown: all centered in one row
        <div className="hidden sm:flex lg:hidden items-center justify-center px-4 py-2 gap-4">
          <SaleLogo className="h-5 w-auto shrink-0 object-contain" />
          <DefaultCenter
            badgeClass="h-7 w-auto object-contain"
            iconClass="h-5 w-auto object-contain"
          />
          <BuyNowLink
            className="bg-red-800 text-white text-sm px-4 py-1.5 rounded-full flex items-center gap-1.5 shrink-0 justify-center whitespace-nowrap"
            iconSize={12}
            label={ctaLabel}
          />
        </div>
      )}

      {/* ================= LAPTOP ================= */}
      <div className="hidden lg:flex xl:hidden items-center justify-center px-4 py-2 gap-3">

        <div className="flex items-center gap-2 shrink-0">
          <SaleLogo className="h-6 w-auto" />
          {showCountdown ? (
            <UrgencyText textClass="text-sm" badgeClass="text-xs" />
          ) : (
            <span className="text-red-800 font-bold text-base whitespace-nowrap">
              Mega Savings on Premium Solutions
            </span>
          )}
        </div>

        {!showCountdown && (
          <DefaultCenter
            badgeClass="h-8 w-auto object-contain"
            iconClass="h-4 w-auto object-contain"
          />
        )}

        <div className="flex items-center gap-2 shrink-0">
          <SaleCountdown isClient={isClient} renderer={renderer} />
          <BuyNowLink
            className={
              showCountdown
                ? "px-4 py-1.5 bg-white rounded-[100px] outline outline-2 outline-white/50 backdrop-blur-[9.80px] flex items-center gap-1.5 whitespace-nowrap hover:scale-105 transition text-red-800 text-sm font-semibold"
                : "bg-red-800 text-white px-4 py-1.5 rounded-full flex items-center gap-2 whitespace-nowrap hover:scale-105 transition text-sm"
            }
            iconSize={11}
            iconWrapped={showCountdown}
            gradientIcon={showCountdown}
            label={ctaLabel}
          />
        </div>
      </div>

      {/* ================= DESKTOP ================= */}
      <div className="hidden xl:flex relative z-10 items-center justify-center px-6 2xl:px-10 py-2.5 max-w-[1600px] 2xl:max-w-[1800px] mx-auto gap-7">

        {/* LEFT */}
        <div className="flex items-center gap-7 shrink-0">
          <SaleLogo className="h-7 2xl:h-9 w-auto" />
          {showCountdown ? (
            <UrgencyText
              textClass="text-xl 2xl:text-2xl"
              badgeClass="text-xl 2xl:text-2xl"
            />
          ) : (
            <span className="text-red-800 text-lg 2xl:text-xl font-bold whitespace-nowrap">
              Mega Savings on Premium Solutions
            </span>
          )}
        </div>

        {/* CENTER — only when countdown not active */}
        {!showCountdown && (
          <div className="flex items-center justify-center gap-2 2xl:gap-3">
            <DefaultCenter
              badgeClass="h-10 2xl:h-12 w-auto object-contain"
              iconClass="h-5 2xl:h-7 w-auto object-contain"
            />
          </div>
        )}

        {/* RIGHT */}
        <div className="flex items-center gap-7 shrink-0">
          {!showCountdown && <TimerLabel />}
          <SaleCountdown isClient={isClient} renderer={renderer} />
          <BuyNowLink
            className={
              showCountdown
                ? "px-5 py-2.5 bg-white rounded-[100px] outline outline-2 outline-white/50 backdrop-blur-[9.80px] flex items-center gap-2 whitespace-nowrap hover:scale-105 transition text-red-800 text-base font-semibold"
                : "bg-white px-4 2xl:px-5 py-2 2xl:py-2.5 rounded-full text-red-800 text-sm 2xl:text-sm font-semibold flex items-center gap-2 whitespace-nowrap hover:scale-105 transition"
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
