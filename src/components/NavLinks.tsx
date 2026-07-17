"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks, isNavLinkActive } from "@/data/navLinks";

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="hidden gap-10 md:flex">
      {navLinks.map((link) => {
        const isActive = isNavLinkActive(link, pathname);
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`text-nav${isActive ? " active" : ""}`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
