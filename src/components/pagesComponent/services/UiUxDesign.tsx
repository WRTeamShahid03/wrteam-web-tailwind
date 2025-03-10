"use client";
import Breadcrumb from "@/components/commonComponents/Breadcrumb";
import Layout from "@/components/layout/Layout";
import Image from "next/image";
import React from "react";
import mainImg from "../../../assets/images/services/ui-ux-development/ux-ui-design.webp";

// swiper Imgs
import appDesign from "../../../assets/images/services/ui-ux-development/app_design.webp";
import webDesign from "../../../assets/images/services/ui-ux-development/web_design.webp";
import brandDesign from "../../../assets/images/services/ui-ux-development/Brand design.webp";
import completeSolution from "../../../assets/images/services/ui-ux-development/Complete Solution Service.webp";

import timelyUpdadtes from "../../../assets/images/services/icons/Benefits/Timely Updates-.png";
import quality from "../../../assets/images/services/icons/Benefits/Testing & Quality Assurance.png";
import support from "../../../assets/images/services/icons/Benefits/Ongoing Support.png";
import eliteAuthor from "../../../assets/images/services/icons/Benefits/Elite Author on Codecanyon – 1.png";
import { servicesBenefitsDataTypes, servicesBuildDataTypes } from "@/types";

import ProcessSect from "./ProcessSect";
import processImg from "../../../assets/images/services/ui-ux-development/12-10-05-Our Work Process_Ui-ux Disign service-.webp";
import processImg2 from "../../../assets/images/services/ui-ux-development/12-10-05-Our Work Process Ui-ux Disign service.webp";
import processIcon1 from "../../../assets/images/services/icons/Process/Development.png";
import processIcon2 from "../../../assets/images/services/icons/Process/Maintenance & Support.png";
import processIcon3 from "../../../assets/images/services/icons/Process/Design & Planning.png";
import processIcon4 from "../../../assets/images/services/icons/Process/Analysis of Demands.png";
import processIcon5 from "../../../assets/images/services/icons/Process/Testing & Quality Assurance.png";
import processIcon6 from "../../../assets/images/services/icons/Process/Deployment.png";
import arrowImg from "../../../assets/images/services/ArrowLeftDown.svg";

import buildBg from "../../../assets/images/contactFormBg.webp";
import figma from "../../../assets/images/services/ui-ux-development/icon/Figma.png";
import figmaHover from "../../../assets/images/services/ui-ux-development/icon/FigmaHover.png";
import illustrator from "../../../assets/images/services/ui-ux-development/icon/Illustrator.png";
import illustratorHover from "../../../assets/images/services/ui-ux-development/icon/IllustratorHover.png";
import photoShop from "../../../assets/images/services/ui-ux-development/icon/Photoshop.png";
import photoShopHover from "../../../assets/images/services/ui-ux-development/icon/PhotoshopHover.png";
import xd from "../../../assets/images/services/ui-ux-development/icon/XD.png";
import xdHover from "../../../assets/images/services/ui-ux-development/icon/XDHover.png";
import ServicesSwiper from "./ServicesSwiper";

const UiUxDesign: React.FC = () => {
  const newSwiperData = [
    {
      id: 0,
      title: "Web design",
      desc: "Our team includes UI/UX designers with experience of more than 7 years as a web designer and experts in creating innovative & user-friendly web designs that are tailored to your business. We aim to turn your vision into reality with our ultimate UI/UX design service.",
      img: webDesign,
      alt: "best web design service provider WRTeam  kutch",
    },
    {
      id: 1,
      title: "App design",
      desc: "Our team of UI/UX designers has over 7 years of experience of creating user-friendly and innovative app designs. We are experts in making app designs that fit your business needs perfectly. With our UI/UX design services, we turn your ideas into reality.",
      img: appDesign,
      alt: "best app designing service provider WRTeam kutch",
    },
    {
      id: 2,
      title: "Brand design",
      desc: "Our company also provides UI/UX design customization services for our prebuilt source codes that help you to make any website or app 5X faster. We create designs tailored to your needs, making your product unique and user-friendly. Let our experts transform your project with our personalized design services.",
      img: brandDesign,
      alt: "top branding strategist at the best IT development company WRTeam",
    },
    {
      id: 3,
      title: "Customization",
      desc: `Our company also provides UI/UX design customization services for our prebuilt source codes that help you to make any website or app 5X faster. We create designs tailored to your needs, making your product unique and user-friendly. Let our experts transform your project with our personalized design services.`,
      img: completeSolution,
      alt: "complete solution service with design experts at WRTeam bhuj",
    },
  ];

  const benefitsCardData = [
    {
      id: 0,
      icon: timelyUpdadtes,
      title: "Timely Updates",
    },
    {
      id: 1,
      icon: quality,
      title: "Testing & Quality Assurance",
    },
    {
      id: 2,
      icon: support,
      title: "Ongoing Support",
    },
    {
      id: 3,
      icon: eliteAuthor,
      title: "Elite Author on Codecanyon",
    },
  ];

  const processCardData = [
    {
      id: 0,
      icon: processIcon1,
      title: "Discovery & Research",
      desc: "We gather insights about your project, audience, and market to create designs that connect with your audience effectively.",
      img: processIcon1,
    },
    {
      id: 1,
      icon: processIcon2,
      title: "Wireframing",
      desc: "We sketch the basic layout and functionality of your design, ensuring it meets your goals and the needs of users",
      img: processIcon2,
    },
    {
      id: 2,
      icon: processIcon3,
      title: "Prototyping",
      desc: "After wireframing, we create interactive mockups to simulate user interactions and refine the design.",
      img: processIcon3,
    },
    {
      id: 3,
      icon: processIcon4,
      title: "Visual Design",
      desc: "We designs the visual elements of your product or service, ensuring they reflect your brand and maintain consistency across all platforms.",
      img: processIcon4,
    },
    {
      id: 4,
      icon: processIcon5,
      title: "Iteration and Refinement",
      desc: "We refine based on feedback, ensuring our work evolves to meet changing needs and trends.",
      img: processIcon5,
    },
    {
      id: 5,
      icon: processIcon6,
      title: "Final Delivery",
      desc: "Once everything is refined and approved, we deliver the finalized product or service, ready for implementation.",
      img: processIcon6,
    },
  ];

  const buildCardData = [
    {
      id: 0,
      icon: figma,
      hoverIcon: figmaHover,
      title: "Figma",
      alt: "best Figma service provider WRTeam bhuj",
    },
    {
      id: 1,
      icon: illustrator,
      hoverIcon: illustratorHover,
      title: "Illustrator",
      alt: "best illustrator service provider WRTeam bhuj",
    },
    {
      id: 2,
      icon: photoShop,
      hoverIcon: photoShopHover,
      title: "Photoshop",
      alt: "best photoshop service provider WRTeambhuj",
    },
    {
      id: 3,
      icon: xd,
      hoverIcon: xdHover,
      title: "XD",
      alt: "Best Adobe XD service provider WRTeam Bhuj",
    },
  ];

  return (
    <Layout>
      <Breadcrumb
        title="UI-UX"
        blueText="Servies"
        secondElement="Services"
        thirdElement="UI-UX-Design"
      />
      <section className="container commonMT">
        <div className="grid max-1199:grid-cols-1 grid-cols-2 gap-8">
          <div className="flexColCenter !items-start commonTextGap">
            <span className="sectionTag">
              UI-UX <span>Services</span>
            </span>
            <h2 className="sectionTitle">
              Make Innovative App & Web Designs with the Best <span>UI/UX</span>{" "}
              Designers
            </h2>
            <p className="sectionPara">
              Our Best UI/UX design service focuses on creating innovative &
              unique designs for your website & application tailored to your
              needs. Our UI/UX designers are experienced & expert at making
              unique, user-friendly websites & applications.
            </p>
          </div>

          <div className="flexCenter">
            <div className='flexCenter relative before:contents-[""] before:absolute before:top-[6px] before:left-0 before:right-0 before:bottom-0 before:m-auto before:w-[86%] before:h-[96%] before:primaryBg before:-z-[1] before:rotate-[185deg] before:rounded-[16px]'>
              <Image
                src={mainImg}
                height={0}
                width={0}
                loading="lazy"
                alt="best UI/UX service provider WRTeam kutch"
                className="w-[85%] h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* swiper  */}
      <section className="commonBg pt-8 pb-12 md:pt-16 md:pb-24 commonMT">
        <div className="container space-y-10">
          <div className="flexColCenter commonTextGap">
            <span className="sectionTag">
              <span>What</span> We Can Do <span>For You</span>
            </span>
            <h3 className="sectionTitle">
              Services <span>We Can Help </span>You With
            </h3>
          </div>
          <ServicesSwiper data={newSwiperData} />
        </div>
      </section>

      {/* benefits */}
      <section className="container commonMT space-y-12">
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="flexColCenter !items-start commonTextGap">
            <span className="sectionTag">
              Extensive <span>Benefits</span>
            </span>
            <h4 className="sectionTitle">
              The Transformative Benefits of Our <span>UI/UX</span> Solutions
            </h4>
          </div>
          <div className="flexCenter">
            <p className="sectionPara">
              Transform your digital presence with our UI/UX designing service.
              enhance user experiences, attract new audiences, and strategically
              upboost your brand&apos;s success.
            </p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {benefitsCardData.map((item: servicesBenefitsDataTypes) => {
            return (
              <div
                className="flexColCenter !items-start gap-7 border-[2px] border-[#545A684D] rounded-[16px] p-5 group transition-all duration-300 hover:bg-white hover:shadow-[-16px_16px_46px_#2830421F] hover:border-transparent"
                key={item.id}
              >
                <div className="flexCenter primaryBg w-[60px] md:w-[74px] h-[56px] md:h-[74px] rounded-md shadow-[0px_8px_26px_#176BF15C]">
                  <Image
                    src={item.icon}
                    loading="lazy"
                    height={0}
                    width={0}
                    alt={item.title}
                    className="w-[30px] md:w-[40px] h-auto"
                  />
                </div>
                <p className="font-bold text-lg">{item.title}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* process  */}
      <section className="container commonMT space-y-16">
        <ProcessSect
          data={processCardData.slice(0, 3)}
          isReverse={false}
          sectionTitle="How We Make Your App More User-Friendly with the Best UI/UX Designers"
          blueText="User-Friendly"
          sectionImg={processImg}
          alt={`work done by enhancing clients' needs with innovative design at WRTeam bhuj`}
        />
        <div className="container max-1199:hidden">
          <Image
            src={arrowImg}
            height={0}
            width={0}
            loading="lazy"
            alt="arrowDown"
            className="w-[58%] 2xl:w-[62%] -mt-[40px] -mb-[40px] 2xl:-mb-[80px] mx-[-18px] 2xl:mx-[-60px] h-auto"
          />
        </div>
        <ProcessSect
          data={processCardData.slice(3, processCardData.length)}
          isReverse={true}
          sectionTitle=""
          blueText=""
          sectionImg={processImg2}
          alt="creative work done by experts at WRTeam bhuj"
        />
      </section>

      {/* build  */}
      <section className="commonMT commonMB">
        <div
          className="h-[400px] relative -z-[1]"
          style={{
            background: `rgb(2 0 16 / 61%) url(${buildBg.src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundBlendMode: "darken",
          }}
        >
          <div className="primaryBg relative z-[2] h-full w-full opacity-[0.5]"></div>
        </div>
        <div className="container max-1199:-mt-[350px] -mt-[250px]">
          <div className="bg-white shadow-[0px_0px_46px_#2830421F] relative z-[2] py-4 md:py-8 lg:py-12 rounded-[16px] overflow-hidden">
            <div className="grid grid-cols-12 gap-y-4">
              <div className="max-1199:col-span-12 col-span-5 flexColCenter !items-start commonTextGap border-r p-4 md:p-12">
                <span className="sectionTag">
                  <span>We</span> Build
                </span>
                <h6 className="sectionTitle">
                  Make Dynamic <span>UI/UX</span> Designs with{" "}
                  <span>Leading Tools</span> for Your Digital Presence.
                </h6>
                <p className="sectionPara">
                  From Illustrator&apos;s finesse to Figma&apos;s innovation, we blend
                  pixel-perfect precision from Photoshop with Adobe XD&apos;s
                  seamless design.
                </p>
              </div>
              <div className="max-1199:col-span-12 col-span-7 !p-[0px_25px] md:max-1199:!p-[0px_65px] lg:!p-[85px]">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
                  {buildCardData.map((item: servicesBuildDataTypes) => {
                    return (
                      <div
                        className="flexColCenter gap-4 group transition-all duration-300"
                        key={item.id}
                      >
                        <div className="commonBg rounded-md h-[90px] w-[90px] flexCenter group-hover:primaryBg transition-all duration-300">
                          <Image
                            src={item.icon}
                            height={0}
                            width={0}
                            loading="lazy"
                            alt={item.alt}
                            className="w-[55px] h-auto group-hover:hidden block transition-all duration-300"
                          />
                          <Image
                            src={item.hoverIcon}
                            height={0}
                            width={0}
                            loading="lazy"
                            alt={item.alt}
                            className="w-[55px] h-auto group-hover:block hidden transition-all duration-300"
                          />
                        </div>
                        <span className="font-semibold md:text-lg">
                          {item.title}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default UiUxDesign;
