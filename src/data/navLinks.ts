export const navLinks = [
  { href: "/", label: "Home", trackActive: true },
  { href: "/#projects", label: "Projects", trackActive: false },
  { href: "/about", label: "About", trackActive: true },
];

export function isNavLinkActive(
  link: { href: string; trackActive: boolean },
  pathname: string
) {
  if (!link.trackActive) return false;
  return link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
}
