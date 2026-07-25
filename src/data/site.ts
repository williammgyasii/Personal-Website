export const site = {
  name: "GYASII",
  email: "williammgyasii@gmail.com",
  timezone: "EST",
  year: new Date().getFullYear(),
  roles: ["FULL-STACK DEV", "AI ENGINEER", "PRODUCT BUILDER"],
  availability: "AVAILABLE FOR WORK",
  heroDescription:
    "I build products people actually use—AI-native SaaS, multi-tenant platforms, desktop clients, and mobile apps shipped end to end. From schema design to Stripe billing to production deploy, I engineer systems that scale, convert, and survive real users.",
  cta: "START A PROJECT",
  nav: [
    { id: "home", label: "HOME", href: "/" },
    { id: "projects", label: "PROJECTS", href: "/projects" },
    { id: "work", label: "WORK", href: "/work" },
    { id: "about", label: "ABOUT", href: "/about" },
    { id: "contact", label: "CONTACT", href: "/contact" },
  ],
} as const;
