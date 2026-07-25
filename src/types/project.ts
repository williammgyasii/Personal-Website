export interface ProjectDetail {
  id: number;
  slug: string;
  name: string;
  subline: string;
  category: string;
  status: "in-progress" | "live";
  flagship?: boolean;
  technologies: string[];
  keyFeatures: { title: string; description: string }[];
  description: string;
  problemStatement: {
    title: string;
    description: string;
    painPoints: string[];
  };
  solutionApproach: {
    title: string;
    description: string;
    principles: { title: string; description: string }[];
  };
  architecture: {
    title: string;
    description: string;
    layers: { name: string; tech: string; description: string }[];
  };
  targetAudience: {
    primary: { segment: string; need: string }[];
    secondary: { segment: string; need: string }[];
  };
  developmentPhases: {
    phase: string;
    duration: string;
    status: string;
    description: string;
  }[];
  metrics: {
    title: string;
    kpis: { metric: string; target: string; description: string }[];
  };
  futureRoadmap: { feature: string; timeline: string; description: string }[];
  designDecisions: { decision: string; reasoning: string }[];
  securityConsiderations: { area: string; implementation: string }[];
  integrations: { name: string; purpose: string; status: string }[];
  challengesAndLearning: {
    challenges: string[];
    learning: string[];
  };
  outcomes: string;
  image: string;
  link: string;
}
