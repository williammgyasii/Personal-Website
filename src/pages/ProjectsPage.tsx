import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { flagshipProjects, otherProjects } from "../data/projectDetails";
import { PageHeader } from "../components/layout/PageHeader";

function ProjectCard({
  project,
  index,
}: {
  project: (typeof flagshipProjects)[0];
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="group overflow-hidden rounded-2xl border border-border transition hover:border-primary/40"
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
            <span className="absolute right-3 top-3 rounded-full border border-primary/40 bg-black/80 px-2.5 py-1 text-[9px] font-medium text-primary">
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
          <p className="mb-3 line-clamp-3 text-sm text-muted">{project.description}</p>
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
          <p className="mt-4 text-xs font-medium text-primary">View case study →</p>
        </div>
      </Link>
    </motion.article>
  );
}

export function ProjectsPage() {
  return (
    <>
      <PageHeader
        label="PROJECTS"
        title="Products that ship"
        description="Six live builds across AI SaaS, mobile, marketplaces, and developer tools—not mockups, not tutorials. Flagship products first. Full case studies on every one."
      />

      <div className="mx-auto max-w-[1320px] space-y-16 px-4 pb-24 sm:px-6 sm:pb-32">
        <section>
          <h2 className="mb-6 text-xs tracking-tight text-muted">FLAGSHIP PRODUCTS</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {flagshipProjects.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-6 text-xs tracking-tight text-muted">OTHER PROJECTS</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {otherProjects.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
