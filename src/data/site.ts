export const site = {
  name: "WILLIAM",
  email: "williammgyasii@gmail.com",
  timezone: "EST",
  year: new Date().getFullYear(),
  roles: ["FULL STACK DEV", "PRODUCT BUILDER", "SOFTWARE ENGINEER"],
  availability: "OPEN TO FULL TIME & CONTRACT",
  heroSummary:
    "Six years shipping production software across SaaS, mobile, and platforms. I architect and deploy the full stack from database design and APIs to frontends, billing, and production releases.",
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
