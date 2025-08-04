import Image from "next/image";
import React from "react";
import eliteAuthor from "../../../../../assets/images/productDetailPage/layoutTwo/EliteAuthor.webp";
import smileImg from "../../../../../assets/images/productDetailPage/layoutTwo/Smile.webp";
import updateImg from "../../../../../assets/images/productDetailPage/layoutTwo/update.webp";
import customizable from "../../../../../assets/images/productDetailPage/layoutTwo/customizable.webp";
import buy from "../../../../../assets/images/productDetailPage/layoutTwo/buy.webp";
import { servicesProcessDataTypes } from "@/types";

const InfoSect: React.FC = () => {
  const data = [
    {
      id: 0,
      img: eliteAuthor,
      title: "Elite Author",
      desc: "On CodeCanyon",
    },
    {
      id: 1,
      img: smileImg,
      title: `${process.env.NEXT_PUBLIC_SALE_COUNTS}+`,
      desc: "Global Clients",
    },
    {
      id: 2,
      img: updateImg,
      title: "FREE Updates",
      desc: "For Life-Time",
    },
    {
      id: 3,
      img: customizable,
      title: "White Label",
      desc: "Fully Customizable",
    },
    {
      id: 4,
      img: buy,
      title: "One Time Buy",
      desc: "No Monthly Fees",
    },
  ];

  return (
    <section className="commonMT productDetailPrimaryBg py-8 md:py-12 lg:py-20">
      <div className="container space-y-8 md:space-y-12">
        <div className="flexColCenter commonTextGap lg:w-[55%] m-auto text-center">
          <h6 className="sectionTitle">
            Why Purchase WRTeam&apos;s Source Codes?
          </h6>
          <p className="sectionPara">
            We are an elite author trusted by 18,000+ customers, we provide
            easily customizable codes with lifetime free updates.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 between-1200-1399:grid-cols-5 xl:grid-cols-5 gap-4 sm:gap-6">
          {data.map((item: servicesProcessDataTypes) => {
            return (
              <div
                className="flexColCenter commonTextGap bg-white rounded py-4 px-2 sm:py-8 sm:px-5"
                key={item.id}
              >
                <Image
                  src={item.img}
                  height={0}
                  width={0}
                  alt={item.title}
                  className="w- h-[90px] object-contain"
                />
                <div className="flexColCenter gap-2 text-center">
                  <span className="font-bold text-base sm:text-xl between-1200-1399:text-xl xl:text-2xl text-[#3a4c59]">
                    {item.title}
                  </span>
                  <p className="sectionPara !m-0">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InfoSect;
