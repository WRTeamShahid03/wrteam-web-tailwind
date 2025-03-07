'use client'
import Layout from '@/components/layout/Layout'
import Link from 'next/link'
import React from 'react'

const RefundPolicy = () => {
    return (
        <Layout>
            <section className='container commonMT commonMB'>
                <div className='rounded-xl shadow-[0_2px_8px_0_#63636333] py-4 md:py-8 px-1 md:px-4 space-y-6 md:space-y-12'>
                    <div className='flex justify-center'>
                        <h1 className='text-xl font-semibold text-center secondaryColor underline sm:text-3xl'>Refund Policy</h1>
                    </div>
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col gap-3 px-4 sm:px-2">
                            <h2 className='text-lg md:text-xl font-medium'>Refund Policy:</h2>
                            <p className='text-sm md:text-base secondaryColor'>WRTeam strive to ensure that every customer is satisfied with their purchase. If for any reason you are not completely happy with your order, you may be eligible for a refund under the following conditions:</p>
                            <ul className="flex flex-col gap-1 list-decimal pl-5 secondaryColor">
                                <li>Item is "Not as Described" or Malfunctions</li>
                                <li>Security Vulnerability</li>
                                <li>Promised Item Support Not Provided</li>
                                <li>Items Not Downloaded</li>
                            </ul>
                        </div>

                        <div className="flex flex-col gap-3 px-4 sm:px-2">
                            <h3 className='text-lg md:text-xl font-medium'>Submitting a Refund Request:</h3>
                            <p className='text-sm md:text-base secondaryColor'>After submit request we will review your request and respond to you as soon as possible with further instructions.</p>
                        </div>

                        <div className="flex flex-col gap-3 px-4 sm:px-2">
                            <h4 className='text-lg md:text-xl font-medium'>Reasons that Do Not Entitle Customers to Policy Refunds:</h4>
                            <ul className="flex flex-col gap-1 list-decimal pl-5 secondaryColor">
                                <li>They Don't Want It After Downloading</li>
                                <li>Item Did Not Meet Expectations or Perceived Quality</li>
                                <li>Change of Mind</li>
                                <li>Mistaken Purchase</li>
                                <li>Insufficient Expertise to Use the Item</li>
                                <li>Insufficient Reason Provided</li>
                                <li>No longer access the item because it has been removed</li>
                                <li>Product purchase was made over 180 days ago (CodeCanyon supported items) or over 30 days ago (CodeCanyon unsupported items)</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default RefundPolicy