"use client";
import React, { useEffect, useState } from "react";
import icon1 from "../../../../../assets/images/productDetailPage/layoutTwo/process1.webp";
import icon2 from "../../../../../assets/images/productDetailPage/layoutTwo/process2.webp";
import icon3 from "../../../../../assets/images/productDetailPage/layoutTwo/process3.webp";

import arrIcon from "../../../../../assets/images/productDetailPage/layoutTwo/guideArrow.png";
import Image from "next/image";
import { useParams } from "next/navigation";
import { servicesProcessDataTypes } from "@/types";

const ProcessSect = () => {
  const router = useParams();

  const slug = router?.slug;

  const [productName, setProductName] = useState<string>("");

  useEffect(() => {
    if (typeof slug === "string" && slug.startsWith("ebroker")) {
      setProductName("eBroker");
    } else if (typeof slug === "string" && slug.startsWith("eclassify")) {
      setProductName("eClassify");
    } else if (typeof slug === "string" && slug.startsWith("erestro")) {
      setProductName("eRestroSingle");
    } else {
      setProductName("eSchool");
    }
  }, [slug]);

  const cardsdata = [
    {
      id: 0,
      img: icon1,
      title: "Purchase Script",
      desc: `Choose ${productName} and complete transactions using available payment methods on Envato Marketplace`,
    },
    {
      id: 1,
      img: icon2,
      title: "Install & Configure",
      desc: `Once downloaded from the Envato Marketplace, Refer the doc and follow the steps, or handle it yourself if you possess coding expertise.`,
    },
    {
      id: 2,
      img: icon3,
      title: "Publish App",
      desc: `Customize ${productName} with your branding and share with world.`,
    },
  ];

  return (
    <section className="container commonMT space-y-12 md:space-y-16 lg:space-y-20">
      <div className="flexColCenter commonTextGap md:w-[60%] lg:w-[55%] m-auto text-center">
        <h2 className="sectionTitle">
          Process From Purchase to Publication in 3 Simple Steps
        </h2>
        <p className="sectionPara">
          Get the app from purchase to publication in 3 simple steps. It&apos;s
          quick, easy, and hassle-free
        </p>
      </div>
      <div className="flexColCenter sm:grid sm:grid-cols-2 lg:grid-cols-3 relative gap-6">
        <Image
          src={arrIcon}
          height={0}
          width={0}
          alt="process-icon"
          className="w-auto h-auto absolute top-0 left-[22%] hidden lg:block max-1199:left-[24%] between-1200-1399:left-[25%]"
        />
        <Image
          src={arrIcon}
          height={0}
          width={0}
          alt="process-icon"
          className="w-auto h-auto absolute top-0 right-[30%] hidden lg:block max-1199:right-[24%] between-1200-1399:right-[25%]"
        />
        {cardsdata.map(
          (item: servicesProcessDataTypes, index: number): React.ReactNode => (
            <div
              key={index}
              className="flex flex-col items-center text-center mb-12 md:mb-0 max-w-xs"
            >
              <div className="relative">
                <div className="">
                  <Image
                    src={item.img}
                    height={0}
                    width={0}
                    alt="process-icon"
                    className="w-full h-full"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold mt-4 mb-2">{item.title}</h3>
              <p className="text-[#5c788c] font-[500]">{item.desc}</p>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default ProcessSect;
