import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { Project } from "../../data/projects";

type ProjectShowcaseImageProps = {
  project: Project;
};

export function ProjectShowcaseImage({ project }: ProjectShowcaseImageProps) {
  return (
    <Link
      to={`/projects/${project.id}`}
      className="group relative block overflow-hidden rounded-2xl border border-border shadow-[0_24px_80px_rgba(0,0,0,0.35)]"
      aria-label={`View ${project.name} case study`}
    >
      <motion.img
        src={project.image}
        alt={project.name}
        className="aspect-[16/10] w-full object-cover transition duration-700 group-hover:scale-105 sm:aspect-[4/3]"
        loading="lazy"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80 transition duration-500 group-hover:opacity-100" />

      <div className="absolute inset-0 flex items-center justify-center opacity-0 backdrop-blur-[6px] transition duration-500 group-hover:opacity-100 group-hover:backdrop-blur-md">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/35 via-black/25 to-accent/35" />
        <div className="relative flex flex-col items-center gap-3 text-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/25 bg-white/10 text-2xl backdrop-blur-sm transition duration-500 group-hover:scale-110">
            →
          </span>
          <span className="text-sm font-semibold tracking-[0.14em] text-white">VIEW PROJECT</span>
          <span className="text-[11px] text-white/70">Case study & details</span>
        </div>
      </div>

      {project.flagship && (
        <span className="absolute left-4 top-4 rounded-full border border-primary/40 bg-black/50 px-3 py-1 text-[10px] font-medium text-primary backdrop-blur-sm">
          FLAGSHIP
        </span>
      )}
    </Link>
  );
}
