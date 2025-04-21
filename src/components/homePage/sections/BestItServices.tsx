"use client";
import Image from "next/image";
import React from "react";
import webIcon from "../../../assets/images/homePage/web.svg";
import appIcon from "../../../assets/images/homePage/app.svg";
import uiIcon from "../../../assets/images/homePage/ui.svg";
import digitalIcon from "../../../assets/images/homePage/digital.svg";
import Link from "next/link";
import { BsArrowRightCircle } from "react-icons/bs";
import { itServicesDataTypes } from "@/types";

const BestItServices: React.FC = () => {
  const servCardData = [
    {
      id: 1,
      title: "Web Development",
      desc: "Build a user-friendly website that showcases your business online.",
      icon: webIcon,
      alt: "best web development service provider BHUJ-GUJRAT-INDIA",
      hoverBg: "bg-[#97b21e]",
      link: "/web-development",
    },
    {
      id: 2,
      title: "App Development",
      desc: "Create a custom app for your business that makes your tasks easier.",
      icon: appIcon,
      alt: "best affordable mobile app creator WRTeam bhuj-gujrat-india",
      hoverBg: "bg-[#EE8F27]",
      link: "/web-development",
    },
    {
      id: 3,
      title: "UI/UX Services",
      desc: "Design and develop engaging and user-friendly websites and apps.",
      icon: uiIcon,
      alt: "a large variety of  trendy & innovative customizable UI / UX designs-WRTeam bhuj",
      hoverBg: "bg-[#FF0077]",
      link: "/web-development",
    },
    {
      id: 4,
      title: "Digital Marketing",
      desc: "Promote your business online, reach new customers and increase sales.",
      icon: digitalIcon,
      alt: "best digital marketing agency to grow your business rapidly-WRTeam(Bhuj)",
      hoverBg: "bg-[#57B0AF]",
      link: "/web-development",
    },
  ];

  const item1Classes: string = "bg-[#97b21e] shadow-[0px_16px_36px_#97B21E5C]";
  const item2Classes: string = "bg-[#EE8F27] shadow-[0px_16px_36px_#EE8F275C]";
  const item3Classes: string = "bg-[#FF0077] shadow-[0px_16px_36px_#FF00775C]";
  const item4Classes: string = "bg-[#57B0AF] shadow-[0px_16px_36px_#57B0AF5C]";

  const item1bg: string =
    "hover:bg-[#97b21e] hover:shadow-[0px_16px_36px_#97B21E5C]";
  const item2bg: string =
    "hover:bg-[#EE8F27] hover:shadow-[0px_16px_36px_#EE8F275C]";
  const item3bg: string =
    "hover:bg-[#FF0077] hover:shadow-[0px_16px_36px_#FF00775C]";
  const item4bg: string =
    "hover:bg-[#57B0AF] hover:shadow-[0px_16px_36px_#57B0AF5C]";

  return (
    <section className="container commonMT">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="grid grid-cols-2 gap-2 md:gap-6 gap-y-4 md:gap-y-6">
          {servCardData?.map((item: itServicesDataTypes) => {
            return (
              <div
                key={item.id}
                className={`flexColCenter !items-start p-2 md:p-6 rounded-[16px] gap-3 md:gap-6 transition-all duration-300 group hover:text-white ${
                  item.id === 1
                    ? item1bg
                    : item.id === 2
                    ? item2bg
                    : item.id === 3
                    ? item3bg
                    : item4bg
                } ${item.id === 2 || item.id === 4 ? "lg:!pt-8" : ""}`}
              >
                <div
                  className={`transition-all duration-300 group-hover:bg-white ${
                    item.id === 1
                      ? item1Classes
                      : item.id === 2
                      ? item2Classes
                      : item.id === 3
                      ? item3Classes
                      : item4Classes
                  } p-2 md:p-3 rounded-full`}
                >
                  <Image
                    src={item.icon}
                    height={0}
                    width={0}
                    loading="lazy"
                    alt={item.alt}
                    className="w-auto h-auto filter brightness-0 invert group-hover:filter-none"
                  />
                </div>
                <span className="md:text-xl lg:text-2xl font-[700]">
                  {item.title}
                </span>
                <p className="sectionPara text-sm md:text-base group-hover:text-white">
                  {item.desc}
                </p>
                <Link
                  href={item.link}
                  className="font-semibold text-sm md:text-base flex items-center w-max gap-1 md:gap-2 primaryColor group-hover:text-white"
                >
                  Explore Service <BsArrowRightCircle />
                </Link>
              </div>
            );
          })}
        </div>

        <div className="flexColCenter !items-start commonTextGap">
          <span className="sectionTag">
            Best <span>IT Services</span>
          </span>
          <h2 className="sectionTitle">
            <span>Innovate, Implement, Succeed:</span> We Offer Every IT Service
            You need, all in <span>One Place.</span>
          </h2>
          <p className="sectionPara">
            In the modern world having a digital presence is crucial, it&apos;s
            necessary to have a business website or app that leads to stronger
            administration & expansion. Remove limitations of place & time from
            your business with WRTeam&apos;s software services.
          </p>
          <p className="sectionPara">
            We offer all software services in one place, from designing a
            personalized mobile app & website to streamlining your business
            website & mobile app.
          </p>
          <p className="sectionPara">
            Our team has experienced UI/UX designers, web developers, native &
            flutter mobile app developers, and digital marketers to enhance your
            digital brand identity. Our experts are committed to delivering the
            best results and developing lifelong relationships.
          </p>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default BestItServices;
