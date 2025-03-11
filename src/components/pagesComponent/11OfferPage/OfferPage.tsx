'use client'
import React from 'react'
import Header from '../freeSourceCode/sections/Header'
import VideoSect from './section/VideoSect'
import CheckoutSect from '../freeSourceCode/sections/CheckoutSect'
import LoveBundleSect from './section/LoveBundleSect'
import BundlesSect from './section/BundlesSect'
import FaqsSect from './section/FaqsSect'
import BonusSect from './section/BonusSect'
import Testimonials from '../freeSourceCode/sections/Testimonials'
import GrabBundlesSect from './section/GrabBundlesSect'

const OfferPage = () => {
  return (
    <div className='text-white !font-roboto'>
      <Header />
      <VideoSect />
      <CheckoutSect freeCodePage={false} />
      <LoveBundleSect />
      <BundlesSect />
      <BonusSect />
      <Testimonials />
      <GrabBundlesSect />
      <FaqsSect />
    </div>
  )
}

export default OfferPage
