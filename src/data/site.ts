export const site = {
  name: "WILLIAM",
  email: "williammgyasii@gmail.com",
  timezone: "EST",
  year: new Date().getFullYear(),
  roles: ["FULL STACK DEV", "AI ENGINEER", "PRODUCT BUILDER"],
  availability: "OPEN TO FULL TIME & CONTRACT",
  heroDescription:
    "Full stack engineer, five years in production. I ship SaaS, mobile, and AI systems end to end: database design, API layers, Stripe billing, and deploy. Six live products. Two flagships. Based in Maryland, open to remote.",
  heroStats: ["5+ YEARS", "6 LIVE PRODUCTS", "2 FLAGSHIPS"],
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
