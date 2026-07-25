import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Parallax, ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import { projects } from "../../data/projects";
import { TechBubbles } from "./TechBubbles";
import { ProjectShowcaseImage } from "./ProjectShowcaseImage";
import { WorksProjectNav } from "./WorksProjectNav";

export function SelectedWorks() {
  const [active, setActive] = useState(0);
  const current = projects[active];
  const total = projects.length;

  const prev = () => setActive((i) => (i === 0 ? total - 1 : i - 1));
  const next = () => setActive((i) => (i === total - 1 ? 0 : i + 1));

  return (
    <section id="works" className="relative scroll-mt-28 overflow-hidden bg-surface pt-12 sm:pt-16 lg:pt-20">
      <ParallaxBanner className="relative h-[min(36vh,360px)] min-h-[200px] w-full">
        <ParallaxBannerLayer speed={-12} className="absolute inset-0">
          <div className="works-gradient-bg absolute inset-0" />
          <div className="works-gradient-grid absolute inset-0 opacity-40" />
        </ParallaxBannerLayer>

        <ParallaxBannerLayer speed={-20} className="absolute inset-0 flex items-center justify-center">
          <p
            className="pointer-events-none select-none text-center text-[clamp(4rem,18vw,13rem)] font-bold leading-[0.85] tracking-[-0.05em] text-white/[0.09]"
            aria-hidden="true"
          >
            SELECTED
            <br />
            WORKS
          </p>
        </ParallaxBannerLayer>

        <ParallaxBannerLayer speed={-3} className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#181b22]/80 via-transparent to-surface" />
        </ParallaxBannerLayer>
      </ParallaxBanner>

      <div className="relative z-10 px-4 sm:px-6">
        <div className="mx-auto max-w-[1320px]">
          <div className="-mt-10 mb-8 flex flex-wrap items-center justify-end gap-4 sm:-mt-14 sm:mb-10 lg:-mt-16">
            <Link
              to="/projects"
              className="text-sm text-muted transition hover:text-primary"
            >
              View all projects →
            </Link>
          </div>

          <div className="mb-8 sm:mb-10">
            <WorksProjectNav active={active} total={total} onPrev={prev} onNext={next} />
          </div>

          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.45fr)_minmax(0,0.72fr)] lg:gap-12 xl:gap-14">
            <Parallax speed={5} className="order-2 lg:order-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col gap-6 sm:gap-7"
                >
                  <div className="space-y-4">
                    <p className="text-sm text-muted">{current.category}</p>
                    <h2 className="text-[clamp(2rem,6vw,3.5rem)] font-semibold leading-[1.05] tracking-tight">
                      {current.name}
                    </h2>
                  </div>

                  <p className="max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg sm:leading-relaxed">
                    {current.summary}
                  </p>

                  <div className="space-y-2">
                    <TechBubbles items={current.technologies} />
                  </div>

                  <div className="flex flex-wrap gap-x-6 gap-y-2 border-t border-border pt-7">
                    <Link
                      to={`/projects/${current.id}`}
                      className="text-sm font-medium text-primary underline decoration-primary/40 underline-offset-4 transition hover:decoration-primary"
                    >
                      Case study →
                    </Link>
                    <a
                      href={current.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-muted transition hover:text-white"
                    >
                      Live site ↗
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </Parallax>

            <Parallax speed={-6} className="order-1 lg:order-2 lg:pt-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.01 }}
                  transition={{ duration: 0.45 }}
                  className="mx-auto w-full max-w-md lg:max-w-none"
                >
                  <ProjectShowcaseImage project={current} compact />
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
