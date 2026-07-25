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
    category: "AI Worship Platform · Flagship",
    tags: [".NET", "AWS", "DESKTOP", "AUTO-UPDATE"],
    description:
      "Broadcast-grade worship operations without the six-figure AV stack. A .NET desktop client with AWS-backed sync, semver auto-updates, and AI-assisted cue orchestration—built for live services where a missed cue isn't an option.",
    image: "/images/work-1.jpg",
    link: "https://github.com/williammgyasii/lumencue-releases",
    flagship: true,
  },
  {
    id: "seeka",
    name: "Seeka",
    category: "Opportunity Pipeline SaaS · Flagship",
    tags: ["NEXT.JS", "AI SCORING", "MULTI-TENANT", "AUTOMATION"],
    description:
      "Stop tab-hopping. Start closing. Seeka aggregates 50+ job boards and lead sources, scores every opportunity with AI, and automates outreach—one pipeline from discovery to deal.",
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
      "Serious LSAT prep without the $3,000 course. 10,000+ official PrepTest questions, an AI study assistant trained on your materials, and freemium tiers that convert because the free product delivers real value.",
    image: "/images/work-3.jpg",
    link: "https://www.lawprep.io/",
  },
  {
    id: "get-grounded",
    name: "Get Grounded",
    category: "Mobile · AI Routines",
    tags: ["REACT NATIVE", "AI PLANNING", "EXPO", "MOBILE"],
    description:
      "Productivity that respects your bank account and your calendar. AI-generated routines that replan when life shifts—not another streak app that guilt-trips you for being human.",
    image: "/images/work-4.jpg",
    link: "https://get-grounded.app/",
  },
  {
    id: "festura",
    name: "Festura",
    category: "Culture-First Marketplace",
    tags: ["MARKETPLACE", "NEXT.JS", "STRIPE", "DIASPORA"],
    description:
      "The wedding marketplace diaspora communities deserve. Find Nigerian DJs, Ghanaian caterers, and Indian photographers who actually understand your ceremony—not vendors who need a cultural crash course.",
    image: "/images/work-5.jpg",
    link: "https://festura.org/",
  },
  {
    id: "forgecms",
    name: "ForgeCMS",
    category: "AI-Assisted CMS",
    tags: ["HEADLESS CMS", "OPENAI", "SEO", "PUBLISHING"],
    description:
      "WordPress power without plugin hell. Grammar, tone, SEO scoring, and headless publishing in one distraction-free editor—AI that enhances your voice instead of replacing it.",
    image: "/images/work-6.jpg",
    link: "https://www.forgecms.io/",
  },
];
