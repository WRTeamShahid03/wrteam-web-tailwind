import ContactUs from '@/components/pagesComponent/contact-us/ContactUs'
import React from 'react'
import { generatePageMetadata } from '@/lib/generate-metadata'
import { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata({
    pageType: "contact_us",
  });
}

const Page = () => {
  return (
    <div><ContactUs /></div>
  )
}

export default Page