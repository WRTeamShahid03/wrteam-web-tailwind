import TermsOfUse from '@/components/pagesComponent/termOfUse/TermsOfUse'
import React from 'react'
import type { Metadata } from 'next'
 
// either Static metadata
export const metadata: Metadata = {
  title: 'Terms of Use of WRTeam',
  description: 'Review our terms of use for a clear understanding of your rights and responsibilities when using our app and web development services.'
}

const Page = () => {
    return (
        <div><TermsOfUse /></div>
    )
}

export default Page