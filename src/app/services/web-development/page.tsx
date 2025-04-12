import WebDevelopment from '@/components/pagesComponent/services/WebDevelopment'
import React from 'react'
import { generatePageMetadata } from '@/lib/generate-metadata'
import { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata({
    pageType: "web_development",
  });
}

const Page = () => {
    return (
        <>
            <WebDevelopment />
        </>
    )
}

export default Page