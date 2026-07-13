"use client";

import { ReactNode, useState } from "react";

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`h-4 w-4 shrink-0 text-teal-deep transition-transform duration-300 ${
        open ? "rotate-180" : ""
      }`}
      aria-hidden="true"
    >
      <path d="M5 7.5L10 12.5L15 7.5" />
    </svg>
  );
}

export default function ResearchRow({
  name,
  outcome,
  children,
}: {
  name: string;
  outcome: string;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-hairline">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full flex-col gap-2 py-5 text-left sm:flex-row sm:items-center sm:gap-6"
      >
        <span className="text-meta-label w-full shrink-0 font-semibold sm:w-[260px]">
          {name}
        </span>
        <span className="flex-1 text-[15px] leading-snug text-ink">
          {outcome}
        </span>
        <ChevronIcon open={open} />
      </button>
      <div
        className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="mb-6 rounded-r-lg border-l-2 border-teal bg-teal-pale/40 p-6 sm:mb-8 sm:p-8">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
