export interface Service {
  id: string;
  title: string;
  description: string;
  items: string[];
  image: string;
}

export const services: Service[] = [
  {
    id: "fullstack",
    title: "Full-Stack Engineering",
    description:
      "I don't hand off at the API boundary. React/Next.js frontends, Node.js or .NET backends, PostgreSQL schemas, and CI/CD pipelines—one engineer, one coherent product, zero integration gaps.",
    items: [
      "Next.js & React SPAs",
      "REST & tRPC APIs",
      "Database design & migrations",
      "AWS / Vercel deployment",
    ],
    image: "/images/work-2.jpg",
  },
  {
    id: "ai",
    title: "AI Systems Integration",
    description:
      "LLM pipelines that ship in production—not slide decks. Document processing, qualification scoring, RAG workflows, and prompt pipelines embedded into real products with rate limits, cost controls, and human review gates.",
    items: [
      "OpenAI & LLM APIs",
      "Prompt engineering & evals",
      "AI scoring & ranking",
      "Document & chat AI",
    ],
    image: "/images/work-1.jpg",
  },
  {
    id: "mobile",
    title: "Mobile Development",
    description:
      "Cross-platform apps that feel native. React Native + Expo with calendar sync, push notifications, offline-first caching, and App Store–ready release engineering—not a web view in a wrapper.",
    items: [
      "React Native & Expo",
      "Native calendar & push",
      "Offline-first patterns",
      "TestFlight & Play Store beta",
    ],
    image: "/images/work-4.jpg",
  },
  {
    id: "saas",
    title: "SaaS & Product Architecture",
    description:
      "Multi-tenant from day one. Stripe billing, role-based access, org/workspace isolation, and marketplace dynamics—architected so your MVP doesn't become a rewrite at 1,000 users.",
    items: [
      "Stripe subscriptions",
      "Multi-tenant data models",
      "RBAC / CASL authorization",
      "Two-sided marketplace logic",
    ],
    image: "/images/work-3.jpg",
  },
];

export const stats = [
  { value: "6+", label: "Live Products" },
  { value: "6", label: "Years Shipping" },
  { value: "2", label: "Flagship Apps" },
  { value: "200+", label: "Schools Scaled" },
];
