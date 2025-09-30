"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Layout from "../layout/Layout";
import HeroSection from "./sections/HeroSection";
import AboutWrteam from "./sections/AboutWrteam";
import AchievementEnvanto from "./sections/AchievementEnvanto";
import Solutions from "./sections/Solutions";
import BestItServices from "./sections/BestItServices";
import Technologies from "./sections/Technologies";
import WorkChain from "./sections/WorkChain";
import ExclusiveCounter from "./sections/ExclusiveCounter";
import ClientReviewSection from "./sections/ClientReviewSection";
import VideoTestimonials from "./sections/VideoTestimonials";
import RiveAnimation from "../layout/RiveAnimation";

const HomePage: React.FC = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Layout>
      {/* <div className="flex justify-center items-center">
        <RiveAnimation />
      </div> */}
      <HeroSection />
      <ExclusiveCounter />
      <AboutWrteam />
      <AchievementEnvanto />
      <Solutions />
      <BestItServices />
      <Technologies />
      <WorkChain />
      <VideoTestimonials />
      <ClientReviewSection />
    </Layout>
  );
};

export default HomePage;
