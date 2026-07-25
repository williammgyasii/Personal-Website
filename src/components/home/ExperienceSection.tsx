import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Parallax, ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import { experienceHighlights } from "../../data/experience";
import type { WorkHighlight } from "../../data/experience";
import { TechBubbles } from "./TechBubbles";

export function ExperienceSection() {
  return (
    <section className="relative overflow-hidden border-t border-border">
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
          <div className="-mt-8 mb-10 flex flex-wrap items-end justify-between gap-4 sm:-mt-12 sm:mb-12">
            <div>
              <p className="mb-2 text-xs tracking-[0.16em] text-muted">RECENT ROLES</p>
              <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-semibold tracking-tight">
                Experience that compounds
              </h2>
            </div>
            <Link
              to="/work"
              className="text-[10px] font-medium text-primary transition hover:underline sm:text-xs"
            >
              VIEW FULL WORK HISTORY →
            </Link>
          </div>

          <div className="relative">
            <div
              className="absolute bottom-0 left-[11px] top-0 hidden w-px bg-gradient-to-b from-primary/50 via-accent/30 to-transparent sm:left-[15px] md:block"
              aria-hidden="true"
            />

            <ul className="space-y-8 sm:space-y-10">
              {experienceHighlights.map((job, index) => (
                <ExperienceTimelineItem key={job.id} job={job} index={index} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceTimelineItem({ job, index }: { job: WorkHighlight; index: number }) {
  return (
    <motion.li
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="relative grid gap-5 md:grid-cols-[180px_1fr] md:gap-10 lg:grid-cols-[220px_1fr]"
    >
      <div className="flex items-start gap-4 md:flex-col md:gap-3">
        <span
          className={`relative z-10 mt-1.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border sm:mt-2 ${
            job.current
              ? "border-primary bg-primary/20 shadow-[0_0_16px_rgba(7,196,44,0.45)]"
              : "border-accent/50 bg-accent/10"
          }`}
          aria-hidden="true"
        >
          <span
            className={`h-2 w-2 rounded-full ${job.current ? "animate-pulse bg-primary" : "bg-accent"}`}
          />
        </span>

        <div className="min-w-0">
          <p className="text-sm font-medium tabular-nums text-white/90">{job.period}</p>
          <p className="mt-1 text-xs text-muted">{job.location}</p>
          {job.current && (
            <span className="mt-2 inline-flex rounded-full border border-primary/40 bg-primary/10 px-2.5 py-0.5 text-[10px] font-medium tracking-wide text-primary">
              CURRENT
            </span>
          )}
        </div>
      </div>

      <Parallax speed={index % 2 === 0 ? 4 : -3}>
        <article className="experience-card relative overflow-hidden rounded-2xl border border-border bg-black/25 p-5 backdrop-blur-sm sm:p-7">
          <div className="experience-card-glow pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />

          <div className="relative z-10 space-y-4 sm:space-y-5">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">{job.role}</h3>
                <p className="mt-1 text-sm font-medium text-primary sm:text-base">{job.company}</p>
              </div>
              <span className="rounded-full border border-accent/35 bg-accent/10 px-3 py-1 text-[10px] font-semibold tracking-wide text-accent sm:text-[11px]">
                {job.metric}
              </span>
            </div>

            <p className="max-w-3xl text-sm leading-relaxed text-white/80 sm:text-base">
              {job.summary}
            </p>

            <div className="space-y-3 border-t border-border pt-4">
              <p className="text-[10px] font-medium tracking-[0.16em] text-muted sm:text-[11px]">
                TECHNOLOGIES
              </p>
              <TechBubbles items={job.technologies} />
            </div>
          </div>
        </article>
      </Parallax>
    </motion.li>
  );
}
