"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";

interface BlogImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  categoryName?: string;
  priority?: boolean;
}

/**
 * Client component for displaying blog images with error handling
 */
export default function BlogImage({
  src,
  alt,
  width,
  height,
  className,
  categoryName,
  priority = false,
}: BlogImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [isError, setIsError] = useState(false);

  const handleError = () => {
    if (!isError) {
      setIsError(true);
      setImgSrc("/placeholder-image.jpg");
    }
  };

  return (
    <div className="relative overflow-hidden rounded-[16px]">
      {categoryName && (
        <span className="primaryBg absolute top-4 z-10 text-xs rounded-e-sm font-medium text-white py-1 px-2">
          {categoryName}
        </span>
      )}
      <Image
        src={imgSrc}
        alt={alt}
        width={width}
        height={height}
        className={className || "w-full"}
        onError={handleError}
        unoptimized={true}
        priority={priority}
      />
    </div>
  );
}
