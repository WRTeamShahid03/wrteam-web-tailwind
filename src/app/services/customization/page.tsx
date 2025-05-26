import Customization from '@/components/pagesComponent/customization/Customization'
import React from 'react'
import type { Metadata } from 'next'
 
// either Static metadata
export const metadata: Metadata = {
  title: 'Web and Mobile App Customization Services Bhuj, India | WRTeam',
  alternates: {
    canonical: `https://www.wrteam.in/services/customization`,
  },
}

const Page = () => {
    return (
        <div><Customization /></div>
    )
}

export default Page