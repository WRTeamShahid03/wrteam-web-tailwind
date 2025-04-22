"use client";
import Image from "next/image";
import React from "react";
import aboutImg from "../../../assets/images/homePage/AboutImage.webp";
import companyExp from "../../../assets/images/homePage/CompanyExperience.webp";
import Link from "next/link";
import { SubsectionTitle } from "@/components/HeadingComponent";

const AboutWrteam: React.FC = () => {
  return (
    <section className="container commonMT">
      <div className="grid xl:grid-cols-2 gap-12 md:gap-16 xl:gap-64">
        <div className="relative">
          <h2 className="fillTextAnimation" data-fill-text="WRTEAM">
            WRTEAM
          </h2>
          <div className="relative">
            <Image
              src={aboutImg}
              width={0}
              height={0}
              loading="lazy"
              alt="expert, experienced & skilled  software developers for your business"
              className="w-auto h-auto md:ml-16 xl:ml-24 2xl:ml-20"
            />
            <Image
              src={companyExp}
              width={0}
              height={0}
              loading="lazy"
              alt="company-experience"
              className="w-[140px] h-[140px] sm:w-[230px] sm:h-[210px] md:w-max md:h-max absolute top-0 bottom-0 -right-2 sm:-right-12 md:right-0 lg:right-36 xl:-right-44 2xl:-right-48 m-auto companyExp"
            />
          </div>
        </div>

        <div>
          <div className="flexColCenter !items-start gap-4 md:gap-6">
            <span className="sectionTag">
              About <span>WRTeam</span>
            </span>
            <SubsectionTitle className="sectionTitle">
              We are Committed to Providing our <span>Clients</span> with
              End-to-End <span>App and Website</span> Solutions.
            </SubsectionTitle>
            <p className="sectionPara">
              WRTeam has experience of more than 7 years as a software
              development company, our experienced web and app developers
              deliver results that reach all your requirements .
            </p>
            <p className="sectionPara">
              WRTeam is a team of web developers & app developers who are
              creative, dedicated, and experts in full stack development and
              UI/UX, using advanced technologies like Laravel, Flutter, Figma,
              etc.
            </p>
            <Link
              href={"/about-us"}
              title="Discover More"
              className="commonBtn"
            >
              Discover More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutWrteam;
