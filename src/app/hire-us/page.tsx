import HireUs from '@/components/pagesComponent/hireUs/HireUs'
import React from 'react'
import { generatePageMetadata } from '@/lib/generate-metadata'
import { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata({
    pageType: "hire_us",
  });
}

const Page = () => {
  return (
    <div><HireUs/></div>
  )
}

export default Page