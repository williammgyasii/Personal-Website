import type { ProjectTech, TechTone } from "./projects";
import { workExperiences, type WorkExperience } from "./work";

export type { TechTone };

export interface WorkHighlight {
  id: number;
  role: string;
  company: string;
  period: string;
  location: string;
  current: boolean;
  bullets: string[];
  metric: string;
  productUrl?: string;
  technologies: ProjectTech[];
}

const tones: TechTone[] = ["primary", "accent"];

export function toTechBubbles(names: string[]): ProjectTech[] {
  return names.map((name, i) => ({
    name,
    tone: tones[i % tones.length]!,
  }));
}

function workToHighlight(job: WorkExperience): WorkHighlight {
  return {
    id: job.id,
    role: job.title,
    company: job.company,
    period: job.duration,
    location: job.location,
    current: job.current,
    bullets: job.responsibilities,
    metric: job.metric,
    productUrl: job.productUrl,
    technologies: toTechBubbles(job.technologies),
  };
}

/** Home page experience highlights — derived from /work source of truth. */
export const experienceHighlights: WorkHighlight[] = workExperiences.map(workToHighlight);
