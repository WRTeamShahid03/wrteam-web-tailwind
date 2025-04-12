import DigitalMarketing from '@/components/pagesComponent/services/DigitalMarketing'
import React from 'react'
import { generatePageMetadata } from '@/lib/generate-metadata'
import { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata({
    pageType: "digital_marketing",
  });
}
const Page = () => {
    return (
        <div><DigitalMarketing /></div>
    )
}

export default Page