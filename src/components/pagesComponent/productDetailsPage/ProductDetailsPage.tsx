'use client'
import React, { useEffect, useState } from 'react'
import ProductDetailHeader from './header/ProductDetailHeader'
import LayoutOne from './layoutOne/LayoutOne'
import LayoutTwo from './layoutTwo/LayoutTwo'
import { axiosClient } from '@/lib/api'
import Loader from '@/components/commonComponents/Loader/Loader'
import { ProductDetails } from '@/types'

interface Props {
  slug: string;
}

const ProductDetailsPage = ({ slug }: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [layoutType, setLayoutType] = useState<1 | 2>(2);
  const [productDetails, setProductDetails] = useState<ProductDetails | null>(null);
  const [error, setError] = useState<string | null>(null);

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
        document.documentElement.style.setProperty('--productPage-secondry-color', productData.secondary_color);

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

  if (isLoading) {
    return <Loader />;
  }




  return (
    <div className=''>
      <ProductDetailHeader
        icon_image={productDetails?.icon_image}
      />
      {productDetails && (
        layoutType === 1 ? (
          <LayoutOne productDetails={productDetails} />
        ) : (
          <LayoutTwo productDetails={productDetails} />
        )
      )}
    </div>
  )
}

export default ProductDetailsPage