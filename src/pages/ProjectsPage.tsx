import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronIcon } from "../components/icons/ChevronIcon";
import { featuredProject, gridProjects } from "../data/projectDetails";
import type { ProjectDetail } from "../types/project";
import { FeaturedProjectSection } from "../components/projects/FeaturedProjectSection";
import { PageHeader } from "../components/layout/PageHeader";

function ProjectGridCard({
  project,
  index,
}: {
  project: ProjectDetail;
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      className="group overflow-hidden rounded-2xl border border-border bg-surface transition hover:border-primary/40 hover:shadow-[0_8px_30px_rgba(0,0,0,0.05)]"
    >
      <Link to={`/projects/${project.slug}`} className="block">
        <div className="relative overflow-hidden">
          <img
            src={project.image}
            alt={project.name}
            className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-105"
            loading="lazy"
          />
          {project.flagship && (
            <span className="absolute right-3 top-3 rounded-full border border-primary/40 bg-white/90 px-2.5 py-1 text-[9px] font-medium text-primary backdrop-blur-sm">
              FLAGSHIP
            </span>
          )}
        </div>
        <div className="p-5 sm:p-6">
          <div className="mb-2 flex items-center justify-between gap-2">
            <h2 className="text-lg font-semibold transition group-hover:text-primary">
              {project.name}
            </h2>
            <span className="text-[10px] text-muted">
              {project.status === "in-progress" ? "Building" : "Live"}
            </span>
          </div>
          <p className="mb-3 line-clamp-3 text-sm leading-relaxed text-muted">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-border px-2.5 py-1 text-[10px]"
              >
                {tech}
              </span>
            ))}
          </div>
          <p className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-primary">
            View case study
            <ChevronIcon direction="right" className="h-3.5 w-3.5" />
          </p>
        </div>
      </Link>
    </motion.article>
  );
}

export function ProjectsPage() {
  if (!featuredProject) {
    return null;
  }

  return (
    <>
      <PageHeader
        label="PROJECTS"
        title="Products that ship"
        description="Scroll through the featured build, then explore the full project grid."
      />

      <FeaturedProjectSection project={featuredProject} />

      <section
        id="more-projects"
        className="relative z-10 scroll-mt-24 bg-surface"
        aria-labelledby="more-projects-heading"
      >
        <div className="mx-auto max-w-[1320px] px-4 pb-24 pt-16 sm:px-6 sm:pb-32 sm:pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="mb-8 sm:mb-10"
          >
            <p className="text-xs font-medium tracking-[0.14em] text-muted">PORTFOLIO</p>
            <h2
              id="more-projects-heading"
              className="mt-1 text-[clamp(1.5rem,3.5vw,2.25rem)] font-semibold tracking-tight"
            >
              More projects
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-muted sm:text-base">
              SaaS, mobile, marketplaces, and developer tools across the stack.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2">
            {gridProjects.map((project, i) => (
              <ProjectGridCard key={project.slug} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
