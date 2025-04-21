import React from 'react'
import HeroSect from './sections/HeroSect'
import WhatYouGet from './sections/WhatYouGet'
import BuyNow from './sections/BuyNow'
import Technologies from './sections/Technologies'
import OrbitPaymentGateways from './sections/PaymentGateways'
import InfoSect from './sections/InfoSect'
import FeatureSection from './sections/FeatureSection'
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


interface LayoutTwoProps {
    productDetails: ProductDetails
    codecanyonLink: string;
    checkoutUrl: string;
}
const LayoutTwo: React.FC<LayoutTwoProps> = ({ productDetails, codecanyonLink, checkoutUrl }) => {

    const productDescription = productDetails.product_description[0]
    const productTestimonial = productDetails.product_testimonials
    const layoutOneDetails = productDescription
    const helpSection = layoutOneDetails?.help_section
    const productFaqs = productDetails.product_faqs

    return (
        <div>
            <HeroSect
                title={productDetails.product_description[0].intro_section.title}
                description={productDetails.product_description[0].intro_section.description}
                imageUrl={productDetails.product_description[0].intro_section.image_url}
            />

            <WhatYouGet
                title={productDetails.product_description[0].product_element_section.title}
                description={productDetails.product_description[0].product_element_section.description}
                elements={productDetails.product_description[0].product_element_section.elements}
                testimonials={productDetails.product_testimonials}
            />

            <BuyNow checkoutUrl={checkoutUrl} />

            <Technologies title={productDetails.product_description[0].technology_section.title} description={productDetails.product_description[0].technology_section.description} technologies={productDetails.product_description[0].technology_section.technologies} />

            <OrbitPaymentGateways title={productDetails.product_description[0].payment_gateway_section.title} description={productDetails.product_description[0].payment_gateway_section.description} gateways={productDetails.product_description[0].payment_gateway_section.gateways} />

            <InfoSect />

            <FeatureSections title={productDetails.product_description[0].feature_section.title} description={productDetails.product_description[0].feature_section.description} features={productDetails.product_description[0].feature_section.features} />

            <InnerPagesSect title={productDetails.product_description[0].panel_wise_feature_section.title} description={productDetails.product_description[0].panel_wise_feature_section.description} tabs={productDetails.product_description[0].panel_wise_feature_section.tabs} layoutOne={false} />

            <ProcessSect />

            <TransformSect checkoutUrl={checkoutUrl} />

            <ProductReviews testimonials={productDetails.product_testimonials} />

            <PerfectPlan />

            <FaqSection faqs={productFaqs} />

            <HelpAndSupport helpSection={helpSection} />

            <ReadyToPower checkoutUrl={checkoutUrl} />

        </div>
    )
}

export default LayoutTwo