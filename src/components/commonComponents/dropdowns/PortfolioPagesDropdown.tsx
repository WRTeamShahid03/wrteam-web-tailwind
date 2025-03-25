import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { AiFillPlusCircle } from "react-icons/ai";

const PortfolioPagesDropdown = () => {
  return (
    <div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="flex items-center gap-1 font-semibold">
              Portfolio <AiFillPlusCircle className="!secondaryColor" size={19} />
            </NavigationMenuTrigger>
            <NavigationMenuContent className="w-full">
              <div className="flex flex-col gap-4 !w-full max-w-full p-2 pb-4 px-3 bg-white !textPrimary font-semibold">
                <Link
                  href={"/portfolio-development"}
                  className='w-max relative transition-all duration-300 after:contents-[""] after:absolute after:left-0 after:-bottom-1 after:primaryBg after:h-[3px] after:w-0 after:transition-all after:duration-300 hover:after:w-full'
                >
                  Portfolio Development
                </Link>
                <Link
                  href={"/portfolio-design"}
                  className='w-max relative transition-all duration-300 after:contents-[""] after:absolute after:left-0 after:-bottom-1 after:primaryBg after:h-[3px] after:w-0 after:transition-all after:duration-300 hover:after:w-full'
                >
                  Portfolio Design
                </Link>
                
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default PortfolioPagesDropdown;
