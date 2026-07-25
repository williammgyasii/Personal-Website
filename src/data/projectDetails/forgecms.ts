import type { ProjectDetail } from "../../types/project";

export const forgecms: ProjectDetail = {
  id: 6,
  slug: "forgecms",
  name: "ForgeCMS",
  subline: "AI-Assisted CMS for Modern Writers",
  category: "fullstack",
  status: "in-progress",
  technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "OpenAI", "PostgreSQL", "Prisma", "Redis", "Vercel"],
  keyFeatures: [
    { title: "Distraction-Free Editor", description: "Clean, minimal writing interface with real-time autosave, version history, and export to Markdown, HTML, and PDF." },
    { title: "AI Writing Assistant", description: "Grammar, tone analysis, SEO scoring, headline suggestions, and smart expansions—enhancing your voice, not replacing it." },
    { title: "Headless / API-First Publishing", description: "One-click publish, scheduled posts, custom domains, and API access for content anywhere." },
    { title: "Team Collaboration (Roadmap)", description: "Real-time co-editing, inline comments, suggestions mode, and editorial workflows." },
  ],
  description: "ForgeCMS is an AI-native content management system that combines WordPress ease with intelligent writing tools. Writers get grammar, tone, and SEO assistance in a distraction-free editor—with headless API publishing, version history, and freemium pricing from $0 to agency tiers.",
  problemStatement: {
    title: "Writers Shouldn't Choose Between Simplicity, Features, and Price",
    description: "WordPress means plugin hell. Ghost is expensive with limited collaboration. Substack takes 10%. Grammarly is just grammar in a separate tool. No existing CMS embeds AI assistance natively across the full writing lifecycle.",
    painPoints: [
      "Plugin-dependent CMS platforms with security and maintenance overhead",
      "AI writing tools disconnected from publishing workflows",
      "Expensive platforms that gate collaboration behind high tiers",
      "Platform fees eating into creator revenue",
      "No unified grammar, tone, SEO, and publishing stack",
    ],
  },
  solutionApproach: {
    title: "AI-Native CMS Without the Compromises",
    description: "ForgeCMS embeds AI at every stage—from drafting through SEO optimization to publish—while keeping writers in control of their voice and content ownership.",
    principles: [
      { title: "AI Assists, You Write", description: "Suggestions are reviewable and optional; the writer always owns the final word." },
      { title: "No Plugin Tax", description: "Editor, AI tools, SEO scoring, and publishing built-in from day one." },
      { title: "API-First Content", description: "Headless architecture lets content live anywhere—blog, app, or third-party channel." },
    ],
  },
  architecture: {
    title: "System Architecture",
    description: "Modern SaaS architecture with streaming AI interactions, relational content modeling, and edge-deployed publishing.",
    layers: [
      { name: "Presentation Layer", tech: "Next.js + React Server Components", description: "SSR for SEO; client components for interactive editing and AI sidebar." },
      { name: "AI Processing Layer", tech: "OpenAI + Custom Prompt Pipelines", description: "Streaming grammar/tone/SEO analysis with context-aware caching." },
      { name: "Data Layer", tech: "PostgreSQL + Prisma ORM", description: "Relational model for posts, workspaces, version history, and team permissions." },
      { name: "Caching Layer", tech: "Redis", description: "Session state, AI response caching, and collaboration sync." },
    ],
  },
  targetAudience: {
    primary: [
      { segment: "Bloggers & Creators", need: "Distraction-free writing with AI polish" },
      { segment: "Content Marketers", need: "SEO-optimized publishing at scale" },
      { segment: "Technical Writers", need: "Version history and Markdown export" },
    ],
    secondary: [
      { segment: "Marketing Agencies", need: "Multi-workspace client management" },
      { segment: "Startups", need: "Headless CMS without enterprise pricing" },
    ],
  },
  developmentPhases: [
    { phase: "Core Editor & CMS", duration: "6 weeks", status: "completed", description: "Editor, autosave, version history, and auth." },
    { phase: "AI Writing Tools", duration: "4 weeks", status: "completed", description: "Grammar, tone, SEO scoring, and suggestions." },
    { phase: "Publishing & Domains", duration: "3 weeks", status: "completed", description: "One-click publish, scheduling, custom domains." },
    { phase: "Team Collaboration", duration: "4 weeks", status: "in-progress", description: "Co-editing, comments, and workflow roles." },
    { phase: "Agency Tier", duration: "2 weeks", status: "planned", description: "White-label, unlimited workspaces, dedicated support." },
  ],
  metrics: {
    title: "Success Metrics",
    kpis: [
      { metric: "Time to First Draft", target: "50% reduction", description: "Idea to complete first draft" },
      { metric: "SEO Score Average", target: "85+/100", description: "AI-scored content quality" },
      { metric: "User Retention", target: "70% monthly active", description: "Regular publishing cadence" },
      { metric: "AI Acceptance Rate", target: "60%+", description: "Suggestions accepted by writers" },
    ],
  },
  futureRoadmap: [
    { feature: "Real-time Co-editing", timeline: "Q3 2026", description: "Google Docs-style collaborative writing." },
    { feature: "Multi-channel Publishing", timeline: "Q4 2026", description: "One-click to Medium, Dev.to, LinkedIn." },
    { feature: "Content Analytics", timeline: "Q1 2027", description: "Performance tracking with AI optimization tips." },
    { feature: "Custom AI Voice Training", timeline: "Q2 2027", description: "Train on brand guidelines and style." },
  ],
  designDecisions: [
    { decision: "Block-Based Editor", reasoning: "Structured blocks enable AI to understand and manipulate content contextually." },
    { decision: "Streaming AI Responses", reasoning: "Immediate feedback reduces perceived latency during generation." },
    { decision: "PostgreSQL + JSONB", reasoning: "Relational queries for content relationships with JSON flexibility where needed." },
  ],
  securityConsiderations: [
    { area: "Authentication", implementation: "OAuth providers with optional 2FA" },
    { area: "Data Encryption", implementation: "AES-256 at rest, TLS 1.3 in transit" },
    { area: "API Security", implementation: "Rate limiting and API key rotation" },
    { area: "Content Privacy", implementation: "User content never used for AI training; GDPR compliant" },
  ],
  integrations: [
    { name: "OpenAI", purpose: "Grammar, tone, SEO, and content generation", status: "integrated" },
    { name: "Vercel", purpose: "Hosting and edge functions", status: "integrated" },
    { name: "Cloudinary", purpose: "Image optimization", status: "integrated" },
    { name: "Stripe", purpose: "Subscription billing", status: "planned" },
    { name: "Resend", purpose: "Transactional emails", status: "planned" },
  ],
  challengesAndLearning: {
    challenges: [
      "Integrating AI without disrupting creative flow.",
      "Building flexible content structures for varied formats.",
      "Optimizing AI response times for real-time assistance.",
      "Managing token limits across long documents.",
    ],
    learning: [
      "Mastered OpenAI integration and prompt engineering for writing.",
      "Built rich text editors with version history and export.",
      "Balanced AI automation with writer control for quality.",
      "Implemented streaming patterns for real-time AI responses.",
    ],
  },
  outcomes: "Building an AI-native CMS that cuts editing time in half while preserving writer voice—WordPress simplicity without plugin hell, Ghost pricing without the premium tax.",
  image: "/images/work-6.jpg",
  link: "https://www.forgecms.io/",
};
