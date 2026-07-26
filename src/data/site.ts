export const site = {
  name: "WILLIAM",
  email: "williammgyasii@gmail.com",
  timezone: "EST",
  year: new Date().getFullYear(),
  roles: ["FULL STACK DEV", "PRODUCT BUILDER", "SOFTWARE ENGINEER"],
  availability: "OPEN TO FULL TIME & CONTRACT",
  heroSummary:
    "Seven years shipping production software across SaaS, mobile, desktop, and platforms. I architect and deploy the full stack from database design and APIs to frontends, billing, and production releases.",
  heroStats: [
    { value: "7", label: "Years shipping" },
    { value: "6", label: "Live products" },
    { value: "2", label: "Flagships" },
  ],
  scrollStatement:
    "From idea to launch. Clean, scalable products built to move fast, stay simple, and perform in the real world.",
  scrollMarquee: "FULL STACK · PRODUCTION SOFTWARE · SHIP FAST · OWN THE STACK ·",
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

export function gmailComposeUrl(email: string, subject = "Portfolio inquiry") {
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}`;
}
