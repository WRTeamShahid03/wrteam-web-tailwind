import Customization from '@/components/pagesComponent/customization/Customization'
import React from 'react'
import type { Metadata } from 'next'

// either Static metadata
export const metadata: Metadata = {
  title: 'Web and Mobile App Customization Services Bhuj, India | WRTeam',
  description: `Get tailored web and mobile app customization services with WRTeam in Bhuj, India. We modify scripts, features, and UI to match your business goals and deliver unique, branded digital solutions.`,
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