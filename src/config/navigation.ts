import type { NavLink } from "../types";

const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");

export const NAV_LINKS: NavLink[] = [
  { href: "/", label: "About", isActive: true },
  { href: `${basePath}/dream-casa`, label: "Dream Casa", isActive: true },
  { href: `${basePath}/blue-bungalow`, label: "Blue Bungalow", isActive: true },
  //   { href: "/publications", label: "Publications", isActive: true },
  //   { href: "/talks", label: "Talks", isActive: true },
  //   { href: "/teaching", label: "Teaching", isActive: true },
  //   { href: "/projects", label: "Code", isActive: true },
  //   { href: "/posts", label: "Blog", isActive: true },
  //   { href: "/tags", label: "Tags", isActive: true },
  //   { href: "/cv", label: "CV", isActive: true },
];
