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


interface LayoutTwoProps {
    productDetails: ProductDetails
}
const LayoutTwo: React.FC<LayoutTwoProps> = ({ productDetails }) => {

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
            {/* TODO: Don't know property of data which get from api */}
            <BuyNow />
            <Technologies title={productDetails.product_description[0].technology_section.title} description={productDetails.product_description[0].technology_section.description} technologies={productDetails.product_description[0].technology_section.technologies} />
            <OrbitPaymentGateways title={productDetails.product_description[0].payment_gateway_section.title} description={productDetails.product_description[0].payment_gateway_section.description} gateways={productDetails.product_description[0].payment_gateway_section.gateways} />
            {/* TODO: Don't know property of data which get from api */}
            <InfoSect />
            <FeatureSections title={productDetails.product_description[0].feature_section.title} description={productDetails.product_description[0].feature_section.description} features={productDetails.product_description[0].feature_section.features} />
            <InnerPagesSect title={productDetails.product_description[0].panel_wise_feature_section.title} description={productDetails.product_description[0].panel_wise_feature_section.description} tabs={productDetails.product_description[0].panel_wise_feature_section.tabs} />
            {/* TODO: Don't know property of data which get from api */}
            <ProcessSect />
            {/* TODO: Don't know property of data which get from api */}
            <TransformSect />
            <ProductReviews testimonials={productDetails.product_testimonials} />
        </div>
    )
}

export default LayoutTwo