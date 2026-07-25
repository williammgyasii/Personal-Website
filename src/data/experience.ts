import type { ProjectTech, TechTone } from "./projects";

export type { TechTone };

export interface WorkHighlight {
  id: number;
  role: string;
  company: string;
  period: string;
  location: string;
  current: boolean;
  summary: string;
  metric: string;
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
    summary:
      "Leading the in house Call CRM platform. Next.js frontend, tRPC backend, and production grade agent workflows built for high volume call operations.",
    metric: "40% faster page loads",
    technologies: toTechBubbles([
      "Next.js",
      "TypeScript",
      "Node.js",
      "tRPC",
      "PostgreSQL",
      "AWS",
      "Tailwind",
      "Redis",
    ]),
  },
  {
    id: 2,
    role: "Full Stack Developer",
    company: "Penny Pilot",
    period: "2024 – 2025",
    location: "Maryland, US",
    current: false,
    summary:
      "Built an AI powered budgeting platform with multi step onboarding, financial dashboards, and reporting that turns raw spending into actionable insights.",
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
    summary:
      "Led SchoolDesk, the school management platform adopted by 200+ schools. Replaced paper workflows with UX admins adopt without hand holding.",
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
