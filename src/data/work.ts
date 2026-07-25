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
    industry: "CRM & Call Center Solutions",
    current: true,
    description:
      "Leading the development of an in-house Call CRM platform, enabling seamless lead tracking, call logging, and agent workflow management.",
    responsibilities: [
      "Built a scalable, responsive frontend using Next.js and Tailwind CSS",
      "Designed real-time backend services with Node.js and tRPC",
      "Collaborated cross-functionally to ship secure, scalable CRM features",
      "Architected database schemas and API endpoints for lead management",
    ],
    achievements: [
      "Improved agent productivity through streamlined CRM workflows",
      "Delivered core CRM features ahead of schedule",
      "Reduced page load times by 40% through performance optimizations",
    ],
    technologies: ["Next.js", "TypeScript", "Node.js", "tRPC", "PostgreSQL", "AWS"],
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
