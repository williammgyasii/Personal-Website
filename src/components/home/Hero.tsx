import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { site } from "../../data/site";
import { MatrixRain } from "../three/MatrixRain";
import { AnimatedHeroTitle } from "./AnimatedHeroTitle";

export function Hero() {
  return (
    <section
      className="relative flex min-h-[100dvh] flex-col justify-end overflow-hidden pb-8 pt-20 sm:pb-12 sm:pt-24 lg:h-[100dvh] lg:pb-16 lg:pt-28"
      aria-label="Introduction"
    >
      <div className="absolute inset-0 -z-10 bg-[#1e3830]" aria-hidden="true">
        <MatrixRain />
        <div className="hero-grid absolute inset-0 opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#243d34]/30 via-[#1e3830]/20 to-[#182822]/50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_15%_15%,rgba(7,196,44,0.22),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_90%_25%,rgba(56,189,248,0.18),transparent_45%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(30,56,48,0.6),transparent_60%)]" />
        <div className="hero-scanlines absolute inset-0 opacity-[0.03]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1320px] px-4 sm:px-6">
        {/* Mobile: single column · Desktop: two columns */}
        <div className="flex flex-col gap-6 lg:grid lg:grid-cols-[1.55fr_1fr] lg:items-end lg:gap-14">
          {/* Primary column */}
          <div className="min-w-0">
            <motion.ul
              className="mb-4 flex flex-wrap gap-x-4 gap-y-1.5 sm:mb-6 lg:mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.5 }}
            >
              {site.roles.map((role, i) => (
                <li key={role}>
                  <Link
                    to="/about"
                    className={`text-[11px] font-medium tracking-[0.1em] transition sm:text-xs ${
                      i % 2 === 0 ? "text-white/70 hover:text-primary" : "text-white/70 hover:text-accent"
                    }`}
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
              {site.heroStats.map((stat, i) => (
                <li
                  key={stat}
                  className={`rounded-full border px-2.5 py-1 text-[9px] font-medium tracking-[0.12em] sm:px-3 sm:py-1.5 sm:text-[10px] ${
                    i % 2 === 0
                      ? "border-primary/35 bg-primary/8 text-primary"
                      : "border-accent/35 bg-accent/8 text-accent"
                  }`}
                >
                  {stat}
                </li>
              ))}
            </motion.ul>

            {/* Summary + CTAs on mobile (keeps hero tight) */}
            <div className="mt-5 space-y-4 lg:hidden">
              <p className="inline-flex items-center gap-2 text-[11px] font-medium text-white/80">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
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

          {/* Desktop right column — simple copy only */}
          <motion.div
            className="hidden flex-col gap-8 lg:flex lg:gap-9"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <div className="flex items-center justify-between gap-3 text-sm font-medium">
              <p className="inline-flex items-center gap-2.5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary shadow-[0_0_12px_#07c42c]" />
                </span>
                {site.availability}
              </p>
              <span className="text-muted">{site.timezone}</span>
            </div>

            <p className="max-w-md text-lg leading-relaxed text-white/90">
              {site.heroSummary}
            </p>

            <HeroCTAs />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function HeroCTAs() {
  return (
    <div className="flex flex-col gap-2.5 sm:flex-row sm:gap-3">
      <Link
        to="/projects"
        className="inline-flex h-11 w-full items-center justify-center rounded-[10px] border border-primary bg-primary/10 text-sm font-medium text-primary transition hover:bg-primary hover:text-black sm:h-12 sm:w-auto sm:px-8"
      >
        {site.cta} →
      </Link>
      <Link
        to="/contact"
        className="inline-flex h-11 w-full items-center justify-center rounded-[10px] border border-accent/50 bg-accent/5 text-sm font-medium text-accent transition hover:bg-accent hover:text-black sm:h-12 sm:w-auto sm:px-8"
      >
        {site.ctaSecondary}
      </Link>
    </div>
  );
}
