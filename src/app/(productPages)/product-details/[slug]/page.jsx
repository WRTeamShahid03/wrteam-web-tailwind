import React from 'react'
import ProductDetailsPage from '@/components/pagesComponent/productDetailsPage/ProductDetailsPage'

export default async function Page({
  params
}) {

  return (
    <div>
      <ProductDetailsPage slug={await params.slug} />
    </div>
  );
}