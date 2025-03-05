"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import dotsPattern from "@/assets/images/career/dots-pattern.png";



interface dataProps {
    data: boolean,
}


const AnimatedDots: React.FC = () => {
    return (
        <motion.div
            className={`absolute -left-14 top-[30%] -translate-y-1/2 hidden lg:block`}
            animate={{
                y: [0, -10, 0],
            }}
            transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
            }}
        >
            <Image
                height={0}
                width={0}
                src={dotsPattern}
                alt="dotsPattern"
                className="dotsPattern w-[28px] h-auto"
            />
        </motion.div>
    );
}

export default AnimatedDots
