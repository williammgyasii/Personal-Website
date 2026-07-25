import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { site } from "../../data/site";
import { MatrixRain } from "../three/MatrixRain";
import { AnimatedHeroTitle } from "./AnimatedHeroTitle";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.85 + i * 0.08, duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function Hero() {
  return (
    <section
      className="relative flex h-[100dvh] min-h-[600px] flex-col justify-end overflow-hidden pb-12 pt-24 sm:pb-16 sm:pt-28"
      aria-label="Introduction"
    >
      <div className="absolute inset-0 -z-10 bg-surface" aria-hidden="true">
        <MatrixRain />
        <div className="absolute inset-0 bg-gradient-to-br from-surface/40 via-[#152019]/55 to-surface/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_15%,rgba(7,196,44,0.14),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_25%,rgba(56,189,248,0.1),transparent_45%)]" />
        <div className="hero-scanlines absolute inset-0 opacity-[0.04]" />
      </div>

      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1320px] flex-col justify-end px-4 sm:px-6">
        <div className="grid flex-1 items-end gap-10 lg:grid-cols-[1.55fr_1fr] lg:gap-14">
          <div className="min-w-0">
            <motion.ul
              className="mb-5 flex flex-wrap gap-x-5 gap-y-2 sm:mb-8 lg:mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              {site.roles.map((role, i) => (
                <li key={role}>
                  <Link
                    to="/about"
                    className={`text-xs font-medium tracking-[0.12em] transition sm:text-sm ${
                      i % 2 === 0
                        ? "text-white/75 hover:text-primary"
                        : "text-white/75 hover:text-accent"
                    }`}
                  >
                    {role}
                  </Link>
                </li>
              ))}
            </motion.ul>

            <AnimatedHeroTitle name={site.name} />

            <motion.ul
              className="mt-6 flex flex-wrap gap-3 sm:mt-8"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
            >
              {site.heroStats.map((stat, i) => (
                <li
                  key={stat}
                  className={`rounded-full border px-3 py-1.5 text-[10px] font-medium tracking-[0.14em] sm:text-xs ${
                    i % 2 === 0
                      ? "border-primary/35 bg-primary/8 text-primary"
                      : "border-accent/35 bg-accent/8 text-accent"
                  }`}
                >
                  {stat}
                </li>
              ))}
            </motion.ul>
          </div>

          <div className="flex flex-col justify-end gap-8 lg:gap-9">
            <motion.div
              className="flex flex-wrap items-center justify-between gap-3 text-xs font-medium sm:text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <p className="inline-flex items-center gap-2.5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary shadow-[0_0_12px_#07c42c]" />
                </span>
                <span>{site.availability}</span>
              </p>
              <span className="text-muted">{site.timezone}</span>
            </motion.div>

            <motion.dl
              className="space-y-3.5 rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm sm:space-y-4 sm:p-6"
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              {site.heroIntro.map(({ label, value }, i) => (
                <div
                  key={label}
                  className="grid gap-1 sm:grid-cols-[6.5rem_1fr] sm:items-baseline sm:gap-4"
                >
                  <dt
                    className={`text-[10px] font-semibold tracking-[0.2em] sm:text-[11px] ${
                      i % 2 === 0 ? "text-primary" : "text-accent"
                    }`}
                  >
                    {label}
                  </dt>
                  <dd className="text-sm leading-relaxed text-white/85 sm:text-base">
                    {value}
                  </dd>
                </div>
              ))}
            </motion.dl>

            <motion.div
              className="flex flex-col gap-3 sm:flex-row sm:items-center"
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              <Link
                to="/projects"
                className="group relative inline-flex h-12 w-full items-center justify-center overflow-hidden rounded-[10px] border border-primary bg-primary/10 px-8 text-sm font-medium tracking-tight text-primary transition hover:bg-primary hover:text-black sm:w-auto"
              >
                {site.cta} →
              </Link>
              <Link
                to="/contact"
                className="group relative inline-flex h-12 w-full items-center justify-center overflow-hidden rounded-[10px] border border-accent/50 bg-accent/5 px-8 text-sm font-medium tracking-tight text-accent transition hover:bg-accent hover:text-black sm:w-auto"
              >
                {site.ctaSecondary}
              </Link>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="mt-10 hidden items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-muted lg:flex"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          aria-hidden="true"
        >
          <span className="h-px w-12 bg-gradient-to-r from-primary to-accent" />
          Scroll to explore
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          >
            ↓
          </motion.span>
        </motion.div>
      </div>
    </section>
  );
}
