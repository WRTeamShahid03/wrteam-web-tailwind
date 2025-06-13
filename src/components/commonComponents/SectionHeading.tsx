import React from "react";

/**
 * Reusable section heading component with customizable title, subtitle, and description
 * @param badge - Small text displayed in the badge above the heading
 * @param title - Main section heading text
 * @param description - Optional description paragraph below the heading
 * @param className - Additional CSS classes for the container
 */
interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  className?: string;
}

export default function SectionHeading({
  badge,
  title,
  description,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`text-center mb-10 ${className}`}>
      {badge && (
        <div className="relative inline-block px-4 py-1 bg-blue-50 rounded-md mb-2">
          <span className="text-sm text-black font-medium">{badge}</span>
        </div>
      )}
      <h1 className="text-2xl sm:text-3xl font-bold my-4">{title}</h1>
      {description && (
        <p className="max-w-3xl mx-auto text-gray-600 text-sm sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}
