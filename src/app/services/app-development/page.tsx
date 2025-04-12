import AppDevelopment from '@/components/pagesComponent/services/AppDevelopment'
import React from 'react'
import { generatePageMetadata } from '@/lib/generate-metadata'
import { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata({
    pageType: "app_development",
  });
}

const Page = () => {
    return (
        <>
            <AppDevelopment />
        </>
    )
}

export default Page