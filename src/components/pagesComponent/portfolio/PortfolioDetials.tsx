'use client'
import Layout from '@/components/layout/Layout'
import React from 'react'
import PageHeader from "@/components/commonComponents/PageHeader";
import Loader from '@/components/commonComponents/Loader/Loader';

// Interface for portfolio item details
interface PortfolioDetail {
  id: string | number;
  title?: string;
  description?: string;
  image?: string;
  app_headline?: string;
  app_image?: string;
  short_description?: string;
  long_description?: string;
  tag?: string;
  play_store_link?: string;
  app_store_link?: string;
  website_link?: string;
  products?: {
    id?: number | string;
    name?: string;
  };
  [key: string]: any; // For other properties that might be returned by the API
}

interface PortfolioDetialsProps {
  portfolioData: PortfolioDetail | null;
}

const PortfolioDetials: React.FC<PortfolioDetialsProps> = ({ portfolioData }) => {
    // console.log('PortfolioDetials received data:', portfolioData);

  // Get tags as an array
  const tags = portfolioData?.tag
    ? portfolioData.tag.split(',').map(t => t.trim())
    : [];

  // Map the data to ensure we have all required fields
  const mappedData = portfolioData ? {
    ...portfolioData,
    id: portfolioData.id || Math.random().toString(36).substr(2, 9),
    title: portfolioData.products?.name || portfolioData.app_headline || "Untitled Project",
    description: portfolioData.description || portfolioData.long_description || "",
    image: portfolioData.image || portfolioData.app_image || "/placeholder.jpg",
  } : null;

  // console.log('Mapped portfolio data:', mappedData);

  return (
    <Layout>

      {/* Page header with breadcrumbs */}
      {/* <PageHeader
        title="Portfolio Details"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Our Work", },
          { name: mappedData?.title || "Details" }, // Current page, no path
        ]}
      /> */}

      <div className='container commonMT'>
        {!mappedData ? (
          <div className="text-center py-12">
            <p className="text-lg text-gray-500">
              Portfolio item not found.
            </p>
          </div>
        ) : (
          <div>
            <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: mappedData.description || '' }} />
          </div>
        )}
      </div>
    </Layout>
  )
}

export default PortfolioDetials