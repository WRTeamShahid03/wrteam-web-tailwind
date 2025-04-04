"use client";
import Image from "next/image";
import React from "react";
import saveMoneyImg from "../../../../assets/images/productDetailPage/layoutOne/saveMoneyImg.png"
import { ProductHighlightSection } from "@/types";


export default function MoneyTimeSection({ productHighlightSection }: { productHighlightSection: ProductHighlightSection[] }) {
  // Check if data exists and get the first item (since it's an array)
  const highlightData = productHighlightSection && productHighlightSection.length > 0 
    ? productHighlightSection[0] 
    : null;

  // Extract features from short_description if it contains bullet points
  const parseFeaturePoints = (shortDescription: string) => {
    if (!shortDescription) return null;
    
    // Split by lines that start with a bullet point (● or •)
    const lines = shortDescription.split(/\r?\n/).filter(line => line.trim().startsWith('●') || line.trim().startsWith('•'));
    
    if (lines.length === 0) return null;
    
    return lines.map((line, index) => {
      // Remove bullet point and trim
      const title = line.replace(/^[●•]\s*/, '').trim();
      return {
        id: index + 1,
        title,
        description: "" // No descriptions in the provided data
      };
    });
  };

  // Get feature points from the short description or use defaults
  const featurePoints = highlightData?.short_description 
    ? parseFeaturePoints(highlightData.short_description)
    : null;

  return (
    <div className="container commonMT">
      <div className="bg-[#1d3a5d] w-full py-12 px-4 sm:px-6 md:px-8 lg:px-12 rounded-3xl relative overflow-hidden my-12">
        {/* Content container */}
        <div className="flex flex-col lg:flex-row justify-between items-center">
          {/* Left side - Text content */}
          <div className="w-full lg:w-1/2 text-white mb-10 lg:mb-0">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              {highlightData?.title || ""}
            </h2>
            
            {/* Show the first part of short_description (before bullet points) */}
            <p className="text-base sm:text-lg mb-10 text-white/80 max-w-xl">
              {highlightData?.short_description?.split('●')[0].trim() || ""}
            </p>

            {/* Feature points */}
            <div className="space-y-6">
              {featurePoints && featurePoints.map((point) => (
                <div key={point.id} className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-white rounded-full flex items-center justify-center text-[#1d3a5d] font-bold text-sm">
                    {point.id}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{point.title}</h3>
                    {point.description && (
                      <p className="text-white/70 text-sm">{point.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] rounded-lg flex items-center justify-center">
              {highlightData?.icon_url ? (
                <Image
                  src={highlightData.icon_url}
                  alt="Money & Time Savings Illustration"
                  width={400}
                  height={400}
                />
              ) : (
                <Image
                  src={saveMoneyImg.src}
                  alt="Money & Time Savings Illustration"
                  width={400}
                  height={400}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
