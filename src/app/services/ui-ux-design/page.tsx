import UiUxDesign from '@/components/pagesComponent/services/UiUxDesign'
import { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/generate-metadata'

// Generate metadata for the UI/UX design services page
export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata({
    pageType: "ui_ux_development",
    additionalMetadata: {
      // You can add page-specific overrides here if needed
    },
  });
}

const Page = () => {
    return (
        <div><UiUxDesign /></div>
    )
}

export default Page