"use client";
import React, { useEffect, useState, useCallback } from "react";
import ProductDetailHeader from "./header/ProductDetailHeader";
import LayoutOne from "./layoutOne/LayoutOne";
import LayoutTwo from "./layoutTwo/LayoutTwo";
import Script from "next/script";
import LoaderThree from "@/components/commonComponents/Loader/LoaderThree";
import { OldUiProductData, ProductDetails } from "@/types";
import { axiosClient } from "@/lib/api";
import ProductDetailFooter from "./footer/ProductDetailFooter";
import { HelpSection } from "@/types";

interface Props {
  slug: string;
  productData: OldUiProductData;
}

const ProductDetailsPage = ({ slug, productData }: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [layoutType, setLayoutType] = useState<1 | 2>(2);
  const [productDetails, setProductDetails] = useState<ProductDetails | null>(
    null
  );


  const productName = productData?.product_title;

  const checkoutUrl = productData?.checkout_url;
  const codecanyonLink = productData?.codecanyon_link;
  const extendedLicensePrice = productData?.extended_license_price;
  const extendedLicenseLink = productData?.extended_license_link;
  const regularLicensePrice = productData?.price;

  const footerLogo = productData?.icon_image2;
  const supportData = productDetails?.product_description[0]?.help_section;

  const fetchProductDetails = useCallback(async (): Promise<void> => {
    try {
      setIsLoading(true);

      const response = await axiosClient.get("/api/product-description", {
        params: { slug },
        timeout: 10000,
      });

      if (response?.data?.data) {
        const productData = response.data.data;

        // Set theme colors using CSS variables
        document.documentElement.style.setProperty(
          "--productPage-primary-color",
          productData.theme_color
        );
        document.documentElement.style.setProperty(
          "--productPage-secondary-color",
          productData.secondary_color
        );

        setLayoutType(productData.style === 1 ? 1 : 2);
        setProductDetails(productData);

        // Add a small delay before hiding loader to ensure smooth transition
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      } else {
        setIsLoading(false);
      }
    } catch (err) {
      console.error("Failed to fetch product details:", err);
      setIsLoading(false);
    }
  }, [slug]);

  useEffect(() => {
    if (slug) {
      fetchProductDetails();
    }
  }, [slug, fetchProductDetails]);

  if (isLoading) {
    return <LoaderThree />;
  }

  // Only render product schema if we have product details
  const generateProductSchema = () => {
    if (!productDetails) return "";

    // Create structured data for product
    const productSchema = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name:
        productDetails.product_description?.[0]?.intro_section?.title ||
        "WRTeam Software",
      image:
        productDetails.product_description?.[0]?.intro_section?.image_url ||
        productDetails.icon_image,
      description:
        productDetails.product_description?.[0]?.intro_section?.description ||
        "",
      applicationCategory: "Application",
      operatingSystem: "Android, iOS",
      offers: {
        "@type": "Offer",
        price: "69",
        priceCurrency: "USD",
        url: `https://wrteam.in/product-details/${slug}`,
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.5",
        ratingCount: "100",
      },
    };

    return JSON.stringify(productSchema);
  };

  return (
    <div className="">
      {/* JSON-LD structured data for product */}
      {productDetails && (
        <Script
          id="product-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: generateProductSchema() }}
        />
      )}

      <ProductDetailHeader icon_image={productDetails?.icon_image} />
      {productDetails &&
        (layoutType === 1 ? (
          <LayoutOne
            productDetails={productDetails}
            checkoutUrl={checkoutUrl}
            extendedLicensePrice={extendedLicensePrice}
            extendedLicenseLink={extendedLicenseLink}
            regularLicensePrice={regularLicensePrice}
            productName={productName}
          />
        ) : (
          <LayoutTwo
            productDetails={productDetails}
            codecanyonLink={codecanyonLink}
            checkoutUrl={checkoutUrl}
            extendedLicensePrice={extendedLicensePrice}
            extendedLicenseLink={extendedLicenseLink}
            regularLicensePrice={regularLicensePrice}
          />
        ))}
      <ProductDetailFooter
        icon_image={footerLogo}
        codecanyonLink={codecanyonLink}
        supportData={supportData as HelpSection}
      />
    </div>
  );
};

export default ProductDetailsPage;
