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
    metric: "180+ configs",
    productUrl: "https://www.deliverearly.com/",
    description:
      "Build and maintain production integration monitoring across ERP and PLM pipelines, with real-time alerts, executive reporting, and AWS infrastructure managed through Terraform.",
    responsibilities: [
      "Built production integration monitoring for 4 ERP/PLM sync pipelines across A2000, Oracle, and PLM, recording hourly sync runs in DynamoDB and triggering real-time Slack alerts on failures across 180+ configurations",
      "Diagnosed and resolved production sync outages affecting 67+ A2000 configurations, including Oracle schema errors and secret misconfigurations through Terraform, restoring reliable hourly synchronization and supporting ~3K orders/day",
      "Redesigned client-facing daily digest emails from technical failure logs into executive summaries with integration health status and order-count reporting",
      "Expanded order search and filtering across .NET APIs and Next.js interfaces, including warehouses, tags, and configurable visible columns, with automated regression tests",
      "Managed production AWS infrastructure through Terraform, including Lambda, DynamoDB, App Runner, and integration configurations across four repositories with coordinated CI/CD deployments",
    ],
    achievements: [
      "Restored reliable hourly sync for 67+ configurations supporting ~3K orders/day",
      "Monitoring and Slack alerts covering 180+ integration configurations",
      "Production AWS owned through Terraform and coordinated CI/CD across four repositories",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      ".NET",
      "tRPC",
      "REST APIs",
      "PostgreSQL",
      "AWS",
      "DynamoDB",
      "Terraform",
      "Redis",
      "OpenAI",
      "Tailwind CSS",
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
      "Led full-stack development of Penny Pilot, an AI-powered personal finance SaaS built with Next.js, React, Node.js, PostgreSQL, Stripe, and OpenAI",
      "Architected REST APIs and PostgreSQL schemas for budget calculations, subscription management, reporting, and application workflows",
      "Developed Python-based financial data processing and automation utilities to support reporting, transaction analysis, and backend workflows",
      "Shipped responsive Next.js features using Zustand state management and Recharts visualizations for at-a-glance financial insights",
      "Integrated Stripe billing and AI-assisted financial insights powered by OpenAI",
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
      "Python",
      "Stripe",
      "Tailwind CSS",
    ],
  },
  {
    id: 3,
    title: "Full-Stack Developer",
    company: "KairosHub",
    duration: "Dec 2023 – May 2024",
    location: "United States",
    type: "contract",
    industry: "Church SaaS · Giving & Attendance",
    current: false,
    metric: "app.kairospayhub.com",
    productUrl: "https://app.kairospayhub.com",
    description:
      "Architected and shipped KairosPayHub, a multi-tenant church SaaS for giving, attendance, and roster, from product specs through production on Cloudflare.",
    responsibilities: [
      "Architected and shipped KairosPayHub, a multi-tenant church SaaS for giving, attendance, and roster, from product specs through production on Cloudflare",
      "Built giving workflows with nested campaigns, batch contribution entry, leader approval queues, and filterable member/campaign analytics with realtime refresh",
      "Implemented attendance with timezone-aware meeting windows, configurable submission layers, a mark-attendance wizard, and one-hop parent approval so pastors use metrics instead of sitting in every queue",
      "Developed role- and ability-scoped React dashboards (.NET 10 APIs, JWT tenancy, SignalR) so pastors, mid-level leaders, and cell leaders each see the surface they own",
      "Established spec-driven delivery (OpenSpec + TDD) and a GitHub Actions pipeline: CI on every change, staging on main, production on version tags, behind a same-origin Cloudflare Workers gateway",
    ],
    achievements: [
      "Production church operations platform live at app.kairospayhub.com",
      "Structure-aware giving, attendance, and roster on one multi-tenant stack",
      "Staging on main and production on version tags through GitHub Actions",
    ],
    technologies: [
      "C#",
      ".NET 10",
      "React",
      "TypeScript",
      "PostgreSQL",
      "SignalR",
      "JWT",
      "Cloudflare",
      "GitHub Actions",
      "Terraform",
      "Docker",
      "REST APIs",
    ],
  },
  {
    id: 4,
    title: "Full-Stack Developer",
    company: "Asquii LLC",
    duration: "May 2021 – Sep 2023",
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
    duration: "Jan 2020 – Dec 2020",
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
