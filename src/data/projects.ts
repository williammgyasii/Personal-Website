export type TechTone = "primary" | "accent" | "violet" | "amber";

export interface ProjectTech {
  name: string;
  tone: TechTone;
}

export interface Project {
  id: string;
  name: string;
  category: string;
  summary: string;
  tags: string[];
  technologies: ProjectTech[];
  description: string;
  image: string;
  link: string;
  flagship?: boolean;
}

const placeholder = (seed: string) =>
  `https://picsum.photos/seed/${seed}/1400/900`;

export const projects: Project[] = [
  {
    id: "lumencue",
    name: "LumenCue",
    category: "AI Worship Platform · Flagship",
    summary:
      "Full C# desktop app for broadcast grade worship ops without the six figure AV stack. AWS sync, semver auto updates, and AI assisted cue orchestration — live at about 15 churches.",
    tags: [".NET", "C#", "DESKTOP", "AWS"],
    technologies: [
      { name: ".NET", tone: "violet" },
      { name: "C#", tone: "violet" },
      { name: "AWS", tone: "amber" },
      { name: "S3", tone: "amber" },
      { name: "OpenAI", tone: "accent" },
      { name: "SignalR", tone: "violet" },
      { name: "Docker", tone: "accent" },
    ],
    description:
      "Broadcast grade worship operations without the six figure AV stack. A full C# and .NET desktop application with AWS backed sync, semver auto updates, and AI assisted cue orchestration — built for live services where a missed cue is not an option. Used in production by about 15 churches.",
    image: placeholder("lumencue-worship"),
    link: "https://github.com/williammgyasii/lumencue-releases",
    flagship: true,
  },
  {
    id: "seeka",
    name: "Seeka",
    category: "Opportunity Pipeline SaaS · Flagship",
    summary:
      "Stop tab hopping. Start closing. Aggregates 50+ job boards and lead sources, scores every opportunity with AI, and automates outreach in one pipeline.",
    tags: ["NEXT.JS", "AI SCORING", "MULTI-TENANT", "AUTOMATION"],
    technologies: [
      { name: "Next.js", tone: "primary" },
      { name: "TypeScript", tone: "accent" },
      { name: "Node.js", tone: "primary" },
      { name: "Express", tone: "violet" },
      { name: "PostgreSQL", tone: "violet" },
      { name: "Drizzle", tone: "amber" },
      { name: "OpenAI", tone: "accent" },
      { name: "Redis", tone: "amber" },
      { name: "Zod", tone: "accent" },
      { name: "Vercel", tone: "primary" },
    ],
    description:
      "Stop tab-hopping. Start closing. Seeka aggregates 50+ job boards and lead sources, scores every opportunity with AI, and automates outreach—one pipeline from discovery to deal.",
    image: placeholder("seeka-saas"),
    link: "https://www.seeka.tech/",
    flagship: true,
  },
  {
    id: "lawprep-ai",
    name: "LawPrep AI",
    category: "EdTech SaaS",
    summary:
      "Serious LSAT prep without the premium course price tag. Official question banks, AI study tools, and freemium tiers built to convert on real product value.",
    tags: ["LSAT PREP", "OPENAI", "STRIPE", "NEXT.JS"],
    technologies: [
      { name: "Next.js", tone: "primary" },
      { name: "React", tone: "primary" },
      { name: "TypeScript", tone: "accent" },
      { name: "OpenAI", tone: "accent" },
      { name: "Stripe", tone: "violet" },
      { name: "Drizzle", tone: "amber" },
      { name: "PostgreSQL", tone: "violet" },
      { name: "NextAuth", tone: "accent" },
      { name: "Tailwind", tone: "primary" },
      { name: "Vercel", tone: "primary" },
    ],
    description:
      "Serious LSAT prep without the $3,000 course. 10,000+ official PrepTest questions, an AI study assistant trained on your materials, and freemium tiers that convert because the free product delivers real value.",
    image: placeholder("lawprep-edtech"),
    link: "https://www.lawprep.io/",
  },
  {
    id: "get-grounded",
    name: "Get Grounded",
    category: "Mobile · AI Routines",
    summary:
      "Productivity that respects your bank account and your calendar. AI routines that replan when life shifts, not another streak app that guilt trips you.",
    tags: ["REACT NATIVE", "AI PLANNING", "EXPO", "MOBILE"],
    technologies: [
      { name: "React Native", tone: "primary" },
      { name: "Expo", tone: "accent" },
      { name: "TypeScript", tone: "primary" },
      { name: "OpenAI", tone: "violet" },
      { name: "Firebase", tone: "amber" },
      { name: "PostgreSQL", tone: "accent" },
      { name: "Tailwind", tone: "primary" },
      { name: "Push Notifications", tone: "violet" },
      { name: "Calendar API", tone: "amber" },
    ],
    description:
      "Productivity that respects your bank account and your calendar. AI-generated routines that replan when life shifts—not another streak app that guilt-trips you for being human.",
    image: placeholder("get-grounded-mobile"),
    link: "https://get-grounded.app/",
  },
  {
    id: "festura",
    name: "Festura",
    category: "Culture-First Marketplace",
    summary:
      "The wedding marketplace diaspora communities deserve. Culture first discovery, trusted vendors, and planning tools for multi day celebrations abroad.",
    tags: ["MARKETPLACE", "NEXT.JS", "STRIPE", "DIASPORA"],
    technologies: [
      { name: "Next.js", tone: "primary" },
      { name: "React", tone: "primary" },
      { name: "TypeScript", tone: "accent" },
      { name: "Stripe", tone: "violet" },
      { name: "PostgreSQL", tone: "accent" },
      { name: "Algolia", tone: "amber" },
      { name: "AWS S3", tone: "amber" },
      { name: "Tailwind", tone: "primary" },
      { name: "Vercel", tone: "accent" },
    ],
    description:
      "The wedding marketplace diaspora communities deserve. Find Nigerian DJs, Ghanaian caterers, and Indian photographers who actually understand your ceremony—not vendors who need a cultural crash course.",
    image: placeholder("festura-marketplace"),
    link: "https://festura.org/",
  },
  {
    id: "forgecms",
    name: "ForgeCMS",
    category: "AI-Assisted CMS",
    summary:
      "WordPress power without plugin hell. Grammar, tone, SEO scoring, and headless publishing in one distraction free editor with native AI assistance.",
    tags: ["HEADLESS CMS", "OPENAI", "SEO", "PUBLISHING"],
    technologies: [
      { name: "Next.js", tone: "primary" },
      { name: "React", tone: "primary" },
      { name: "TypeScript", tone: "accent" },
      { name: "OpenAI", tone: "accent" },
      { name: "Prisma", tone: "violet" },
      { name: "PostgreSQL", tone: "violet" },
      { name: "Redis", tone: "amber" },
      { name: "Tailwind", tone: "primary" },
      { name: "Vercel", tone: "primary" },
    ],
    description:
      "WordPress power without plugin hell. Grammar, tone, SEO scoring, and headless publishing in one distraction-free editor—AI that enhances your voice instead of replacing it.",
    image: placeholder("forgecms-cms"),
    link: "https://www.forgecms.io/",
  },
];
