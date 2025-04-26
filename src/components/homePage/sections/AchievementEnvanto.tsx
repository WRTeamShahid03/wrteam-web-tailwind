"use client";
import Image from "next/image";
import React from "react";
import achievementImg from "../../../assets/images/homePage/Achievement.webp";
import achievementImgResponsive from "../../../assets/images/homePage/AchievementResponsive.webp";
import Link from "next/link";

const AchievementEnvanto: React.FC = () => {
  return (
    <section className="container commonMT overflow-hidden">
      <div className="grid xl:grid-cols-2 gap-8 md:gap-12 xl:gap-14">
        <div>
          <div className="flexColCenter !items-start gap-4 md:gap-6">
            <span className="sectionTag">
              Achievement <span>on Envato</span>
            </span>
            <h4 className="sectionTitle">
              WRTeam is Honored as the <span>&quot;Most Creative&quot;</span>{" "}
              Author on Envato.
            </h4>
            <p className="sectionPara">
              WRTeam is honored as the most creative author on Envato (Code
              Canyon). We are also recognized as an elite author on Code Canyon,
              selling source codes to create websites and mobile apps.
            </p>
            <p className="sectionPara">
              This achievement became possible just because of our expert and
              experienced team, specialized knowledge, and expertise.
            </p>
            <p className="sectionPara">
              We appreciate innovative thinking and creativity, and our staff
              always believes in evolution and bringing new ideas. Moreover,
              Credit for this remarkable achievement goes to our team&apos;s
              dedication and passion for excellence.
            </p>
            <Link href="https://1.envato.market/R5YR7b" target="_blank" aria-label="Read more about WRTeam's Envato portfolio and achievements" className="commonBtn" > Read&nbsp;More </Link>
          </div>
        </div>
        <div className="relative lg:flexCenter">
          <h5
            className="fillTextAnimation !fillTextAnimationAchievement"
            data-fill-text="WRTEAM"
          >
            WRTEAM
          </h5>
          <div className="relative">
            <Image
              src={achievementImg}
              width={0}
              height={0}
              loading="lazy"
              alt="team of creative and innovative designers using most advanced tools & technology"
              className="md:w-[80%] lg:w-full max-w-full lg:h-full max-h-full md:-ml-6 lg:ml-8 xl:-ml-14 md:block hidden"
            />
            <Image
              src={achievementImgResponsive}
              width={0}
              height={0}
              loading="lazy"
              alt="team of creative and innovative designers using most advanced tools & technology"
              className="md:w-[80%] lg:w-full max-w-full lg:h-full max-h-full md:-ml-6 lg:ml-8 xl:-ml-14 block md:hidden"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementEnvanto;
