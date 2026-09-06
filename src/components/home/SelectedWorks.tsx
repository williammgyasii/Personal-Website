import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { projects, type Project } from "../../data/projects";
import { usePrefersReducedMotion } from "../../hooks/useMediaQuery";
import { ChevronIcon } from "../icons/ChevronIcon";

export function SelectedWorks() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section id="works" className="relative scroll-mt-28 border-t border-border bg-surface px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-[1320px]">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4 sm:mb-14">
          <div>
            <p className="text-xs font-medium tracking-[0.14em] text-muted">02 / SELECTED WORK</p>
            <h2 className="mt-2 text-[clamp(1.75rem,4vw,3rem)] font-semibold tracking-tight">
              Projects with a point of view.
            </h2>
          </div>
          <Link
            to="/projects"
            className="inline-flex h-10 items-center rounded-full border border-foreground px-5 text-sm font-medium transition hover:bg-foreground hover:text-surface"
          >
            View all projects
          </Link>
        </div>

        <div className="grid gap-6 pb-[20vh] md:grid-cols-2 md:gap-8">
          {projects.map((project, index) => (
            <WorkCard
              key={project.id}
              project={project}
              index={index}
              reducedMotion={reducedMotion}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkCard({
  project,
  index,
  reducedMotion,
}: {
  project: Project;
  index: number;
  reducedMotion: boolean;
}) {
  const tech = project.technologies
    .slice(0, 3)
    .map((item) => item.name.toUpperCase())
    .join("  ✦  ");

  return (
    <motion.article
      initial={reducedMotion ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: (index % 2) * 0.08 }}
      className="sticky rounded-[28px] border border-border bg-surface-secondary p-4 shadow-[0_18px_50px_rgba(0,0,0,0.06)] sm:p-5"
      style={{ top: `${5.5 + index * 0.45}rem`, zIndex: index + 1 }}
    >
      <div className="mb-4 flex items-start justify-between gap-3">
        <h3 className="text-[clamp(1.4rem,3vw,2rem)] font-semibold tracking-tight">{project.name}</h3>
        <p className="hidden text-right text-[10px] font-medium uppercase tracking-[0.12em] text-muted sm:block">
          {tech}
        </p>
      </div>

      <Link
        to={`/projects/${project.id}`}
        className="group relative block overflow-hidden rounded-2xl bg-foreground"
        aria-label={`View ${project.name} case study`}
      >
        <img
          src={project.image}
          alt={`${project.name} screenshot`}
          className="aspect-[16/11] w-full object-cover object-top transition duration-700 group-hover:scale-[1.03]"
          loading="lazy"
        />
        <span className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full border border-white/30 bg-white/15 text-white backdrop-blur-sm transition group-hover:bg-primary">
          <ChevronIcon direction="right" className="h-4 w-4" />
        </span>
      </Link>

      <div className="mt-4 flex items-end justify-between gap-4">
        <div>
          <p className="text-lg font-semibold tracking-tight">{project.name}</p>
          <p className="mt-1 text-sm text-muted">
            {project.tags.slice(0, 3).join("  ✦  ")}
          </p>
        </div>
        <Link
          to={`/projects/${project.id}`}
          className="shrink-0 text-sm font-medium text-primary transition hover:underline"
        >
          View case study
        </Link>
      </div>
    </motion.article>
  );
}
