'use client'
import Breadcrumb from '@/components/commonComponents/Breadcrumb'
import Layout from '@/components/layout/Layout'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FaCheck } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import sideImg from "@/assets/images/installation/installationSideImg.svg";
import { installationPackagesData } from '@/types';

const Installation: React.FC = () => {

    const packages = [
        {
            id: 0,
            packageName: "Basic",
            setups: "Web Setup",
            cutPrice: 299,
            price: 199,
            services: [
                "Notification Configuration",
                "Login Configuration (Firebase and Everything)",
                "Change Theme colour according to LOGO (reskin)",
                "Configuration Firebase",
                "Setup Admin panel",
                "Live Website on Server",
            ],
            excludedServices: [
                "Change App Name (Re-Brand)",
                "Package Name",
                "Configuration Advertisement",
                "In-app Purchase Configuration",
                "Live over PlayStore",
            ],
        },
        {
            id: 1,
            packageName: "Standard",
            setups: "Android OR iOS Setup",
            cutPrice: 499,
            price: 399,
            services: [
                "Change App Name (Re-Brand)",
                "Package Name",
                "Notification Configuration",
                "Login Configuration (Firebase and Everything)",
                "Change Theme colour according to LOGO (reskin)",
                "Configuration Firebase",
                "Setup Admin panel",
                "Configuration Advertisement (If Applicable)",
                "In-app Purchase Configuration (If Applicable)",
                "Live over PlayStore OR Live over App Store",
            ],
            excludedServices: ["Live Website on Server"],
        },
        {
            id: 2,
            packageName: "Advance",
            setups: "Android + iOS Setup (Combo)",
            cutPrice: 998,
            price: 599,
            services: [
                "Logo Design (1 - Logo Concept)",
                "Change App Name (Re-Brand)",
                "Package Name",
                "Notification Configuration",
                "Login Configuration (Firebase and Everything)",
                "Change Theme colour according to LOGO (reskin)",
                "Configuration Firebase",
                "Setup Admin panel",
                "Configuration Advertisement (If Applicable)",
                "In-app Purchase Configuration (If Applicable)",
                "Live over PlayStore OR Live over App Store",
            ],
            excludedServices: ["Live Website on Server"],
        },
        {
            id: 3,
            packageName: "Premium",
            setups: "Android + iOS + Web Setup",
            cutPrice: 1297,
            price: 699,
            services: [
                "Logo Design (3 - Logo Concepts, 1 Revision)",
                "Change App Name (Re-Brand)",
                "Package Name",
                "Notification Configuration",
                "Login Configuration (Firebase and Everything)",
                "Change Theme colour according to LOGO (reskin)",
                "Configuration Firebase",
                "Setup Admin panel",
                "Live Website on Server",
                "Configuration Advertisement (If Applicable)",
                "In-app Purchase Configuration (If Applicable)",
                "Live over PlayStore OR Live over App Store",
            ],
            excludedServices: [],
        },
    ];

    const reskinningDetails = [
        "App LOGO / ICON",
        "Advertisement ID",
        "Firebase Owner Access",
        "Server Access",
        "Play Console Access",
        "Appleconnect",
    ]

    return (
        <Layout>
            <Breadcrumb title='Installtion &' blueText='Setup' secondElement='Services' thirdElement='Installtion' />
            <section className='container commonMT space-y-8 md:space-y-12 lg:space-y-20'>
                <div className='flexCenter'>
                    <h2 className='sectionTitle'>Flexible Packages to Match <span>Your Needs</span></h2>
                </div>
                <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                    {packages.map((pkg: installationPackagesData, index) => (
                        <div
                            key={pkg.id}
                            className={`h-max p-4 border-[3px] border-[#2e71fe26] rounded-[16px] ${index === 3 ? "primaryBg text-white" : "bg-white"
                                }`}
                        >
                            <div className='flexColCenter gap-3'>

                                <h3 className="text-2xl font-extrabold text-center">{pkg.packageName}</h3>
                                <p className="text-center font-semibold">{pkg.setups}</p>
                                <div className='flexCenter gap-2 font-extrabold !items-end'>
                                    <span className={`text-center text-lg sm:text-xl line-through ${index === 3 ? 'text-[#ffffffcc]' : 'text-[#21212166]'}`}>${pkg.cutPrice}</span>
                                    <span className={`text-center text-2xl sm:text-3xl ${index === 3 ? 'text-white' : 'primaryColor'}`}>${pkg.price}</span>
                                </div>
                            </div>
                            <ul className="mt-4 space-y-3 [&>li-las]">
                                {pkg.services.map((service, i) => (
                                    <li key={i} className={`flex items-center gap-2 justify-between border-b last:border-transparent border-[#d3d3d3] py-3`}>
                                        <span className='text-sm font-semibold inline-block w-[84%]'>{service}</span>
                                        <span className='w-[22px] h-[22px] flexCenter bg-[#48b02c] text-white rounded-full'><FaCheck size={12} /></span>
                                    </li>
                                ))}
                                {pkg.excludedServices.map((service, i) => (
                                    <li key={i} className={`flex items-center gap-2 justify-between border-b last:border-transparent border-[#d3d3d3] py-3`}>
                                        <span className='text-sm font-semibold inline-block w-[84%]'>{service}</span>
                                        <span className='w-[22px] h-[22px] flexCenter bg-[#ff4141] text-white rounded-full'><IoMdClose /></span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            <div className="container">
                <section className="secondaryBg commonMT commonMB text-white rounded-[16px] p-6 md:p-8">
                    <div className="grid md:grid-cols-12 gap-y-8 md:gap-12">
                        {/* Left Side */}
                        <div className='flexColCenter !items-start gap-4 md:gap-6 col-span-12 lg:col-span-7'>
                            <h4 className="text-lg font-semibold mb-4">
                                For reskinning, you have to share with us:
                            </h4>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
                                {reskinningDetails.map((item: string, index) => (
                                    <div key={index} className="flex items-center gap-2">
                                        <span className='w-[22px] h-[22px] flexCenter bg-white text-black rounded-full'><FaCheck size={12} /></span> <span className="font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="text-white mt-4">
                                After everything, we will provide you with all your original code
                                and keys. You can revoke access rights from your original account.
                            </p>

                        </div>

                        {/* Right Side */}
                        <div className="flexCenter col-span-12 lg:col-span-5 bg-white text-gray-900 p-3 md:p-6 rounded-lg shadow-lg relative">
                            <div className='grid-cols-12'>
                                <div className='col-span-12 lg:col-span-7 flexColCenter !items-start gap-6'>
                                    <h3 className="text-xl md:text-2xl font-[700]">
                                        Take the First Step and Select the Right Package for You!
                                    </h3>
                                    <Link href={'/contact-us'} title='Contact Us' className='commonBtn commonBtnSecondaryBg'>
                                        Contact Us
                                    </Link>
                                </div>
                            </div>
                            <div className='col-span-12 lg:col-span-5 flex items-end justify-end absolute bottom-0 right-0'>
                                <Image src={sideImg} height={0} width={0} className='w-[180px] h-auto' alt='bg' />
                            </div>
                        </div>
                    </div>
                    <div className='border-t border-gray-600 mt-12 pt-4'>
                        <div className="flex items-center gap-2">
                            <span className='hidden md:block bg-white w-2 h-2 rounded-full'></span>
                            <p className=''>
                                Installation and reskinning are subject to terms and conditions.
                                <Link href="/installtion-terms-of-use/" className="primaryColor hover:underline ml-1">
                                    Click here
                                </Link>
                            </p>

                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    )
}

export default Installation