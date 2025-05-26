import CopyRightDisclaimer from '@/components/pagesComponent/copyRightDisclaimer/CopyRightDisclaimer'
import React from 'react'
import type { Metadata } from 'next'
 
// either Static metadata
export const metadata: Metadata = {
  title: 'Copyrights and Disclaimer of WRTeam',
  description: 'Protect your intellectual property and stay informed. Contact us for further assistance.',
  alternates: {
    canonical: `https://www.wrteam.in/copyright-and-disclaimer`,
  },
}

const Page = () => {
    return (
        <div><CopyRightDisclaimer /></div>
    )
}

export default Page