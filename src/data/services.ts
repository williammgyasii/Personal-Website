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
      "End-to-end product development—React/Next.js frontends, Node/.NET backends, PostgreSQL schemas, and production deployment pipelines.",
    items: ["Next.js & React", "API Design", "Database Architecture", "Cloud Deploy"],
    image: "/images/work-2.jpg",
  },
  {
    id: "ai",
    title: "AI Systems Integration",
    description:
      "LLM pipelines, RAG workflows, document processing, and intelligent automation embedded into real products—not demos.",
    items: ["OpenAI / LLM APIs", "Prompt Engineering", "AI Scoring", "Document AI"],
    image: "/images/work-1.jpg",
  },
  {
    id: "mobile",
    title: "Mobile Development",
    description:
      "Cross-platform React Native apps with native integrations, offline-first patterns, and App Store–ready release engineering.",
    items: ["React Native", "Expo", "Push & Calendar", "App Distribution"],
    image: "/images/work-4.jpg",
  },
  {
    id: "saas",
    title: "SaaS & Product Architecture",
    description:
      "Multi-tenant systems, subscription billing, role-based access, and marketplace dynamics built to scale from day one.",
    items: ["Stripe Billing", "Multi-Tenancy", "RBAC / CASL", "Marketplace Logic"],
    image: "/images/work-3.jpg",
  },
];

export const stats = [
  { value: "6+", label: "Products Shipped" },
  { value: "5+", label: "Years Building" },
  { value: "2", label: "Flagship Apps" },
  { value: "∞", label: "Commits Deep" },
];
