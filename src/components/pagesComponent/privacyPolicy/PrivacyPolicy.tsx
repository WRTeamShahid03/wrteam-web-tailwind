'use client'
import Layout from '@/components/layout/Layout'
import Link from 'next/link'
import React from 'react'

const PrivacyPolicy = () => {
    return (
        <Layout>
            <section className='container commonMT commonMB'>
                <div className='rounded-xl shadow-[0_2px_8px_0_#63636333] py-4 md:py-8 px-1 md:px-4 space-y-6 md:space-y-12'>
                    <div className='flex justify-center'>
                        <h1 className='text-xl font-semibold text-center secondaryColor underline sm:text-3xl'>Privacy Policy</h1>
                    </div>
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col gap-3 px-4 sm:px-2">
                            <h2 className='text-lg md:text-xl font-medium'>Privacy Policy Updates:</h2>
                            <p className='text-sm md:text-base secondaryColor'>We reserve the right to update this privacy policy to reflect changes in our practices. Users are encouraged to review this policy periodically.By using our website, you consent to the terms outlined in this privacy policy.The security of the privacy of our clients is our first concern. We are committed to making sure each user has a private and secure experience.</p>
                        </div>

                        <div className="flex flex-col gap-3 px-4 sm:px-2">
                            <h3 className='text-lg md:text-xl font-medium'>Information We Collect:</h3>
                            <p className='text-sm md:text-base secondaryColor'>We use technologies like cookies (small files stored by your browser), web beacons, or unique device identifiers to anonymously identify your computer or device so we can deliver a better experience. This may include names, email addresses, and contact details. Additionally, we automatically collect usage data, such as IP addresses and browsing patterns.</p>
                        </div>

                        <div className="flex flex-col gap-3 px-4 sm:px-2">
                            <h4 className='text-lg md:text-xl font-medium'>How We Use Your Information:</h4>
                            <p className='text-sm md:text-base secondaryColor'>We use collected information to enhance user experience, deliver services, offers, and respond to inquiries. Analytics tools may be used to improve our offerings.</p>
                        </div>

                        <div className="flex flex-col gap-3 px-4 sm:px-2">
                            <h5 className='text-lg md:text-xl font-medium'>How We Protect Your Information:</h5>
                            <p className='text-sm md:text-base secondaryColor'>We implement security measures to prevent unauthorized access, alteration, disclosure, or destruction of personal information.</p>
                        </div>

                        <div className="flex flex-col gap-3 px-4 sm:px-2">
                            <h6 className='text-lg md:text-xl font-medium'>Links To External Sites:</h6>
                            <p className='text-sm md:text-base secondaryColor'>Our website may contain links to external sites. We are not responsible for the content or practices of these sites. Users should review the privacy policies of If you have any questions, please contact us at <Link href={'mailto:support@wrteam.in'} title='support@wrteam.in' className='primaryColor'>support@wrteam.in</Link> </p>
                            
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default PrivacyPolicy