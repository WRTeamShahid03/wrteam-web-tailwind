import TermsOfUse from '@/components/pagesComponent/termOfUse/TermsOfUse'
import React from 'react'
import type { Metadata } from 'next'
 
// either Static metadata
export const metadata: Metadata = {
  title: 'Terms of Use of WRTeam',
  description: `Read WRTeam's Terms of Use to understand your rights and responsibilities when using our products, services, and platforms.`,
  alternates: {
    canonical: `https://www.wrteam.in/terms-of-use`,
  },
}

const Page = () => {
    return (
        <div><TermsOfUse /></div>
    )
}

export default Page