import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const SITE = "https://www.williammgyasii.com";
const distDir = path.resolve(import.meta.dirname, "..", "dist");

function escapeAttr(value) {
  return value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
}

function escapeHtml(value) {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function setTitle(html, title) {
  return html.replace(/<title>[^<]*<\/title>/, `<title>${escapeHtml(title)}</title>`);
}

function setMeta(html, attr, key, content) {
  const re = new RegExp(`(<meta[^>]*${attr}="${key}"[^>]*content=")[^"]*(")`);
  if (re.test(html)) {
    return html.replace(re, `$1${escapeAttr(content)}$2`);
  }
  return html.replace(
    "</head>",
    `    <meta ${attr}="${key}" content="${escapeAttr(content)}" />\n  </head>`,
  );
}

function setCanonical(html, url) {
  if (/rel="canonical"/.test(html)) {
    return html.replace(/<link rel="canonical" href="[^"]*"/, `<link rel="canonical" href="${url}"`);
  }
  return html.replace("</head>", `    <link rel="canonical" href="${url}" />\n  </head>`);
}

function setNoscript(html, title, summary, pathName) {
  const pageUrl = pathName === "/" ? `${SITE}/` : `${SITE}${pathName}`;
  const block = `<noscript>
      <article>
        <h1>${escapeHtml(title)}</h1>
        <p>${escapeHtml(summary)}</p>
        <p><a href="${pageUrl}">${pageUrl}</a></p>
      </article>
    </noscript>`;
  if (/<noscript>[\s\S]*?<\/noscript>/.test(html)) {
    return html.replace(/<noscript>[\s\S]*?<\/noscript>/, block);
  }
  return html.replace('<div id="root"></div>', `<div id="root"></div>\n    ${block}`);
}

function applyRoute(html, route) {
  const url = route.path === "/" ? `${SITE}/` : `${SITE}${route.path}`;
  let next = setTitle(html, route.title);
  next = setMeta(next, "name", "description", route.description);
  next = setMeta(next, "property", "og:title", route.title);
  next = setMeta(next, "property", "og:description", route.description);
  next = setMeta(next, "property", "og:url", url);
  next = setMeta(next, "name", "twitter:title", route.title);
  next = setMeta(next, "name", "twitter:description", route.description);
  next = setCanonical(next, url);
  next = setNoscript(next, route.title, route.summary, route.path);
  return next;
}

function sitemapXml(routes) {
  const urls = routes
    .map((route) => {
      const loc = route.path === "/" ? `${SITE}/` : `${SITE}${route.path}`;
      const priority = route.path === "/" ? "1.0" : route.path.startsWith("/projects/") ? "0.7" : "0.8";
      return `  <url>\n    <loc>${loc}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
    })
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

const routes = [
  {
    path: "/",
    title: "William Gyasi | Full-Stack Developer in Maryland",
    description:
      "William Gyasi is a full-stack developer in Maryland, USA. 6+ years shipping SaaS, web, mobile, and AI-powered products with React, Next.js, TypeScript, .NET, PostgreSQL, AWS, and Cloudflare.",
    summary:
      "William Kwabena Gyasi is a full-stack developer in Maryland, USA. 6+ years shipping production SaaS, web, mobile, desktop, and AI-powered platforms. React, Next.js, TypeScript, .NET, PostgreSQL, AWS, Cloudflare. Open to full-time and contract. LinkedIn https://www.linkedin.com/in/williammgyasii GitHub https://github.com/williammgyasii Email williammgyasii@gmail.com",
  },
  {
    path: "/about",
    title: "About William Gyasi | Full-Stack Developer",
    description:
      "Full-stack developer with 6+ years shipping production applications across SaaS, web, mobile, desktop, and AI-powered platforms. React, Next.js, TypeScript, .NET, PostgreSQL, AWS, Cloudflare, OpenAI.",
    summary:
      "William Gyasi is a full-stack developer and software engineer in Maryland with 6+ years building production applications across SaaS, web, mobile, desktop, fintech, supply chain, edtech, health tech, and AI-powered platforms.",
  },
  {
    path: "/work",
    title: "Work History | William Gyasi — Full-Stack Developer",
    description:
      "Work history for William Gyasi, full-stack developer in Maryland: Intuitive Analytica, Penny-Pilot, KairosHub, Asquii, and Winks. SaaS, fintech, edtech, and worship tech.",
    summary:
      "Full-stack developer in Maryland. Roles at Intuitive Analytica, Penny-Pilot, KairosHub, Asquii, and Winks.",
  },
  {
    path: "/projects",
    title: "Projects | William Gyasi — Full-Stack Developer",
    description:
      "Shipped work by William Gyasi: KairosPayHub, LumenCue, Seeka, and other SaaS, mobile, and AI products. Case studies with stack, architecture, and live links.",
    summary:
      "Selected products by William Gyasi, a full-stack developer in Maryland. Featured: KairosPayHub at app.kairospayhub.com.",
  },
  {
    path: "/contact",
    title: "Contact William Gyasi | Full Stack Developer",
    description:
      "Contact William Gyasi for full stack development, system design, and production software. Email, GitHub, and LinkedIn.",
    summary:
      "Email williammgyasii@gmail.com. LinkedIn https://www.linkedin.com/in/williammgyasii. GitHub https://github.com/williammgyasii. Based in Maryland, USA.",
  },
  {
    path: "/projects/kairos-payhub",
    title: "KairosPayHub | William Gyasi",
    description:
      "KairosPayHub — Church Giving, Attendance, and Roster — One Structure-Aware Platform. Case study by William Gyasi, full-stack developer in Maryland.",
    summary:
      "KairosPayHub is a multi-tenant church management platform for giving, attendance, and organizational structure. Live at https://app.kairospayhub.com.",
  },
  {
    path: "/projects/lumencue",
    title: "LumenCue | William Gyasi",
    description:
      "LumenCue — Broadcast-Grade Worship Ops Without the Enterprise Price Tag. Case study by William Gyasi, full-stack developer in Maryland.",
    summary: "LumenCue is a C# worship operations desktop platform used by churches.",
  },
  {
    path: "/projects/seeka",
    title: "Seeka | William Gyasi",
    description:
      "Seeka — Your Entire Opportunity Pipeline—Discover, Qualify, Win. Case study by William Gyasi, full-stack developer in Maryland.",
    summary: "Seeka is an AI-native opportunity pipeline OS for jobs, gigs, and B2B leads.",
  },
  {
    path: "/projects/lawprep-ai",
    title: "LawPrep AI | William Gyasi",
    description:
      "LawPrep AI — Serious LSAT Prep. Accessible Pricing. AI That Knows Your Materials. Case study by William Gyasi, full-stack developer in Maryland.",
    summary: "LawPrep AI is an LSAT prep platform with official PrepTests and an AI study assistant.",
  },
  {
    path: "/projects/get-grounded",
    title: "Get Grounded | William Gyasi",
    description:
      "Get Grounded — Routines That Respect Your Income, Your Calendar, and Your Sanity. Case study by William Gyasi, full-stack developer in Maryland.",
    summary: "Get Grounded is a React Native productivity app that treats income and schedule as constraints.",
  },
  {
    path: "/projects/festura",
    title: "Festura | William Gyasi",
    description:
      "Festura — Find Vendors Who Get Your Culture—Not Just Your Zip Code. Case study by William Gyasi, full-stack developer in Maryland.",
    summary: "Festura is a wedding marketplace for diaspora communities with culture as a first-class filter.",
  },
  {
    path: "/projects/forgecms",
    title: "ForgeCMS | William Gyasi",
    description:
      "ForgeCMS — Write Better. Publish Faster. Own Your Content. Case study by William Gyasi, full-stack developer in Maryland.",
    summary: "ForgeCMS is a writing CMS with AI assistance, SEO scoring, and headless publishing.",
  },
];

const template = await readFile(path.join(distDir, "index.html"), "utf8");

for (const route of routes) {
  const html = applyRoute(template, route);
  if (route.path === "/") {
    await writeFile(path.join(distDir, "index.html"), html);
    continue;
  }
  const outDir = path.join(distDir, route.path);
  await mkdir(outDir, { recursive: true });
  await writeFile(path.join(outDir, "index.html"), html);
}

await writeFile(path.join(distDir, "sitemap.xml"), sitemapXml(routes));

console.log(`Wrote ${routes.length} crawl pages + sitemap.xml`);
