"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import dotsPattern from "@/assets/images/career/dots-pattern.png";



interface dataProps {
  data?: boolean,
  ourVision?: boolean,
  ourMission?: boolean,
}

const AnimatedDots: React.FC<dataProps> = ({ data,ourVision,ourMission }) => {
  return (
    <motion.div
      className={`absolute ${data ? ourMission ? 'between-1200-1399:right-64 -right-10' :'right-3' : ourVision ? 'between-1200-1399:left-64 -left-14' : '-left-14'} ${data ? 'top-[10%]' : 'top-[30%]'} -translate-y-1/2 hidden lg:block`}
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
