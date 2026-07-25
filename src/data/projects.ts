export interface Project {
  id: string;
  name: string;
  category: string;
  tags: string[];
  description: string;
  image: string;
  link: string;
  flagship?: boolean;
}

export const projects: Project[] = [
  {
    id: "lumencue",
    name: "LumenCue",
    category: "AI Worship Platform",
    tags: [".NET", "AWS", "DESKTOP", "AUTO-UPDATE"],
    description:
      "AI-assisted worship operations platform with .NET desktop client and AWS-backed distribution pipeline.",
    image: "/images/work-1.jpg",
    link: "https://github.com/williammgyasii/lumencue-releases",
    flagship: true,
  },
  {
    id: "seeka",
    name: "Seeka",
    category: "Opportunity Pipeline SaaS",
    tags: ["NEXT.JS", "AI SCORING", "MULTI-TENANT", "AUTOMATION"],
    description:
      "Discover, qualify, and win opportunities across 50+ sources with AI-powered pipeline automation.",
    image: "/images/work-2.jpg",
    link: "https://www.seeka.tech/",
    flagship: true,
  },
  {
    id: "lawprep-ai",
    name: "LawPrep AI",
    category: "EdTech SaaS",
    tags: ["LSAT PREP", "OPENAI", "STRIPE", "NEXT.JS"],
    description:
      "Official PrepTest practice, AI study assistant, and writing simulator on a freemium SaaS stack.",
    image: "/images/work-3.jpg",
    link: "https://www.lawprep.io/",
  },
  {
    id: "get-grounded",
    name: "Get Grounded",
    category: "Mobile · AI Routines",
    tags: ["REACT NATIVE", "AI PLANNING", "EXPO", "MOBILE"],
    description:
      "Income and schedule-aware AI routines that adapt as your calendar and goals change.",
    image: "/images/work-4.jpg",
    link: "https://get-grounded.app/",
  },
  {
    id: "festura",
    name: "Festura",
    category: "Culture-First Marketplace",
    tags: ["MARKETPLACE", "NEXT.JS", "STRIPE", "DIASPORA"],
    description:
      "Wedding vendor matching by culture—connecting couples with photographers, DJs, and caterers who get it.",
    image: "/images/work-5.jpg",
    link: "https://festura.org/",
  },
  {
    id: "forgecms",
    name: "ForgeCMS",
    category: "AI-Assisted CMS",
    tags: ["HEADLESS CMS", "OPENAI", "SEO", "PUBLISHING"],
    description:
      "AI-native CMS with grammar, tone, and SEO tooling built into a distraction-free editor.",
    image: "/images/work-6.jpg",
    link: "https://www.forgecms.io/",
  },
];
