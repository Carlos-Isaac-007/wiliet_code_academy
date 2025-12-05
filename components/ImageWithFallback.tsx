"use client";

import { useState } from "react";
import Image, { ImageProps } from "next/image";
import { ImageOff } from "lucide-react";

interface ImageWithFallbackProps extends ImageProps {
  fallbackSrc?: string;
  fallback?: React.ReactNode;
}

export function ImageWithFallback({
  src,
  alt,
  fallbackSrc,
  fallback,
  ...props
}: ImageWithFallbackProps) {
  const [didError, setDidError] = useState(false);

  const handleError = () => setDidError(true);

  const isEmptySource =
    !src ||
    (typeof src === "string" && src.trim().length === 0);

  if (didError || isEmptySource) {
    if (fallbackSrc) {
      return (
        <Image
          src={fallbackSrc}
          alt={`Fallback para ${alt}`}
          {...props}
          onError={() => {}}
        />
      );
    }

    return (
      <div
        className="flex items-center justify-center bg-gray-100 text-gray-400"
        style={{ width: props.width, height: props.height }}
      >
        {fallback || <ImageOff className="w-1/2 h-1/2" />}
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      onError={handleError}
      {...props}
    />
  );
}