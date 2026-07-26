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
      "Architected and shipped end to end full stack development for DeliverEarly (deliverearly.com), a supply chain SaaS platform built with Next.js, React, Node.js, TypeScript, and PostgreSQL",
      "Implemented OpenAI LLM powered AI agents (ATLAS) for automated vendor follow ups and critical path risk detection, delivering 24/7 autonomous workflow orchestration",
      "Designed scalable PostgreSQL schemas and type safe tRPC/REST APIs for orders, vendors, and real time collaboration; deployed production workloads on AWS with Redis caching",
      "Built React/Next.js dashboards with real time visibility, notifications, and cross functional collaboration, consolidating fragmented ERP, email, and supplier portal workflows",
      "Optimized production releases, application performance, and system reliability for a cloud native SaaS platform in an Agile development environment",
    ],
    metric: "deliverearly.com",
    productUrl: "https://www.deliverearly.com/",
    technologies: toTechBubbles([
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "tRPC",
      "REST APIs",
      "PostgreSQL",
      "OpenAI",
      "AWS",
      "Redis",
      "Tailwind CSS",
      "SaaS",
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
      "Led full stack development of Penny Pilot, a FinTech SaaS platform with Next.js, React, Node.js, PostgreSQL, Stripe billing, and OpenAI powered financial insights",
      "Developed AI driven spending analysis and interactive Recharts data visualizations using TypeScript, Zustand, and responsive React UI across the end to end customer journey",
      "Architected RESTful APIs and PostgreSQL database schemas for budget calculations, subscription management, and reporting at production scale",
      "Increased new user engagement 35% and user retention 15% through Agile UX iteration, onboarding optimization, and mobile responsive dashboard design",
      "Optimized frontend performance and scalable UI/UX, accelerating time to insight from raw transaction data to actionable budget recommendations",
    ],
    metric: "35% engagement lift",
    technologies: toTechBubbles([
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "REST APIs",
      "PostgreSQL",
      "OpenAI",
      "Firebase",
      "Zustand",
      "Recharts",
      "Stripe",
      "Tailwind CSS",
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
      "Led frontend development of SchoolDesk, an EdTech SaaS platform adopted by 200+ schools, built with React, TypeScript, Redux, and REST APIs",
      "Built reusable React component libraries and scalable admin workflows that reduced support tickets 25% and improved development velocity",
      "Shipped major releases driving 40% user engagement growth and 70% feature adoption within 30 days of launch",
      "Delivered cross functional training and regional rollout for administrators, supporting user adoption and change management at scale",
      "Implemented Chart.js analytics dashboards and REST API integrated admin tools used daily across hundreds of institutions",
    ],
    metric: "200+ schools live",
    technologies: toTechBubbles([
      "React",
      "TypeScript",
      "Redux",
      "Node.js",
      "REST APIs",
      "Firebase",
      "Chart.js",
      "Sass",
      "Jest",
      "Responsive Design",
    ]),
  },
];
