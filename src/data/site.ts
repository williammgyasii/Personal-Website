export const site = {
  name: "William",
  title: "Full stack developer",
  subtitle: "Product builder · Software engineer",
  email: "williammgyasii@gmail.com",
  timezone: "EST",
  year: new Date().getFullYear(),
  availability: "Open to full time & contract",
  heroSummary:
    "Six years shipping production software across SaaS, mobile, and platforms. I own the full stack from database design and APIs to frontends, billing, and production releases.",
  heroStatsLine: "6 years · 6 live products · 2 flagships",
  cta: "View projects",
  ctaSecondary: "Contact",
  nav: [
    { id: "home", label: "Home", href: "/" },
    { id: "projects", label: "Projects", href: "/projects" },
    { id: "work", label: "Work", href: "/work" },
    { id: "about", label: "About", href: "/about" },
    { id: "contact", label: "Contact", href: "/contact" },
  ],
} as const;
