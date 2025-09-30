import React from 'react'
import HeroSect from './sections/HeroSect'
import WhatYouGet from './sections/WhatYouGet'
import BuyNow from './sections/BuyNow'
import Technologies from './sections/Technologies'
import OrbitPaymentGateways from './sections/PaymentGateways'
import InfoSect from './sections/InfoSect'
import InnerPagesSect from './sections/InnerPagesSect'
import ProcessSect from './sections/ProcessSect'
import TransformSect from './sections/TransformSect'
import ProductReviews from './sections/ProductReviews'
import { ProductDetails } from '@/types'
import FeatureSections from './sections/FeatureSection'
import PerfectPlan from '../newUIProductDetailpageLayoutOne/PerfectPlan'
import ReadyToPower from '../newUIProductDetailpageLayoutOne/ReadyToPower'
import FaqSection from '../newUIProductDetailpageLayoutOne/FaqSection'
import HelpAndSupport from '../newUIProductDetailpageLayoutOne/HelpAndSupport'
import ClientProductReviews from './ClientProductReviews'


interface LayoutTwoProps {
    productDetails: ProductDetails
    codecanyonLink: string;
    checkoutUrl: string;
    extendedLicensePrice: number;
    extendedLicenseLink: string;
    regularLicensePrice: number;
    salePrice?: number;
    extendedLicenseSalePrice?: number;
    productName: string;
}
const LayoutTwo: React.FC<LayoutTwoProps> = ({ productDetails, checkoutUrl, extendedLicensePrice, extendedLicenseLink, regularLicensePrice, salePrice, extendedLicenseSalePrice, productName }) => {

    const productDescription = productDetails?.product_description[0]
    const layoutOneDetails = productDescription
    const helpSection = layoutOneDetails?.help_section
    const productFaqs = productDetails.product_faqs

    return (
        <div>
            {
                productDetails?.product_description[0]?.intro_section &&
                <HeroSect
                    title={productDetails?.product_description[0].intro_section.title}
                    description={productDetails?.product_description[0].intro_section.description}
                    imageUrl={productDetails?.product_description[0].intro_section.image_url}
                />
            }

            {
                productDetails?.product_description[0]?.product_element_section &&
                <WhatYouGet
                    title={productDetails?.product_description[0].product_element_section.title}
                    description={productDetails?.product_description[0].product_element_section.description}
                    elements={productDetails?.product_description[0].product_element_section.elements}
                    testimonials={productDetails.product_testimonials}
                />
            }

            <BuyNow checkoutUrl={checkoutUrl} />

            {
                productDetails?.product_description[0]?.technology_section &&
                <Technologies title={productDetails?.product_description[0].technology_section.title} description={productDetails?.product_description[0].technology_section.description} technologies={productDetails?.product_description[0].technology_section.technologies} />
            }

            {
                productDetails?.product_description[0]?.payment_gateway_section &&
                <OrbitPaymentGateways title={productDetails?.product_description[0].payment_gateway_section.title} description={productDetails?.product_description[0].payment_gateway_section.description} gateways={productDetails?.product_description[0].payment_gateway_section.gateways} payment_gateway_main_image_url={productDetails?.product_description[0].payment_gateway_section.payment_gateway_main_image_url} />
            }

            <InfoSect />

            {
                productDetails?.product_description[0]?.feature_section &&
                <FeatureSections title={productDetails?.product_description[0].feature_section.title} description={productDetails?.product_description[0].feature_section.description} features={productDetails?.product_description[0].feature_section.features} />
            }

            {
                productDetails?.product_description[0]?.panel_wise_feature_section &&
                <InnerPagesSect title={productDetails?.product_description[0].panel_wise_feature_section.title} description={productDetails?.product_description[0].panel_wise_feature_section.description} tabs={productDetails?.product_description[0].panel_wise_feature_section.tabs} layoutOne={false} />
            }

            <ProcessSect />

            <TransformSect checkoutUrl={checkoutUrl} />

            {
                productDetails?.product_testimonials &&
                <ProductReviews testimonials={productDetails.product_testimonials} productName={productName} />
            }

            <PerfectPlan checkoutUrl={checkoutUrl} extendedLicensePrice={extendedLicensePrice} extendedLicenseLink={extendedLicenseLink} regularLicensePrice={regularLicensePrice} salePrice={salePrice} extendedLicenseSalePrice={extendedLicenseSalePrice} />

            {
                productFaqs &&
                <FaqSection faqs={productFaqs} />
            }

            {
                helpSection && helpSection.sections && helpSection.sections.length > 0 &&
                <HelpAndSupport helpSection={helpSection} />
            }

            <ReadyToPower checkoutUrl={checkoutUrl} productName={productName} />

            {/* <ClientProductReviews /> */}

        </div>
    )
}

export default LayoutTwo