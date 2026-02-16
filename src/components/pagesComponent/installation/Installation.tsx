'use client'
import Breadcrumb from '@/components/commonComponents/Breadcrumb'
import Layout from '@/components/layout/Layout'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react'
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { FaCheck, FaCheckCircle } from 'react-icons/fa';
import { IoMdClose, IoMdCloseCircle } from 'react-icons/io';
import sideImg from "@/assets/images/installation/installationSideImg.svg";
import { installationPackagesDataTypes } from '@/types';
import basicIcon from "@/assets/images/installation/basicIcon.svg";
import standardIcon from "@/assets/images/installation/standardIcon.svg";
import advanceIcon from "@/assets/images/installation/advanceIcon.svg";
import premiumIcon from "@/assets/images/installation/premiumIcon.svg";
import fullSetup from "@/assets/images/installation/fullSetupIcon.svg";
const Installation: React.FC = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    // State for currency selection (USD is default)
    const [currency, setCurrency] = useState<'USD' | 'INR'>('USD');

    useEffect(() => {
        const currentCurrency = searchParams.get('currency');
        if (currentCurrency === 'INR') {
            setCurrency('INR');
        } else {
            setCurrency('USD');
        }
    }, [searchParams]);

    // Exchange rate (1 USD to INR)
    const exchangeRate = 85.46;

    // Toggle currency function
    const toggleCurrency = () => {
        const newCurrency = currency === 'USD' ? 'INR' : 'USD';
        setCurrency(newCurrency);

        const params = new URLSearchParams(searchParams.toString());
        if (newCurrency === 'INR') {
            params.set('currency', 'INR');
        } else {
            params.delete('currency');
        }

        router.push(`${pathname}?${params.toString()}`, { scroll: false });
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
                "AWS/GCP/Azure Setup",
                "Notification Configuration",
                "Login Configuration (Firebase and Everything)",
                "Change Theme colour according to LOGO (reskin)",
                "Firebase Configuration",
                "Setup Admin panel",
                "Live Website on Server",
                "VPS or Server Setup (if needed)",
                "DNS Setup",
            ],
            excludedServices: [
                "Logo Design",
                "Domain & Hosting",
                "Content Writing",
                "Google Analytics Setup"
            ],
            cutPriceINR: 29990,
            priceINR: 21999,
        },
        {
            id: 1,
            packageName: "Standard",
            icon: standardIcon,
            setups: "Android OR iOS Setup",
            cutPrice: 599,
            price: 499,
            services: [
                "3 Months Support",
                "AWS/GCP/Azure Setup",
                "Change App Name",
                "Package Name",
                "Notification Configuration",
                "Login Configuration (Firebase and Everything)",
                "Change Theme colour according to LOGO (reskin)",
                "Firebase Configuration",
                "Setup Admin panel",
                "Advertisement Configuration (If Applicable)",
                "In-app Purchase Configuration (If Applicable)",
                "Live over PlayStore OR App Store",
            ],
            excludedServices: [
                "Live Website on Server",
                "Customised Screenshot + Feature Graphic",
            ],
            cutPriceINR: 54990,
            priceINR: 44999,
        },
        {
            id: 2,
            packageName: "Advanced",
            icon: advanceIcon,
            setups: "Android + iOS Setup (Combo)",
            cutPrice: 1198,
            price: 699,
            services: [
                "3 Months Support",
                "AWS/GCP/Azure Setup",
                "Change App Name",
                "Package Name",
                "Notification Configuration",
                "Login Configuration (Firebase and Everything)",
                "Change Theme colour according to LOGO (reskin)",
                "Firebase Configuration",
                "Setup Admin panel",
                "Advertisement Configuration (If Applicable)",
                "In-app Purchase Configuration (If Applicable)",
                "Live over PlayStore AND App Store",
            ],
            excludedServices: [
                "Live Website on Server",
                "Customised Screenshot + Feature Graphic",
            ],
            cutPriceINR: 109990,
            priceINR: 59999,
        },
        {
            id: 3,
            packageName: "Premium",
            icon: premiumIcon,
            setups: "Android + iOS + Web Setup",
            cutPrice: 1547,
            price: 799,
            services: [
                "3 Months Support",
                "AWS/GCP/Azure Setup",
                "Change App Name ",
                "Package Name",
                "Notification Configuration",
                "Login Configuration (Firebase and Everything)",
                "Change Theme colour according to LOGO (reskin)",
                "Firebase Configuration",
                "Setup Admin panel",
                "Advertisement Configuration (If Applicable)",
                "In-app Purchase Configuration (If Applicable)",
                "Live over PlayStore AND App Store",
                "Live Website on Server",
            ],
            excludedServices: [
                "Customised Screenshot + Feature Graphic",
            ],
            cutPriceINR: 139990,
            priceINR: 69999,
        },
        {
            id: 4,
            packageName: "Super",
            icon: fullSetup,
            setups: "Android + iOS + Web Setup",
            cutPrice: 1796,
            price: 999,
            services: [
                "6 Months Support",
                "AWS/GCP/Azure Setup",
                "Customised Screenshot + Feature Graphic",
                "Change App Name ",
                "Package Name",
                "Notification Configuration",
                "Login Configuration (Firebase and Everything)",
                "Change Theme colour according to LOGO (reskin)",
                "Firebase Configuration",
                "Setup Admin panel",
                "Advertisement Configuration (If Applicable)",
                "In-app Purchase Configuration (If Applicable)",
                "Live over PlayStore AND App Store",
                "Live Website on Server",
            ],
            excludedServices: [],
            cutPriceINR: 155990,
            priceINR: 89999,
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

    const featuresList = [
        { name: "VPS / Server Setup (AWS/GCP/Azure)", status: ["check", "check", "check", "check", "check"] },
        { name: "Database Setup", status: ["check", "check", "check", "check", "check"] },
        { name: "Setup Admin Panel", status: ["check", "check", "check", "check", "check"] },
        { name: "SSL Installation", status: ["check", "check", "check", "check", "check"] },
        { name: "DNS Setup", status: ["check", "check", "check", "check", "check"] },
        { name: "Firebase Configuration", status: ["check", "check", "check", "check", "check"] },
        { name: "Change Theme Colors", status: ["check", "check", "check", "check", "check"] },
        { name: "Live Website on Server", status: ["check", "cross", "cross", "check", "check"] },
        { name: "Change App & Package Name", status: ["cross", "check", "check", "check", "check"] },
        { name: "Push Notifications Configuration (If Applicable)", status: ["cross", "check", "check", "check", "check"] },
        { name: "In-App Purchase Configuration (If Applicable)", status: ["cross", "check", "check", "check", "check"] },
        { name: "Advertisement Configuration (If Applicable)", status: ["cross", "check", "check", "check", "check"] },
        { name: "Live over Play Store", status: ["cross", "OR", "check", "check", "check"] },
        { name: "Live over App Store", status: ["cross", "OR", "check", "check", "check"] },
        { name: "Customised Screenshot + Feature Graphic", status: ["cross", "cross", "cross", "cross", "check"] },
        { name: "Support Duration", status: ["None", "3 Months", "3 Months", "3 Months", "6 Months"] },
    ];

    const [activeTab, setActiveTab] = useState(0);
    const [hoveredPkg, setHoveredPkg] = useState<number | null>(null);

    const renderStatus = (status: string, isHighlighted = false) => {
        if (status === "check") {
            return <FaCheckCircle className="mx-auto text-green-500" size={18} />;
        }
        if (status === "cross") {
            return <span className="text-base font-semibold text-gray-500">-</span>;
        }
        if (status === "OR") {
            return <span className="text-base font-semibold text-gray-500">OR</span>;
        }
        return <span className={`font-semibold transition-colors duration-200 ${isHighlighted ? 'primaryColor' : (status === 'None' ? 'text-gray-400' : 'text-gray-700')}`}>{status}</span>;
    };

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
                {/* Desktop view table */}
                <div className="hidden lg:block w-full overflow-auto rounded-2xl border border-gray-200 bg-white shadow-sm mt-12">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50/50">
                                <th className="p-6 w-1/6 align-top border border-gray-200 bg-white">
                                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Features</span>
                                </th>
                                {packages.map((pkg, index) => {
                                    const isSuper = index === 4;

                                    return (
                                        <th
                                            key={pkg.id}
                                            className={`p-4 align-bottom border border-gray-200 bg-white relative min-w-[200px]`}
                                        >
                                            {/* BUSINESS READY BADGE */}
                                            {isSuper && (
                                                <div className="absolute top-2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wide px-3 py-1 rounded-b-lg whitespace-nowrap shadow-sm z-10">
                                                    Business Ready
                                                </div>
                                            )}

                                            {/* CELL BODY */}
                                            <div className={`flex flex-col items-center justify-end h-full pt-4`}>
                                                {/* Title */}
                                                <h3 className="text-lg font-bold text-gray-900 text-center">
                                                    {pkg.packageName}
                                                </h3>

                                                {/* Subtitle */}
                                                <p className="text-xs text-gray-500 mt-1 text-center">
                                                    {pkg.setups}
                                                </p>

                                                {/* Price */}
                                                <div className="mt-4 flex flex-col items-center">
                                                    {currencySymbol && (
                                                        <span className="text-4xl font-bold text-blue-600">
                                                            {currencySymbol}{convertPrice(pkg.price, pkg.priceINR)}
                                                        </span>
                                                    )}
                                                    {/* Cut Price (Optional: Keep small if needed, or remove if strictly following clean UI. Keeping for value proposition) */}
                                                    <span className="text-sm text-gray-400 line-through mt-1">
                                                        {currencySymbol}{convertPrice(pkg.cutPrice, pkg.cutPriceINR)}
                                                    </span>
                                                </div>

                                                {currency === "INR" && (
                                                    <div className="text-[10px] text-gray-500 mt-1 text-center">
                                                        (Excl. GST)
                                                    </div>
                                                )}
                                            </div>
                                        </th>
                                    );
                                })}
                            </tr>
                        </thead>
                        <tbody className="text-sm">
                            {featuresList.map((feature, fIndex) => (
                                <tr key={fIndex} className="hover:bg-gray-50/50 transition-colors">
                                    <td className="p-4 px-6 font-medium text-gray-900 border border-gray-200">{feature.name}</td>
                                    {feature.status.map((status, pIndex) => (
                                        <td
                                            key={pIndex}
                                            onMouseEnter={() => setHoveredPkg(pIndex)}
                                            onMouseLeave={() => setHoveredPkg(null)}
                                            className={`p-4 text-center border border-gray-200 transition-colors cursor-default ${pIndex === 4 ? "bg-blue-50/10" : ""}`}
                                        >
                                            {renderStatus(status, (fIndex === featuresList.length - 1 && (hoveredPkg === pIndex || pIndex === 4)))}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Mobile view tabs */}
                <div className="lg:hidden mt-8">
                    <div className="flex overflow-x-auto gap-1 p-2 bg-gray-100 rounded-2xl mb-6 no-scrollbar justify-between border border-gray-200">
                        {packages.map((pkg, index) => (
                            <button
                                key={pkg.id}
                                onClick={() => setActiveTab(index)}
                                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all flex items-center gap-1 ${activeTab === index ? "bg-white text-gray-900 font-bold shadow-sm" : "text-gray-500 hover:bg-white/50"}`}
                            >
                                {pkg.packageName}
                                {index === 4 && <Image src={fullSetup} height={12} width={12} alt="Super" />}
                            </button>
                        ))}
                    </div>

                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                        <div className="primaryBg text-white p-8 text-center rounded-xl mx-4 mt-4 mb-2 shadow-sm relative overflow-hidden">
                            {activeTab === 4 && (
                                <div className="absolute top-0 right-0 p-2 opacity-10">
                                    <Image src={fullSetup} height={120} width={120} alt="Super" className="rotate-12" />
                                </div>
                            )}
                            <h2 className="text-3xl font-bold mb-1 flex justify-center items-center gap-2">
                                {packages[activeTab].packageName}
                                {activeTab === 4 && <Image src={fullSetup} height={20} width={20} alt="Super" className="bg-white rounded-full p-1 h-6 w-6" />}
                            </h2>
                            <p className="text-blue-100 text-sm font-medium mb-4">{packages[activeTab].setups}</p>
                            <div className="max-575:text-3xl text-5xl font-bold mb-1 flex justify-center items-end gap-2">
                                <span className="text-gray-300 line-through max-575:text-lg text-2xl">
                                    {currencySymbol}{convertPrice(packages[activeTab].cutPrice, packages[activeTab].cutPriceINR)}
                                </span>
                                {currencySymbol}{convertPrice(packages[activeTab].price, packages[activeTab].priceINR)}
                            </div>
                            {currency === 'INR' && (
                                <div className="text-xs font-medium text-blue-100 mb-6">(Excl. GST)</div>
                            )}
                            {/* <Link href={'/contact-us'} className="relative z-10 block w-full py-4 bg-white primaryColor font-bold rounded-xl shadow-sm hover:bg-gray-50 transition-colors text-lg">
                                Contact Us
                            </Link> */}
                        </div>

                        <div className="p-6 pt-2 space-y-4">
                            {featuresList.map((feature, fIndex) => (
                                <div key={fIndex} className={`flex justify-between items-center py-2 ${fIndex === featuresList.length - 1 ? "" : "border-b border-gray-100"}`}>
                                    <span className="text-gray-700 font-medium">{feature.name}</span>
                                    <span>{renderStatus(feature.status[activeTab], (fIndex === featuresList.length - 1))}</span>
                                </div>
                            ))}
                        </div>
                    </div>
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