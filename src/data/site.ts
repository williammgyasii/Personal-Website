export const site = {
  name: "WILLIAM",
  url: "https://www.williammgyasii.com",
  email: "williammgyasii@gmail.com",
  timezone: "EST",
  year: new Date().getFullYear(),
  fullName: "William Kwabena Gyasi",
  shortName: "William Gyasi",
  jobTitle: "Full-Stack Developer",
  location: "Maryland, USA",
  ogImage: "/images/projects/kairos-payhub/dashboard.png",
  sameAs: [
    "https://www.linkedin.com/in/williammgyasii",
    "https://github.com/williammgyasii",
  ],
  roles: ["FULL-STACK DEVELOPER", "SOFTWARE ENGINEER", "PRODUCT BUILDER"],
  availability: "OPEN TO FULL TIME & CONTRACT",
  heroLines: ["Digital experiences", "built with clarity", "& character."],
  heroSummary:
    "Full-stack developer with 6+ years shipping production software across SaaS, web, mobile, desktop, and AI-powered platforms. I design APIs and data models, build responsive interfaces, and take customer-facing features from concept through deployment.",
  heroStats: [
    { value: "6", label: "Years shipping" },
    { value: "15", label: "Churches live" },
    { value: "200", label: "Schools scaled" },
  ],
  scrollStatement:
    "Anyone can put a page online. The difference is how it feels — and whether it holds up in production.",
  scrollMarquee: "REACT · NEXT.JS · TYPESCRIPT · .NET · AWS · POSTGRESQL · OPENAI · CLOUDFLARE ·",
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
