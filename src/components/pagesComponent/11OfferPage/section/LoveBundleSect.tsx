import React from "react";
import icon1 from "../../../../assets/images/sourceCodePage/Icon1.png";
import icon2 from "../../../../assets/images/sourceCodePage/Icon2.png";
import icon3 from "../../../../assets/images/sourceCodePage/Icon3.png";
import icon4 from "../../../../assets/images/sourceCodePage/Icon4.png";
import { servicesProcessDataTypes } from "@/types";
import Image from "next/image";
import CommonBtnComp from "../../freeSourceCode/CommonBtnComp";

const LoveBundleSect = () => {
  const categories = [
    {
      id: 0,
      img: icon1,
      title: "A Freelancer",
      desc: "Who need to deliver high-quality projects in short of time multiple clients.",
    },
    {
      id: 1,
      img: icon2,
      title: "A Developer",
      desc: "Who is looking for efficient tools to speed up your coding and enhance your workflow.",
    },
    {
      id: 2,
      img: icon3,
      title: "A Entrepreneur",
      desc: "Who is ready to launch new apps or websites without getting bogged down in development.",
    },
    {
      id: 3,
      img: icon4,
      title: "A Student",
      desc: "Who wanting to build real-world projects and learn from well-structured code examples.",
    },
  ];

  return (
    <div className="container commonMT space-y-8 md:space-y-12 lg:space-y-16">
      <div className="flexCenter">
        <h3 className="text-xl md:text-3xl lg:text-4xl/[50px] font-[500] [&_span]:primaryColor !font-roboto text-center lg:text-start">
          You Gonna Love This Bundle If <span>You&apos;re…</span>
        </h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category: servicesProcessDataTypes) => (
          <div
            key={category.id}
            className="bg-[#0B0F19] flexColCenter !items-start gap-4 p-5 border border-[#80808070] rounded-xl transition-transform transform hover:-translate-y-2 duration-300"
          >
            <div className="rounded-full p-3 bg-[#316be71a]">
              <Image
                src={category.img}
                height={0}
                width={0}
                alt={category.title}
                className="w-[42px] h-[42px]"
              />
            </div>
            <h3 className="font-semibold text-lg">{category.title}</h3>
            <p className="">{category.desc}</p>
          </div>
        ))}
      </div>
      <CommonBtnComp />
    </div>
  );
};
export default LoveBundleSect;
