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
      "Own full stack development of DeliverEarly at deliverearly.com, including the workflow builder, ATLAS AI agents, integrations, and production dashboards",
      "Built autonomous vendor follow ups and critical path risk detection with OpenAI powered ATLAS agents running 24/7",
      "Designed PostgreSQL schemas and tRPC APIs for orders, vendors, and real time collaboration, deployed on AWS at production scale",
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
      "Built an AI powered budgeting platform with multi step onboarding, financial dashboards, and spending insights",
      "Developed Next.js features with Zustand state management and Recharts reporting across the full user journey",
      "Increased new user engagement 35% through onboarding flow and dashboard UX improvements",
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
      "Led frontend development of SchoolDesk, a school management platform adopted by 200+ schools in Ghana",
      "Shipped reusable React component libraries and admin workflows that reduced support tickets 25%",
      "Drove 40% engagement lift and 70% feature adoption within the first month of major releases",
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
