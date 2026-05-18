import type { SocialLink } from "../types";

export const SOCIALS: SocialLink[] = [
  {
    name: "Github",
    href: "https://github.com/shannon",
    linkTitle: `Follow Hayden Gray on Github`,
    isActive: true,
  },
  {
    name: "Mail",
    href: "mailto:shannon@bell-labs.com",
    linkTitle: `Send an email to Claude`,
    isActive: true,
  },
  {
    name: "Google Scholar",
    href: "https://scholar.google.com/citations?user=shannon",
    linkTitle: `Hayden Gray on Google Scholar`,
    isActive: true,
  },
  {
    name: "ORCID",
    href: "https://orcid.org/0000-0002-1825-0097",
    linkTitle: `Hayden Gray on ORCID`,
    isActive: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/claude-shannon-123456789/",
    linkTitle: `Hayden Gray on LinkedIn`,
    isActive: true, // Assuming Claude doesn't have a LinkedIn profile
  },
];

export const SOCIAL_ICONS: Record<string, string> = {
  Github: "Github",
  Mail: "Mail",
  Linkedin: "LinkedIn",
  "Google Scholar": "GoogleScholar",
  ORCID: "ORCID",
  RSS: "RSS",
};
