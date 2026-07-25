import type { ProjectTech, TechTone } from "./projects";

export type { TechTone };

export interface WorkHighlight {
  id: number;
  role: string;
  company: string;
  period: string;
  location: string;
  current: boolean;
  bullets: string[];
  metric: string;
  productUrl?: string;
  technologies: ProjectTech[];
}

const tones: TechTone[] = ["primary", "accent"];

export function toTechBubbles(names: string[]): ProjectTech[] {
  return names.map((name, i) => ({
    name,
    tone: tones[i % tones.length]!,
  }));
}

/** Home page experience highlights (full list lives on /work). */
export const experienceHighlights: WorkHighlight[] = [
  {
    id: 1,
    role: "Full Stack Developer",
    company: "Intuitive Analytica",
    period: "2025 – Present",
    location: "Maryland, US",
    current: true,
    bullets: [
      "Problem: supply chain teams juggled disconnected ERPs, email, and portals with manual vendor follow ups and no critical path visibility",
      "Built and maintain DeliverEarly, the autonomous supply chain platform with ATLAS AI agents running 24/7",
      "Own the full stack: visual workflow builder, integrations, real time dashboards, and production releases",
    ],
    metric: "deliverearly.com",
    productUrl: "https://www.deliverearly.com/",
    technologies: toTechBubbles([
      "Next.js",
      "TypeScript",
      "Node.js",
      "tRPC",
      "PostgreSQL",
      "OpenAI",
      "AWS",
      "Redis",
      "Tailwind",
    ]),
  },
  {
    id: 2,
    role: "Full Stack Developer",
    company: "Penny Pilot",
    period: "2024 – 2025",
    location: "Maryland, US",
    current: false,
    bullets: [
      "Problem: users struggled to turn raw spending data into clear budgets and next steps",
      "Shipped AI budgeting with multi step onboarding, financial dashboards, and reporting",
      "Result: 35% lift in new user engagement after onboarding and dashboard redesign",
    ],
    metric: "35% engagement lift",
    technologies: toTechBubbles([
      "Next.js",
      "TypeScript",
      "OpenAI",
      "Firebase",
      "PostgreSQL",
      "Zustand",
      "Recharts",
      "Stripe",
    ]),
  },
  {
    id: 3,
    role: "Frontend Developer",
    company: "Asquii LLC",
    period: "2021 – 2023",
    location: "Accra, Ghana",
    current: false,
    bullets: [
      "Problem: schools relied on paper workflows admins could not adopt at scale",
      "Led SchoolDesk frontend and UX for a platform now used by 200+ schools in Ghana",
      "Result: 40% engagement increase and 70% feature adoption within the first month of major releases",
    ],
    metric: "200+ schools live",
    technologies: toTechBubbles([
      "React",
      "TypeScript",
      "Redux",
      "Node.js",
      "REST APIs",
      "Chart.js",
      "Sass",
      "Jest",
    ]),
  },
];
