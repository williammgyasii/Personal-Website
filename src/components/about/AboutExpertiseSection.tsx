import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import { useLenis } from "lenis/react";
import { expertiseCategories } from "../../data/about";
import { ChevronIcon } from "../icons/ChevronIcon";
import { usePrefersReducedMotion } from "../../hooks/useMediaQuery";
import {
  defaultExpertiseCardTheme,
  expertiseCardThemes,
} from "./expertiseCardThemes";

function ExpertiseCategoryCard({
  category,
  index,
}: {
  category: (typeof expertiseCategories)[0];
  index: number;
}) {
  const theme = expertiseCardThemes[category.id] ?? defaultExpertiseCardTheme;

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-48px" }}
      transition={{ duration: 0.55, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex h-full w-full flex-col overflow-hidden rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.05)]"
      style={{ border: `1px solid ${theme.border}` }}
    >
      <div className="absolute inset-0" style={{ background: theme.surface }} aria-hidden />

      <div
        className="pointer-events-none absolute -left-10 -top-10 h-36 w-36 rounded-full opacity-50 blur-3xl transition-opacity duration-500 group-hover:opacity-70"
        style={{ background: theme.glow }}
        aria-hidden
      />

      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[46%] overflow-hidden"
        aria-hidden
      >
        <p
          className="expertise-card-watermark absolute right-[-0.04em] top-[0.35em] max-w-[108%] text-right text-[clamp(2.75rem,14vw,4.75rem)] font-bold uppercase leading-[0.82] tracking-tighter"
          style={{ backgroundImage: theme.watermarkGradient }}
        >
          {category.label}
        </p>
      </div>

      <div className="relative z-10 flex h-full flex-col p-6 sm:p-7">
        <div className="relative z-10 shrink-0 pr-2">
          <h3
            className="text-lg font-semibold tracking-tight sm:text-xl"
            style={{ color: theme.title }}
          >
            {category.label}
          </h3>
          <p className="mt-2.5 min-h-[5rem] text-sm leading-relaxed text-foreground/82 sm:min-h-[4.75rem] sm:text-[0.9375rem] sm:leading-[1.65] lg:min-h-[4.5rem]">
            {category.summary}
          </p>
        </div>

        <div className="relative z-20 mt-4 flex min-h-[10.5rem] flex-wrap content-start gap-2 rounded-2xl bg-white/92 p-3.5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.6)] backdrop-blur-sm sm:min-h-[9.5rem] sm:gap-2.5 sm:p-4 lg:min-h-[10rem]">
          {category.items.map((item) => (
            <span
              key={item}
              className="rounded-full bg-white px-3 py-1.5 text-[10px] font-medium text-foreground shadow-[0_1px_2px_rgba(0,0,0,0.06)] sm:text-[11px]"
              style={{
                border: `1px solid ${theme.pillBorder}`,
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

function ExpertiseGrid() {
  return (
    <div className="mt-8 grid grid-cols-1 gap-7 sm:mt-10 sm:grid-cols-2 sm:items-stretch sm:gap-5 lg:grid-cols-3 lg:gap-6">
      {expertiseCategories.map((category, i) => (
        <div key={category.id} className="flex h-full">
          <ExpertiseCategoryCard category={category} index={i} />
        </div>
      ))}
    </div>
  );
}

export function AboutExpertiseSection() {
  const reducedMotion = usePrefersReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const lenis = useLenis();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const headingOpacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0.6, 1, 1, 0.6]);

  const scrollToRoles = () => {
    if (lenis) {
      lenis.scrollTo("#about-roles", { offset: -96, duration: 1.85 });
      return;
    }
    document.getElementById("about-roles")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  if (reducedMotion) {
    return (
      <section
        id="expertise"
        className="scroll-mt-28 border-t border-border bg-surface-secondary px-4 py-16 sm:px-6 sm:py-20"
      >
        <div className="mx-auto max-w-[1320px]">
          <AboutExpertiseHeader />
          <ExpertiseGrid />
        </div>
      </section>
    );
  }

  return (
    <section
      id="expertise"
      ref={sectionRef}
      className="relative scroll-mt-28 overflow-hidden border-t border-border bg-surface-secondary"
    >
      <ParallaxBanner className="relative h-[min(32vh,320px)] min-h-[200px] w-full">
        <ParallaxBannerLayer speed={-16} className="absolute inset-0">
          <div className="about-expertise-gradient absolute inset-0" />
        </ParallaxBannerLayer>

        <ParallaxBannerLayer speed={-24} className="absolute inset-0 flex items-center justify-center">
          <p
            className="pointer-events-none select-none text-center text-[clamp(3rem,14vw,9rem)] font-bold leading-[0.88] tracking-[-0.05em] text-foreground/[0.05]"
            aria-hidden="true"
          >
            EXPERTISE
          </p>
        </ParallaxBannerLayer>

        <ParallaxBannerLayer speed={-4} className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface-secondary/30 to-surface-secondary" />
        </ParallaxBannerLayer>
      </ParallaxBanner>

      <div className="relative z-10 mx-auto max-w-[1320px] px-4 pb-16 sm:px-6 sm:pb-20">
        <motion.div style={{ opacity: headingOpacity }} className="-mt-10 sm:-mt-14">
          <AboutExpertiseHeader />
        </motion.div>

        <ExpertiseGrid />

        <div className="mt-12 flex justify-center sm:mt-14">
          <button
            type="button"
            onClick={scrollToRoles}
            className="flex flex-col items-center gap-2 text-[10px] font-medium tracking-[0.18em] text-faint transition hover:text-primary"
            aria-label="Scroll to recent roles"
          >
            <span>RECENT ROLES</span>
            <ChevronIcon direction="down" className="hero-scroll-cue-arrow h-4 w-4 text-primary" />
          </button>
        </div>
      </div>
    </section>
  );
}

function AboutExpertiseHeader() {
  return (
    <div>
      <p className="text-xs font-medium tracking-[0.14em] text-muted">EXPERTISE</p>
      <h2 className="mt-1 text-[clamp(1.5rem,3.5vw,2.25rem)] font-semibold tracking-tight">
        Technologies I ship with
      </h2>
      <p className="mt-2 max-w-2xl text-sm text-muted sm:text-base">
        Full stack breadth across frontend, backend, data, cloud, mobile, desktop, and AI. Built
        into production products, not tutorial checklists.
      </p>
    </div>
  );
}
