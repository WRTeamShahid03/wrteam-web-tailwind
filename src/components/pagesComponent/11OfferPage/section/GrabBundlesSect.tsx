import Image from "next/image";
import React from "react";
import img from "../../../../assets/images/sourceCodePage/grabBundle.png";
import { FaCheckCircle } from "react-icons/fa";
import CommonBtnComp from "../../freeSourceCode/CommonBtnComp";
import { grabBundlesDataType } from "@/types";

const GrabBundlesSect = () => {
  const list = [
    {
      id: 0,
      text: "School Management SaaS (Flutter App + Laravel Admin)",
      worth: 499,
    },
    {
      id: 1,
      text: "Classified Marketplace (Flutter App + Next.js Website + Laravel Admin Panel)",
      worth: 399,
    },
    {
      id: 2,
      text: "Real Estate App + Web (Flutter App + Next.js Website + Laravel Admin Panel)",
      worth: 399,
    },
    {
      id: 3,
      text: "Multi-Vendor Handyman App + Web (Flutter App + Next.js Website + CodeIgniter Admin Panel)",
      worth: 499,
    },
    {
      id: 4,
      text: "Trivia Quiz Game App (Flutter App + CodeIgniter Admin Panel)",
      worth: 299,
    },
    {
      id: 5,
      text: "News App + Web (Flutter App + Next.js Website + Laravel Admin Panel)",
      worth: 399,
    },
    {
      id: 6,
      text: "Lifetime Free Updates",
      worth: 999,
    },
    {
      id: 7,
      text: "30-Day Money Back Guarantee*",
      worth: 300,
    },
    {
      id: 8,
      text: "Complete Documentation",
      worth: 300,
    },
    {
      id: 9,
      text: "10% Discount On Installation Service",
      worth: 400,
    },
    {
      id: 10,
      text: "Prioritized Customer Support",
      worth: 500,
    },
    {
      id: 11,
      text: "Error Free Code",
      worth: 500,
    },
  ];

  return (
    <section className="container commonMT">
      <div className="bg-[#181a27c9] border-2 border-[#545a686e] overflow-hidden rounded-[16px]">
        <div className="flexColCenter commonTextGap primaryBg px-2">
          <div className="py-2">
            <Image
              src={img}
              height={0}
              width={0}
              alt="bunles"
              className="w-auto h-auto"
            />
          </div>
          <h5 className="text-xl md:text-3xl lg:text-4xl/[50px] font-[500] [&_span]:primaryColor !font-roboto text-center lg:w-[50%]">
            Check Out Everything You&apos;ll Get When You Grab the Bundle Today!
          </h5>
        </div>
        <div className="flex flex-col !justify-start commonTextGap px-1 py-4 md:p-3 lg:p-4">
          {list.map((list: grabBundlesDataType) => {
            return (
              <div
                className="flexCenter !justify-between pb-4 border-[#545a686e] border-b-[2px] first:pt-2"
                key={list.id}
              >
                <div className="flexCenter !justify-start gap-2 md:gap-3 lg:gap-4 max-399:w-[194px] w-[70%] xl:w-max">
                  <span className="primaryColor text-sm md:text-base">
                    {" "}
                    <FaCheckCircle />
                  </span>
                  <span className="font-semibold temax-399:xt-xs/5 sm:text-lg">
                    {list.text}
                  </span>
                </div>
                <div className="font-semibold max-399:text-xs sm:text-lg text-[#ffc66b] w-max">
                  Value : ${list.worth}
                </div>
              </div>
            );
          })}
          <div className="flex flex-col !justify-start commonTextGap p-2 md:p-4 ">
            <div className="flexColCenter font-bold commonTextGap !justify-between pb-4 md:py-6 border-[#545a686e] border-b-[2px]">
              <span className='text-xl md:text-3xl lg:text-4xl text-[#ffc66bb2] overflow-hidden after:-rotate-[2.39deg] relative after:content-[""] after:absolute after:bottom-4 after:left-0 after:bg-[#d3d3d3] after:w-[110%] after:h-[3px]'>
                Total value: $7788
              </span>
              <span className="text-xl md:text-3xl lg:text-4xl text-[#ffc66b]">
                Normal Price : $1299
              </span>
            </div>
          </div>
          <div className="primaryBg text-center rounded-[8px] p-2 md:p-4">
            <h6 className="text-[#ffffff99] text-xl md:text-3xl lg:text-4xl">
              If You Buy Now <span className="text-white font-bold">$699</span>
            </h6>
          </div>
          <CommonBtnComp />
        </div>
      </div>
    </section>
  );
};

export default GrabBundlesSect;
