import type { ProjectDetail } from "../../types/project";

export const lawprepAi: ProjectDetail = {
  id: 3,
  slug: "lawprep-ai",
  name: "LawPrep AI",
  subline: "Master the LSAT with AI-Powered Prep",
  category: "fullstack",
  status: "in-progress",
  technologies: ["Next.js", "React", "TypeScript", "PostgreSQL", "Drizzle ORM", "OpenAI", "Stripe", "Tailwind CSS", "Vercel"],
  keyFeatures: [
    { title: "Official PrepTest Practice", description: "10,000+ questions from 80+ official PrepTests across Logical Reasoning, Reading Comprehension, and Analytical Reasoning with timed sessions." },
    { title: "AI Study Assistant", description: "Upload study materials and chat with AI for explanations, summaries, flashcards, and quizzes generated from your own content." },
    { title: "LSAT Writing Simulator", description: "Practice the LSAT Writing section with official timing—15 minutes prewriting, 35 minutes essay." },
    { title: "Freemium SaaS Tiers", description: "Starter (free), Pro ($19/mo), and Premium ($39/mo) with Stripe-backed feature gating across practice, AI, and upload limits." },
  ],
  description: "LawPrep AI is a full-stack LSAT preparation platform combining official PrepTest practice, structured study modules, an AI assistant trained on user materials, and a writing simulator—all in one subscription SaaS. Built on Next.js with serverless PostgreSQL, it delivers adaptive prep at a fraction of traditional course costs.",
  problemStatement: {
    title: "LSAT Prep is Expensive, Fragmented, and One-Size-Fits-All",
    description: "Premium prep courses cost $1,000+ and follow rigid curricula. Free resources are scattered across dozens of sites. None adapt to individual weaknesses or turn personal materials into interactive practice.",
    painPoints: [
      "Premium courses cost $1,000–$3,000+ and aren't accessible to everyone",
      "Static study plans don't adapt to individual strengths and weaknesses",
      "No unified platform for practice, writing, and AI-assisted study",
      "Students can't identify weak areas without expensive diagnostics",
      "Writing practice lacks structured prompts and official timing",
    ],
  },
  solutionApproach: {
    title: "One Platform. Real Questions. AI That Learns With You.",
    description: "LawPrep AI consolidates official practice, AI study tools, writing simulation, and progress analytics into a single adaptive prep stack.",
    principles: [
      { title: "Official Content First", description: "Real PrepTest questions—not synthetic approximations—for authentic test conditions." },
      { title: "AI Over Your Materials", description: "Upload documents and URLs; AI generates summaries, flashcards, and quizzes from your content." },
      { title: "Accessible Entry Point", description: "Free Starter tier with genuine value; upgrade only when limits are hit." },
    ],
  },
  architecture: {
    title: "System Architecture",
    description: "Modern full-stack SaaS on Next.js App Router with serverless infrastructure and tiered feature gating.",
    layers: [
      { name: "Application Layer", tech: "Next.js App Router + React", description: "Server components for content pages; client components for timed practice and AI chat." },
      { name: "AI Processing Layer", tech: "OpenAI GPT-4o-mini", description: "Document analysis, flashcard generation, quiz creation, and study plan synthesis." },
      { name: "Data Layer", tech: "Neon PostgreSQL + Drizzle ORM", description: "15+ tables for users, questions, sessions, progress, documents, and subscriptions." },
      { name: "Auth & Billing", tech: "NextAuth v5 + Stripe", description: "Credentials auth with tiered subscription enforcement across all features." },
    ],
  },
  targetAudience: {
    primary: [
      { segment: "Law School Applicants", need: "Affordable, effective LSAT prep that adapts to weaknesses" },
      { segment: "Pre-Law Students", need: "Early preparation with official question banks" },
      { segment: "Career Changers", need: "Flexible study tools around work schedules" },
    ],
    secondary: [
      { segment: "LSAT Tutors", need: "Structured tools to supplement coaching" },
      { segment: "Study Groups", need: "Shared materials and progress tracking" },
    ],
  },
  developmentPhases: [
    { phase: "Core Platform", duration: "4 weeks", status: "completed", description: "Auth, schema, dashboard, question engine." },
    { phase: "Practice Modules", duration: "3 weeks", status: "completed", description: "Timed sessions and answer tracking." },
    { phase: "AI Learning Hub", duration: "3 weeks", status: "completed", description: "Document upload, AI summaries, flashcards, chat." },
    { phase: "Writing Simulator", duration: "2 weeks", status: "completed", description: "Official LSAT Writing timing and prompts." },
    { phase: "Stripe Billing", duration: "2 weeks", status: "in-progress", description: "Subscription tiers and feature gating." },
  ],
  metrics: {
    title: "Success Metrics",
    kpis: [
      { metric: "Practice Accuracy Improvement", target: "20%+ over 30 days", description: "Score improvement across sessions" },
      { metric: "AI Feature Engagement", target: "60%+ weekly", description: "Active Learning Hub usage" },
      { metric: "Free-to-Pro Conversion", target: "8%+", description: "Starter users upgrading to paid" },
      { metric: "Session Completion Rate", target: "85%+", description: "Timed sessions finished without abandonment" },
    ],
  },
  futureRoadmap: [
    { feature: "Performance Analytics", timeline: "Q2 2026", description: "Deep score trends and study pattern insights." },
    { feature: "Mobile App", timeline: "Q3 2026", description: "Native mobile for on-the-go practice." },
    { feature: "Expanded Exam Coverage", timeline: "Q4 2026", description: "Bar exam and 1L finals modules." },
    { feature: "Study Group Features", timeline: "Q1 2027", description: "Shared progress and group challenges." },
  ],
  designDecisions: [
    { decision: "Next.js App Router", reasoning: "Server components for SEO; client components for interactive practice." },
    { decision: "Drizzle ORM", reasoning: "Type-safe SQL-like API for 15+ table schema with complex relations." },
    { decision: "Tiered Feature Gating", reasoning: "Limits—not paywalls—let free users experience real value before upgrading." },
  ],
  securityConsiderations: [
    { area: "Authentication", implementation: "NextAuth v5 with secure session handling" },
    { area: "Data Privacy", implementation: "Uploaded materials isolated per user" },
    { area: "API Protection", implementation: "Rate limiting on AI endpoints tied to tier limits" },
    { area: "Input Validation", implementation: "Server-side validation on uploads and forms" },
  ],
  integrations: [
    { name: "OpenAI", purpose: "Summaries, flashcards, quizzes, chat", status: "integrated" },
    { name: "Neon", purpose: "Serverless PostgreSQL", status: "integrated" },
    { name: "Stripe", purpose: "Subscription billing", status: "in-progress" },
    { name: "Vercel", purpose: "Hosting and edge deployment", status: "integrated" },
  ],
  challengesAndLearning: {
    challenges: [
      "Building reliable AI pipelines for varied document formats.",
      "Designing subscription gating that preserves free-tier value.",
      "Modeling 15+ tables for questions, sessions, and progress.",
      "Pivoting from personal tool to multi-user SaaS with data isolation.",
    ],
    learning: [
      "Mastered Next.js App Router with server actions and streaming.",
      "Built production AI workflows for educational content generation.",
      "Developed SaaS subscription modeling and tiered feature gating.",
      "Architected complex Drizzle schemas with indexes and relations.",
    ],
  },
  outcomes: "Building an accessible, AI-powered LSAT prep platform with official questions, adaptive study tools, and freemium pricing—making serious test prep available at every budget.",
  image: "/images/work-3.jpg",
  link: "https://www.lawprep.io/",
};
