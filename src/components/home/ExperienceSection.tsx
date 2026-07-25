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
            <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-semibold tracking-tight">
              Experience
            </h2>
            <p className="mt-3 max-w-xl text-base text-muted">
              Recent roles and the products I shipped.
            </p>
          </div>

          <ul className="experience-h-cards grid gap-10 md:grid-cols-2 md:gap-12">
            {previewJobs.map((job, index) => (
              <ExperienceTimelineCard key={job.id} job={job} index={index} />
            ))}
          </ul>

          <div className="mt-10 md:mt-12">
            <Link
              to="/work"
              className="text-sm font-medium text-primary underline decoration-primary/40 underline-offset-4 transition hover:decoration-primary"
            >
              View full work history →
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
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="experience-h-card-item"
    >
      <div className="mb-3 flex items-center gap-3 md:hidden">
        <p className="text-sm tabular-nums text-muted">{job.period}</p>
      </div>

      <article className="experience-card relative flex h-full flex-col border-t border-border pt-6 sm:pt-7">
        <div className="relative z-10 flex flex-1 flex-col space-y-4">
          <div className="space-y-1">
            <p className="hidden text-sm tabular-nums text-muted md:block">{job.period}</p>
            <h3 className="text-lg font-semibold tracking-tight sm:text-xl">{job.role}</h3>
            <p className="text-sm text-white/80">
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

          <ul className="experience-resume-bullets space-y-2 text-sm leading-relaxed text-white/85">
            {job.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>

          <div className="mt-auto space-y-2 border-t border-border pt-4">
            <TechBubbles items={job.technologies} />
          </div>
        </div>
      </article>
    </motion.li>
  );
}
