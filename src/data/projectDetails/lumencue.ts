import type { ProjectDetail } from "../../types/project";

export const lumencue: ProjectDetail = {
  id: 1,
  slug: "lumencue",
  name: "LumenCue",
  subline: "AI Worship Operations Platform for Modern Churches",
  category: "fullstack",
  status: "in-progress",
  flagship: true,
  technologies: [".NET", "AWS", "OpenAI", "Docker", "TypeScript", "React"],
  keyFeatures: [
    {
      title: "Intelligent Cue Orchestration",
      description:
        "Event-driven worship cue workflows with AI-assisted sequencing for lyrics, slides, lighting, and stage transitions across multi-service schedules.",
    },
    {
      title: "Lightweight Desktop Distribution",
      description:
        "Cross-platform desktop client with a hardened auto-update channel, semver-gated releases, and delta-friendly installer delivery.",
    },
    {
      title: "Multi-Campus Church Topology",
      description:
        "Org-scoped tenancy for campuses, ministries, and operator roles with isolated media libraries and shared template inheritance.",
    },
    {
      title: "AWS-Native Reliability Layer",
      description:
        "Cloud-backed sync, asset delivery, and observability with least-privilege IAM, encrypted object storage, and CI-driven release automation.",
    },
  ],
  description:
    "LumenCue is an AI-assisted worship operations platform engineered for churches that need broadcast-grade reliability without enterprise AV complexity. Built on a .NET application core with AWS-backed infrastructure, it orchestrates service cues, media assets, and operator workflows through a lightweight desktop client distributed via a secure public release channel with automated updates.",
  problemStatement: {
    title: "Church AV Stacks Are Overbuilt and Under-Integrated",
    description:
      "Most houses of worship stitch together presentation software, lighting consoles, and volunteer-run spreadsheets. Operators burn prep time reconciling cues across tools, and multi-campus teams lack a unified, low-latency control plane.",
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
    "Delivering a production-grade worship operations platform that replaces duct-taped AV workflows with a unified, AI-assisted control plane—distributed securely via automated release channels.",
  image: "/images/work-1.jpg",
  link: "https://github.com/williammgyasii/lumencue-releases",
};
