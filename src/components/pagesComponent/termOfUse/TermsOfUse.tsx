'use client'
import Layout from '@/components/layout/Layout'
import Link from 'next/link'
import React from 'react'

const TermsOfUse = () => {
    return (
        <Layout>
            <section className='container commonMT commonMB'>
                <div className='rounded-xl shadow-[0_2px_8px_0_#63636333] py-4 md:py-8 px-1 md:px-4 space-y-6 md:space-y-12'>
                    <div className='flex justify-center'>
                        <h1 className='text-xl font-semibold text-center secondaryColor underline sm:text-3xl'>Terms Of Use</h1>
                    </div>
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col gap-3 px-4 sm:px-2">
                            <h2 className='text-lg md:text-xl font-medium'>Terms of use for WRTeam</h2>
                            <p className='text-sm md:text-base secondaryColor'>Welcome to WRTeam!</p>
                            <p className='text-sm md:text-base secondaryColor'>These terms outline the rules and regulations for the use of the WRTeam website and the services we provide. By accessing this website, we assume you accept these terms and conditions. Do not continue to use WRTeam if you do not agree to take all of the terms and conditions stated on this page.</p>
                        </div>

                        <div className="flex flex-col gap-3 px-4 sm:px-2">
                            <h3 className='text-lg md:text-xl font-medium'>The following terminology applies to these Terms and Conditions, Privacy Statement, and Disclaimer Notice and all Agreements:</h3>
                            <ul className="flex flex-col gap-1 list-disc pl-5 secondaryColor">
                                <li>Client, User, You, and Your refers to you, the person accessing this website and accepting the Company&apos;s terms and conditions.</li>
                                <li>The Company, Ourselves, We, Our, and Us refers to our Company.</li>
                                <li>Party, Parties, or Us refers to both the Client and ourselves.</li>
                            </ul>
                        </div>

                        <div className="flex flex-col gap-3 px-4 sm:px-2">
                            <h4 className='text-lg md:text-xl font-medium'>Cookies:</h4>
                            <p className='text-sm md:text-base secondaryColor'>We employ the use of cookies. By accessing WRTeam, you agreed to use cookies in agreement with the WRTeam&apos;s Privacy Policy.</p>
                        </div>

                        <div className="flex flex-col gap-3 px-4 sm:px-2">
                            <h5 className='text-lg md:text-xl font-medium'>License:</h5>
                            <p className='text-sm md:text-base secondaryColor'>Unless otherwise stated, WRTeam and/or its licensors own the intellectual property rights for all material on WRTeam. All intellectual property rights are reserved.</p>
                        </div>

                        <div className="flex flex-col gap-3 px-4 sm:px-2">
                            <h6 className='text-lg md:text-xl font-medium'>Restrictions:</h6>
                            <p className='text-sm md:text-base secondaryColor'>You are specifically restricted from all of the following:</p>
                            <ul className="flex flex-col gap-1 list-disc pl-5 secondaryColor">
                                <li>Publishing any website material in any other media.</li>
                                <li>Selling, sublicensing, codes, templates and/or otherwise commercialising any website material.</li>
                                <li>Reproduce, duplicate or copy material from website.</li>
                            </ul>
                        </div>

                        <div className="px-4 sm:px-2">
                            <p className='text-sm md:text-base secondaryColor'>For the complete &quot;Terms of Use&quot; document tailored to your business, including limitations and liabilities, please contact our legal team at <Link href={'mailto:support@wrteam.in'} title='support@wrteam.in' className='primaryColor underline'>support@wrteam.in</Link></p>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default TermsOfUse