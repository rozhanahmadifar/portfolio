"use client";

import { useEffect, useRef, useState } from "react";

export interface ImageWithFallbackProps {
  src: string;
  alt: string;
  fallbackLabel: string;
  className?: string;
  objectFit?: "cover" | "contain";
}

export default function ImageWithFallback({
  src,
  alt,
  fallbackLabel,
  className = "",
  objectFit = "cover",
}: ImageWithFallbackProps) {
  const [errored, setErrored] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // A server-rendered <img> starts loading before React hydrates and
    // attaches onError, so a fast 404 can fail before the handler exists.
    // Check the already-settled state on mount to catch that case too.
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0) {
      setErrored(true);
    }
  }, []);

  if (errored) {
    return (
      <div
        className={`flex h-full w-full items-center justify-center bg-teal-pale text-teal-deep ${className}`}
        style={{ fontFamily: "var(--font-fraunces)" }}
      >
        {fallbackLabel}
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      className={`h-full w-full ${objectFit === "contain" ? "object-contain" : "object-cover"} ${className}`}
      onError={() => setErrored(true)}
    />
  );
}
