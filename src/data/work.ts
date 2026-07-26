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
    title: "Full Stack Developer",
    company: "Intuitive Analytica",
    duration: "May 2025 – Present",
    location: "Maryland, United States",
    type: "full-time",
    industry: "Supply Chain SaaS · AI Automation",
    current: true,
    description:
      "Supply chain teams were losing cycles to disconnected ERPs, email, Slack, and supplier portals with zero visibility and manual vendor follow ups. Tasked with building DeliverEarly, an AI native platform that turns supply chain operations into autonomous, end to end workflows. I build and maintain the production platform at deliverearly.com.",
    responsibilities: [
      "Architected and shipped end to end full stack development for DeliverEarly (deliverearly.com), a supply chain SaaS platform built with Next.js, React, Node.js, TypeScript, and PostgreSQL",
      "Implemented OpenAI LLM powered AI agents (ATLAS) for automated vendor follow ups, risk alerts, and critical path detection with 24/7 autonomous orchestration",
      "Designed scalable PostgreSQL schemas and type safe tRPC/REST APIs for orders, vendors, and real time collaboration; deployed production workloads on AWS with Redis caching",
      "Built React/Next.js dashboards with real time visibility, notifications, and cross functional collaboration, consolidating fragmented ERP, email, and supplier portal workflows",
      "Optimized production releases, application performance, and system reliability for a cloud native SaaS platform in an Agile development environment",
    ],
    achievements: [
      "DeliverEarly live in production at deliverearly.com with unified workspace replacing fragmented ERP, email, and portal workflows",
      "ATLAS AI agent automations running 24/7 for vendor follow ups and supply chain risk detection",
      "End to end full stack ownership from database design through frontend deployment on AWS",
    ],
    technologies: [
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
    ],
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "Penny-Pilot",
    duration: "Jun 2024 – Feb 2025",
    location: "Maryland, United States",
    type: "full-time",
    industry: "FinTech & Personal Finance",
    current: false,
    description:
      "Users were spread across spreadsheets and banking apps with no clear path from raw transactions to actionable budgets. Built Penny Pilot, an AI powered personal finance platform that unifies onboarding, spending tracking, and reporting in one cohesive product.",
    responsibilities: [
      "Led full stack development of Penny Pilot, a FinTech SaaS platform with Next.js, React, Node.js, PostgreSQL, Stripe billing, and OpenAI powered financial insights",
      "Developed AI driven spending analysis and interactive Recharts data visualizations using TypeScript, Zustand, and responsive React UI across the end to end customer journey",
      "Architected RESTful APIs and PostgreSQL database schemas for budget calculations, subscription management, and reporting at production scale",
      "Shipped Next.js features with Zustand state management and Recharts visualizations for at a glance financial clarity",
      "Optimized mobile responsive UI/UX and frontend performance across onboarding and dashboard surfaces",
    ],
    achievements: [
      "Increased new user engagement 35% through Agile UX iteration and onboarding optimization",
      "Improved user retention 15% post launch with mobile responsive dashboard redesign",
      "Integrated OpenAI powered financial insights into production budgeting workflows at scale",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "REST APIs",
      "OpenAI",
      "Firebase",
      "PostgreSQL",
      "Zustand",
      "Recharts",
      "Stripe",
      "Tailwind CSS",
    ],
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
      "Led SchoolDesk, a comprehensive school management system used by 200+ schools.",
    responsibilities: [
      "Led frontend development of SchoolDesk, an EdTech SaaS platform adopted by 200+ schools, built with React, TypeScript, Redux, and REST APIs",
      "Built reusable React component libraries and scalable admin workflows that reduced support tickets 25% and improved development velocity",
      "Delivered cross functional feature design, deployment, and training for administrators during regional rollout",
      "Implemented Chart.js analytics dashboards and REST API integrated admin tools used daily across hundreds of institutions",
    ],
    achievements: [
      "Scaled EdTech SaaS platform to 200+ schools with 40% increase in user engagement",
      "Reduced customer support tickets 25% through simplified admin workflows and UX improvements",
      "Achieved 70% feature adoption within 30 days of major product releases",
    ],
    technologies: [
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
    ],
  },
  {
    id: 4,
    title: "Full Stack Developer",
    company: "Winks Initiative",
    duration: "Jan 2020 – Aug 2021",
    location: "Accra, Ghana",
    type: "full-time",
    industry: "HealthTech & Blood Donation",
    current: false,
    description:
      "Developed the frontend of a blood donation app with intuitive, responsive UI.",
    responsibilities: [
      "Developed mobile first React Native frontend with Redux state management for real time blood donation tracking",
      "Integrated REST APIs for real time donation status updates and push notification delivery",
      "Optimized page load performance and responsive UI/UX, achieving 98% cross device compatibility",
    ],
    achievements: [
      "Increased user sign ups 15% post launch with intuitive, trust building onboarding flow",
      "Delivered cross device experience with React Native and Redux at 98% mobile responsiveness",
      "Reduced page load times 20% through frontend performance profiling and asset optimization",
    ],
    technologies: [
      "React Native",
      "React",
      "Redux",
      "JavaScript",
      "REST APIs",
      "CSS3",
      "Responsive Design",
    ],
  },
];

export const experienceFilters: { id: WorkType; label: string }[] = [
  { id: "all", label: "All" },
  { id: "full-time", label: "Full Time" },
  { id: "contract", label: "Contract" },
];
