import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Parallax,
  ParallaxBanner,
  ParallaxBannerLayer,
} from "react-scroll-parallax";
import { projects } from "../../data/projects";

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
            src="/images/mountain.png"
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

      <div className="relative z-10 -mt-20 px-4 sm:-mt-28 sm:px-6 md:-mt-32 lg:-mt-36">
        <div className="mx-auto grid max-w-[1320px] gap-10 md:grid-cols-[1fr_1.6fr] md:gap-12">
          <Parallax speed={8} className="order-2 md:order-1">
            <div>
              <div className="mb-4 flex flex-wrap items-center justify-between gap-3 sm:mb-6">
                <p className="text-xs tracking-tight text-muted">SELECTED WORKS</p>
                <Link
                  to="/projects"
                  className="text-[10px] font-medium text-primary transition hover:underline sm:text-xs"
                >
                  VIEW ALL →
                </Link>
              </div>

              <div className="relative min-h-[72px] pr-20 sm:min-h-[100px] sm:pr-24 md:min-h-[120px]">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={current.id}
                    className="text-[clamp(1.75rem,8vw,4.5rem)] font-semibold leading-tight tracking-tight"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -40 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {current.name}
                  </motion.p>
                </AnimatePresence>

                {current.flagship && (
                  <span className="absolute right-0 top-0 rounded-full border border-primary/40 bg-primary/10 px-2.5 py-1 text-[9px] font-medium text-primary sm:px-3 sm:text-[10px]">
                    FLAGSHIP
                  </span>
                )}
              </div>
            </div>
          </Parallax>

          <Parallax speed={-12} className="relative order-1 md:order-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                className="overflow-hidden rounded-xl border border-border shadow-[0_24px_80px_rgba(0,0,0,0.35)] sm:rounded-2xl"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.5 }}
              >
                <motion.img
                  src={current.image}
                  alt={current.name}
                  className="aspect-[16/10] w-full object-cover sm:aspect-[4/3]"
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.6 }}
                />
              </motion.div>
            </AnimatePresence>
          </Parallax>
        </div>
      </div>

      <div className="relative z-10 px-4 pt-10 pb-16 sm:px-6 sm:pt-12 sm:pb-20">
        <div className="mx-auto grid max-w-[1320px] gap-6 sm:gap-8 md:grid-cols-3">
          <div className="min-h-[40px] md:col-span-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                className="flex flex-wrap gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {current.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border px-3 py-1.5 text-[10px] font-medium tracking-tight transition hover:border-primary hover:text-primary sm:px-4 sm:py-2 sm:text-[11px]"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 md:justify-center">
            <button
              type="button"
              onClick={prev}
              className="min-h-[44px] min-w-[44px] text-xs font-medium tracking-tight transition hover:text-primary"
              aria-label="Previous project"
            >
              ← PREV
            </button>
            <button
              type="button"
              onClick={next}
              className="min-h-[44px] min-w-[44px] text-xs font-medium tracking-tight transition hover:text-primary"
              aria-label="Next project"
            >
              NEXT →
            </button>
            <span className="text-xs text-muted">
              {String(active + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
          </div>

          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end md:flex-col md:items-end md:text-right">
            <p className="text-[clamp(1.75rem,8vw,4rem)] font-semibold tracking-tighter">
              20<span className="text-primary">26</span>
            </p>
            <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
              <Link
                to={`/projects/${current.id}`}
                className="inline-flex h-11 w-full items-center justify-center rounded-full border border-primary bg-primary/10 px-4 text-center text-[11px] font-medium text-primary transition hover:bg-primary/20 sm:h-10 sm:w-auto sm:px-5 sm:text-xs"
              >
                <span className="truncate">CASE STUDY →</span>
              </Link>
              <a
                href={current.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 w-full items-center justify-center rounded-full border border-border px-4 text-center text-[11px] font-medium transition hover:border-primary sm:h-10 sm:w-auto sm:px-5 sm:text-xs"
              >
                <span className="truncate">LIVE SITE ↗</span>
              </a>
            </div>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.p
            key={current.id}
            className="mx-auto mt-6 max-w-[1320px] text-sm leading-relaxed text-muted sm:mt-8"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            {current.description}
          </motion.p>
        </AnimatePresence>
      </div>
    </section>
  );
}
