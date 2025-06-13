import DesignPortfolio from "@/components/pagesComponent/portfolio/DesignPortfolio";
import { Metadata } from "next";

// either Static metadata
export const metadata: Metadata = {
  title: 'Web and Mobile App Design Services Bhuj, India | WRTeam',
  description: `Explore WRTeam's creative web and mobile app design services in Bhuj, India. View our portfolio of user-focused UI/UX designs built to enhance engagement, branding, and usability.`,
  alternates: {
    canonical: `https://www.wrteam.in/our-work/design`,
  },
}

const Page = () => {
  return (
    <>
      <DesignPortfolio />
    </>
  );
};

export default Page;
