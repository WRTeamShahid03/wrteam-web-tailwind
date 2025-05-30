import React from 'react'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import Link from 'next/link'
import { FaAngleDown } from "react-icons/fa6";


const ServicesDropdown = () => {
    return (
        <div>
            <NavigationMenu className='relative z-[12]'>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className='flex items-center gap-1 font-semibold'>Services <FaAngleDown className='!secondaryColor' size={19} /></NavigationMenuTrigger>
                        <NavigationMenuContent className='w-full relative z-[12]'>
                            <div className='flex flex-col gap-4 !w-full max-w-full p-2 pb-4 px-3 bg-white !textPrimary font-semibold relative !z-[99]'>
                                <Link href={'/services/installation'} title='Setup & Installation' className='w-max relative transition-all duration-300 after:contents-[""] after:absolute after:left-0 after:-bottom-1 after:productPrimaryBg after:h-[3px] after:w-0 after:transition-all after:duration-300 hover:after:w-full'>
                                    Setup & Installation
                                </Link>
                                <Link href={'/services/customization'} title='Customisation' className='w-max relative transition-all duration-300 after:contents-[""] after:absolute after:left-0 after:-bottom-1 after:productPrimaryBg after:h-[3px] after:w-0 after:transition-all after:duration-300 hover:after:w-full'>
                                    Customisation
                                </Link>
                            </div>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>

        </div>
    )
}

export default ServicesDropdown