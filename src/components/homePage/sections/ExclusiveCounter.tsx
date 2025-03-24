"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import happy from "../../../assets/images/homePage/Happy Clients.svg";
import projects from "../../../assets/images/homePage/Projects Done.svg";
import reconnect from "../../../assets/images/homePage/Reconecct.svg";
import satisfaction from "../../../assets/images/homePage/Satisfaction.svg";

// Data for the counters shown in the component
const counterData = [
  {
    img: happy,
    counts: 20000,
    display: "20k+",
    text: "Happy Client",
  },
  {
    img: projects,
    counts: 500,
    display: "500+",
    text: "Project Wrapped Up",
  },
  {
    img: reconnect,
    counts: 94,
    display: "94%",
    text: "Reconnect",
  },
  {
    img: satisfaction,
    counts: 98,
    display: "98%",
    text: "Satisfaction",
  },
];

// Custom counter component using framer motion
const Counter = ({
  value,
  display,
  isInView = false,
}: {
  value: number;
  display: string;
  isInView: boolean;
}) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    // Only start counting when in view
    if (!isInView) {
      return;
    }

    // Simulate counting up
    let startVal = 0;
    const end = value;
    const duration = 2000; // 2 seconds
    const increment = end / (duration / 16); // Update roughly every 16ms (60fps)

    // Don't start at 0 for large numbers
    if (value > 1000) {
      startVal = value * 0.5;
    }

    let current = startVal;
    const updateCounter = () => {
      current += increment;
      if (current >= end) {
        setDisplayValue(end);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(current));
      }
    };

    const timer = setInterval(updateCounter, 16);

    return () => {
      clearInterval(timer);
    };
  }, [value, isInView]);

  return (
    <motion.p
      className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
      transition={{ duration: 0.5 }}
    >
      {displayValue === value ? display : displayValue}
    </motion.p>
  );
};

const ExclusiveCounter: React.FC = () => {
  const [inViewState, setInViewState] = useState(false);

  return (
    <section className="bg-[#16161A] py-10 md:py-16 lg:py-20">
      <div className="container">
        <motion.div
          className="flex flex-col lg:flex-row gap-10 lg:gap-16 justify-between items-center lg:items-start"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          onViewportEnter={() => setInViewState(true)}
        >
          {/* Left section - Title and button */}
          <motion.div
            className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-sm"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="px-5 py-3 bg-[#242529] rounded-md text-white text-sm font-medium mb-4 md:mb-6">
              Exclusive on CodeCanyon
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-white mb-6 md:mb-8">
              Your Gateway to <br className="hidden md:block" />
              <span className="text-[#FBBE36]">Premium</span> Solution
            </h2>
            <Link
              href={"https://1.envato.market/75rdmQ"}
              target="_blank"
              title="explore"
              className="bg-[#242529] text-white rounded-full flex items-center justify-center text-base font-semibold w-[140px] h-[45px] hover:bg-[#82b541] transition-all duration-300"
            >
              Explore →
            </Link>
          </motion.div>

          {/* Right section - Counter cards in a row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 w-full lg:w-auto lg:flex-1">
            {counterData.map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center w-full"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-[#232328] hover:bg-[#2c2c33] transition-colors duration-300 rounded-md w-full sm:max-w-[220px] lg:min-w-[130px] xl:min-w-[180px] h-[140px] sm:h-[160px] p-4 sm:p-5 flex flex-col items-center justify-center">
                  <motion.div
                    className="bg-white rounded-full p-2 sm:p-3 mb-2 sm:mb-3 w-12 sm:w-14 h-12 sm:h-14 flex items-center justify-center"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Image
                      src={item.img}
                      alt={item.text}
                      width={30}
                      height={30}
                      className="w-6 sm:w-7 h-6 sm:h-7"
                    />
                  </motion.div>
                  <Counter
                    value={item.counts}
                    display={item.display}
                    isInView={inViewState}
                  />
                  <motion.p
                    className="text-xs sm:text-sm text-gray-300"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {item.text}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExclusiveCounter;
