import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import type { ProjectDetail } from "../../types/project";
import { projectDetails } from "../../data/projectDetails";

function Section({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className="border-t border-border pt-12"
    >
      <h2 className="mb-6 text-xl font-semibold tracking-tight">{title}</h2>
      {children}
    </motion.section>
  );
}

export function ProjectDetailContent({ project }: { project: ProjectDetail }) {
  const others = projectDetails.filter((p) => p.slug !== project.slug);

  return (
    <div className="mx-auto max-w-[1320px] px-4 pb-24 sm:px-6 sm:pb-32">
      <div className="mb-12 overflow-hidden rounded-2xl border border-border">
        <img
          src={project.image}
          alt={project.name}
          className="aspect-[21/9] w-full object-cover"
        />
      </div>

      <div className="mb-8 flex flex-wrap items-center gap-3">
        <span className="rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-[10px] font-medium text-primary">
          {project.status === "in-progress" ? "Building" : "Live"}
        </span>
        {project.flagship && (
          <span className="rounded-full border border-border px-3 py-1 text-[10px] font-medium">
            Flagship
          </span>
        )}
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="ml-auto text-xs font-medium text-primary transition hover:underline"
        >
          Visit live project ↗
        </a>
      </div>

      <div className="space-y-12">
        <Section title="Overview">
          <p className="max-w-3xl text-sm leading-relaxed text-muted">{project.description}</p>
        </Section>

        <Section title={project.problemStatement.title}>
          <p className="mb-4 max-w-3xl text-sm text-muted">{project.problemStatement.description}</p>
          <ul className="grid gap-2 sm:grid-cols-2">
            {project.problemStatement.painPoints.map((point) => (
              <li key={point} className="rounded-lg border border-border p-3 text-sm text-muted">
                {point}
              </li>
            ))}
          </ul>
        </Section>

        <Section title={project.solutionApproach.title}>
          <p className="mb-4 max-w-3xl text-sm text-muted">{project.solutionApproach.description}</p>
          <div className="grid gap-4 md:grid-cols-3">
            {project.solutionApproach.principles.map((p) => (
              <div key={p.title} className="rounded-xl border border-border p-4">
                <h3 className="mb-2 font-medium">{p.title}</h3>
                <p className="text-sm text-muted">{p.description}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Key features">
          <div className="grid gap-3 md:grid-cols-2">
            {project.keyFeatures.map((f) => (
              <div key={f.title} className="rounded-xl border border-border p-4">
                <h3 className="mb-1 font-medium">{f.title}</h3>
                <p className="text-sm text-muted">{f.description}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title={project.architecture.title}>
          <p className="mb-4 text-sm text-muted">{project.architecture.description}</p>
          <div className="space-y-3">
            {project.architecture.layers.map((layer) => (
              <div key={layer.name} className="rounded-xl border border-border p-4">
                <div className="mb-1 flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-medium">{layer.name}</h3>
                  <span className="text-[10px] text-primary">{layer.tech}</span>
                </div>
                <p className="text-sm text-muted">{layer.description}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Technologies">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span key={tech} className="rounded-full border border-border px-3 py-1.5 text-xs">
                {tech}
              </span>
            ))}
          </div>
        </Section>

        <Section title="Target audience">
          <div className="space-y-6">
            <div>
              <h3 className="mb-3 text-xs uppercase tracking-wider text-muted">Primary</h3>
              <div className="grid gap-3 sm:grid-cols-3">
                {project.targetAudience.primary.map((s) => (
                  <div key={s.segment} className="rounded-xl border border-primary/20 bg-primary/5 p-4">
                    <p className="font-medium">{s.segment}</p>
                    <p className="mt-1 text-sm text-muted">{s.need}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-3 text-xs uppercase tracking-wider text-muted">Secondary</h3>
              <div className="grid gap-3 sm:grid-cols-2">
                {project.targetAudience.secondary.map((s) => (
                  <div key={s.segment} className="rounded-xl border border-border p-4">
                    <p className="font-medium">{s.segment}</p>
                    <p className="mt-1 text-sm text-muted">{s.need}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        <Section title="Development timeline">
          <div className="space-y-4">
            {project.developmentPhases.map((phase) => (
              <div key={phase.phase} className="flex gap-4 border-l-2 border-border pl-4">
                <div className="flex-1">
                  <div className="mb-1 flex flex-wrap items-center gap-2">
                    <h3 className="font-medium">{phase.phase}</h3>
                    <span className="text-[10px] text-muted">{phase.duration}</span>
                    <span className="rounded-full bg-white/5 px-2 py-0.5 text-[10px] capitalize">
                      {phase.status.replace("-", " ")}
                    </span>
                  </div>
                  <p className="text-sm text-muted">{phase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section title={project.metrics.title}>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {project.metrics.kpis.map((kpi) => (
              <div key={kpi.metric} className="rounded-xl border border-border p-4">
                <p className="text-lg font-semibold text-primary">{kpi.target}</p>
                <p className="mt-1 text-sm font-medium">{kpi.metric}</p>
                <p className="mt-1 text-xs text-muted">{kpi.description}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Design decisions">
          <div className="space-y-3">
            {project.designDecisions.map((d) => (
              <div key={d.decision} className="rounded-xl border border-border p-4">
                <h3 className="font-medium">{d.decision}</h3>
                <p className="mt-1 text-sm text-muted">{d.reasoning}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Security & privacy">
          <div className="grid gap-2 sm:grid-cols-2">
            {project.securityConsiderations.map((s) => (
              <div key={s.area} className="rounded-lg border border-border p-3 text-sm">
                <span className="font-medium">{s.area}: </span>
                <span className="text-muted">{s.implementation}</span>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Integrations">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {project.integrations.map((i) => (
              <div key={i.name} className="rounded-xl border border-border p-4">
                <div className="mb-1 flex items-center justify-between">
                  <h3 className="font-medium">{i.name}</h3>
                  <span className="text-[10px] capitalize text-muted">{i.status}</span>
                </div>
                <p className="text-xs text-muted">{i.purpose}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Challenges & learnings">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="mb-3 text-sm font-medium">Challenges</h3>
              <ul className="space-y-2">
                {project.challengesAndLearning.challenges.map((c) => (
                  <li key={c} className="text-sm text-muted">
                    · {c}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-3 text-sm font-medium">Learnings</h3>
              <ul className="space-y-2">
                {project.challengesAndLearning.learning.map((l) => (
                  <li key={l} className="text-sm text-muted">
                    · {l}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        <Section title="Future roadmap">
          <div className="space-y-3">
            {project.futureRoadmap.map((item) => (
              <div key={item.feature} className="flex flex-wrap gap-3 rounded-xl border border-border p-4">
                <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[10px] text-primary">
                  {item.timeline}
                </span>
                <div>
                  <h3 className="font-medium">{item.feature}</h3>
                  <p className="text-sm text-muted">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Outcome">
          <p className="rounded-2xl border border-border bg-white/[0.03] p-6 text-sm leading-relaxed text-muted">
            {project.outcomes}
          </p>
        </Section>

        <Section title="More projects">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {others.slice(0, 3).map((p) => (
              <Link
                key={p.slug}
                to={`/projects/${p.slug}`}
                className="rounded-xl border border-border p-4 transition hover:border-primary/40"
              >
                <p className="font-medium">{p.name}</p>
                <p className="mt-1 line-clamp-2 text-sm text-muted">{p.subline}</p>
              </Link>
            ))}
          </div>
        </Section>
      </div>
    </div>
  );
}
