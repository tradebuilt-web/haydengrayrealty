import type { NavLink } from "../types";

const basePath = import.meta.env.BASE_URL;

export const NAV_LINKS: NavLink[] = [
  { href: basePath, label: "About", isActive: true },
  { href: `${basePath}/dream-casa`, label: "Dream Casa", isActive: true },
  { href: `${basePath}/blue-bungalow`, label: "Blue Bungalow", isActive: true },
];
