import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import { experienceHighlights } from "../../data/experience";
import type { WorkHighlight } from "../../data/experience";
import { TechBubbles } from "./TechBubbles";

const PREVIEW_COUNT = 2;

export function ExperienceSection() {
  const previewJobs = experienceHighlights.slice(0, PREVIEW_COUNT);

  return (
    <section id="experience" className="relative overflow-hidden border-t border-border">
      <ParallaxBanner className="relative h-[min(28vh,280px)] min-h-[180px] w-full">
        <ParallaxBannerLayer speed={-14} className="absolute inset-0">
          <div className="experience-gradient-bg absolute inset-0" />
        </ParallaxBannerLayer>

        <ParallaxBannerLayer speed={-22} className="absolute inset-0 flex items-center justify-center">
          <p
            className="pointer-events-none select-none text-center text-[clamp(3.5rem,16vw,10rem)] font-bold leading-[0.88] tracking-[-0.05em] text-white/[0.08]"
            aria-hidden="true"
          >
            EXPERIENCE
          </p>
        </ParallaxBannerLayer>

        <ParallaxBannerLayer speed={-4} className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface/20 to-surface" />
        </ParallaxBannerLayer>
      </ParallaxBanner>

      <div className="relative z-10 px-4 pb-16 sm:px-6 sm:pb-24">
        <div className="mx-auto max-w-[1320px]">
          <div className="-mt-8 mb-10 sm:-mt-12 sm:mb-14">
            <p className="mb-2 text-xs tracking-[0.16em] text-muted">RECENT ROLES</p>
            <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-semibold tracking-tight">
              Experience that compounds
            </h2>
          </div>

          <div className="experience-h-timeline">
            <div className="experience-h-track hidden md:grid" aria-hidden="true">
              <span className="experience-h-line" />
              {previewJobs.map((job) => (
                <div key={job.id} className="experience-h-node">
                  <p className="mb-3 text-xs font-medium tabular-nums tracking-wide text-white/70">
                    {job.period}
                  </p>
                  <span
                    className={`flex h-5 w-5 items-center justify-center rounded-full border-2 border-primary bg-surface ${
                      job.current ? "shadow-[0_0_14px_rgba(7,196,44,0.55)]" : ""
                    }`}
                  >
                    <span className={`h-2 w-2 rounded-full bg-primary ${job.current ? "animate-pulse" : ""}`} />
                  </span>
                </div>
              ))}
            </div>

            <ul className="experience-h-cards">
              {previewJobs.map((job, index) => (
                <ExperienceTimelineCard key={job.id} job={job} index={index} />
              ))}
            </ul>
          </div>

          <div className="mt-10 flex justify-center md:mt-12 md:justify-start">
            <Link
              to="/work"
              className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-primary/50 bg-primary/10 px-8 text-xs font-semibold tracking-[0.14em] text-primary transition hover:bg-primary hover:text-black sm:text-sm"
            >
              VIEW FULL WORK HISTORY →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceTimelineCard({ job, index }: { job: WorkHighlight; index: number }) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="experience-h-card-item min-w-[min(100%,320px)] snap-center md:min-w-0"
    >
      <div className="mb-4 flex items-center gap-3 md:hidden">
        <span
          className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-surface ${
            job.current ? "shadow-[0_0_10px_rgba(7,196,44,0.5)]" : ""
          }`}
        >
          <span className={`h-1.5 w-1.5 rounded-full bg-primary ${job.current ? "animate-pulse" : ""}`} />
        </span>
        <p className="text-xs font-medium tabular-nums text-white/80">{job.period}</p>
        {job.current && (
          <span className="rounded-full border border-primary/40 bg-primary/10 px-2 py-0.5 text-[10px] font-medium tracking-wide text-primary">
            CURRENT
          </span>
        )}
      </div>

      <article className="experience-card relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-black/25 p-5 backdrop-blur-sm sm:p-6">
        <div className="experience-card-glow pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />

        <div className="relative z-10 flex flex-1 flex-col space-y-4">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h3 className="text-lg font-semibold tracking-tight sm:text-xl">{job.role}</h3>
              <p className="mt-1 text-sm font-medium text-primary">{job.company}</p>
              <p className="mt-1 hidden text-xs text-muted md:block">{job.location}</p>
            </div>

            {job.productUrl ? (
              <a
                href={job.productUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-primary/35 bg-primary/10 px-3 py-1 text-[10px] font-semibold tracking-wide text-primary transition hover:bg-primary hover:text-black sm:text-[11px]"
              >
                {job.metric} ↗
              </a>
            ) : (
              <span className="rounded-full border border-primary/35 bg-primary/10 px-3 py-1 text-[10px] font-semibold tracking-wide text-primary sm:text-[11px]">
                {job.metric}
              </span>
            )}
          </div>

          {job.current && (
            <span className="hidden w-fit rounded-full border border-primary/40 bg-primary/10 px-2.5 py-0.5 text-[10px] font-medium tracking-wide text-primary md:inline-flex">
              CURRENT
            </span>
          )}

          <ul className="space-y-2.5 text-sm leading-relaxed text-white/80">
            {job.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-2.5">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          <div className="mt-auto space-y-3 border-t border-border pt-4">
            <p className="text-[10px] font-medium tracking-[0.16em] text-muted">TECHNOLOGIES</p>
            <TechBubbles items={job.technologies} />
          </div>
        </div>
      </article>
    </motion.li>
  );
}
