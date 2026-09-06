import { motion } from "framer-motion";
import { useLenis } from "lenis/react";
import { Link } from "react-router-dom";
import { ChevronIcon } from "../icons/ChevronIcon";
import { site } from "../../data/site";
import { useHeroMotion, type HeroMotion } from "../../hooks/useHeroMotion";
import { AnimatedHeroTitle } from "./AnimatedHeroTitle";
import { HeroTitleBackground } from "./HeroTitleBackground";

export function Hero() {
  const motionConfig = useHeroMotion();

  return (
    <section
      className="relative flex min-h-[100dvh] flex-col justify-center overflow-x-hidden pb-24 pt-28 sm:pb-28 sm:pt-32"
      aria-label="Introduction"
    >
      <div className="absolute inset-0 -z-10 bg-[#c8c3b8]" aria-hidden="true">
        <HeroTitleBackground />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1100px] px-4 text-center sm:px-6">
        <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted sm:text-xs">
          {site.roles.join(" · ")}
        </p>

        <div className="mt-5 sm:mt-6">
          <AnimatedHeroTitle name={site.name} motionConfig={motionConfig} />
        </div>

        <HeroAvailability motionConfig={motionConfig} />
      </div>

      <HeroScrollCue motionConfig={motionConfig} />
    </section>
  );
}

function HeroAvailability({ motionConfig }: { motionConfig: HeroMotion }) {
  const {
    reducedMotion,
    easeOut,
    availabilityDelay,
    availabilityStagger,
    availabilityTextDelay,
    timezoneDelay,
    dotDelay,
  } = motionConfig;

  return (
    <motion.div
      className="mx-auto mt-8 max-w-2xl space-y-5 sm:mt-10 sm:space-y-6"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: reducedMotion ? 0 : availabilityStagger,
            delayChildren: reducedMotion ? 0 : availabilityDelay,
          },
        },
      }}
    >
      <motion.div
        variants={reducedMotion ? undefined : motionConfig.fadeUp}
        className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2"
      >
          <span className="inline-flex items-center gap-2.5 text-sm font-medium tracking-tight text-foreground">
          <AvailabilityDot reducedMotion={reducedMotion} delay={dotDelay} easeOut={easeOut} />
          <motion.span
            initial={{ opacity: reducedMotion ? 1 : 0, x: reducedMotion ? 0 : -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: reducedMotion ? 0 : availabilityTextDelay, ease: easeOut }}
          >
            {site.availability}
          </motion.span>
        </span>
        <span className="hidden text-border sm:inline" aria-hidden="true">
          ·
        </span>
        <motion.span
          className="text-sm text-muted"
          initial={{ opacity: reducedMotion ? 1 : 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.45, delay: reducedMotion ? 0 : timezoneDelay, ease: easeOut }}
        >
          {site.timezone}
        </motion.span>
      </motion.div>

      <AnimatedSummary text={site.heroSummary} motionConfig={motionConfig} />

      <motion.div variants={reducedMotion ? undefined : motionConfig.fadeUp}>
        <HeroCTAs reducedMotion={reducedMotion} />
      </motion.div>
    </motion.div>
  );
}

function AnimatedSummary({ text, motionConfig }: { text: string; motionConfig: HeroMotion }) {
  const { reducedMotion, easeOut, wordStagger, wordDelay, wordY, wordBlur } = motionConfig;

  if (reducedMotion) {
    return (
      <p className="text-base leading-relaxed text-muted sm:text-[1.0625rem] sm:leading-[1.65]">
        {text}
      </p>
    );
  }

  const words = text.split(" ");

  return (
    <motion.p
      className="text-base leading-relaxed text-muted sm:text-[1.0625rem] sm:leading-[1.65]"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: wordStagger, delayChildren: wordDelay } },
      }}
    >
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          variants={{
            hidden: { opacity: 0, y: wordY, filter: `blur(${wordBlur}px)` },
            visible: {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: { duration: 0.35, ease: easeOut },
            },
          }}
          className="mr-[0.28em] inline-block"
        >
          {word}
        </motion.span>
      ))}
    </motion.p>
  );
}

function AvailabilityDot({
  reducedMotion,
  delay,
  easeOut,
}: {
  reducedMotion: boolean;
  delay: number;
  easeOut: readonly [number, number, number, number];
}) {
  if (reducedMotion) {
    return <span className="h-2 w-2 shrink-0 rounded-full bg-primary" aria-hidden="true" />;
  }

  return (
    <span className="relative flex h-2 w-2 shrink-0" aria-hidden="true">
      <motion.span
        className="absolute inset-0 rounded-full bg-primary"
        animate={{ scale: [1, 1.8, 1], opacity: [0.45, 0, 0.45] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.span
        className="relative h-2 w-2 rounded-full bg-primary"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.35, delay, ease: easeOut }}
      />
    </span>
  );
}

function HeroScrollCue({ motionConfig }: { motionConfig: HeroMotion }) {
  const lenis = useLenis();
  const { reducedMotion, easeOut, scrollCueDelay } = motionConfig;

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
      className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2 text-[10px] font-medium tracking-[0.18em] text-faint transition hover:text-primary sm:bottom-6"
      initial={{ opacity: reducedMotion ? 1 : 0, y: reducedMotion ? 0 : 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: reducedMotion ? 0 : scrollCueDelay, duration: 0.6, ease: easeOut }}
      aria-label="Scroll to selected works"
    >
      <span>SELECTED WORKS</span>
      <ChevronIcon direction="down" className="hero-scroll-cue-arrow h-4 w-4 text-primary" />
    </motion.button>
  );
}

function HeroCTAs({ reducedMotion }: { reducedMotion: boolean }) {
  const motionProps = reducedMotion
    ? {}
    : {
        whileHover: { scale: 1.02 },
        whileTap: { scale: 0.98 },
        transition: { type: "spring" as const, stiffness: 420, damping: 28 },
      };

  return (
    <div className="flex flex-col items-center justify-center gap-2.5 sm:flex-row sm:gap-4">
      <motion.div {...motionProps} className="w-full sm:w-auto">
        <Link
          to="/projects"
          className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-primary text-sm font-normal text-white transition hover:bg-[#e84e24] sm:h-12 sm:px-8"
        >
          {site.cta}
          <ChevronIcon direction="right" className="h-4 w-4" />
        </Link>
      </motion.div>
      <motion.div {...motionProps} className="w-full sm:w-auto">
        <Link
          to="/contact"
          className="inline-flex h-11 w-full items-center justify-center gap-1.5 rounded-full text-sm font-normal text-primary transition hover:underline sm:h-12 sm:px-2"
        >
          {site.ctaSecondary}
          <ChevronIcon direction="right" className="h-3.5 w-3.5" />
        </Link>
      </motion.div>
    </div>
  );
}
