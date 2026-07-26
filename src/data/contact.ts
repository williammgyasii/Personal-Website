import { profileInfo } from "./about";
import { site, gmailComposeUrl } from "./site";
import type { SocialIconName } from "../components/icons/SocialIcons";

export const contactInfo = {
  seoTitle: "Contact William Gyasi | Full Stack Developer",
  seoDescription:
    "Contact William Gyasi for full stack development, system design, and production software. Email, GitHub, and LinkedIn.",
  headline: "Let's build something real.",
  intro:
    "Shipping a product, filling a role, or exploring a co build. Send the problem, the users, and the timeline. I reply with stack, architecture, and next steps.",
  location: profileInfo.location,
  timezone: site.timezone,
  email: site.email,
};

export interface ContactChannel {
  id: string;
  label: string;
  tagline: string;
  badge: string;
  description: string;
  href: string;
  icon: SocialIconName;
  cta: string;
  featured?: boolean;
}

export const contactChannels: ContactChannel[] = [
  {
    id: "email",
    label: "Email",
    tagline: "Direct line",
    badge: "Primary",
    description:
      "Best for project scope, role conversations, and anything that needs a written back and forth.",
    href: gmailComposeUrl(site.email),
    icon: "email",
    cta: "Send email",
    featured: true,
  },
  {
    id: "github",
    label: "GitHub",
    tagline: "Code & repos",
    badge: "Open source",
    description:
      "Production code, project structure, and how I ship features across the stack.",
    href: "https://github.com/williammgyasii",
    icon: "github",
    cta: "View GitHub",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    tagline: "Work history",
    badge: "Background",
    description:
      "Seven years across SaaS, fintech, edtech, worship tech, and healthtech. Roles, dates, and recommendations.",
    href: "https://linkedin.com/in/williammgyasii",
    icon: "linkedin",
    cta: "View LinkedIn",
  },
];
