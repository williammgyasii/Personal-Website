export const site = {
  name: "WILLIAM",
  email: "williammgyasii@gmail.com",
  timezone: "EST",
  year: new Date().getFullYear(),
  roles: ["FULL STACK DEV", "AI ENGINEER", "PRODUCT BUILDER"],
  availability: "OPEN TO FULL TIME & CONTRACT",
  heroSummary:
    "Six years shipping production systems across SaaS, mobile, and AI. I architect and deploy the full stack from APIs and cloud infra to LLM pipelines and mobile clients. Six products live, two flagships running real traffic at scale.",
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
