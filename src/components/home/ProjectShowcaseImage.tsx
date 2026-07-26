import { Link } from "react-router-dom";
import { ChevronIcon } from "../icons/ChevronIcon";
import type { Project } from "../../data/projects";

type ProjectShowcaseImageProps = {
  project: Project;
  compact?: boolean;
};

export function ProjectShowcaseImage({ project, compact = false }: ProjectShowcaseImageProps) {
  return (
    <Link
      to={`/projects/${project.id}`}
      className="group relative block overflow-hidden rounded-xl border border-border shadow-[0_8px_24px_rgba(0,0,0,0.08)] sm:rounded-2xl"
      aria-label={`View ${project.name} case study`}
    >
      <img
        src={project.image}
        alt={project.name}
        className={`w-full object-cover transition duration-700 group-hover:scale-105 ${
          compact ? "aspect-[4/3] max-h-[280px] sm:max-h-[320px]" : "aspect-[16/10] sm:aspect-[4/3]"
        }`}
        loading="lazy"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent opacity-90 transition duration-500 group-hover:opacity-100" />

      <div className="absolute inset-0 flex items-center justify-center opacity-0 backdrop-blur-[4px] transition duration-500 group-hover:opacity-100 group-hover:backdrop-blur-lg">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-black/30 to-accent/40" />
        <div className="relative flex flex-col items-center gap-2 text-center">
          <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-sm transition duration-500 group-hover:scale-110">
            <ChevronIcon direction="right" className="h-5 w-5 text-white" />
          </span>
          <span className="text-xs font-semibold tracking-[0.16em] text-white sm:text-sm">
            VIEW PROJECT
          </span>
        </div>
      </div>

      {project.flagship && (
        <span className="absolute left-3 top-3 rounded-full border border-primary/40 bg-white/90 px-2.5 py-1 text-[9px] font-medium text-primary backdrop-blur-sm">
          FLAGSHIP
        </span>
      )}
    </Link>
  );
}
