"use client";
import Image from "next/image";
import React from "react";

// Feature points data
const featurePoints = [
  {
    id: 1,
    title: "One Time Payment",
    description: "Pay once and use forever without any recurring charges",
  },
  {
    id: 2,
    title: "Ready To Launch",
    description: "Immediate deployment with all features ready out of the box",
  },
  {
    id: 3,
    title: "Lifetime Revenue",
    description: "Generate continuous income from your educational platform",
  },
  {
    id: 4,
    title: "Error Free Code",
    description: "Thoroughly tested codebase for reliable performance",
  },
];

export default function MoneyTimeSection() {
  return (
    <div className="container commonMT">
      <div className="bg-[#1d3a5d] w-full py-12 px-4 sm:px-6 md:px-8 lg:px-12 rounded-3xl relative overflow-hidden my-12">
        {/* Content container */}
        <div className="flex flex-col lg:flex-row justify-between items-center">
          {/* Left side - Text content */}
          <div className="w-full lg:w-1/2 text-white mb-10 lg:mb-0">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Save Money & Time With
              <br />
              <span className="inline-block mt-2">eSchool SaaS</span>
            </h2>
            <p className="text-base sm:text-lg mb-10 text-white/80 max-w-xl">
              eSchool SaaS saves your very precious time and your hard-earned
              money
            </p>

            {/* Feature points */}
            <div className="space-y-6">
              {featurePoints.map((point) => (
                <div key={point.id} className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-white rounded-full flex items-center justify-center text-[#1d3a5d] font-bold text-sm">
                    {point.id}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{point.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Single dummy image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] bg-white/10 rounded-lg flex items-center justify-center">
              <Image
                src="/images/productDetailsPage/money-time-section.png"
                alt="Money & Time Savings Illustration"
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
