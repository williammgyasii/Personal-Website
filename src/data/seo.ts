import { profileInfo } from "./about";
import { contactInfo } from "./contact";
import { projectDetails } from "./projectDetails";
import { site } from "./site";

export type SeoRoute = {
  path: string;
  title: string;
  description: string;
  summary: string;
};

const homeDescription =
  "William Gyasi is a full-stack developer in Maryland, USA. 6+ years shipping SaaS, web, mobile, and AI-powered products with React, Next.js, TypeScript, .NET, PostgreSQL, AWS, and Cloudflare.";

export function absoluteUrl(path = "/"): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (normalized === "/") return `${site.url}/`;
  return `${site.url}${normalized}`;
}

export function ogImageUrl(): string {
  return absoluteUrl(site.ogImage);
}

export function seoRoutes(): SeoRoute[] {
  const projectsIndex: SeoRoute = {
    path: "/projects",
    title: "Projects | William Gyasi — Full-Stack Developer",
    description:
      "Shipped work by William Gyasi: KairosPayHub, LumenCue, Seeka, and other SaaS, mobile, and AI products. Case studies with stack, architecture, and live links.",
    summary:
      "Selected products by William Gyasi, a full-stack developer in Maryland. Featured: KairosPayHub, a multi-tenant church operations platform live at app.kairospayhub.com. Also LumenCue, Seeka, LawPrep AI, Get Grounded, Festura, and ForgeCMS.",
  };

  const projectRoutes = projectDetails.map((project) => ({
    path: `/projects/${project.slug}`,
    title: `${project.name} | William Gyasi`,
    description: `${project.name} — ${project.subline} Case study by William Gyasi, full-stack developer in Maryland.`,
    summary: project.description,
  }));

  return [
    {
      path: "/",
      title: "William Gyasi | Full-Stack Developer in Maryland",
      description: homeDescription,
      summary: [
        profileInfo.bioParagraphs[0],
        profileInfo.bioParagraphs[1],
        "Based in Maryland, USA. Open to full-time and contract roles.",
        `LinkedIn: ${site.sameAs[0]}`,
        `GitHub: ${site.sameAs[1]}`,
        `Email: ${site.email}`,
      ].join(" "),
    },
    {
      path: "/about",
      title: profileInfo.seoTitle,
      description: profileInfo.seoDescription,
      summary: profileInfo.bioParagraphs.join(" "),
    },
    {
      path: "/work",
      title: "Work History | William Gyasi — Full-Stack Developer",
      description:
        "Work history for William Gyasi, full-stack developer in Maryland: Intuitive Analytica, Penny-Pilot, KairosHub, Asquii, and Winks. SaaS, fintech, edtech, and worship tech.",
      summary:
        "Full-stack developer in Maryland with roles at Intuitive Analytica (current), Penny-Pilot, KairosHub, Asquii, and Winks. Production work across supply chain SaaS, fintech, church operations, edtech, and healthtech.",
    },
    projectsIndex,
    {
      path: "/contact",
      title: contactInfo.seoTitle,
      description: contactInfo.seoDescription,
      summary: `${contactInfo.intro} Email ${site.email}. LinkedIn ${site.sameAs[0]}. GitHub ${site.sameAs[1]}. Based in ${site.location}.`,
    },
    ...projectRoutes,
  ];
}

export function getSeoRoute(pathname: string): SeoRoute {
  const path = pathname.replace(/\/+$/, "") || "/";
  const routes = seoRoutes();
  return routes.find((route) => route.path === path) ?? routes[0];
}

export function personJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.fullName,
    alternateName: site.shortName,
    url: `${site.url}/`,
    email: site.email,
    jobTitle: site.jobTitle,
    description: homeDescription,
    image: absoluteUrl(profileInfo.profileImage),
    address: {
      "@type": "PostalAddress",
      addressRegion: "MD",
      addressCountry: "US",
    },
    homeLocation: {
      "@type": "Place",
      name: site.location,
    },
    sameAs: [...site.sameAs],
    knowsAbout: [
      "Full-stack development",
      "React",
      "Next.js",
      "TypeScript",
      ".NET",
      "PostgreSQL",
      "AWS",
      "Cloudflare",
      "SaaS",
    ],
  };
}

export function websiteJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.shortName,
    url: `${site.url}/`,
    description: homeDescription,
    author: { "@type": "Person", name: site.fullName, url: `${site.url}/` },
  };
}
