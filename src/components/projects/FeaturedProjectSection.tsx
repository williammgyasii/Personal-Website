import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { ProjectDetail } from "../../types/project";
import { ChevronIcon } from "../icons/ChevronIcon";
import { usePrefersReducedMotion } from "../../hooks/useMediaQuery";

type FeaturedProjectSectionProps = {
  project: ProjectDetail;
};

export function FeaturedProjectSection({ project }: FeaturedProjectSectionProps) {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section
      className="relative overflow-hidden border-b border-border bg-surface-secondary px-4 py-16 sm:px-6 sm:py-24"
      aria-labelledby="featured-project-heading"
    >
      <div className="featured-project-gradient pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-[1320px]">
        <p className="text-xs font-medium tracking-[0.18em] text-muted">02 / FEATURED PROJECT</p>
        <h2
          id="featured-project-heading"
          className="mt-3 max-w-4xl text-[clamp(2.1rem,6vw,4.25rem)] font-semibold leading-[0.92] tracking-[-0.04em]"
        >
          {project.name}
        </h2>
        <p className="mt-3 max-w-2xl text-base text-primary sm:text-xl">{project.subline}</p>

        <div className="mt-6 flex flex-wrap items-center gap-3 sm:gap-4">
          <motion.div
            whileHover={reducedMotion ? undefined : { y: -2 }}
            whileTap={reducedMotion ? undefined : { scale: 0.98 }}
          >
            <Link
              to={`/projects/${project.slug}`}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-8 text-sm font-medium text-white transition-colors hover:bg-[#e84e24] sm:h-14 sm:px-10 sm:text-base"
            >
              View case study
              <ChevronIcon direction="right" className="h-4 w-4" />
            </Link>
          </motion.div>
          <motion.div
            whileHover={reducedMotion ? undefined : { y: -2 }}
            whileTap={reducedMotion ? undefined : { scale: 0.98 }}
          >
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-foreground px-8 text-sm font-medium transition hover:bg-foreground hover:text-surface sm:h-14 sm:px-10 sm:text-base"
            >
              Visit live site
              <ChevronIcon direction="right" className="h-4 w-4" />
            </a>
          </motion.div>
        </div>

        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted sm:text-base sm:leading-[1.65]">
          {project.description}
        </p>

        <div className="mt-8 overflow-hidden rounded-[28px] border border-border bg-foreground shadow-[0_26px_70px_rgba(0,0,0,0.13)]">
          <div className="flex h-10 items-center gap-1.5 bg-[#e8e5dc] px-4">
            <span className="h-2 w-2 rounded-full border border-muted" />
            <span className="h-2 w-2 rounded-full border border-muted" />
            <span className="h-2 w-2 rounded-full border border-muted" />
          </div>
          <img
            src={project.image}
            alt={`${project.name} product screenshot`}
            className="aspect-[16/9] w-full object-cover object-top"
          />
        </div>
      </div>
    </section>
  );
}
