export type WorkType = "all" | "full-time" | "contract";

export interface WorkExperience {
  id: number;
  title: string;
  company: string;
  duration: string;
  location: string;
  type: WorkType;
  industry: string;
  current: boolean;
  description: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
}

export const workExperiences: WorkExperience[] = [
  {
    id: 1,
    title: "Full-Stack Developer",
    company: "Intuitive Analytica",
    duration: "May 2025 – Present",
    location: "Maryland, United States",
    type: "full-time",
    industry: "Supply Chain SaaS · AI Automation",
    current: true,
    description:
      "Supply chain teams were losing cycles to disconnected ERPs, email, Slack, and supplier portals with zero visibility and manual vendor follow ups. Tasked with building DeliverEarly, an AI native platform that turns supply chain operations into autonomous, end to end workflows. I build and maintain the production platform at deliverearly.com.",
    responsibilities: [
      "Own full stack development of DeliverEarly: workflow builder, dashboards, and integration layer",
      "Build and extend ATLAS AI agent logic for vendor follow ups, risk alerts, and escalations",
      "Design PostgreSQL schemas and tRPC APIs for orders, activities, vendors, and critical path tracking",
      "Ship Next.js features for real time visibility, notifications, and cross team collaboration",
      "Maintain production releases, performance, and reliability on AWS",
    ],
    achievements: [
      "DeliverEarly live in production at deliverearly.com",
      "ATLAS agent automations running 24/7 for vendor follow ups and risk detection",
      "Unified workspace replacing fragmented ERP, email, and portal workflows",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "tRPC",
      "PostgreSQL",
      "OpenAI",
      "AWS",
      "Redis",
      "Tailwind CSS",
    ],
  },
  {
    id: 2,
    title: "Full-Stack Developer",
    company: "Penny-Pilot",
    duration: "Jun 2024 – Feb 2025",
    location: "Maryland, United States",
    type: "full-time",
    industry: "FinTech & Personal Finance",
    current: false,
    description:
      "Designed and developed an intelligent budgeting tool with AI-powered financial insights.",
    responsibilities: [
      "Multi-step onboarding with Next.js and Zustand",
      "Interactive charts with Recharts and D3.js",
      "RESTful APIs for budget calculations and reporting",
    ],
    achievements: [
      "35% improvement in new user engagement",
      "15% increase in user retention",
      "Integrated AI-powered financial insights",
    ],
    technologies: ["Next.js", "TypeScript", "Firebase", "PostgreSQL", "Zustand", "Recharts"],
  },
  {
    id: 3,
    title: "Frontend Developer",
    company: "Asquii LLC",
    duration: "Oct 2021 – Aug 2023",
    location: "Accra, Ghana",
    type: "full-time",
    industry: "EdTech & School Management",
    current: false,
    description:
      "Led SchoolDesk — comprehensive school management system used by 200+ schools.",
    responsibilities: [
      "Cross-functional feature design and deployment",
      "Training sessions for administrators and staff",
      "Reusable component libraries for faster development",
    ],
    achievements: [
      "40% increase in user engagement",
      "25% decrease in support tickets",
      "Scaled platform to 200+ schools",
    ],
    technologies: ["React.js", "Redux", "Firebase", "Node.js", "REST APIs"],
  },
  {
    id: 4,
    title: "Full-Stack Developer",
    company: "Winks Initiative",
    duration: "Jan 2020 – Aug 2021",
    location: "Accra, Ghana",
    type: "full-time",
    industry: "HealthTech & Blood Donation",
    current: false,
    description:
      "Developed the frontend of a blood donation app with intuitive, responsive UI.",
    responsibilities: [
      "Real-time data integration for donation status",
      "React Native and Redux for mobile experience",
      "Push notifications for donation reminders",
    ],
    achievements: [
      "15% increase in user sign-ups after launch",
      "98% mobile responsiveness rate",
      "20% reduction in page load times",
    ],
    technologies: ["React Native", "Redux", "JavaScript", "CSS"],
  },
];

export const experienceFilters: { id: WorkType; label: string }[] = [
  { id: "all", label: "All" },
  { id: "full-time", label: "Full Time" },
  { id: "contract", label: "Contract" },
];
