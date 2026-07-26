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
    <section id="experience" className="relative overflow-hidden border-t border-border bg-surface-secondary">
      <ParallaxBanner className="relative h-[min(28vh,280px)] min-h-[180px] w-full">
        <ParallaxBannerLayer speed={-14} className="absolute inset-0">
          <div className="experience-gradient-bg absolute inset-0" />
        </ParallaxBannerLayer>

        <ParallaxBannerLayer speed={-22} className="absolute inset-0 flex items-center justify-center">
          <p
            className="pointer-events-none select-none text-center text-[clamp(3.5rem,16vw,10rem)] font-bold leading-[0.88] tracking-[-0.05em] text-foreground/[0.06]"
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
            <p className="text-xs font-medium tracking-[0.14em] text-muted">CAREER</p>
            <h2 className="mt-1 text-[clamp(1.75rem,4vw,2.75rem)] font-semibold tracking-tight">
              Experience
            </h2>
            <p className="mt-3 max-w-xl text-base text-muted">
              Recent roles and the products I shipped.
            </p>
          </div>

          <ul className="flex flex-col gap-8 lg:gap-0">
            {previewJobs.map((job, index) => (
              <ExperienceTimelineRow
                key={job.id}
                job={job}
                index={index}
              />
            ))}
          </ul>

          <div className="mt-12 flex justify-center lg:mt-16">
            <motion.div
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98, y: 0 }}
              transition={{ type: "spring", stiffness: 420, damping: 28 }}
            >
              <Link
                to="/work"
                className="inline-flex h-12 min-w-[min(100%,320px)] items-center justify-center rounded-full bg-primary px-10 text-base font-medium text-white transition-colors hover:bg-[#0077ED] sm:h-14 sm:min-w-[360px] sm:px-12 sm:text-lg"
              >
                View full work history →
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceTimelineRow({
  job,
  index,
}: {
  job: WorkHighlight;
  index: number;
}) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="lg:grid lg:grid-cols-[minmax(140px,220px)_1fr] lg:gap-x-12 lg:border-t lg:border-border lg:py-12 xl:gap-x-16"
    >
      <div className="mb-4 flex flex-wrap items-start gap-x-3 gap-y-1 lg:mb-0 lg:sticky lg:top-32 lg:self-start lg:pt-1">
        <p className="text-sm tabular-nums text-muted">{job.period}</p>
        {job.current && (
          <span className="rounded-full border border-primary/30 bg-primary/8 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-primary">
            Current
          </span>
        )}
        <p className="w-full text-xs text-faint lg:mt-1">{job.location}</p>
      </div>

      <ExperienceCard job={job} />
    </motion.li>
  );
}

function ExperienceCard({ job }: { job: WorkHighlight }) {
  return (
    <article className="rounded-2xl border border-border bg-surface p-5 shadow-[0_8px_30px_rgba(0,0,0,0.04)] sm:p-7 lg:p-8">
      <div className="space-y-5">
        <div className="space-y-1.5">
          <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">{job.role}</h3>
          <p className="text-sm text-muted sm:text-base">
            {job.company}
            {job.productUrl ? (
              <>
                {" · "}
                <a
                  href={job.productUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary underline decoration-primary/30 underline-offset-2 transition hover:decoration-primary"
                >
                  {job.metric} ↗
                </a>
              </>
            ) : (
              <span className="text-muted"> · {job.metric}</span>
            )}
          </p>
        </div>

        <div className="rounded-xl border border-border/70 bg-surface-secondary/50 px-4 py-4 sm:px-5 sm:py-5">
          <ul className="experience-resume-bullets space-y-3.5 text-[0.9375rem] leading-[1.7] text-foreground sm:space-y-4 sm:text-base sm:leading-[1.72]">
            {job.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </div>

        <div className="border-t border-border pt-5">
          <TechBubbles items={job.technologies} />
        </div>
      </div>
    </article>
  );
}
