'use client'
import Layout from '@/components/layout/Layout'
import React, { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import PageHeader from "@/components/commonComponents/PageHeader";
import LoaderThree from '@/components/commonComponents/Loader/LoaderThree';

// Skeleton component for loading state
const SkeletonDetail = () => (
  <div className="animate-pulse">
    <div className="h-8 bg-gray-200 rounded w-1/3 mb-4"></div>
    <div className="h-60 bg-gray-200 rounded-lg mb-6"></div>
    <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
    <div className="h-4 bg-gray-200 rounded w-5/6 mb-2"></div>
    <div className="h-4 bg-gray-200 rounded w-3/4 mb-6"></div>
    <div className="flex flex-wrap gap-2 mb-6">
      <div className="h-6 bg-gray-200 rounded-full w-20"></div>
      <div className="h-6 bg-gray-200 rounded-full w-24"></div>
      <div className="h-6 bg-gray-200 rounded-full w-16"></div>
    </div>
  </div>
);

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

const PortfolioDetials = () => {
  const params = useParams();
  const { slug } = params;

  // State for portfolio details
  const [portfolioDetail, setPortfolioDetail] = useState<PortfolioDetail | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch portfolio details based on slug
  useEffect(() => {
    const fetchPortfolioDetail = async () => {
      if (!slug) return;

      try {
        setIsLoading(true);
        setError(null);

        // Use the same API endpoint but with the slug parameter
        const response = await fetch(`/api/portfolio?offset=0&limit=5& slug=${slug}`);
        const data = await response.json();

        if (data && !data.error) {
          // Handle different possible response structures
          let detailData = null;

          if (data.data && Array.isArray(data.data) && data.data.length > 0) {
            // If data.data is directly an array, take the first item
            detailData = data.data[0];
          } else if (data.data && !Array.isArray(data.data)) {
            // If data.data is a single object
            detailData = data.data;
          } else if (Array.isArray(data) && data.length > 0) {
            // If data itself is an array
            detailData = data[0];
          }

          if (detailData) {
            // Map API response to our PortfolioDetail format
            setPortfolioDetail({
              id: detailData.id || Math.random().toString(36).substr(2, 9),
              title: detailData.products?.name || detailData.app_headline || "Untitled Project",
              description: detailData.description,
              image: detailData.image || detailData.app_image || "/placeholder.jpg",
              tag: detailData.tag,
              play_store_link: detailData.play_store_link,
              app_store_link: detailData.app_store_link,
              website_link: detailData.website_link,
              ...detailData // Include all other properties
            });
          } else {
            setError("Portfolio item not found");
          }
        } else {
          console.error("API returned error:", data.error, data.message, data.details);
          setError(data.message || "Failed to fetch portfolio details");
        }
      } catch (error) {
        console.error("Error fetching portfolio detail:", error);
        setError("An error occurred while fetching portfolio details");
      } finally {
        setIsLoading(false);
      }
    };

    fetchPortfolioDetail();
  }, [slug]);

  // Get tags as an array
  const tags = portfolioDetail?.tag
    ? portfolioDetail.tag.split(',').map(t => t.trim())
    : [];

  return (
    <Layout>
      <head>
        <title>{portfolioDetail?.app_headline} | WRTeam's Work Portfolio</title>
      </head>

      {/* Page header with breadcrumbs */}
      {/* <PageHeader
        title="Portfolio Details"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Our Work", },
          { name: portfolioDetail?.title || "Details" }, // Current page, no path
        ]}
      /> */}

      <div className='container commonMT'>
        {isLoading ? (
          <LoaderThree />
        ) : error ? (
          <div className="bg-red-50 text-red-700 p-4 rounded-md">
            {error}
          </div>
        ) : portfolioDetail?.description ? (
          <div>
            <div dangerouslySetInnerHTML={{ __html: portfolioDetail?.description || '' }} />
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-lg text-gray-500">
              Portfolio item not found.
            </p>
          </div>
        )}
      </div>
    </Layout>
  )
}

export default PortfolioDetials