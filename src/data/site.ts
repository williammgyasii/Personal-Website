export const site = {
  name: "GYASII",
  email: "williammgyasii@gmail.com",
  timezone: "EST",
  year: new Date().getFullYear(),
  roles: ["FULL-STACK DEV", "AI ENGINEER", "PRODUCT BUILDER"],
  availability: "AVAILABLE FOR WORK",
  heroDescription:
    "I build production-grade web and mobile products with AI at the core—SaaS platforms, multi-tenant backends, and flagship apps shipped end to end. Every system is engineered for scale, clarity, and real-world impact.",
  cta: "START A PROJECT",
  nav: [
    { id: "home", label: "HOME", href: "/" },
    { id: "projects", label: "PROJECTS", href: "/projects" },
    { id: "work", label: "WORK", href: "/work" },
    { id: "about", label: "ABOUT", href: "/about" },
    { id: "contact", label: "CONTACT", href: "/contact" },
  ],
} as const;
