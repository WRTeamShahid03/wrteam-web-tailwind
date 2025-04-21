'use client'
import Layout from '@/components/layout/Layout'
import Image from 'next/image'
import React, { useState } from 'react'
import ProductDetailsSideCard from './ProductDetailsSideCard'
import { OldUiProductData } from '@/types'

interface ProductDetailPageProps {
    productData: OldUiProductData;
  }
  
  const OldProductDetailPage: React.FC<ProductDetailPageProps> = ({ productData }) => {

    const data = JSON.parse(productData?.codecanyon_other_data);

    const landscape_preview = data?.previews?.landscape_preview?.landscape_url;

    return (
        <Layout>
            <div className="container py-8 md:py-16 lg:py-20 oldProductDetailPage">
                <div className='max-1199:ml-0 ml-[150px]'>
                    <div className="grid grid-cols-12 gap-y-12 max-1199:gap-x-0 gap-12">
                        <div className="max-1199:col-span-12 col-span-7 max-1199:order-2">

                            {
                                productData?.codecanyon_other_data ?
                                    <div className="promoImgWrapper">
                                        <Image src={landscape_preview} height={0} width={0} alt='preview' className='w-full h-full object-contain mb-5'/>
                                    </div> : null
                            }

                            <div className="Wrapper overflow-x-hidden">
                                <div dangerouslySetInnerHTML={{ __html: productData && productData?.description || "" }} />
                            </div>
                        </div>

                        <div className="max-1199:col-span-12 col-span-5 max-1199:order-1">
                            <ProductDetailsSideCard data={productData} />
                        </div>

                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default OldProductDetailPage
