"use client";

import { useState } from "react";

export interface ImagePlaceholderProps {
  label: string;
  src?: string;
  caption?: string;
  aspect?: string;
  enlargeable?: boolean;
  objectPosition?: "top" | "center";
}

export default function ImagePlaceholder({
  label,
  src,
  caption,
  aspect = "aspect-video",
  enlargeable = false,
  objectPosition = "center",
}: ImagePlaceholderProps) {
  const [open, setOpen] = useState(false);

  const box = (
    <div
      className={`relative ${aspect} w-full overflow-hidden rounded-[8px] ${
        src
          ? "border border-hairline shadow-[0_4px_16px_rgba(20,32,28,0.1)]"
          : "border border-dashed border-hairline bg-white flex items-center justify-center"
      }`}
    >
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={label}
          className={`h-full w-full object-cover ${
            objectPosition === "top" ? "object-top" : "object-center"
          }`}
        />
      ) : (
        <p className="text-caption not-italic px-4 text-center">{label}</p>
      )}
    </div>
  );

  return (
    <figure>
      {enlargeable ? (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="block w-full cursor-zoom-in text-left"
          aria-label={`Enlarge: ${label}`}
        >
          {box}
        </button>
      ) : (
        box
      )}
      {caption && <figcaption className="text-caption mt-2">{caption}</figcaption>}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-teal-deep/80 p-8"
          onClick={() => setOpen(false)}
        >
          <div
            className="max-h-[85vh] w-full max-w-4xl overflow-hidden rounded-[5px] bg-white flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {src ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={src} alt={label} className="max-h-[85vh] w-full object-contain" />
            ) : (
              <p className="text-caption not-italic px-6 py-16 text-center">
                {label} (enlarged)
              </p>
            )}
          </div>
        </div>
      )}
    </figure>
  );
}
