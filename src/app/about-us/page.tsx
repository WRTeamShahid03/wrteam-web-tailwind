import AboutUs from "@/components/pagesComponent/aboutUs/AboutUs";
import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/generate-metadata";

// Generate metadata for the about-us page
export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata({
    pageType: "aboutus",
    additionalMetadata: {
      // You can add page-specific overrides here if needed
    },
  });
}

export default function Page() {

  return (
    <div>
      <AboutUs />
    </div>
  );
}
