import type { NavLink } from "../types";

const basePath = import.meta.env.BASE_URL;

export const NAV_LINKS: NavLink[] = [
  { href: "/", label: "About", isActive: true },
  { href: `/dream-casa`, label: "Dream Casa", isActive: true },
  { href: `/blue-bungalow`, label: "Blue Bungalow", isActive: true },
  { href: `/invest`, label: "Invest With Me", isActive: true },
];
