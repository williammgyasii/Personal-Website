import { workExperiences } from "./work";

export const stats = [
  { number: "7", label: "Years Experience" },
  { number: "6", label: "Live Products" },
  { number: "2", label: "Flagship Apps" },
  { number: "200+", label: "Schools Scaled" },
];

import { expertiseCategories, aboutValueProps } from "./about";

/** @deprecated Use expertiseCategories from about.ts */
export const techStack = expertiseCategories.map((c) => ({
  category: c.label,
  items: c.items,
}));

/** Short work summaries — periods match /work exactly. */
export const workHighlights = workExperiences.map((job) => ({
  role: job.title,
  company: job.company,
  period: job.duration,
  highlight: job.description,
}));

export const valueProps = aboutValueProps.map(({ title, description }) => ({
  title,
  description,
}));
