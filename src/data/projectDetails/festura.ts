import type { ProjectDetail } from "../../types/project";

export const festura: ProjectDetail = {
  id: 5,
  slug: "festura",
  name: "Festura",
  subline: "Find Vendors Who Get Your Culture—Not Just Your Zip Code",
  category: "fullstack",
  status: "in-progress",
  technologies: ["Next.js", "React", "TypeScript", "PostgreSQL", "Vercel", "Tailwind CSS", "Stripe", "AWS S3"],
  keyFeatures: [
    { title: "Cultural Vendor Discovery", description: "Structured cultural taxonomy—not tags. Search by heritage, ceremony type, and tradition so couples find vendors who've done this before." },
    { title: "Diaspora-Focused Marketplace", description: "Built for communities planning authentic celebrations abroad—where mainstream platforms fail and personal networks can't scale." },
    { title: "Trusted Vendor Directory", description: "Community-verified vendors with reputation weighted by people who share your cultural context—not anonymous star ratings." },
    { title: "End-to-End Planning Tools", description: "Inquiry management, ceremony templates, and booking workflows for celebrations that span days, not hours." },
  ],
  description: "Festura is the wedding marketplace diaspora communities have been building through word-of-mouth for decades—now with structure, search, and trust. Culture is a first-class filter: find Nigerian DJs, Ghanaian caterers, and Indian photographers who understand your ceremony, not vendors who need a briefing on jollof rice. Two-sided marketplace with Stripe Connect, community-weighted reviews, and ceremony templates for multi-day celebrations.",
  problemStatement: {
    title: "Cultural Celebrations Deserve Cultural Vendors",
    description: "Diaspora communities spend billions on weddings honoring their heritage, yet mainstream platforms don't understand cultural nuances. Finding a vendor who knows the difference between jollof rice service and a standard buffet shouldn't require word-of-mouth networking.",
    painPoints: [
      "Mainstream platforms don't categorize by culture or tradition",
      "Finding culturally-aware vendors requires extensive personal networking",
      "No verification of a vendor's cultural experience or community reputation",
      "Multi-cultural ceremonies require disconnected planning tools",
      "Cultural traditions compromised due to vendor inexperience",
    ],
  },
  solutionApproach: {
    title: "Culture as a First-Class Filter",
    description: "Festura builds a two-sided marketplace where cultural taxonomy drives discovery, community trust validates vendors, and planning tools map to real ceremony formats.",
    principles: [
      { title: "Cultural Authenticity", description: "Vendors categorized and verified by cultural expertise and community reputation." },
      { title: "Community-Driven Trust", description: "Reviews from community members weighted above anonymous ratings." },
      { title: "Ceremony Templates", description: "Pre-built planning paths for specific formats—Nigerian traditional, Indian sangeet, Caribbean reception." },
    ],
  },
  architecture: {
    title: "System Architecture",
    description: "Marketplace architecture optimized for cultural discovery, vendor trust, and media-rich portfolio management.",
    layers: [
      { name: "Discovery Engine", tech: "Algolia + PostgreSQL", description: "Cultural taxonomy, geo-aware search, and personalized vendor recommendations." },
      { name: "Vendor Portal", tech: "Next.js + Server Actions", description: "Onboarding, portfolio management, availability calendar, and inquiry handling." },
      { name: "Trust & Payments", tech: "Stripe Connect", description: "Verification badges, review weighting, and secure marketplace payments." },
      { name: "Media CDN", tech: "AWS S3 + CloudFront", description: "High-resolution portfolio images and video with edge delivery." },
    ],
  },
  targetAudience: {
    primary: [
      { segment: "African Diaspora (US/UK)", need: "Vendors who understand African wedding traditions" },
      { segment: "South Asian Diaspora", need: "Multi-day ceremony planning with cultural expertise" },
      { segment: "Caribbean Communities", need: "Vendors for culturally rich celebrations" },
    ],
    secondary: [
      { segment: "Multi-Cultural Couples", need: "Blend two cultures in one celebration" },
      { segment: "Event Planners", need: "Source culturally-specific vendors for clients" },
    ],
  },
  developmentPhases: [
    { phase: "Market Research", duration: "3 weeks", status: "completed", description: "Diaspora wedding market analysis and cultural taxonomy." },
    { phase: "Vendor Platform", duration: "6 weeks", status: "completed", description: "Vendor onboarding, profiles, and portfolio management." },
    { phase: "Discovery & Search", duration: "4 weeks", status: "in-progress", description: "Cultural filters, geo search, and recommendations." },
    { phase: "Booking System", duration: "3 weeks", status: "planned", description: "Inquiries, quotes, and secure booking flow." },
    { phase: "Planning Tools", duration: "4 weeks", status: "planned", description: "Checklists, timelines, and ceremony templates." },
  ],
  metrics: {
    title: "Success Metrics",
    kpis: [
      { metric: "Vendor Coverage", target: "50+ cultures", description: "Active cultural categories with listings" },
      { metric: "Search Success Rate", target: "85%+", description: "Searches resulting in vendor contact" },
      { metric: "Booking Conversion", target: "25%+", description: "Inquiries converting to bookings" },
      { metric: "Vendor NPS", target: "70+", description: "Vendor satisfaction score" },
    ],
  },
  futureRoadmap: [
    { feature: "Vendor Verification Program", timeline: "Q4 2026", description: "Community-driven cultural expertise verification." },
    { feature: "Planning Dashboard", timeline: "Q1 2027", description: "Full wedding planning with ceremony support." },
    { feature: "Vendor Mobile App", timeline: "Q2 2027", description: "On-the-go booking management." },
    { feature: "Event Type Expansion", timeline: "Q3 2027", description: "Baby naming, milestone birthdays, cultural festivals." },
  ],
  designDecisions: [
    { decision: "Cultural Taxonomy over Free-Text Tags", reasoning: "Structured hierarchy enables meaningful filtering that tags cannot provide." },
    { decision: "Community Verification over Self-Claimed", reasoning: "Cultural expertise validated by community members, not vendor claims." },
    { decision: "Stripe Connect for Payments", reasoning: "Secure vendor payouts with proper tax handling across countries." },
  ],
  securityConsiderations: [
    { area: "Vendor Verification", implementation: "Identity and business registration checks" },
    { area: "Payment Security", implementation: "Stripe Connect with escrow for deposits" },
    { area: "Content Moderation", implementation: "AI + human review for portfolio content" },
    { area: "Privacy", implementation: "Couple information hidden until booking confirmed" },
  ],
  integrations: [
    { name: "Stripe Connect", purpose: "Marketplace payments and vendor payouts", status: "integrated" },
    { name: "Algolia", purpose: "Fast, relevant vendor search", status: "integrated" },
    { name: "Calendly", purpose: "Vendor availability sync", status: "planned" },
    { name: "Google Calendar", purpose: "Planning timeline integration", status: "planned" },
  ],
  challengesAndLearning: {
    challenges: [
      "Building vendor categorization that accurately represents diverse cultures.",
      "Creating trust systems for a two-sided marketplace.",
      "Designing inclusive UX for users from many cultural backgrounds.",
      "Balancing cultural specificity with broad market appeal.",
    ],
    learning: [
      "Developed marketplace platform architecture and vendor management.",
      "Learned diaspora community needs for cultural event planning.",
      "Built inclusive, culturally-aware discovery experiences.",
      "Mastered two-sided marketplace dynamics and trust systems.",
    ],
  },
  outcomes: "Festura turns cultural wedding planning from a networking marathon into a searchable, trustworthy marketplace—so diaspora couples celebrate their heritage with vendors who already speak the language.",
  image: "/images/work-5.jpg",
  link: "https://festura.org/",
};
