import { workExperiences } from "./work";
import { site } from "./site";

export interface ExpertiseCategory {
  id: string;
  label: string;
  summary: string;
  items: string[];
}

/** Single source for stack / expertise across About and home. */
export const expertiseCategories: ExpertiseCategory[] = [
  {
    id: "frontend",
    label: "Frontend",
    summary: "Product UI, design systems, and responsive web experiences built for adoption and performance.",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Framer Motion",
      "Redux",
      "Zustand",
      "Recharts",
      "Chart.js",
      "Sass",
      "Responsive Design",
    ],
  },
  {
    id: "backend",
    label: "Backend",
    summary: "APIs, business logic, and data layers designed for scale, clarity, and production reliability.",
    items: [
      "Node.js",
      "tRPC",
      "REST APIs",
      "Express",
      ".NET",
      "C#",
      "SignalR",
      "Stripe",
      "OpenAI",
    ],
  },
  {
    id: "database",
    label: "Database",
    summary: "Relational modeling, queries, and data architecture for SaaS products and reporting workloads.",
    items: ["PostgreSQL", "Redis", "Firebase", "Drizzle", "Prisma"],
  },
  {
    id: "cloud",
    label: "Cloud & DevOps",
    summary: "Deployment, infrastructure, and release pipelines from localhost to production users.",
    items: [
      "AWS",
      "S3",
      "CloudFront",
      "Vercel",
      "Docker",
      "GitHub Actions",
      "CI/CD",
    ],
  },
  {
    id: "mobile-desktop",
    label: "Mobile & Desktop",
    summary: "Native feeling clients across mobile and desktop, including C# worship ops and React Native health apps.",
    items: ["React Native", ".NET", "C#", "Electron"],
  },
  {
    id: "ai",
    label: "AI & Automation",
    summary: "LLM features, agents, and automation that ship with guardrails, not just demo day polish.",
    items: ["OpenAI", "LLM Integration", "AI Agents", "Prompt Engineering"],
  },
];

/** @deprecated Use expertiseCategories — kept for any flat keyword needs */
export const expertiseKeywords = expertiseCategories.flatMap((c) => c.items);

export const profileInfo = {
  name: "William Kwabena Gyasi",
  shortName: "William Gyasi",
  title: "Full-Stack Developer",
  location: "Maryland, USA",
  profileImage: "/images/profile.jpg",
  seoTitle: "About William Gyasi | Full-Stack Developer",
  seoDescription:
    "Full-stack developer with 6+ years shipping production applications across SaaS, web, mobile, desktop, and AI-powered platforms. React, Next.js, TypeScript, .NET, PostgreSQL, AWS, Cloudflare, OpenAI.",
  headline: "I don’t decorate interfaces. I shape how a product communicates.",
  bioParagraphs: [
    "Full-stack developer and software engineer with 6+ years building and shipping production applications across SaaS, web, mobile, desktop, fintech, supply chain, edtech, health tech, and AI-powered platforms.",
    "I work the full lifecycle: React and Next.js interfaces, Node.js and C#/.NET APIs, PostgreSQL data models, AWS and Terraform, Docker, CI/CD, and OpenAI integrations — from concept through deployment and production debugging.",
    "Shipped software supporting 37K+ daily orders, 180+ integration configurations, 15+ churches, and 200+ schools, with a focus on reliability, performance, and measurable business impact.",
  ],
  email: site.email,
  calendarLink: "https://cal.com/",
  availability: site.availability,
};

export interface AboutValueProp {
  id: string;
  title: string;
  tagline: string;
  badge?: string;
  featured?: boolean;
  description: string;
  highlights: string[];
}

export const aboutValueProps: AboutValueProp[] = [
  {
    id: "system-design",
    title: "System design",
    tagline: "Architecture first",
    badge: "Core strength",
    featured: true,
    description:
      "Data models, service boundaries, auth flows, and deployment topology mapped to scale, cost, and team size before code ships.",
    highlights: [
      "PostgreSQL schema and indexing strategy",
      "API contracts with tRPC or REST",
      "AWS and Vercel deployment architecture",
      "Tradeoffs documented before build",
    ],
  },
  {
    id: "ships-not-slides",
    title: "Ships, not slides",
    tagline: "Production proof",
    badge: "Live products",
    description:
      "Every project here is a live product or active build. I optimize for adoption, retention, and measurable business outcomes.",
    highlights: [
      "6 live products across SaaS and desktop",
      "DeliverEarly, LumenCue, SchoolDesk in production",
      "Metrics tied to user and revenue impact",
      "Portfolio proof, not pitch deck filler",
    ],
  },
  {
    id: "full-stack-ownership",
    title: "Full stack ownership",
    tagline: "End to end",
    badge: "One engineer",
    description:
      "Schema, API, frontend UX, billing, desktop releases, and cloud deploy. I own the vertical from architecture to users.",
    highlights: [
      "Schema to UI in one engineer",
      "Stripe billing and subscription flows",
      "C# desktop and React web from same owner",
      "Fewer handoffs, faster launches",
    ],
  },
  {
    id: "ai-guardrails",
    title: "AI with guardrails",
    tagline: "LLMs in prod",
    badge: "OpenAI ready",
    description:
      "LLM features with rate limits, human review, cost controls, and prompts that generalize in real workflows.",
    highlights: [
      "OpenAI in production user flows",
      "Cost and latency budgets enforced",
      "Human review where accuracy matters",
      "Demo day polish is not the bar",
    ],
  },
  {
    id: "product-impact",
    title: "Product impact",
    tagline: "Metrics that matter",
    badge: "Outcomes",
    description:
      "Engagement lift, schools onboarded, churches live, and features users adopt after launch. Problem first, stack second.",
    highlights: [
      "35% engagement lift on FinTech SaaS",
      "200+ schools on EdTech platform",
      "15 churches live on desktop product",
      "Business outcomes over tool lists",
    ],
  },
];

export const aboutSnippet = {
  greeting: "Hi, I'm William",
  highlights: [
    "6+ years shipping production software",
    "Software supporting 37K+ daily orders and 200+ schools",
    "AI integration that ships, not just demos",
    "End to end ownership from schema to deploy to users",
  ],
};

/** About page timeline — same dates and locations as /work. */
export const timelineEntries = workExperiences.map((job) => ({
  id: job.id,
  title: job.title,
  company: job.company,
  duration: job.duration,
  country: job.location,
  description: job.description,
  responsibilities: job.achievements.slice(0, 3),
  current: job.current,
  metric: job.metric,
}));

/** Top roles for about page preview (full history on /work). */
export const aboutRolePreview = timelineEntries.slice(0, 3);
