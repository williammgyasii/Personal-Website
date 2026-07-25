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
    transition: { delay: 0.85 + i * 0.1, duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function Hero() {
  return (
    <section
      className="relative flex h-[100dvh] min-h-[600px] flex-col justify-end overflow-hidden pb-12 pt-24 sm:pb-16 sm:pt-28"
      aria-label="Introduction"
    >
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <MatrixRain />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-black/95" />
        <div className="hero-scanlines absolute inset-0 opacity-[0.07]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(7,196,44,0.12),transparent_55%)]" />
      </div>

      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1320px] flex-col justify-end px-4 sm:px-6">
        <div className="grid flex-1 items-end gap-10 lg:grid-cols-[1.65fr_1fr] lg:gap-12">
          <div className="min-w-0">
            <motion.ul
              className="mb-5 flex flex-wrap gap-x-5 gap-y-2 sm:mb-8 lg:mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              {site.roles.map((role) => (
                <li key={role}>
                  <Link
                    to="/about"
                    className="text-xs font-medium tracking-[0.12em] text-white/70 transition hover:text-primary sm:text-sm"
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
              {site.heroStats.map((stat) => (
                <li
                  key={stat}
                  className="rounded-full border border-primary/30 bg-primary/5 px-3 py-1.5 text-[10px] font-medium tracking-[0.14em] text-primary sm:text-xs"
                >
                  {stat}
                </li>
              ))}
            </motion.ul>
          </div>

          <div className="flex flex-col justify-end gap-8 lg:gap-10">
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

            <motion.p
              className="max-w-lg text-base leading-relaxed text-white/80 sm:text-lg sm:leading-relaxed"
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              {site.heroDescription}
            </motion.p>

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
                className="group relative inline-flex h-12 w-full items-center justify-center overflow-hidden rounded-[10px] border border-white/30 px-8 text-sm font-medium tracking-tight transition hover:border-white sm:w-auto"
              >
                <span className="relative z-10 transition group-hover:text-black">
                  {site.ctaSecondary}
                </span>
                <span className="absolute inset-x-[-1px] bottom-[-1px] top-[calc(100%+1px)] bg-white transition-all duration-300 group-hover:top-0" />
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
          <span className="h-px w-12 bg-primary/50" />
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
