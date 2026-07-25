import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { workExperiences, experienceFilters, type WorkType } from "../data/work";
import { PageHeader } from "../components/layout/PageHeader";

export function WorkPage() {
  const [filter, setFilter] = useState<WorkType>("all");

  const filtered =
    filter === "all"
      ? workExperiences
      : workExperiences.filter((w) => w.type === filter);

  return (
    <>
      <PageHeader
        label="WORK"
        title="Experience that compounds"
        description="Six years across supply chain SaaS, fintech, edtech, and healthtech. Shipping products that move metrics, not just tickets. Every role below came with real users and real accountability."
      />

      <div className="mx-auto max-w-[1320px] px-4 pb-24 sm:px-6 sm:pb-32">
        <div className="mb-10 flex flex-wrap gap-2">
          {experienceFilters.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setFilter(f.id)}
              className={`rounded-full border px-4 py-2 text-xs font-medium transition ${
                filter === f.id
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border text-muted hover:border-white/40"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="space-y-8">
          {filtered.map((job, i) => (
            <motion.article
              key={job.id}
              className="rounded-2xl border border-border p-6 sm:p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h2 className="text-xl font-semibold">{job.title}</h2>
                  <p className="text-sm text-primary">{job.company}</p>
                </div>
                <div className="text-right text-xs text-muted">
                  <p>{job.duration}</p>
                  <p>{job.location}</p>
                  {job.current && (
                    <span className="mt-1 inline-block rounded-full bg-primary/10 px-2 py-0.5 text-primary">
                      Current
                    </span>
                  )}
                </div>
              </div>

              <p className="mb-4 text-sm text-muted">{job.description}</p>

              <div className="mb-4 grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="mb-2 text-xs font-medium uppercase tracking-wider text-muted">
                    Responsibilities
                  </h3>
                  <ul className="space-y-1">
                    {job.responsibilities.map((r) => (
                      <li key={r} className="text-sm text-muted">
                        · {r}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="mb-2 text-xs font-medium uppercase tracking-wider text-muted">
                    Achievements
                  </h3>
                  <ul className="space-y-1">
                    {job.achievements.map((a) => (
                      <li key={a} className="text-sm text-muted">
                        · {a}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {job.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border px-3 py-1 text-[10px] font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-12">
          <Link
            to="/projects"
            className="inline-flex h-11 items-center rounded-full border border-border px-6 text-xs font-medium transition hover:border-primary hover:text-primary"
          >
            VIEW PROJECTS →
          </Link>
        </div>
      </div>
    </>
  );
}
