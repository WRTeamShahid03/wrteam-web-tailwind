import React from 'react'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import Link from 'next/link'
import { AiFillPlusCircle } from 'react-icons/ai';


const ServicesDropdown = () => {
    return (
        <div>
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className='flex items-center gap-1 font-semibold'>Services <AiFillPlusCircle className='!secondaryColor' size={19}/></NavigationMenuTrigger>
                        <NavigationMenuContent className='w-full'>
                            <div className='flex flex-col gap-4 !w-full max-w-full p-2 pb-4 px-3 bg-white !textPrimary font-semibold'>
                                <Link href={'/services/web-development'} className='w-max relative transition-all duration-300 after:contents-[""] after:absolute after:left-0 after:-bottom-1 after:primaryBg after:h-[3px] after:w-0 after:transition-all after:duration-300 hover:after:w-full'>
                                    Web Development
                                </Link>
                                <Link href={'/services/app-development'} className='w-max relative transition-all duration-300 after:contents-[""] after:absolute after:left-0 after:-bottom-1 after:primaryBg after:h-[3px] after:w-0 after:transition-all after:duration-300 hover:after:w-full'>
                                    App Development
                                </Link>
                                <Link href={'/services/ui-ux-design'} className='w-max relative transition-all duration-300 after:contents-[""] after:absolute after:left-0 after:-bottom-1 after:primaryBg after:h-[3px] after:w-0 after:transition-all after:duration-300 hover:after:w-full'>
                                    UI/UX Design Service
                                </Link>
                                <Link href={'/services/digital-marketing'} className='w-max relative transition-all duration-300 after:contents-[""] after:absolute after:left-0 after:-bottom-1 after:primaryBg after:h-[3px] after:w-0 after:transition-all after:duration-300 hover:after:w-full'>
                                    Digital Marketing Service
                                </Link>
                                <Link href={'/'} className='w-max relative transition-all duration-300 after:contents-[""] after:absolute after:left-0 after:-bottom-1 after:primaryBg after:h-[3px] after:w-0 after:transition-all after:duration-300 hover:after:w-full'>
                                    Customisation
                                </Link>
                                <Link href={'/services/installation'} className='w-max relative transition-all duration-300 after:contents-[""] after:absolute after:left-0 after:-bottom-1 after:primaryBg after:h-[3px] after:w-0 after:transition-all after:duration-300 hover:after:w-full'>
                                    Installation
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