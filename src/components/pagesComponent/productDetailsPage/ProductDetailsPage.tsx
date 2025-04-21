'use client'
import React, { useEffect, useState } from 'react'
import ProductDetailHeader from './header/ProductDetailHeader'
import LayoutOne from './layoutOne/LayoutOne'
import LayoutTwo from './layoutTwo/LayoutTwo'
import { axiosClient } from '@/lib/api'
import Loader from '@/components/commonComponents/Loader/Loader'
import Script from 'next/script'
import { HelpSection, OldUiProductData, ProductDetails as ProductDetailsType } from '@/types'
import LoaderTwo from '@/components/commonComponents/Loader/LoaderTwo'
import LoaderThree from '@/components/commonComponents/Loader/LoaderThree'
import ProductDetailFooter from './footer/ProductDetailFooter'

interface Props {
  slug: string;
  productData: OldUiProductData;
}

const ProductDetailsPage = ({ slug, productData }: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [layoutType, setLayoutType] = useState<1 | 2>(2);
  const [productDetails, setProductDetails] = useState<ProductDetailsType | null>(null);
  const [error, setError] = useState<string | null>(null);

  console.log('productData =>', productData)

  const productName = productData?.product_title;
  const checkoutUrl = productData?.checkout_url;
  const codecanyonLink = productData?.codecanyon_link;
  const footerLogo = productData?.icon_image2;
  const supportData = productDetails?.product_description[0]?.help_section



  useEffect(() => {
    if (slug) {
      fetchProductDetails();
    }
  }, [slug]);

  const fetchProductDetails = async (): Promise<void> => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await axiosClient.get('/api/product-description', {
        params: { slug },
        timeout: 10000
      });

      if (response?.data?.data) {
        const productData = response.data.data;

        // Set theme colors using CSS variables
        document.documentElement.style.setProperty('--productPage-primary-color', productData.theme_color);
        document.documentElement.style.setProperty('--productPage-secondary-color', productData.secondary_color);

        setLayoutType(productData.style === 1 ? 1 : 2);
        setProductDetails(productData);

        // Add a small delay before hiding loader to ensure smooth transition
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      } else {
        setError('Unable to load product details');
        setIsLoading(false);
      }
    } catch (error) {
      setError('An error occurred while fetching product details');
      setIsLoading(false);
    }
  };

  if (!isLoading) {
    return <LoaderTwo />;
  }

  // Only render product schema if we have product details
  const generateProductSchema = () => {
    if (!productDetails) return '';

    // Create structured data for product
    const productSchema = {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': productDetails.product_description?.[0]?.intro_section?.title || 'WRTeam Software',
      'image': productDetails.product_description?.[0]?.intro_section?.image_url || productDetails.icon_image,
      'description': productDetails.product_description?.[0]?.intro_section?.description || '',
      'applicationCategory': 'Application',
      'operatingSystem': 'Android, iOS',
      'offers': {
        '@type': 'Offer',
        'price': '69',
        'priceCurrency': 'USD',
        'url': `https://wrteam.in/product-details/${slug}`
      },
      'aggregateRating': {
        '@type': 'AggregateRating',
        'ratingValue': '4.5',
        'ratingCount': '100'
      }
    };

    return JSON.stringify(productSchema);
  };

  return (
    <div className=''>
      {/* JSON-LD structured data for product */}
      {productDetails && (
        <Script
          id="product-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: generateProductSchema() }}
        />
      )}

      <ProductDetailHeader
        icon_image={productDetails?.icon_image}
      />
      {productDetails && (
        layoutType === 1 ? (
          <LayoutOne productDetails={productDetails} checkoutUrl={checkoutUrl}/>
        ) : (
          <LayoutTwo productDetails={productDetails} codecanyonLink={codecanyonLink} checkoutUrl={checkoutUrl}/>
        )
      )}
      <ProductDetailFooter icon_image={footerLogo} codecanyonLink={codecanyonLink}  supportData={supportData as HelpSection}/>
    </div>
  )
}

export default ProductDetailsPage