import UiUxDesign from '@/components/pagesComponent/services/UiUxDesign'
import { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/generate-metadata'

// Generate metadata for the UI/UX design services page
// export async function generateMetadata(): Promise<Metadata> {
//   return generatePageMetadata({
//     pageType: "ui_ux_development",
//     additionalMetadata: {
//       // You can add page-specific overrides here if needed
//     },
//   });
// }


// Generate metadata for the page
async function fetchSeoData() {
  try {
    const response = await fetch(
      `https://backend.wrteam.in/api/seo-settings?type=ui_ux_development`,
      { next: { revalidate: 3600 } } // Revalidate every hour
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch product data: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching product data:", error);
    return null;
  }
}

// Generate metadata for the product details page
export async function generateMetadata(
): Promise<Metadata> {
  const seoData = await fetchSeoData();

  if (!seoData || seoData.error) {
    // Fallback metadata if product data not found
    return {
      title: "Product Not Found | WRTeam",
      description: "The requested product could not be found.",
    };
  }

  const seo = seoData.data;

  // Use SEO fields if available, otherwise fallback to product data
  return {
    title: seo.title || process.env.NEXT_PUBLIC_TITLE,
    description:
      seo.description || process.env.NEXT_PUBLIC_DESCRIPTION,
    keywords:
      seo.keywords || process.env.NEXT_PUBLIC_META_KEYWORD,
    openGraph: {
      title: seo.title || process.env.NEXT_PUBLIC_TITLE,
      description:
        seo.description || process.env.NEXT_PUBLIC_DESCRIPTION,
      images: seo.image
        ? [seo.image]
        : [],
      type: "website",
      siteName: "WRTeam",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title || process.env.NEXT_PUBLIC_TITLE,
      description:
        seo.description || process.env.NEXT_PUBLIC_DESCRIPTION,
      images: seo.image
        ? [seo.image]
        : [],
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `https://wrteam.in`,
    },
  };
}

const Page = () => {
    return (
        <div><UiUxDesign /></div>
    )
}

export default Page