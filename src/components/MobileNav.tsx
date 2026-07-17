"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks, isNavLinkActive } from "@/data/navLinks";

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        className="flex h-10 w-10 items-center justify-center text-ink"
      >
        <svg width="22" height="14" viewBox="0 0 22 14" fill="none">
          <path d="M0 1H22" stroke="currentColor" strokeWidth="1.5" />
          <path d="M0 13H22" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </button>

      {open && (
        <div className="fixed inset-0 z-[60] flex flex-col bg-bg">
          <div className="flex h-[90px] items-center justify-between border-b border-hairline px-10">
            <Link
              href="/"
              className="relative top-[6px] text-[28px] leading-none !text-teal-deep"
              style={{ fontFamily: "var(--font-mrs-saint-delafield)" }}
              onClick={() => setOpen(false)}
            >
              RA
            </Link>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="flex h-10 w-10 items-center justify-center text-ink"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M1 1L17 17M17 1L1 17" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>
          </div>
          <nav className="flex flex-1 flex-col items-center gap-10 pt-14">
            {navLinks.map((link) => {
              const isActive = isNavLinkActive(link, pathname);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`text-[1.3rem] font-medium tracking-[0.08em] uppercase ${
                    isActive ? "text-teal-deep" : "text-ink-soft"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </div>
  );
}
