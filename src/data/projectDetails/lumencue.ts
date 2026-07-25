import type { ProjectDetail } from "../../types/project";

export const lumencue: ProjectDetail = {
  id: 1,
  slug: "lumencue",
  name: "LumenCue",
  subline: "Broadcast-Grade Worship Ops Without the Enterprise Price Tag",
  category: "fullstack",
  status: "in-progress",
  flagship: true,
  technologies: [".NET", "AWS", "OpenAI", "Docker", "TypeScript", "React"],
  keyFeatures: [
    {
      title: "Intelligent Cue Orchestration",
      description:
        "One control surface for lyrics, slides, lighting, and stage transitions—AI suggests sequences, operators stay in control. Built for Sunday morning, not Sunday morning rehearsals.",
    },
    {
      title: "Lightweight Desktop Distribution",
      description:
        "Ships like a consumer app, runs like production software. Semver-gated auto-updates via GitHub Releases—volunteer church IT never touches a manual installer again.",
    },
    {
      title: "Multi-Campus Church Topology",
      description:
        "One church, five campuses, zero cue drift. Org-scoped tenancy with shared templates so every location runs the same quality service without duplicate prep work.",
    },
    {
      title: "AWS-Native Reliability Layer",
      description:
        "AWS S3, CloudFront, and serverless APIs handle media delivery and config sync—encrypted, least-privilege, and observable. Church data stays church data.",
    },
  ],
  description:
    "LumenCue replaces the duct-taped stack of ProPresenter, lighting consoles, and volunteer spreadsheets with a single worship control plane. Built on .NET for sub-second cue latency and AWS for reliable asset sync, it gives production teams broadcast-grade orchestration without the six-figure price tag. AI assists with sequencing and run-of-show planning—always reviewable, never a black box. Already shipping via automated release channels (v0.7.x) to real church operators.",
  problemStatement: {
    title: "Church AV Stacks Are Overbuilt and Under-Integrated",
    description:
      "Churches spend thousands on AV gear, then run services on volunteer labor and prayer. Presentation software doesn't talk to lighting. Lighting doesn't talk to stage. Multi-campus teams prep the same service six different ways. When the cue misfires on Sunday, everyone notices.",
    painPoints: [
      "Fragmented cue management across presentation, lighting, and stage teams",
      "High cognitive load for volunteer operators during live services",
      "No standardized release/update pipeline for distributed church clients",
      "Limited AI assistance for sequencing, transitions, and service planning",
      "Expensive proprietary systems that don't scale across campuses",
    ],
  },
  solutionApproach: {
    title: "Unified Worship Control Plane",
    description:
      "LumenCue consolidates cue orchestration, media governance, and operator UX into a single .NET + AWS platform with AI-assisted planning and a production-grade desktop distribution model.",
    principles: [
      {
        title: "Operator-First Latency Budgets",
        description:
          "Sub-second cue commits and predictable UI feedback for live service environments.",
      },
      {
        title: "Secure Release Engineering",
        description:
          "Public release binaries with versioned artifacts, automated update checks, and private source maintenance.",
      },
      {
        title: "AI as a Copilot, Not a Black Box",
        description:
          "Suggestions for sequencing and transitions remain reviewable and overrideable by human operators.",
      },
    ],
  },
  architecture: {
    title: "System Architecture",
    description:
      "Desktop-first architecture with a .NET core, AWS-managed services, and an AI inference layer for worship workflow assistance.",
    layers: [
      {
        name: "Client Runtime",
        tech: ".NET Desktop + Auto-Update Channel",
        description:
          "Native client with offline-capable cue cache, signed update manifests, and semver-controlled rollout.",
      },
      {
        name: "Cloud Control Plane",
        tech: "AWS (S3, CloudFront, Lambda/API Gateway)",
        description:
          "Asset distribution, tenant configuration sync, telemetry ingestion, and secure API endpoints.",
      },
      {
        name: "AI Services Layer",
        tech: "OpenAI + Domain Prompt Pipelines",
        description:
          "Structured prompts for cue suggestions, service templates, and operator assist workflows.",
      },
      {
        name: "Release & Observability",
        tech: "CI/CD + GitHub Releases",
        description:
          "Automated build pipelines, artifact publishing, and production health signals.",
      },
    ],
  },
  targetAudience: {
    primary: [
      { segment: "Worship & Production Teams", need: "Reliable cue control during high-stakes live services" },
      { segment: "Multi-Campus Churches", need: "Standardized workflows with campus-level isolation" },
      { segment: "Technical Volunteers", need: "Lower training overhead without sacrificing capability" },
    ],
    secondary: [
      { segment: "Church Plant Networks", need: "Repeatable AV stack across new locations" },
      { segment: "Broadcast Ministries", need: "Tighter integration between stage and stream cues" },
    ],
  },
  developmentPhases: [
    { phase: "Core Desktop Runtime", duration: "6 weeks", status: "completed", description: "Cue engine, local state management, and operator UI shell." },
    { phase: "AWS Sync & Asset Pipeline", duration: "4 weeks", status: "completed", description: "Cloud-backed media sync, tenant config, and CDN delivery." },
    { phase: "Auto-Update Distribution", duration: "3 weeks", status: "completed", description: "Public release channel with semver artifacts (v0.7.x)." },
    { phase: "AI Cue Assistance", duration: "4 weeks", status: "in-progress", description: "Prompt pipelines for sequencing and service planning." },
    { phase: "Multi-Campus Admin", duration: "3 weeks", status: "planned", description: "Org hierarchy, role matrix, and template inheritance." },
  ],
  metrics: {
    title: "Success Metrics",
    kpis: [
      { metric: "Cue Commit Latency", target: "< 100ms P95", description: "Operator action to on-screen cue state" },
      { metric: "Update Adoption", target: "90%+ within 14 days", description: "Clients on latest stable release channel" },
      { metric: "Service Prep Time", target: "40% reduction", description: "Time to finalize a multi-segment worship run-of-show" },
      { metric: "Operator Error Rate", target: "< 2% per service", description: "Missed or out-of-order cues during live execution" },
    ],
  },
  futureRoadmap: [
    { feature: "Marketing Site Launch", timeline: "Q3 2026", description: "Public product site at lumencueapp.com with trial onboarding." },
    { feature: "Streaming Integrations", timeline: "Q4 2026", description: "OBS/ProPresenter bridge adapters and NDI-aware triggers." },
    { feature: "Team Permissions Matrix", timeline: "Q1 2027", description: "Fine-grained RBAC for operators, producers, and admins." },
    { feature: "Predictive Run-of-Show", timeline: "Q2 2027", description: "ML-assisted timing predictions from historical service data." },
  ],
  designDecisions: [
    { decision: ".NET Desktop Core", reasoning: "Native performance and deterministic latency for live AV operators, with mature deployment tooling for church IT environments." },
    { decision: "AWS-Managed Distribution", reasoning: "Durable object storage, CDN edge delivery, and serverless APIs reduce ops burden for a lean product team." },
    { decision: "Public Releases, Private Source", reasoning: "Ship installers and auto-updates openly while protecting proprietary worship workflow IP in a private repository." },
  ],
  securityConsiderations: [
    { area: "Update Integrity", implementation: "Signed release manifests and checksum-verified installers" },
    { area: "Cloud Access", implementation: "Least-privilege IAM roles per service boundary" },
    { area: "Tenant Isolation", implementation: "Org-scoped data partitions for multi-campus deployments" },
    { area: "Telemetry Privacy", implementation: "Aggregated operational metrics without raw sermon content" },
  ],
  integrations: [
    { name: "GitHub Releases", purpose: "Public installer distribution and auto-update feed", status: "integrated" },
    { name: "AWS S3 + CloudFront", purpose: "Media asset storage and edge delivery", status: "integrated" },
    { name: "OpenAI", purpose: "Cue assistance and service planning copilots", status: "in-progress" },
    { name: "ProPresenter", purpose: "Presentation layer interoperability", status: "planned" },
  ],
  challengesAndLearning: {
    challenges: [
      "Designing sub-second cue commits on volunteer-grade hardware.",
      "Building a trustworthy auto-update pipeline for non-technical church IT.",
      "Modeling multi-campus org hierarchies without over-complicating UX.",
      "Balancing AI suggestions with operator control during live services.",
    ],
    learning: [
      "Shipped production desktop release engineering with semver auto-updates.",
      "Architected AWS-backed sync for distributed church deployments.",
      "Deepened expertise in live-event UX and operator cognitive load reduction.",
      "Integrated LLM workflows into real-time, high-stakes operational software.",
    ],
  },
  outcomes:
    "LumenCue proves that a lean engineering team can deliver enterprise-grade worship operations at a fraction of legacy AV cost—native desktop performance, AWS reliability, and AI assistance that respects the operator. Not a concept. Shipping now.",
  image: "/images/work-1.jpg",
  link: "https://github.com/williammgyasii/lumencue-releases",
};
