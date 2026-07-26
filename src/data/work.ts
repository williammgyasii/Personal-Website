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
  metric: string;
  productUrl?: string;
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
    metric: "deliverearly.com",
    productUrl: "https://www.deliverearly.com/",
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
    metric: "35% engagement lift",
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
    title: ".NET Desktop Developer",
    company: "LumenCue",
    duration: "Sep 2023 – Aug 2025",
    location: "United States (Remote)",
    type: "contract",
    industry: "Worship Tech · Desktop Platform",
    current: false,
    metric: "15 churches live",
    description:
      "Churches were juggling ProPresenter, lighting consoles, and volunteer spreadsheets with no single control surface for live services. As remote lead developer on LumenCue, I built a full C# desktop application on .NET for cue orchestration, AWS backed sync, semver auto updates, and OpenAI assisted run of show planning. Today it is used by about 15 churches in production.",
    responsibilities: [
      "Architected and built LumenCue as a native C# and .NET desktop application for sub second cue control during live worship services",
      "Developed the core cue engine, operator UI, and local state management in C# with production grade reliability for volunteer run AV teams",
      "Built AWS S3, CloudFront, and serverless sync for encrypted media delivery and configuration across church campuses",
      "Shipped semver gated auto update pipeline via GitHub Releases so operators receive production builds without manual installs",
      "Integrated OpenAI assisted sequencing and run of show suggestions with operator review, built for Sunday morning reliability not demos",
    ],
    achievements: [
      "LumenCue live in production at about 15 churches through automated desktop release channels with v0.7.x builds shipping",
      "Delivered broadcast grade worship operations at a fraction of legacy AV stack cost with native C# desktop performance",
      "Built SignalR and real time layers for live cue coordination where missed transitions are not an option",
      "Owned end to end product engineering remotely from C# architecture through release engineering and AWS deployment",
    ],
    technologies: [
      ".NET",
      "C#",
      "AWS",
      "S3",
      "CloudFront",
      "OpenAI",
      "SignalR",
      "Docker",
      "GitHub Actions",
    ],
  },
  {
    id: 4,
    title: "Frontend Developer",
    company: "Asquii LLC",
    duration: "Oct 2021 – Aug 2023",
    location: "Accra, Ghana",
    type: "full-time",
    industry: "EdTech & School Management",
    current: false,
    metric: "200+ schools live",
    description:
      "Ghanaian schools were still running on paper registers, manual fee tracking, and phone calls for everything in between. I led frontend on SchoolDesk, the platform that turned those workflows into software admins could actually use, from attendance and billing to reporting across 200+ institutions.",
    responsibilities: [
      "Owned the React and TypeScript frontend for SchoolDesk, shaping admin dashboards, student records, and daily workflows used by non technical school staff",
      "Built reusable component libraries and design patterns that let the team ship features faster without rebuilding the same UI every sprint",
      "Ran in person training and rollout sessions with administrators during regional deployment, translating product capability into habits people kept using",
      "Designed Chart.js reporting views and REST API connected admin tools so leadership could see school health without exporting spreadsheets",
      "Simplified the highest friction admin tasks first, which cut support load and made new releases easier to adopt in the field",
    ],
    achievements: [
      "Grew SchoolDesk from early deployments to 200+ schools across Ghana with sustained daily usage",
      "Improved user engagement 40% by redesigning the workflows admins touched most often",
      "Reduced support tickets 25% by removing steps from common tasks instead of adding more documentation",
      "Hit 70% feature adoption within 30 days of major releases by shipping around real admin feedback",
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
    id: 5,
    title: "Full Stack Developer",
    company: "Winks Initiative",
    duration: "Jan 2020 – Aug 2021",
    location: "Accra, Ghana",
    type: "full-time",
    industry: "HealthTech & Blood Donation",
    current: false,
    metric: "15% sign up growth",
    description:
      "When blood supply runs low, every minute counts. I built the mobile first experience for a donation platform connecting donors and hospitals in Accra, focused on clarity under pressure: where to go, what happens next, and live status without confusion.",
    responsibilities: [
      "Built the React Native app with Redux, designing flows for first time donors who needed trust and simplicity on a small screen",
      "Wired REST APIs for live donation status, hospital availability, and push notifications so users were not left checking manually",
      "Prototyped and shipped onboarding that explained the process in plain language instead of assuming medical familiarity",
      "Profiled and tuned performance on lower end devices common in the market, prioritizing load time and responsive layout",
      "Worked closely on UX decisions where a confusing screen could mean someone closed the app and never came back",
    ],
    achievements: [
      "Launched a production mobile experience used by donors and hospital staff for real time donation coordination",
      "Increased sign ups 15% after rebuilding onboarding around trust, clarity, and fewer steps to first action",
      "Delivered 98% cross device responsiveness across the phones the product actually shipped to",
      "Cut page load times 20% through asset optimization and targeted frontend profiling",
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
