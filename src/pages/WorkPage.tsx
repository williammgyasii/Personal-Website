import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronIcon } from "../components/icons/ChevronIcon";
import { workExperiences, experienceFilters, type WorkExperience, type WorkType } from "../data/work";
import { toTechBubbles } from "../data/experience";
import { PageHeader } from "../components/layout/PageHeader";
import { TechBubbles } from "../components/home/TechBubbles";

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
        description="Seven years across supply chain SaaS, fintech, edtech, worship tech, and healthtech. Real users, real accountability, measurable outcomes."
      />

      <div className="mx-auto max-w-[1320px] px-4 pb-24 sm:px-6 sm:pb-32">
        <div className="mb-10 flex flex-wrap gap-2 sm:mb-12">
          {experienceFilters.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setFilter(f.id)}
              className={`inline-flex h-10 items-center rounded-full border px-5 text-sm font-medium transition ${
                filter === f.id
                  ? "border-primary bg-primary text-white shadow-[0_8px_24px_rgba(0,113,227,0.25)]"
                  : "border-border bg-surface text-muted hover:border-primary/40 hover:text-foreground"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <p className="rounded-2xl border border-border bg-surface-secondary px-6 py-10 text-center text-muted">
            No roles in this category yet.
          </p>
        ) : (
          <ul className="flex flex-col gap-10 lg:gap-0">
            {filtered.map((job, i) => (
              <WorkTimelineRow key={job.id} job={job} index={i} />
            ))}
          </ul>
        )}

        <div className="mt-14 flex justify-center sm:mt-16">
          <motion.div
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98, y: 0 }}
            transition={{ type: "spring", stiffness: 420, damping: 28 }}
          >
            <Link
              to="/projects"
              className="inline-flex h-12 min-w-[min(100%,280px)] items-center justify-center gap-2 rounded-full bg-primary px-10 text-base font-medium text-white transition-colors hover:bg-[#0077ED] sm:h-14 sm:min-w-[320px] sm:px-12"
            >
              View projects
              <ChevronIcon direction="right" className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  );
}

function WorkTimelineRow({ job, index }: { job: WorkExperience; index: number }) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="lg:grid lg:grid-cols-[minmax(150px,220px)_1fr] lg:gap-x-12 lg:border-t lg:border-border lg:py-12 xl:gap-x-16"
    >
      <div className="mb-4 flex flex-wrap items-start gap-x-3 gap-y-1 lg:mb-0 lg:sticky lg:top-32 lg:self-start lg:pt-1">
        <p className="text-sm tabular-nums text-muted">{job.duration}</p>
        {job.current && (
          <span className="rounded-full border border-primary/30 bg-primary/8 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-primary">
            Current
          </span>
        )}
        <p className="w-full text-xs text-faint lg:mt-1">{job.location}</p>
        <span className="mt-1 rounded-full border border-border bg-surface-secondary px-2.5 py-0.5 text-[10px] font-medium text-muted">
          {job.type === "full-time" ? "Full time" : "Contract"}
        </span>
      </div>

      <WorkExperienceCard job={job} />
    </motion.li>
  );
}

function WorkExperienceCard({ job }: { job: WorkExperience }) {
  return (
    <article
      className={`rounded-2xl border bg-surface p-5 shadow-[0_8px_30px_rgba(0,0,0,0.04)] sm:p-7 lg:p-8 ${
        job.current ? "border-primary/25 ring-1 ring-primary/10" : "border-border"
      }`}
    >
      <div className="space-y-5">
        <div className="space-y-2">
          <span className="inline-flex rounded-full border border-primary/20 bg-primary/8 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wide text-primary">
            {job.industry}
          </span>
          <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">{job.title}</h2>
          <p className="text-base text-primary">{job.company}</p>
        </div>

        <p className="text-sm leading-relaxed text-foreground/88 sm:text-base sm:leading-[1.65]">
          {job.description}
        </p>

        <div className="flex flex-col gap-4">
          <WorkBulletPanel
            title="Responsibilities"
            items={job.responsibilities}
            variant="default"
          />
          <WorkBulletPanel
            title="Achievements"
            items={job.achievements}
            variant="highlight"
          />
        </div>

        <div className="border-t border-border pt-5">
          <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.14em] text-muted">
            Stack
          </p>
          <TechBubbles items={toTechBubbles(job.technologies)} />
        </div>
      </div>
    </article>
  );
}

function WorkBulletPanel({
  title,
  items,
  variant,
}: {
  title: string;
  items: string[];
  variant: "default" | "highlight";
}) {
  const isHighlight = variant === "highlight";

  return (
    <div
      className={`rounded-xl border px-4 py-4 sm:px-5 sm:py-5 ${
        isHighlight
          ? "border-primary/15 bg-primary/[0.05]"
          : "border-border/70 bg-surface-secondary/50"
      }`}
    >
      <h3
        className={`mb-3 text-[10px] font-medium uppercase tracking-[0.14em] ${
          isHighlight ? "text-primary" : "text-muted"
        }`}
      >
        {title}
      </h3>
      <ul
        className={`space-y-3 text-[0.9375rem] leading-[1.68] sm:space-y-3.5 sm:text-base sm:leading-[1.7] ${
          isHighlight ? "work-achievement-bullets" : "experience-resume-bullets"
        } ${isHighlight ? "text-foreground" : "text-foreground/90"}`}
      >
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
