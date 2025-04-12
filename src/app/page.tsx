import type { Metadata } from "next";
import HomePage from "@/components/homePage";
import { generatePageMetadata } from "@/lib/generate-metadata";

// Generate metadata for the page
export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata({
    pageType: "home",
    additionalMetadata: {
      // You can add page-specific overrides here if needed
    },
  });
}

export default function Home() {
  return (
    <>
      <HomePage />
    </>
  );
}
