import type { ProjectDetail } from "../../types/project";

const shot = (name: string) => `/images/projects/kairos-payhub/${name}.png`;

export const kairosPayhub: ProjectDetail = {
  id: 7,
  slug: "kairos-payhub",
  name: "KairosPayHub",
  subline: "Church Giving, Attendance, and Roster — One Structure-Aware Platform",
  category: "fullstack",
  status: "live",
  flagship: true,
  technologies: [
    "React",
    "TypeScript",
    ".NET 10",
    "PostgreSQL",
    "SignalR",
    "Cloudflare",
    "TanStack Table",
    "Redux Toolkit",
  ],
  keyFeatures: [
    {
      title: "Structure-Aware Giving",
      description:
        "Campaigns and nested sub-givings scoped to the church’s real hierarchy. Batch contribution logging, pastor and leader approval queues, and filterable member rankings that refresh when approvals change.",
    },
    {
      title: "One-Hop Attendance",
      description:
        "Meeting types with timezone windows, a submission layer that matches the structure template, and a mark-attendance wizard. Cell submits, fellowship approves — pastors use metrics instead of a bottleneck queue.",
    },
    {
      title: "Configurable Roster Hierarchy",
      description:
        "Church structure templates, unit leadership, and dual-hatted leaders who pick which unit they are acting for. Ability-based UI gating so each role sees the right surface.",
    },
    {
      title: "Same-Origin Production Gateway",
      description:
        "One hostname serves the SPA and proxies /api, /auth, and /hubs to the .NET container. Merge to main ships staging; version tags ship production.",
    },
  ],
  description:
    "KairosPayHub is a multi-tenant church management platform for giving, attendance, and organizational structure — built end to end from OpenSpec proposals through production on Cloudflare. Role-scoped access means pastors, mid-level leaders, and cell leaders each see the right surface, not a one-size-fits-all admin panel.",
  problemStatement: {
    title: "Church Ops Are Split Across Spreadsheets and Generic Tools",
    description:
      "Giving, attendance, and roster live in disconnected sheets and apps that ignore how a church is actually organized. Leaders either over-share data or become a bottleneck approving every cell’s work.",
    painPoints: [
      "Giving and attendance do not follow the church’s real PFCC → fellowship → cell hierarchy",
      "Pastors become an approval bottleneck instead of reading metrics",
      "Roll-call sheets assume a hard-coded cell-only model",
      "Role-scoped leaders see the same admin panel as everyone else",
      "No clear path from spec to staging to production for a lean team",
    ],
  },
  solutionApproach: {
    title: "Structure First, Then Workflows",
    description:
      "Attendance and giving follow the church’s template layers. Access is ability-based and role-scoped. Delivery is spec-driven: OpenSpec WHEN/THEN scenarios, tests for non-trivial behavior, and a promotion path from main to version tags.",
    principles: [
      {
        title: "Structure-Aware Domain",
        description:
          "Submission layers, campaign scopes, and unit rollups come from the church template — not hard-coded cell-only assumptions.",
      },
      {
        title: "One-Hop Approval",
        description:
          "The parent unit leader approves. Pastors watch Who showed up, By unit, and Yet to submit instead of sitting in every queue.",
      },
      {
        title: "Spec-Driven Delivery",
        description:
          "OpenSpec proposals, TDD for behavior, GitHub Actions CI, staging on main, production on v* tags.",
      },
    ],
  },
  architecture: {
    title: "System Architecture",
    description:
      "React SPA and .NET 10 API behind a same-origin Cloudflare Workers gateway, with Neon Postgres, SignalR realtime, and JWT church-scoped tenancy.",
    layers: [
      {
        name: "Frontend",
        tech: "React · Vite · TypeScript · RTK Query · TanStack Table",
        description:
          "Role-scoped dashboards for campaigns, roll call, metrics, and roster. Tables are filterable and column-toggled; approvals refresh in realtime.",
      },
      {
        name: "API & Domain",
        tech: ".NET 10 · EF Core · SignalR · JWT",
        description:
          "Church-scoped multi-tenancy, structure-aware giving and attendance services, and hubs for live approval updates.",
      },
      {
        name: "Data",
        tech: "PostgreSQL (Neon)",
        description:
          "Church, structure, membership, campaigns, contributions, and attendance occurrences with layer-aware scopes.",
      },
      {
        name: "Edge & Delivery",
        tech: "Cloudflare Workers · Containers · Pages · R2 · GitHub Actions",
        description:
          "One hostname proxies /api, /auth, and /hubs to the container and serves the SPA. Staging on push to main; production on version tags.",
      },
    ],
  },
  targetAudience: {
    primary: [
      { segment: "Pastors", need: "Church-wide metrics without sitting in every approval queue" },
      { segment: "Fellowship and PFCC leaders", need: "One-hop review of the units they actually lead" },
      { segment: "Cell leaders", need: "A roll-call sheet that matches how their meeting is structured" },
    ],
    secondary: [
      { segment: "Church administrators", need: "Campaigns, roster, and branding without a generic CRM" },
      { segment: "Multi-site church plants", need: "A template they can reuse instead of rebuilding hierarchy" },
    ],
  },
  developmentPhases: [
    {
      phase: "Domain & tenancy",
      duration: "Shipped",
      status: "completed",
      description: "Church-scoped auth, structure templates, and roster leadership.",
    },
    {
      phase: "Giving workflows",
      duration: "Shipped",
      status: "completed",
      description: "Campaigns, batch entry, approval queues, and member/campaign analytics tables.",
    },
    {
      phase: "Attendance",
      duration: "Shipped",
      status: "completed",
      description: "Meeting windows, submission layers, mark-attendance wizard, one-hop approval, and metrics tabs.",
    },
    {
      phase: "Cloudflare production path",
      duration: "Shipped",
      status: "completed",
      description: "Same-origin gateway, staging on main, production on v* tags.",
    },
  ],
  metrics: {
    title: "What success looks like",
    kpis: [
      { metric: "Role-scoped surfaces", target: "Pastors vs leaders vs cells", description: "Each role sees the work they own, not a shared admin dump" },
      { metric: "Approval hop", target: "One parent unit", description: "No pastor bottleneck on every cell submission" },
      { metric: "Promotion path", target: "main → staging, tag → prod", description: "Predictable deploys without a separate ops team" },
      { metric: "Structure fidelity", target: "Template-driven layers", description: "Giving and attendance follow the church’s real hierarchy" },
    ],
  },
  futureRoadmap: [
    { feature: "Broader church onboarding", timeline: "Ongoing", description: "More churches on the same template-driven model." },
    { feature: "Deeper giving analytics", timeline: "Next", description: "Richer campaign and member views on top of the existing tables." },
    { feature: "Attendance history", timeline: "Next", description: "Longer occurrence trends without changing the one-hop model." },
  ],
  designDecisions: [
    {
      decision: "Structure template as the source of truth",
      reasoning:
        "Hard-coding cell-only attendance would break churches whose meetings start at fellowship or another layer.",
    },
    {
      decision: "Same-origin Cloudflare gateway",
      reasoning:
        "One hostname avoids CORS and cookie issues between the SPA, API, and SignalR hubs.",
    },
    {
      decision: "OpenSpec + TDD for behavior",
      reasoning:
        "Giving approvals and attendance hops are easy to get wrong. Specs and tests keep the domain honest.",
    },
  ],
  securityConsiderations: [
    { area: "Tenancy", implementation: "JWT and church-scoped data access on every API path" },
    { area: "Authorization", implementation: "Abilities alongside roles so dual-hatted leaders only act in the unit they picked" },
    { area: "Edge", implementation: "Workers gateway terminates public traffic; container is not exposed directly" },
  ],
  integrations: [
    { name: "Cloudflare Workers + Pages", purpose: "Gateway, SPA hosting, and production DNS", status: "integrated" },
    { name: "Neon Postgres", purpose: "Primary application database", status: "integrated" },
    { name: "SignalR", purpose: "Realtime refresh when giving approvals change", status: "integrated" },
    { name: "GitHub Actions", purpose: "CI, staging on main, production on version tags", status: "integrated" },
  ],
  challengesAndLearning: {
    challenges: [
      "Modeling attendance so roll-call sheets match each church’s submission layer.",
      "Keeping pastors out of a bottleneck queue without hiding pending work.",
      "Shipping a .NET API and React SPA behind one Cloudflare hostname.",
    ],
    learning: [
      "Structure-aware domains beat hard-coded org charts.",
      "Spec-driven delivery (OpenSpec + TDD) holds up once giving and attendance interact.",
      "Same-origin edge gateways simplify auth and realtime for a small team.",
    ],
  },
  outcomes:
    "Live at app.kairospayhub.com with staging on push to main. Sole builder from product design and OpenSpec through API, frontend, tests, Cloudflare, and release tagging.",
  image: shot("dashboard"),
  gallery: [
    { src: shot("givings"), alt: "Campaigns with approved totals and church-wide scopes" },
    { src: shot("attendance"), alt: "Attendance metrics by meeting type and submission layer" },
    { src: shot("roster"), alt: "Roster units across fellowship and cell layers" },
    { src: shot("givings-overall"), alt: "Overall givings rankings and campaign analytics" },
  ],
  link: "https://app.kairospayhub.com",
};
