export const site = {
  name: "WILLIAM",
  email: "williammgyasii@gmail.com",
  timezone: "EST",
  year: new Date().getFullYear(),
  roles: ["FULL STACK DEV", "AI ENGINEER", "PRODUCT BUILDER"],
  availability: "OPEN TO FULL TIME & CONTRACT",
  heroIntro: [
    { label: "ROLE", value: "Full stack engineer" },
    { label: "EXPERIENCE", value: "6 years shipping production software" },
    {
      label: "FOCUS",
      value: "SaaS, mobile, and AI systems from schema to deploy",
    },
    {
      label: "DELIVERY",
      value: "Database design, API layers, Stripe billing, production release",
    },
    { label: "PRODUCTS", value: "6 live apps · 2 flagships" },
    { label: "LOCATION", value: "Maryland · Open to remote" },
  ],
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
