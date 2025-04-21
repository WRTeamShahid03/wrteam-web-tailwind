import AboutUs from "@/components/pagesComponent/aboutUs/AboutUs";
import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/generate-metadata";
import Breadcrumb from "@/components/Breadcrumb";

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
  // Define breadcrumb items for about-us page
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "About Us", url: "/about-us" },
  ];

  return (
    <div>
      <div className="container mx-auto px-4 py-4">
        <Breadcrumb items={breadcrumbItems} className="mb-4" />
      </div>
      <AboutUs />
    </div>
  );
}
