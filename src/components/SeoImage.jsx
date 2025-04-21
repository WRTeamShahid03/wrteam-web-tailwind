"use client";
import Image from "next/image";
import { useState } from "react";

/**
 * SEO-friendly image component that enforces alt tags
 * Ensures all images have proper alt text for accessibility and SEO
 *
 * @param {Object} props Component props
 * @param {string} props.src Image source URL
 * @param {string} props.alt Alt text for the image (required)
 * @param {string} props.fallbackAlt Fallback alt text if none provided
 * @param {number} props.width Image width
 * @param {number} props.height Image height
 * @param {string} props.className CSS classes
 * @param {Object} props.rest Other Image component props
 */
export default function SeoImage({
  src,
  alt,
  fallbackAlt = "WRTeam image",
  width,
  height,
  className = "",
  ...rest
}) {
  const [error, setError] = useState(false);

  // Enforce alt text for accessibility and SEO
  const imageAlt = alt || fallbackAlt;

  // Handle image loading error
  const handleError = () => {
    setError(true);
  };

  // Use a fallback image if the original fails to load
  const imageSrc = error ? "/placeholder.jpg" : src;

  return (
    <Image
      src={imageSrc}
      alt={imageAlt}
      width={width || 0}
      height={height || 0}
      className={className}
      onError={handleError}
      {...rest}
    />
  );
}
