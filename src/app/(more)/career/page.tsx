import Careers from "@/components/pagesComponent/careers/Careers";
import { generatePageMetadata } from "@/lib/generate-metadata";
import { Metadata } from "next";


export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata({
    pageType: "career_seo",
  });
}

export default function page() {
  return (
    <div>
        <Careers/>
    </div>
  )
}
