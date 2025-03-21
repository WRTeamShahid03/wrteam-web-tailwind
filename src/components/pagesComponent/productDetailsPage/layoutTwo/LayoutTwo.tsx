import React from 'react'
import HeroSect from './sections/HeroSect'
import WhatYouGet from './sections/WhatYouGet'
import BuyNow from './sections/BuyNow'
import Technologies from './sections/Technologies'
import OrbitPaymentGateways from './sections/PaymentGateways'
import InfoSect from './sections/InfoSect'
import FeatureSection from './sections/FeatureSection'
import InnerPagesSect from './sections/InnerPagesSect'

const LayoutTwo = () => {
    return (
        <div>
            <HeroSect />
            <WhatYouGet />
            <BuyNow />
            <Technologies />
            <OrbitPaymentGateways />
            <InfoSect />
            <FeatureSection />
            <InnerPagesSect />
        </div>
    )
}

export default LayoutTwo