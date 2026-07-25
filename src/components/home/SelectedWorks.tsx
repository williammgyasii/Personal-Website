import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Parallax,
  ParallaxBanner,
  ParallaxBannerLayer,
} from "react-scroll-parallax";
import { projects } from "../../data/projects";
import { TechBubbles } from "./TechBubbles";
import { ProjectShowcaseImage } from "./ProjectShowcaseImage";

export function SelectedWorks() {
  const [active, setActive] = useState(0);
  const current = projects[active];
  const total = projects.length;

  const prev = () => setActive((i) => (i === 0 ? total - 1 : i - 1));
  const next = () => setActive((i) => (i === total - 1 ? 0 : i + 1));

  return (
    <section id="works" className="relative scroll-mt-28 bg-surface pt-16 sm:pt-20 lg:pt-24">
      <ParallaxBanner className="relative h-[min(42vh,420px)] min-h-[240px] w-full overflow-hidden">
        <ParallaxBannerLayer speed={-25} className="absolute inset-0">
          <img
            src="https://picsum.photos/seed/mountain-hero/2400/1200"
            alt=""
            className="h-[130%] w-full object-cover object-center"
            loading="lazy"
          />
        </ParallaxBannerLayer>

        <ParallaxBannerLayer speed={-8} className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-black/45 to-black/15" />
        </ParallaxBannerLayer>

        <ParallaxBannerLayer speed={-4} className="absolute inset-x-0 top-0 h-32">
          <div className="h-full bg-gradient-to-b from-[#1e3830]/90 via-[#1a2e28]/35 to-transparent" />
        </ParallaxBannerLayer>
      </ParallaxBanner>

      <div className="relative z-10 px-4 sm:px-6">
        <div className="mx-auto max-w-[1320px]">
          <div className="-mt-16 mb-8 flex flex-wrap items-end justify-between gap-4 sm:-mt-24 sm:mb-10 md:-mt-28 lg:-mt-32">
            <p className="text-xs tracking-[0.16em] text-muted">SELECTED WORKS</p>
            <div className="flex items-center gap-5">
              <span className="text-xs tabular-nums text-muted">
                {String(active + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
              </span>
              <Link
                to="/projects"
                className="text-[10px] font-medium text-primary transition hover:underline sm:text-xs"
              >
                VIEW ALL →
              </Link>
            </div>
          </div>

          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)] lg:gap-14 xl:gap-16">
            <Parallax speed={6} className="order-2 lg:order-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col gap-5 sm:gap-6"
                >
                  <div className="space-y-3">
                    <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-accent sm:text-xs">
                      {current.category}
                    </p>
                    <h2 className="text-[clamp(2rem,6vw,3.75rem)] font-semibold leading-[0.95] tracking-tight">
                      {current.name}
                    </h2>
                  </div>

                  <p className="max-w-xl text-sm leading-relaxed text-white/80 sm:text-[15px]">
                    {current.summary}
                  </p>

                  <div className="space-y-3">
                    <p className="text-[10px] font-medium tracking-[0.16em] text-muted">TECH STACK</p>
                    <TechBubbles items={current.technologies} />
                  </div>

                  <div className="flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:flex-wrap">
                    <Link
                      to={`/projects/${current.id}`}
                      className="inline-flex h-11 items-center justify-center rounded-full border border-primary bg-primary/10 px-6 text-xs font-medium text-primary transition hover:bg-primary hover:text-black"
                    >
                      CASE STUDY →
                    </Link>
                    <a
                      href={current.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex h-11 items-center justify-center rounded-full border border-border px-6 text-xs font-medium transition hover:border-accent hover:text-accent"
                    >
                      LIVE SITE ↗
                    </a>
                  </div>

                  <div className="flex items-center gap-5 pt-2">
                    <button
                      type="button"
                      onClick={prev}
                      className="text-xs font-medium tracking-tight text-muted transition hover:text-primary"
                      aria-label="Previous project"
                    >
                      ← PREV
                    </button>
                    <button
                      type="button"
                      onClick={next}
                      className="text-xs font-medium tracking-tight text-muted transition hover:text-primary"
                      aria-label="Next project"
                    >
                      NEXT →
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </Parallax>

            <Parallax speed={-10} className="order-1 lg:order-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.5 }}
                >
                  <ProjectShowcaseImage project={current} />
                </motion.div>
              </AnimatePresence>
            </Parallax>
          </div>
        </div>
      </div>

      <div className="h-16 sm:h-20" aria-hidden="true" />
    </section>
  );
}
