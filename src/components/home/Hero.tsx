import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { site } from "../../data/site";
import { FloatingShape } from "../three/FloatingShape";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function Hero() {
  return (
    <section
      className="relative flex min-h-[100dvh] min-h-[560px] items-end overflow-hidden pb-10 pt-28 sm:pb-14 sm:pt-32 md:min-h-[900px] md:pb-16 md:pt-[120px]"
      aria-label="Introduction"
    >
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/video/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-primary mix-blend-hue" />
        <div className="absolute inset-0 bg-black/30 sm:bg-black/20" />
      </div>

      <FloatingShape className="absolute right-[2%] top-[12%] hidden h-[320px] w-[320px] opacity-80 md:block lg:right-[8%] lg:h-[420px] lg:w-[420px] lg:opacity-90" />

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-black sm:h-[200px]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1320px] px-4 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[2fr_1fr] md:gap-8 lg:gap-12">
          <div className="min-w-0">
            <ul className="mb-6 flex flex-wrap gap-x-4 gap-y-2 sm:mb-8 sm:block sm:space-y-2 md:mb-[150px] xl:mb-[273px]">
              {site.roles.map((role, i) => (
                <motion.li
                  key={role}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={fadeUp}
                  className="sm:list-item"
                >
                  <Link
                    to="/about"
                    className="text-[11px] font-medium tracking-tight transition hover:text-primary sm:text-xs"
                  >
                    {role}
                  </Link>
                </motion.li>
              ))}
            </ul>

            <motion.h1
              className="break-words text-[clamp(2.75rem,14vw,12.5rem)] font-[550] leading-[0.9] tracking-[-0.06em] sm:text-[clamp(3.5rem,16vw,12.5rem)] sm:leading-[0.88]"
              initial={{ opacity: 0, rotateX: 12, y: 24 }}
              animate={{ opacity: 1, rotateX: 0, y: 0 }}
              transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              style={{ perspective: 800 }}
            >
              {site.name}
              <span className="text-primary">_</span>
            </motion.h1>
          </div>

          <div className="flex flex-col justify-between gap-8 md:gap-0">
            <motion.div
              className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 text-[11px] font-medium sm:text-xs md:mb-[150px] md:pt-6 xl:mb-[303px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              <p className="inline-flex max-w-full items-center gap-2">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary shadow-[0_0_10px_#07c42c]" />
                <span className="truncate sm:whitespace-normal">
                  {site.availability}
                </span>
              </p>
              <span className="shrink-0 text-muted">© {site.year}</span>
            </motion.div>

            <div>
              <motion.p
                className="mb-6 max-w-md text-sm leading-relaxed text-muted sm:mb-8 md:mb-10"
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.65, duration: 0.8 }}
              >
                {site.heroDescription}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <Link
                  to="/contact"
                  className="group relative inline-flex h-11 w-full items-center justify-center overflow-hidden rounded-[10px] border border-white px-6 text-xs font-medium tracking-tight sm:h-10 sm:w-auto"
                >
                  <span className="relative z-10 transition group-hover:text-black">
                    {site.cta}
                  </span>
                  <span className="absolute inset-x-[-1px] bottom-[-1px] top-[calc(100%+1px)] bg-white transition-all duration-300 group-hover:top-0" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
