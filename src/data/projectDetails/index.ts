import type { ProjectDetail } from "../../types/project";
import { lumencue } from "./lumencue";
import { seeka } from "./seeka";
import { lawprepAi } from "./lawprep-ai";
import { getGrounded } from "./get-grounded";
import { festura } from "./festura";
import { forgecms } from "./forgecms";

export const projectDetails: ProjectDetail[] = [
  lumencue,
  seeka,
  lawprepAi,
  getGrounded,
  festura,
  forgecms,
];

export const featuredProject = projectDetails.find((p) => p.slug === "lumencue");
export const gridProjects = projectDetails.filter((p) => p.slug !== "lumencue");

export const flagshipProjects = projectDetails.filter((p) => p.flagship);
export const otherProjects = projectDetails.filter((p) => !p.flagship);

export function getProjectBySlug(slug: string): ProjectDetail | undefined {
  return projectDetails.find((p) => p.slug === slug);
}
