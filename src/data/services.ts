export type ServiceAccent = "violet" | "sky" | "amber" | "rose";
export type ServiceIconName = "layers" | "sparkles" | "mobile" | "grid";

export interface Service {
  id: string;
  title: string;
  description: string;
  items: string[];
  image: string;
  icon: ServiceIconName;
  accent: ServiceAccent;
}

export const services: Service[] = [
  {
    id: "fullstack",
    title: "Full stack engineering",
    description:
      "I do not hand off at the API boundary. React and Next.js frontends, Node.js or .NET backends, PostgreSQL schemas, and CI/CD pipelines. One engineer, one coherent product, zero integration gaps.",
    items: [
      "Next.js & React SPAs",
      "REST & tRPC APIs",
      "Database design & migrations",
      "AWS / Vercel deployment",
    ],
    image: "/images/work-2.jpg",
    icon: "layers",
    accent: "sky",
  },
  {
    id: "ai",
    title: "AI systems integration",
    description:
      "LLM pipelines that ship in production, not slide decks. Document processing, qualification scoring, RAG workflows, and prompt pipelines embedded into real products with rate limits, cost controls, and human review gates.",
    items: [
      "OpenAI & LLM APIs",
      "Prompt engineering & evals",
      "AI scoring & ranking",
      "Document & chat AI",
    ],
    image: "/images/work-1.jpg",
    icon: "sparkles",
    accent: "violet",
  },
  {
    id: "mobile",
    title: "Mobile development",
    description:
      "Cross platform apps that feel native. React Native and Expo with calendar sync, push notifications, offline first caching, and App Store ready release engineering, not a web view in a wrapper.",
    items: [
      "React Native & Expo",
      "Native calendar & push",
      "Offline first patterns",
      "TestFlight & Play Store beta",
    ],
    image: "/images/work-4.jpg",
    icon: "mobile",
    accent: "amber",
  },
  {
    id: "saas",
    title: "SaaS & product architecture",
    description:
      "Multi tenant from day one. Stripe billing, role based access, org and workspace isolation, and marketplace dynamics, architected so your MVP does not become a rewrite at 1,000 users.",
    items: [
      "Stripe subscriptions",
      "Multi tenant data models",
      "RBAC / CASL authorization",
      "Two sided marketplace logic",
    ],
    image: "/images/work-3.jpg",
    icon: "grid",
    accent: "rose",
  },
];

export const stats = [
  { value: "6+", label: "Live Products" },
  { value: "6", label: "Years Shipping" },
  { value: "2", label: "Flagship Apps" },
  { value: "200+", label: "Schools Scaled" },
];
