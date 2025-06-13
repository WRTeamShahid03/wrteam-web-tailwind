import DevelopmentPortfolio from "@/components/pagesComponent/portfolio/DevelopmentPortfolio";
import { Metadata } from "next";

// either Static metadata
export const metadata: Metadata = {
  title: 'Web and Mobile App Development Services Bhuj, India | WRTeam',
  description: `Discover WRTeam's expert web and mobile app development services in Bhuj, India. View our portfolio of custom, scalable solutions for startups, SaaS, and businesses of all sizes.`,
  alternates: {
    canonical: `https://www.wrteam.in/our-work/development`,
  },
}


const Page = () => {
  return (
    <>
      <DevelopmentPortfolio />
    </>
  );
};

export default Page;
