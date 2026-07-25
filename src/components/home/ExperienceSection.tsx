import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";
import { Parallax, ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import { experienceHighlights } from "../../data/experience";
import type { WorkHighlight } from "../../data/experience";
import { TechBubbles } from "./TechBubbles";
import { usePrefersReducedMotion } from "../../hooks/useMediaQuery";

const PREVIEW_COUNT = 2;

export function ExperienceSection() {
  const previewJobs = experienceHighlights.slice(0, PREVIEW_COUNT);
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const riverDraw = useTransform(scrollYProgress, [0.15, 0.85], [0, 1]);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="experience-river-section relative overflow-hidden border-t border-border"
    >
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

      <div className="experience-river-glow pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />

      <div className="relative z-10 px-4 pb-16 sm:px-6 sm:pb-24">
        <div className="mx-auto max-w-[1320px]">
          <div className="-mt-8 mb-10 sm:-mt-12 sm:mb-12">
            <p className="mb-2 text-xs tracking-[0.16em] text-muted">RECENT ROLES</p>
            <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-semibold tracking-tight">
              Experience that compounds
            </h2>
          </div>

          <div className="relative">
            <ExperienceRiverPath drawProgress={reducedMotion ? undefined : riverDraw} />

            <ul className="experience-timeline relative space-y-2">
              {previewJobs.map((job, index) => (
                <ExperienceTimelineItem
                  key={job.id}
                  job={job}
                  index={index}
                  showLine={index < previewJobs.length - 1}
                  flowSpeed={6 + index * 5}
                />
              ))}

              <li className="experience-timeline-more">
                <Link
                  to="/work"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-primary/50 bg-primary/10 px-8 text-xs font-semibold tracking-[0.14em] text-primary transition hover:bg-primary hover:text-black sm:text-sm"
                >
                  VIEW FULL WORK HISTORY →
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceRiverPath({ drawProgress }: { drawProgress?: MotionValue<number> }) {
  return (
    <div className="pointer-events-none absolute bottom-24 left-0 top-0 hidden w-[220px] md:block" aria-hidden="true">
      <svg
        className="h-full w-full"
        viewBox="0 0 220 800"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="experienceRiverGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(7,196,44,0.05)" />
            <stop offset="35%" stopColor="rgba(7,196,44,0.55)" />
            <stop offset="70%" stopColor="rgba(56,189,248,0.35)" />
            <stop offset="100%" stopColor="rgba(7,196,44,0.08)" />
          </linearGradient>
        </defs>
        <path
          d="M 28 0 C 60 120, 8 220, 28 340 S 60 560, 28 680 V 800"
          stroke="rgba(7,196,44,0.12)"
          strokeWidth="8"
          strokeLinecap="round"
        />
        <motion.path
          d="M 28 0 C 60 120, 8 220, 28 340 S 60 560, 28 680 V 800"
          stroke="url(#experienceRiverGradient)"
          strokeWidth="2"
          strokeLinecap="round"
          className="experience-river-stroke"
          style={drawProgress ? { pathLength: drawProgress } : undefined}
        />
      </svg>
    </div>
  );
}

function ExperienceTimelineItem({
  job,
  index,
  showLine,
  flowSpeed,
}: {
  job: WorkHighlight;
  index: number;
  showLine: boolean;
  flowSpeed: number;
}) {
  return (
    <motion.li
      initial={{ opacity: 0, x: index % 2 === 0 ? -28 : 28 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="experience-timeline-item relative grid gap-5 pb-12 md:grid-cols-[200px_1fr] md:gap-12 lg:grid-cols-[220px_1fr]"
    >
      <Parallax speed={-flowSpeed * 0.35} className="experience-timeline-meta relative flex gap-4 md:block">
        <div className="relative flex w-6 shrink-0 justify-center md:mb-4">
          {showLine && <span className="experience-timeline-line experience-river-line" aria-hidden="true" />}
          <span
            className={`relative z-10 flex h-6 w-6 items-center justify-center rounded-full border-2 border-primary bg-surface ${
              job.current ? "shadow-[0_0_14px_rgba(7,196,44,0.55)]" : ""
            }`}
            aria-hidden="true"
          >
            <span className={`h-2 w-2 rounded-full bg-primary ${job.current ? "animate-pulse" : ""}`} />
          </span>
        </div>

        <div className="min-w-0 pt-0.5">
          <p className="text-sm font-medium tabular-nums text-white/90">{job.period}</p>
          <p className="mt-1 text-xs text-muted">{job.location}</p>
          {job.current && (
            <span className="mt-2 inline-flex rounded-full border border-primary/40 bg-primary/10 px-2.5 py-0.5 text-[10px] font-medium tracking-wide text-primary">
              CURRENT
            </span>
          )}
        </div>
      </Parallax>

      <Parallax speed={flowSpeed}>
        <article className="experience-card relative overflow-hidden rounded-2xl border border-border bg-black/25 p-5 backdrop-blur-sm sm:p-7">
          <div className="experience-card-glow pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />

          <div className="relative z-10 space-y-4 sm:space-y-5">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">{job.role}</h3>
                <p className="mt-1 text-sm font-medium text-primary sm:text-base">{job.company}</p>
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

            <ul className="experience-bullet-list max-w-3xl space-y-3 text-sm leading-relaxed text-white/80 sm:text-[15px]">
              {job.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary shadow-[0_0_8px_#07c42c]" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

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
