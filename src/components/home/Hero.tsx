import { motion } from "framer-motion";
import { useLenis } from "lenis/react";
import { Link } from "react-router-dom";
import { site } from "../../data/site";
import { AnimatedHeroTitle } from "./AnimatedHeroTitle";

export function Hero() {
  return (
    <section
      className="relative flex min-h-[100dvh] flex-col justify-center overflow-hidden px-4 pb-20 pt-28 sm:px-6 sm:pb-24 sm:pt-32"
      aria-label="Introduction"
    >
      <div className="absolute inset-0 -z-10 bg-surface" aria-hidden="true">
        <div className="hero-grid absolute inset-0 opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#181b22]/40 via-transparent to-surface" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1320px]">
        <div className="max-w-2xl">
          <motion.p
            className="mb-6 text-sm text-muted"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            {site.availability}
          </motion.p>

          <AnimatedHeroTitle name={site.name} />

          <motion.p
            className="mt-4 text-lg text-white/85 sm:text-xl"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
          >
            {site.title}
          </motion.p>

          <motion.p
            className="mt-1 text-sm text-muted sm:text-base"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
          >
            {site.subtitle}
          </motion.p>

          <motion.p
            className="mt-8 max-w-xl text-base leading-relaxed text-white/70 sm:text-[17px] sm:leading-7"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.55 }}
          >
            {site.heroSummary}
          </motion.p>

          <motion.p
            className="mt-6 text-sm text-muted"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55, duration: 0.5 }}
          >
            {site.heroStatsLine}
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.5 }}
          >
            <Link
              to="/projects"
              className="text-sm font-medium text-primary underline decoration-primary/40 underline-offset-4 transition hover:decoration-primary"
            >
              {site.cta} →
            </Link>
            <Link
              to="/contact"
              className="text-sm font-medium text-white/70 transition hover:text-white"
            >
              {site.ctaSecondary}
            </Link>
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
      className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2 text-xs text-muted transition hover:text-primary sm:bottom-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 0.6 }}
      aria-label="Scroll to selected works"
    >
      Scroll
    </motion.button>
  );
}
