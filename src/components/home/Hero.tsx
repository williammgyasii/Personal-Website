import { motion } from "framer-motion";
import { useLenis } from "lenis/react";
import { Link } from "react-router-dom";
import { site } from "../../data/site";
import { AnimatedHeroTitle } from "./AnimatedHeroTitle";
import { HeroPanelBackground } from "./HeroPanelBackground";
import { HeroTitleBackground } from "./HeroTitleBackground";

export function Hero() {
  return (
    <section
      className="relative flex min-h-[100dvh] flex-col justify-end overflow-hidden pb-12 pt-20 sm:pb-16 sm:pt-24 lg:h-[100dvh] lg:pb-20 lg:pt-28"
      aria-label="Introduction"
    >
      <div className="absolute inset-0 -z-10 bg-surface" aria-hidden="true">
        <HeroTitleBackground />
        <div className="hero-grid absolute inset-0 opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#181b22]/30 via-transparent to-surface/90" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-48 bg-gradient-to-b from-transparent via-surface/40 to-surface sm:h-56" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1320px] px-4 sm:px-6">
        <div className="flex flex-col gap-6 lg:grid lg:grid-cols-[1.55fr_1fr] lg:items-end lg:gap-14">
          <div className="min-w-0">
            <motion.ul
              className="mb-4 flex flex-wrap gap-x-4 gap-y-1.5 sm:mb-6 lg:mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.5 }}
            >
              {site.roles.map((role) => (
                <li key={role}>
                  <Link
                    to="/work"
                    className="text-[11px] font-medium tracking-[0.1em] text-white/60 transition hover:text-primary sm:text-xs"
                  >
                    {role}
                  </Link>
                </li>
              ))}
            </motion.ul>

            <AnimatedHeroTitle name={site.name} />

            <motion.ul
              className="mt-4 flex flex-wrap gap-2 sm:mt-6 lg:mt-8"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              {site.heroStats.map((stat) => (
                <li
                  key={stat}
                  className="rounded-full border border-white/15 bg-white/[0.04] px-2.5 py-1 text-[9px] font-medium tracking-[0.12em] text-white/75 sm:px-3 sm:py-1.5 sm:text-[10px]"
                >
                  {stat}
                </li>
              ))}
            </motion.ul>

            <div className="hero-panel-shell relative mt-5 overflow-hidden rounded-2xl border border-white/10 bg-black/30 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-md lg:hidden">
              <HeroPanelBackground />
              <div className="relative z-10 space-y-4">
                <p className="inline-flex items-center gap-2 text-[11px] font-medium text-white/80">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/50 opacity-60" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
                  </span>
                  {site.availability}
                </p>
                <motion.p
                  className="text-[15px] leading-relaxed text-white/90 sm:text-base"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.55 }}
                >
                  {site.heroSummary}
                </motion.p>
                <HeroCTAs />
              </div>
            </div>
          </div>

          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <div className="hero-panel-shell relative overflow-hidden rounded-2xl border border-white/10 bg-black/30 p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-md xl:p-9">
              <HeroPanelBackground />
              <div className="relative z-10 flex flex-col gap-8 lg:gap-9">
                <div className="flex items-center justify-between gap-3 text-sm font-medium">
                  <p className="inline-flex items-center gap-2.5">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/50 opacity-60" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-primary shadow-[0_0_12px_rgba(221,214,200,0.35)]" />
                    </span>
                    {site.availability}
                  </p>
                  <span className="text-muted">{site.timezone}</span>
                </div>

                <p className="text-lg leading-relaxed text-white/90">{site.heroSummary}</p>

                <HeroCTAs />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <HeroScrollCue />
    </section>
  );
}

function HeroScrollCue() {
  const lenis = useLenis();

  const scrollToWorks = () => {
    if (lenis) {
      lenis.scrollTo("#works", { offset: -112, duration: 1.8 });
      return;
    }
    document.getElementById("works")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.button
      type="button"
      onClick={scrollToWorks}
      className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2 text-[10px] font-medium tracking-[0.18em] text-white/50 transition hover:text-primary sm:bottom-6"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.6 }}
      aria-label="Scroll to selected works"
    >
      <span>SELECTED WORKS</span>
      <span className="hero-scroll-cue-arrow text-primary/80">↓</span>
    </motion.button>
  );
}

function HeroCTAs() {
  return (
    <div className="flex flex-col gap-2.5 sm:flex-row sm:gap-3">
      <Link
        to="/projects"
        className="inline-flex h-11 w-full items-center justify-center rounded-[10px] border border-primary/40 bg-primary/10 text-sm font-medium text-primary transition hover:bg-primary hover:text-black sm:h-12 sm:w-auto sm:px-8"
      >
        {site.cta} →
      </Link>
      <Link
        to="/contact"
        className="inline-flex h-11 w-full items-center justify-center rounded-[10px] border border-white/20 bg-white/[0.04] text-sm font-medium text-white/85 transition hover:border-white/35 hover:bg-white/10 sm:h-12 sm:w-auto sm:px-8"
      >
        {site.ctaSecondary}
      </Link>
    </div>
  );
}
