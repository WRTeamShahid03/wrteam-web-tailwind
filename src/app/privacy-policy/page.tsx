import PrivacyPolicy from '@/components/pagesComponent/privacyPolicy/PrivacyPolicy'
import React from 'react'
import type { Metadata } from 'next'
 
// either Static metadata
export const metadata: Metadata = {
  title: 'Privacy Policy of WRTeam',
  description: 'We are committed to safeguarding your personal information while providing top-notch app and web development services.'
}


const Page = () => {
  return (
    <div><PrivacyPolicy/></div>
  )
}

export default Page