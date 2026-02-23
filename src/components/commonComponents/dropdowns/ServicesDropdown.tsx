
'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { FaAngleDown } from 'react-icons/fa6'
import webDev from '../../../assets/images/serviceDropdown/Web Development.svg'
import appDev from '../../../assets/images/serviceDropdown/App Development.svg'
import uiux from '../../../assets/images/serviceDropdown/UX Design.svg'
import marketing from '../../../assets/images/serviceDropdown/Digital Marketing.svg'
import customization from '../../../assets/images/serviceDropdown/Customization.svg'
import installation from '../../../assets/images/serviceDropdown/Installation.svg'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface dataProps {
    isMobileNav?: boolean,
    servicesDropdown: boolean,
    setServicesDropdown: (value: boolean) => void,
    showSaleStripe: boolean
}

const ServiceDropdown: React.FC<dataProps> = ({ isMobileNav, servicesDropdown, setServicesDropdown, showSaleStripe }) => {
    const pathname = usePathname();

    const dropData = [
        {
            img: webDev,
            title: 'Web Development',
            desc: 'Building fast, scalable, and user-friendly websites.',
            link: '/services/web-development',
        },
        {
            img: appDev,
            title: 'App Development',
            desc: 'Creating seamless, high-performing mobile and web apps.',
            link: '/services/app-development',
        },
        {
            img: uiux,
            title: 'UI/UX Design',
            desc: 'Designing intuitive, engaging, and user-centric experiences.',
            link: '/services/ui-ux-design',
        },
        {
            img: marketing,
            title: 'Digital Marketing',
            desc: 'Boosting your brand with data-driven marketing strategies.',
            link: '/services/digital-marketing',
        },
        {
            img: customization,
            title: 'Customization',
            desc: 'Tailoring solutions to fit your unique business needs.',
            link: '/services/customization',
        },
        {
            img: installation,
            title: 'Installation',
            desc: 'Seamless setup and integration for your systems.',
            link: '/services/installation',
        },
    ]

    const active = pathname?.startsWith('/services');

    return (
        <div className="max-1199:relative  w-max">
            <div className="flex items-center gap-1 cursor-pointer" onClick={() => setServicesDropdown(isMobileNav ? !servicesDropdown : true)} onMouseEnter={() => setServicesDropdown(isMobileNav ? !servicesDropdown : true)}>
                <span className={`flex items-center gap-1 relative transition-all duration-300 after:contents-[""] after:absolute between-1400-1680:after:-bottom-[36px] after:-bottom-[40px] max-1199:after:-bottom-2 after:left-0 after:bg-transparent after:h-[3px] after:w-full hover:after:bg-black font-medium ${active && 'after:!bg-black font-semibold'}`}>
                    Services <FaAngleDown />
                </span>
            </div>

            {servicesDropdown && (
                <div
                    className={`absolute max-1199:!top-[28px] ${showSaleStripe ? 'between-1400-1680:!top-[183px] between-1200-1399:!top-[180px] top-[197px]' : 'max-1680:top-[137px] top-[144px]'} left-0 right-0 mx-auto bg-white rounded-b-2xl shadow-md max-399:w-[250px] max-1199:w-[350px] between-1200-1399:w-[1100px] w-[1320px] max-1199:p-3 p-6 z-50`}
                    onMouseLeave={() => setServicesDropdown(false)}
                >
                    <div className="flex flex-wrap">
                        {/* Core Services */}
                        <div className={`${isMobileNav ? 'w-full' : 'lg:w-2/3'} px-3`}>
                            <div className="w-max border-b-4 primaryBorder mb-4">
                                <span className="text-primary font-semibold max-1199:text-base text-xl">Core Services</span>
                            </div>
                            <div className="flex flex-wrap max-1199:gap-y-1 gap-y-6 max-1199:px-0 px-3 pb-0">
                                {dropData.slice(0, 4).map((data, index) => (
                                    <div key={index} className={`${isMobileNav ? 'w-full' : 'lg:w-1/2'} max-1199:px-0 px-2`}>
                                        <Link href={data.link} title={data.title}>
                                            <div className="flex gap-3 max-1199:px-0 p-3 max-1199:pb-0 rounded-lg hover:bg-[#EFF2FA] transition-all text-[#181C24] max-1199:hover:bg-transparent group max-1199:items-center">
                                                <div className="bg-[#EFF2FA] group-hover:primaryBg max-1199:h-[40px] max-1199:w-[40px] h-[60px] w-[60px] max-1199:p-2 p-3 rounded-[10px] flex items-center justify-center transition-all">
                                                    <Image src={data.img} alt="webDev-icon" height={0} width={0} className="h-full w-full group-hover:filter group-hover:invert" />
                                                </div>
                                                <div className="flex flex-col gap-[2px]">
                                                    <span className="font-bold max-1199:text-sm">{data.title}</span>
                                                    <p className="text-sm font-normal max-1199:hidden">{data.desc}</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Product Configurations */}
                        <div className={`${isMobileNav ? 'w-full mt-6' : 'lg:w-1/3 border-l border-[#D8DEEF] max-1199:border-none max-1199:pl-0 pl-8'} max-1199:px-0 px-3`}>
                            <div className="w-max border-b-4 primaryBorder mb-4 mt-4 lg:mt-0">
                                <span className="text-primary font-semibold max-1199:text-base text-xl">Product Configurations</span>
                            </div>
                            <div className="flex flex-col max-1199:gap-y-1 gap-y-6 max-1199:px-0 px-3 pb-0">
                                {dropData.slice(4, 6).map((data, index) => (
                                    <div key={index} className="w-full px-2">
                                        <Link href={data.link} title={data.title}>
                                            <div className="flex gap-3 max-1199:px-0 p-3 max-1199:pb-0 rounded-lg hover:bg-[#EFF2FA] transition-all text-[#181C24] max-1199:hover:bg-transparent group max-1199:items-center">
                                                <div className="bg-[#EFF2FA] group-hover:primaryBg max-1199:h-[40px] max-1199:w-[40px] h-[60px] w-[60px] max-1199:p-2 p-3 rounded-[10px] flex items-center justify-center transition-all">
                                                    <Image src={data.img} alt="webDev-icon" height={0} width={0} className="h-full w-full group-hover:filter group-hover:invert" />
                                                </div>
                                                <div className="flex flex-col gap-[2px]">
                                                    <span className="font-bold max-1199:text-sm">{data.title}</span>
                                                    <p className="text-sm font-normal max-1199:hidden">{data.desc}</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ServiceDropdown
