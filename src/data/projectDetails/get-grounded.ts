import type { ProjectDetail } from "../../types/project";

export const getGrounded: ProjectDetail = {
  id: 4,
  slug: "get-grounded",
  name: "Get Grounded",
  subline: "Routines That Respect Your Income, Your Calendar, and Your Sanity",
  category: "mobile",
  status: "in-progress",
  technologies: ["React Native", "Expo", "TypeScript", "OpenAI", "Firebase", "PostgreSQL", "Tailwind CSS"],
  keyFeatures: [
    { title: "Income-Aware Goal Planning", description: "Set financial and personal goals grounded in what you actually earn—not aspirational budgets that collapse by Wednesday." },
    { title: "Schedule-Adaptive Routines", description: "AI rebuilds your day when meetings move, shifts change, or life happens. Momentum preserved, guilt removed." },
    { title: "Contextual Nudges", description: "Reminders timed to your real availability windows—not arbitrary alarms that ignore the rest of your day." },
    { title: "Progress Reconciliation", description: "Miss a block? The plan adjusts—compress, expand, or reprioritize based on what's still achievable. Recovery over reset." },
  ],
  description: "Get Grounded is the productivity app for people whose lives don't fit a 6 AM wake-up template. React Native mobile app that treats income and schedule as hard constraints, then uses AI to generate daily routines that adapt when your calendar shifts or you miss a block—intelligent replanning instead of streak-shaming. Built for side hustlers, shift workers, and anyone tired of habit apps that ignore financial reality.",
  problemStatement: {
    title: "Productivity Apps Ignore Real Life Constraints",
    description: "Most habit and planner apps assume unlimited time and ignore financial reality. Users abandon them when schedules shift or goals don't account for what they can actually afford and accomplish.",
    painPoints: [
      "Generic routines that break the moment your calendar changes",
      "No connection between financial goals and daily time allocation",
      "All-or-nothing streak mechanics that punish real-world flexibility",
      "Manual replanning after every missed session",
      "Apps optimized for motivation, not sustainable execution",
    ],
  },
  solutionApproach: {
    title: "Constraint-First Adaptive Planning",
    description: "Get Grounded treats income and schedule as hard constraints, then uses AI to generate and continuously adjust routines that remain achievable.",
    principles: [
      { title: "Budget Reality", description: "Financial goals inform what activities are feasible—not just what sounds aspirational." },
      { title: "Calendar Sync", description: "Routines flex with your actual availability, not a static 6 AM wake-up fantasy." },
      { title: "Graceful Recovery", description: "Missed blocks trigger intelligent replans instead of guilt-driven streak resets." },
    ],
  },
  architecture: {
    title: "System Architecture",
    description: "Mobile-first architecture with on-device UX, cloud sync, and an AI planning engine for dynamic schedule generation.",
    layers: [
      { name: "Mobile Client", tech: "React Native + Expo", description: "Cross-platform iOS/Android app with offline-first routine cache and push notifications." },
      { name: "Planning Engine", tech: "OpenAI + Constraint Solver", description: "AI-generated routines with income/time constraint validation and replanning logic." },
      { name: "Sync & Auth", tech: "Firebase + PostgreSQL", description: "User auth, real-time sync, and persistent goal/routine state." },
      { name: "Calendar Integration", tech: "Native Calendar APIs", description: "Read availability windows and write scheduled blocks back to device calendars." },
    ],
  },
  targetAudience: {
    primary: [
      { segment: "Side Hustlers", need: "Balance income goals with limited evening hours" },
      { segment: "Budget-Conscious Planners", need: "Routines that respect financial constraints" },
      { segment: "Shift Workers", need: "Adaptive schedules for irregular availability" },
    ],
    secondary: [
      { segment: "Students", need: "Study routines that flex around class schedules" },
      { segment: "New Graduates", need: "Structure during income and schedule transitions" },
    ],
  },
  developmentPhases: [
    { phase: "Mobile Shell & Auth", duration: "3 weeks", status: "completed", description: "Expo app scaffold, auth flow, and core navigation." },
    { phase: "Goal & Constraint Model", duration: "3 weeks", status: "completed", description: "Income/time input, goal definition, and constraint schema." },
    { phase: "AI Routine Generator", duration: "4 weeks", status: "in-progress", description: "OpenAI-powered schedule generation and replanning." },
    { phase: "Calendar Sync", duration: "2 weeks", status: "planned", description: "Native calendar read/write integration." },
    { phase: "Beta Launch", duration: "2 weeks", status: "planned", description: "TestFlight/Play Store beta with feedback loop." },
  ],
  metrics: {
    title: "Success Metrics",
    kpis: [
      { metric: "Routine Completion Rate", target: "70%+ weekly", description: "Scheduled blocks completed vs. planned" },
      { metric: "Replan Acceptance", target: "80%+", description: "Users accepting AI-suggested schedule adjustments" },
      { metric: "7-Day Retention", target: "50%+", description: "Users active one week after onboarding" },
      { metric: "Goal Progress Velocity", target: "Measurable weekly gains", description: "Tracked progress toward income/personal goals" },
    ],
  },
  futureRoadmap: [
    { feature: "Bank Account Sync", timeline: "Q4 2026", description: "Optional Plaid integration for live income tracking." },
    { feature: "Shared Accountability", timeline: "Q1 2027", description: "Partner/coach visibility into routine adherence." },
    { feature: "Wearable Integration", timeline: "Q2 2027", description: "Apple Watch / Wear OS quick actions and nudges." },
    { feature: "Public Launch", timeline: "Q3 2026", description: "App Store and Play Store general availability." },
  ],
  designDecisions: [
    { decision: "React Native + Expo", reasoning: "Single codebase for iOS/Android with fast iteration via OTA updates during beta." },
    { decision: "Constraint-First AI Prompts", reasoning: "Hard income/time bounds prevent generic motivational fluff from the model." },
    { decision: "Replan Over Streak", reasoning: "Adaptive recovery beats punitive streak mechanics for long-term adherence." },
  ],
  securityConsiderations: [
    { area: "Financial Data", implementation: "Optional sync only; no raw bank credentials stored locally" },
    { area: "Authentication", implementation: "Firebase Auth with secure token refresh" },
    { area: "Calendar Privacy", implementation: "Read-only availability windows; no event content persisted" },
    { area: "AI Data Handling", implementation: "Goal summaries sent to model; no PII in prompt logs" },
  ],
  integrations: [
    { name: "OpenAI", purpose: "Routine generation and replanning", status: "integrated" },
    { name: "Firebase", purpose: "Auth and real-time sync", status: "integrated" },
    { name: "Apple Calendar", purpose: "Availability detection", status: "planned" },
    { name: "Google Calendar", purpose: "Availability detection", status: "planned" },
    { name: "Plaid", purpose: "Optional income tracking", status: "planned" },
  ],
  challengesAndLearning: {
    challenges: [
      "Modeling income constraints as first-class inputs for AI planning.",
      "Building replanning logic that feels helpful, not punitive.",
      "Syncing calendar availability without over-scoping permissions.",
      "Designing mobile UX for complex constraint configuration simply.",
    ],
    learning: [
      "Shipped React Native apps with Expo's modern toolchain.",
      "Built constraint-aware LLM prompt pipelines for scheduling.",
      "Developed adaptive UX patterns for missed-goal recovery.",
      "Integrated native calendar APIs for availability-aware planning.",
    ],
  },
  outcomes: "Get Grounded redefines what a planning app should do: respect constraints, recover gracefully, and turn AI into a scheduling partner—not a motivational poster. Sustainable execution beats abandoned streak counters.",
  image: "/images/work-4.jpg",
  link: "https://get-grounded.app/",
};
