import OfferPage from '@/components/pagesComponent/11OfferPage/OfferPage'
import React from 'react'
import type { Metadata } from 'next'
 
// either Static metadata
export const metadata: Metadata = {
  title: '11 Offer Page',
  description: 'We prioritize customer satisfaction and transparency.'
}


const Page = () => {
    return (
        <div>
            <OfferPage />
        </div>
    )
}

export default Page
