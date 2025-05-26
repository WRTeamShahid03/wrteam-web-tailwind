import DesignPortfolio from "@/components/pagesComponent/portfolio/DesignPortfolio";
import { Metadata } from "next";

// either Static metadata
export const metadata: Metadata = {
  title: 'Web and Mobile App Design Services Bhuj, India | WRTeam',
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
