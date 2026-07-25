export const site = {
  name: "WILLIAM",
  email: "williammgyasii@gmail.com",
  timezone: "EST",
  year: new Date().getFullYear(),
  roles: ["FULL STACK DEV", "AI ENGINEER", "PRODUCT BUILDER"],
  availability: "OPEN TO FULL TIME & CONTRACT",
  heroSummary:
    "Full stack engineer with 6 years in production. I ship SaaS, mobile, and AI systems end to end. Six live products, two flagships. Maryland based, open to remote.",
  heroStats: ["6 YEARS", "6 LIVE PRODUCTS", "2 FLAGSHIPS"],
  cta: "VIEW PROJECTS",
  ctaSecondary: "CONTACT",
  nav: [
    { id: "home", label: "HOME", href: "/" },
    { id: "projects", label: "PROJECTS", href: "/projects" },
    { id: "work", label: "WORK", href: "/work" },
    { id: "about", label: "ABOUT", href: "/about" },
    { id: "contact", label: "CONTACT", href: "/contact" },
  ],
} as const;
