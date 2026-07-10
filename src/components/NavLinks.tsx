"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home", trackActive: true },
  { href: "/#projects", label: "Projects", trackActive: false },
  { href: "/about", label: "About", trackActive: true },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-10">
      {links.map((link) => {
        const isActive =
          link.trackActive &&
          (link.href === "/" ? pathname === "/" : pathname.startsWith(link.href));
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
