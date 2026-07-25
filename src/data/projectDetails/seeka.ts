import type { ProjectDetail } from "../../types/project";

export const seeka: ProjectDetail = {
  id: 2,
  slug: "seeka",
  name: "Seeka",
  subline: "Your Entire Opportunity Pipeline—Discover, Qualify, Win",
  category: "fullstack",
  status: "in-progress",
  flagship: true,
  technologies: ["TypeScript", "Node.js", "Express.js", "PostgreSQL", "Drizzle ORM", "OpenAI", "Next.js", "Zod", "Vercel"],
  keyFeatures: [
    { title: "Multi-Source Discovery Engine", description: "50+ platforms, one feed. Real-time ingestion normalizes jobs, gigs, and B2B leads so you stop refreshing LinkedIn tabs and start acting on ranked opportunities." },
    { title: "AI Qualification Scoring", description: "Every listing scored on skill match, comp alignment, competition density, and win probability—so effort goes to deals you can actually close." },
    { title: "Outreach Automation", description: "Multi-step sequences with follow-up cadences, open tracking, and personalization at scale. Feels human. Runs on autopilot." },
    { title: "Pipeline Analytics", description: "Conversion funnels, response rates, and velocity dashboards from discovery through close—the metrics that tell you what's working." },
  ],
  description: "Seeka is the opportunity pipeline OS for people who can't afford to waste time on bad leads. It ingests listings from 50+ job boards, freelance platforms, and B2B sources into one ranked feed, scores every opportunity with AI before you lift a finger, and orchestrates outreach sequences with guardrails—not spam. Multi-tenant from day one, built for solo seekers, freelancers, and agencies who need one source of truth from first discovery to closed deal.",
  problemStatement: {
    title: "Opportunity Pipelines Are Fragmented and Manual",
    description: "Top performers still run their pipeline across LinkedIn, spreadsheets, and inbox threads. Discovery, qualification, and outreach live in disconnected tools with zero shared context—and follow-ups die in the noise.",
    painPoints: [
      "Opportunities scattered across dozens of platforms with no unified view",
      "Manual qualification burns hours on low-fit listings",
      "Outreach follow-ups fall through the cracks without automation",
      "No single source of truth for pipeline health and conversion",
      "Teams can't collaborate on shared opportunity contexts",
    ],
  },
  solutionApproach: {
    title: "End-to-End Opportunity Automation",
    description: "Seeka replaces fragmented workflows with an AI-native pipeline OS—discover, qualify, outreach, and close in one platform with real-time scoring and automation.",
    principles: [
      { title: "Discovery at Scale", description: "Aggregate and normalize listings from 50+ sources into a ranked, filterable feed." },
      { title: "Qualification Before Effort", description: "AI scoring surfaces high-probability wins before time is spent on outreach." },
      { title: "Automation With Guardrails", description: "Template-driven sequences with human review gates and full audit trails." },
    ],
  },
  architecture: {
    title: "System Architecture",
    description: "Multi-tenant SaaS architecture with a TypeScript API core, AI scoring services, and real-time pipeline state management.",
    layers: [
      { name: "Web Application", tech: "Next.js + React", description: "Dashboard for discovery feeds, pipeline boards, analytics, and outreach management." },
      { name: "API & Auth Layer", tech: "Express.js 5 + JWT + CASL", description: "RESTful API with org/workspace tenancy and fine-grained authorization." },
      { name: "Discovery & Scoring", tech: "OpenAI + Custom Ranking Models", description: "Ingestion pipelines, normalization, and AI-assisted qualification scoring." },
      { name: "Data Layer", tech: "PostgreSQL (Neon) + Drizzle ORM", description: "Normalized schema for opportunities, pipelines, outreach events, and analytics." },
    ],
  },
  targetAudience: {
    primary: [
      { segment: "Job Seekers", need: "Automated discovery and application pipeline management" },
      { segment: "Freelancers", need: "Cross-platform gig qualification and rate optimization" },
      { segment: "Business Developers", need: "Lead generation, ICP matching, and deal flow tracking" },
    ],
    secondary: [
      { segment: "Recruiting Agencies", need: "Multi-tenant workspaces for client opportunity management" },
      { segment: "Career Coaches", need: "Shared pipeline visibility for client coaching" },
    ],
  },
  developmentPhases: [
    { phase: "Core Platform & Auth", duration: "4 weeks", status: "completed", description: "Multi-tenant backend, JWT auth, and workspace model." },
    { phase: "Discovery Engine", duration: "4 weeks", status: "completed", description: "Multi-source ingestion and unified opportunity feed." },
    { phase: "AI Qualification", duration: "3 weeks", status: "in-progress", description: "Fit scoring, win probability, and custom scoring rules." },
    { phase: "Outreach Automation", duration: "4 weeks", status: "planned", description: "Email sequences, follow-ups, and engagement tracking." },
    { phase: "Integrations Hub", duration: "3 weeks", status: "planned", description: "LinkedIn, Gmail, Slack, and CRM connector layer." },
  ],
  metrics: {
    title: "Success Metrics",
    kpis: [
      { metric: "Match Accuracy", target: "85%+", description: "AI qualification score correlation with user acceptance" },
      { metric: "Pipeline Velocity", target: "2x improvement", description: "Time from discovery to first outreach" },
      { metric: "Outreach Open Rate", target: "60%+", description: "Average open rate across automated sequences" },
      { metric: "Active Pipeline Value", target: "$250k+ avg", description: "Tracked opportunity value per active user" },
    ],
  },
  futureRoadmap: [
    { feature: "Team Workspaces", timeline: "Q3 2026", description: "Shared pipeline views and team analytics dashboards." },
    { feature: "Enterprise API", timeline: "Q4 2026", description: "Headless API access for agency and enterprise integrations." },
    { feature: "Predictive Win Scoring", timeline: "Q1 2027", description: "Models trained on historical close patterns." },
    { feature: "Mobile Pipeline", timeline: "Q2 2027", description: "On-the-go opportunity review and quick actions." },
  ],
  designDecisions: [
    { decision: "AI-First Qualification Layer", reasoning: "Scoring before outreach prevents wasted effort—the core differentiator vs. generic CRM tools." },
    { decision: "Multi-Tenant from Day One", reasoning: "Agencies and teams need isolated workspaces without separate deployments." },
    { decision: "Express.js API + Next.js Frontend", reasoning: "Decoupled API enables future mobile clients and third-party integrations." },
  ],
  securityConsiderations: [
    { area: "Authentication", implementation: "JWT with secure session handling and refresh rotation" },
    { area: "Tenant Isolation", implementation: "Org/workspace-scoped queries on all data access paths" },
    { area: "Authorization", implementation: "CASL-based abilities at middleware and service layers" },
    { area: "Input Validation", implementation: "Zod schemas on all API request bodies and params" },
  ],
  integrations: [
    { name: "OpenAI", purpose: "Qualification scoring and profile parsing", status: "integrated" },
    { name: "Neon", purpose: "Serverless PostgreSQL", status: "integrated" },
    { name: "LinkedIn", purpose: "Opportunity aggregation", status: "planned" },
    { name: "Gmail", purpose: "Outreach delivery and tracking", status: "planned" },
    { name: "Slack", purpose: "Pipeline notifications", status: "planned" },
  ],
  challengesAndLearning: {
    challenges: [
      "Normalizing heterogeneous listing formats from 50+ source platforms.",
      "Building qualification models that generalize across jobs, gigs, and B2B leads.",
      "Designing outreach automation that feels personal, not spammy.",
      "Scaling multi-tenant data isolation without query performance degradation.",
    ],
    learning: [
      "Architected multi-source ingestion pipelines with real-time feed UX.",
      "Productionized AI scoring workflows for opportunity qualification.",
      "Mastered multi-tenant SaaS patterns with CASL authorization.",
      "Built conversion analytics from discovery through close events.",
    ],
  },
  outcomes: "Seeka replaces the manual hustle of tab-hopping and spreadsheet CRMs with an AI-native pipeline that qualifies before you outreach and automates without losing the human touch. Built to be the one tool between you and your next win.",
  image: "/images/work-2.jpg",
  link: "https://www.seeka.tech/",
};
