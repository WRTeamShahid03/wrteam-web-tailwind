import DevelopmentPortfolio from "@/components/pagesComponent/portfolio/DevelopmentPortfolio";
import { Metadata } from "next";

// either Static metadata
export const metadata: Metadata = {
  title: 'Web and Mobile App Development Services Bhuj, India | WRTeam',
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
