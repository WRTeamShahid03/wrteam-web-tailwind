'use client'
import Breadcrumb from '@/components/commonComponents/Breadcrumb'
import Layout from '@/components/layout/Layout'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { FaCheck } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import sideImg from "@/assets/images/installation/installationSideImg.svg";
import { installationPackagesDataTypes } from '@/types';
import basicIcon from "@/assets/images/installation/basicIcon.svg";
import standardIcon from "@/assets/images/installation/standardIcon.svg";
import advanceIcon from "@/assets/images/installation/advanceIcon.svg";
import premiumIcon from "@/assets/images/installation/premiumIcon.svg";
import fullSetup from "@/assets/images/installation/fullSetupIcon.svg";

const Installation: React.FC = () => {
    // State for currency selection (USD is default)
    const [currency, setCurrency] = useState<'USD' | 'INR'>('USD');

    // Exchange rate (1 USD to INR)
    const exchangeRate = 85.46;

    // Toggle currency function
    const toggleCurrency = () => {
        setCurrency(prev => prev === 'USD' ? 'INR' : 'USD');
    };

    // Function to convert price based on selected currency
    const convertPrice = (usdPrice: number, inrPrice?: number) => {
        const price = currency === 'USD' ? usdPrice : inrPrice ?? Math.round(usdPrice * exchangeRate);
        return price.toLocaleString('en-US');
    };


    // Currency symbol
    const currencySymbol = currency === 'USD' ? '$' : '₹';

    const packages = [
        {
            id: 0,
            packageName: "Basic",
            icon: basicIcon,
            setups: "Web Setup",
            cutPrice: 349,
            price: 249,
            services: [
                "AWS, GCP, Azure Setup",
                "Notification Configuration",
                "Login Configuration (Firebase and Everything)",
                "Change Theme colour according to LOGO (reskin)",
                "Configuration Firebase",
                "Setup Admin panel",
                "Live Website on Server",
                "VPS or Server Setup (if needed)",
                "DNS Setup",
            ],
            excludedServices: [
                "Logo Design",
                "Domain & Hosting",
                "Content Writing",
                "Google Analytics Setup",
                "1 Year Support",
            ],
            cutPriceINR: 29799,
            priceINR: 21277,
        },
        {
            id: 1,
            packageName: "Standard",
            icon: standardIcon,
            setups: "Android OR iOS Setup",
            cutPrice: 599,
            price: 499,
            services: [
                "1 Year Support",
                "AWS, GCP, Azure Setup",
                "Change App Name (Re-Brand)",
                "Package Name",
                "Notification Configuration",
                "Login Configuration (Firebase and Everything)",
                "Change Theme colour according to LOGO (reskin)",
                "Configuration Firebase",
                "Setup Admin panel",
                "Configuration Advertisement (If Applicable)",
                "In-app Purchase Configuration (If Applicable)",
                "Live over PlayStore OR App Store",
            ],
            excludedServices: [
                "Live Website on Server",
                "Customised Screenshot + Feature Graphic",
            ],
            cutPriceINR: 51200,
            priceINR: 42645,
        },
        {
            id: 2,
            packageName: "Advanced",
            icon: advanceIcon,
            setups: "Android + iOS Setup (Combo)",
            cutPrice: 1198,
            price: 699,
            services: [
                "1 Year Support",
                "AWS, GCP, Azure Setup",
                "Change App Name (Re-Brand)",
                "Package Name",
                "Notification Configuration",
                "Login Configuration (Firebase and Everything)",
                "Change Theme colour according to LOGO (reskin)",
                "Configuration Firebase",
                "Setup Admin panel",
                "Configuration Advertisement (If Applicable)",
                "In-app Purchase Configuration (If Applicable)",
                "Live over PlayStore AND App Store",
            ],
            excludedServices: [
                "Live Website on Server",
                "Customised Screenshot + Feature Graphic",
            ],
            cutPriceINR: 102377,
            priceINR: 59737,
        },
        {
            id: 3,
            packageName: "Premium",
            icon: premiumIcon,
            setups: "Android + iOS + Web Setup",
            cutPrice: 1547,
            price: 799,
            services: [
                "1 Year Support",
                "AWS, GCP, Azure Setup",
                "Change App Name (Re-Brand)",
                "Package Name",
                "Notification Configuration",
                "Login Configuration (Firebase and Everything)",
                "Change Theme colour according to LOGO (reskin)",
                "Configuration Firebase",
                "Setup Admin panel",
                "Configuration Advertisement (If Applicable)",
                "In-app Purchase Configuration (If Applicable)",
                "Live over PlayStore AND App Store",
                "Live Website on Server",
            ],
            excludedServices: [
                "Customised Screenshot + Feature Graphic",
            ],
            cutPriceINR: 132187,
            priceINR: 68292,
        },
        {
            id: 4,
            packageName: "Super",
            icon: fullSetup,
            setups: "Android + iOS + Web Setup",
            cutPrice: 1796,
            price: 999,
            services: [
                "1 Year Support",
                "AWS, GCP, Azure Setup",
                "Customised Screenshot + Feature Graphic",
                "Change App Name (Re-Brand)",
                "Package Name",
                "Notification Configuration",
                "Login Configuration (Firebase and Everything)",
                "Change Theme colour according to LOGO (reskin)",
                "Configuration Firebase",
                "Setup Admin panel",
                "Configuration Advertisement (If Applicable)",
                "In-app Purchase Configuration (If Applicable)",
                "Live over PlayStore AND App Store",
                "Live Website on Server",
            ],
            excludedServices: [],
            cutPriceINR: 153486,
            priceINR: 85385,
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
            <Breadcrumb title='Installation &' blueText='Setup' secondElement='Services' thirdElement='installation' />
            <section className='max-1680:!container 2xl:max-w-[1620px] mx-auto commonMT space-y-8 md:space-y-12 lg:space-y-20'>
                <div className='flexCenter flex-col gap-6'>

                    <div className='flexCenter flex-col gap-4 text-center lg:w-[60%] m-auto'>
                        <span className='sectionTag !text-black'>Flexible Pricing, Maximum Value</span>
                        <h2 className='sectionTitle'>Choose the Perfect Plan for Your Needs</h2>
                        <p className='sectionPara'>Get expert app and web development services at competitive prices. Whether you&apos;re starting
                            small or need a full setup, we have a plan that fits your vision and budget.</p>
                    </div>


                    {/* Currency Switch Toggle */}
                    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-6">
                        <span className="text-sm sm:text-base">Switch Between USD & INR : </span>
                        <button
                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white ${currency === 'INR' ? "bg-[#2e71fe46]" : "bg-gray-200"}`}
                            onClick={toggleCurrency}
                            role="switch"
                            aria-checked={currency === 'INR'}
                        >
                            <span
                                className={`${currency === 'INR' ? 'translate-x-6 primaryBg' : 'translate-x-1 bg-gray-500'
                                    } inline-block h-4 w-4 transform rounded-full transition-transform`}
                            />
                        </button>
                    </div>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-8'>
                    {packages.map((pkg: installationPackagesDataTypes, index) => (
                        <div
                            key={pkg.id}
                            className={`flex flex-col h-full p-4 lg:p-5 border-[1.5px] rounded-[16px] relative bg-white ${index === 4 ? "primaryBorder xl:mt-0 lg:mt-12 sm:mt-12 mt-12" : "border-[#2E71FE29]"
                                }`}
                        >
                            {
                                index === 4 && (
                                    <div className='absolute -top-9 left-0 right-0 gap-2 primaryBg text-white w-full text-center pt-2 pb-8 px-2 rounded-t-[16px] rounded-b-[16px] flexCenter -z-[1]'>
                                        <Image src={fullSetup} height={15} width={15} loading='lazy' className='' alt='full-setup-icon' />
                                        <span className='text-xs sm:text-sm font-semibold'>Business Ready</span>
                                        <Image src={fullSetup} height={15} width={15} loading='lazy' className='' alt='full-setup-icon' />
                                    </div>
                                )
                            }
                            <div className='flex flex-col gap-3 border-b pb-3 lg:pb-4 border-dashed border-black'>

                                <div className='flex gap-4'>
                                    {/* <div className='bg-[#181C2414] rounded-[6px] p-2 flexCenter h-[72px] w-[72px]'>
                                        <Image src={pkg.icon} height={42} width={42} loading='lazy' className='' alt='bg' />
                                    </div> */}
                                    <div className='flex flex-col gap-1'>
                                        <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold">{pkg.packageName}</h3>
                                        <p className="text-[#545A68] text-xs sm:text-sm font-semibold">{pkg.setups}</p>
                                    </div>
                                </div>

                                <div className='bg-[#2E71FE14] rounded-[8px] p-2 sm:p-3 lg:p-4 flexCenter gap-1 sm:gap-2 font-extrabold !items-end flex-wrap justify-center'>
                                    <span className={`text-center text-sm sm:text-base lg:text-lg line-through font-semibold text-gray-500`}>
                                        {
                                            currency === 'INR' ? (
                                                <span>{currencySymbol}{pkg.cutPriceINR.toLocaleString()}</span>
                                            ) : (
                                                <span>{currencySymbol}{pkg.cutPrice}</span>
                                            )
                                        }
                                    </span>
                                    <span className={`text-center text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold primaryColor`}>
                                        {
                                            currency === 'INR' ? (
                                                <span>{currencySymbol}{pkg.priceINR.toLocaleString()}</span>
                                            ) : (
                                                <span>{currencySymbol}{pkg.price}</span>
                                            )
                                        }
                                    </span>
                                </div>
                                {
                                    currency === 'INR' &&
                                    <span className='text-xs lg:text-sm font-medium text-center text-gray-600'>(Incl. GST)</span>
                                }
                            </div>

                            <ul className="mt-3 lg:mt-4 space-y-2 sm:space-y-3 lg:space-y-4">
                                <span className='font-semibold text-xs sm:text-sm lg:text-base mb-1 block'>What&apos;s included :</span>
                                {pkg.services.map((service, i) => (
                                    <li key={i} className={`flex items-start gap-1 sm:gap-2 justify-between`}>
                                        <span className='text-[10px] sm:text-xs lg:text-sm font-medium inline-block w-[82%] sm:w-[84%] leading-relaxed'>{service}</span>
                                        <span className='w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] min-w-[18px] sm:min-w-[20px] flexCenter bg-[#48b02c] text-white rounded-full mt-0.5'><FaCheck size={9} /></span>
                                    </li>
                                ))}
                                {pkg.excludedServices.map((service, i) => (
                                    <li key={i} className={`flex items-start gap-1 sm:gap-2 justify-between`}>
                                        <span className='text-[10px] sm:text-xs lg:text-sm font-medium inline-block w-[82%] sm:w-[84%] leading-relaxed'>{service}</span>
                                        <span className='w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] min-w-[18px] sm:min-w-[20px] flexCenter bg-[#ff4141] text-white rounded-full mt-0.5'><IoMdClose size={12} /></span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            <div className="max-1680:!container 2xl:max-w-[1620px] mx-auto">
                <section className="secondaryBg commonMT text-white rounded-[16px] p-6 md:p-8">
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
                                <Image src={sideImg} height={0} width={0} loading='lazy' className='w-[180px] h-auto' alt='bg' />
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