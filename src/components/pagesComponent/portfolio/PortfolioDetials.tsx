'use client'
import Layout from '@/components/layout/Layout'
import React from 'react'
import {useParams} from 'next/navigation'


const PortfolioDetials = () => {

  const params = useParams();
  console.log('params',params);

  const {slug} = params;
  console.log('slug',slug);


  return (
    <Layout>
        <div className='container'>
            <h1>Portfolio Detials</h1>
        </div>
    </Layout>
  )
}

export default PortfolioDetials