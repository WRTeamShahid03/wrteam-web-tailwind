import Image from "next/image";
import React from "react";
import line from "@/assets/images/line.svg";

export default function ProcessPurchase() {
  // Process steps data
  const steps = [
    {
      id: 1,
      title: "Purchase",
      icon: "/images/Purchase.png", // Updated icon path
      description:
        "Choose eSchool SaaS and complete transactions using available payment methods on Envato Marketplace",
    },
    {
      id: 2,
      title: "Download & Configure Description",
      icon: "/images/Download.png", // Updated icon path
      description:
        "Once downloaded from the Envato Marketplace, reach out to us for assistance with configuration",
    },
    {
      id: 3,
      title: "Publish App Description",
      icon: "/images/Publish.png", // Updated icon path
      description:
        "Customize eSchool SaaS with your branding and share with world",
    },
  ];

  return (
    <div className="w-full py-16 px-4 md:px-8">
      {/* Main heading */}
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-16">
        Process From Purchase to Publication in 3 Simple Steps
      </h2>

      {/* Process steps with connecting line */}
      <div className="relative flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto">
        {/* Single line connecting all steps - visible only on medium screens and above */}
        <div className="absolute top-0 left-0 w-full -z-10 hidden md:block">
          <Image
            src={line}
            alt="connecting line"
            className="w-[60%] h-auto object-contain mx-auto"
          />
        </div>

        {/* Steps */}
        {steps.map((step) => (
          <div
            key={step.id}
            className="flex flex-col items-center mb-12 md:mb-0 w-full md:w-1/3 px-4"
          >
            {/* Icon circle */}
            <div className="w-20 h-20 bg-green-50 rounded-full mt-4 flex items-center justify-center mb-4">
              <div className="w-10 h-10 relative">
                {/* Updated icon paths */}
                <img
                  src={step.icon}
                  alt={step.title}
                  className="w-full h-full"
                />
              </div>
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold mb-2 text-center">{step.title}</h3>

            {/* Description */}
            <p className="text-center text-gray-700 font-medium text-sm">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
