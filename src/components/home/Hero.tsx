import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { useLenis } from "lenis/react";
import { Link } from "react-router-dom";
import { site } from "../../data/site";
import { useHeroMotion, type HeroMotion } from "../../hooks/useHeroMotion";
import { AnimatedHeroTitle } from "./AnimatedHeroTitle";
import { HeroTitleBackground } from "./HeroTitleBackground";

export function Hero() {
  const motionConfig = useHeroMotion();

  return (
    <section
      className="relative flex min-h-[100dvh] flex-col justify-end overflow-hidden pb-12 pt-20 sm:pb-16 sm:pt-24 lg:h-[100dvh] lg:pb-20 lg:pt-28"
      aria-label="Introduction"
    >
      <div className="absolute inset-0 -z-10 bg-surface-secondary" aria-hidden="true">
        <HeroTitleBackground />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-32 bg-gradient-to-b from-transparent to-surface sm:h-40" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1320px] px-4 sm:px-6">
        <div className="max-w-3xl">
          <motion.ul
            className="mb-4 flex flex-wrap gap-x-4 gap-y-1.5 sm:mb-6 lg:mb-8"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: motionConfig.reducedMotion ? 0 : motionConfig.roleStagger,
                  delayChildren: motionConfig.reducedMotion ? 0 : 0.05,
                },
              },
            }}
          >
            {site.roles.map((role) => (
              <motion.li
                key={role}
                variants={
                  motionConfig.reducedMotion
                    ? undefined
                    : motionConfig.fadeUp
                }
              >
                <Link
                  to="/work"
                  className="text-[11px] font-medium tracking-[0.1em] text-muted transition hover:text-primary sm:text-xs"
                >
                  {role}
                </Link>
              </motion.li>
            ))}
          </motion.ul>

          <AnimatedHeroTitle name={site.name} motionConfig={motionConfig} />

          <HeroStats motionConfig={motionConfig} />

          <HeroAvailability motionConfig={motionConfig} />
        </div>
      </div>

      <HeroScrollCue motionConfig={motionConfig} />
    </section>
  );
}

function HeroStats({ motionConfig }: { motionConfig: HeroMotion }) {
  const { reducedMotion, easeOut, lineDelay, lineDuration, statsStagger, statsDelay, statBaseDelay, statStep } =
    motionConfig;

  return (
    <div className="relative mt-6 sm:mt-8 lg:mt-10">
      <motion.div
        className="absolute inset-x-0 top-0 h-px origin-left bg-border"
        initial={{ scaleX: reducedMotion ? 1 : 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: lineDuration, delay: reducedMotion ? 0 : lineDelay, ease: easeOut }}
        aria-hidden="true"
      />

      <motion.dl
        className="flex flex-wrap items-start gap-x-8 gap-y-5 pt-6 sm:gap-x-10 sm:pt-7"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: reducedMotion ? 0 : statsStagger,
              delayChildren: reducedMotion ? 0 : statsDelay,
            },
          },
        }}
        aria-label="Career highlights"
      >
        {site.heroStats.map((stat, index) => (
          <motion.div
            key={stat.label}
            variants={reducedMotion ? undefined : motionConfig.fadeUp}
            className="relative flex min-w-[88px] flex-col overflow-hidden"
          >
            {index > 0 && (
              <motion.span
                className="absolute -left-4 top-1 hidden h-8 w-px origin-top bg-border sm:-left-5 sm:block"
                initial={{ scaleY: reducedMotion ? 1 : 0 }}
                animate={{ scaleY: 1 }}
                transition={{
                  duration: 0.45,
                  delay: reducedMotion ? 0 : statBaseDelay + index * statStep,
                  ease: easeOut,
                }}
                aria-hidden="true"
              />
            )}
            <dt className="text-[clamp(1.75rem,4vw,2.5rem)] font-semibold leading-none tracking-tight tabular-nums text-foreground">
              <CountUp
                value={stat.value}
                delay={reducedMotion ? 0 : statBaseDelay + index * statStep}
                duration={motionConfig.reducedMotion ? 0 : motionConfig.countDuration}
                reducedMotion={reducedMotion}
              />
            </dt>
            <motion.dd
              className="mt-1.5 text-[11px] leading-snug text-muted sm:text-xs"
              initial={{ opacity: reducedMotion ? 1 : 0, y: reducedMotion ? 0 : 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.45,
                delay: reducedMotion ? 0 : statBaseDelay + index * statStep + 0.15,
                ease: easeOut,
              }}
            >
              {stat.label}
            </motion.dd>
          </motion.div>
        ))}
      </motion.dl>
    </div>
  );
}

function CountUp({
  value,
  delay,
  duration,
  reducedMotion,
}: {
  value: string;
  delay: number;
  duration: number;
  reducedMotion: boolean;
}) {
  const target = Number.parseInt(value, 10);
  const isNumeric = !Number.isNaN(target);
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));
  const [display, setDisplay] = useState(reducedMotion || !isNumeric ? value : "0");

  useEffect(() => {
    if (reducedMotion || !isNumeric) {
      setDisplay(value);
      return;
    }

    const unsubscribe = rounded.on("change", (latest) => setDisplay(String(latest)));
    const controls = animate(motionValue, target, {
      duration,
      delay,
      ease: [0.22, 1, 0.36, 1],
    });

    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [delay, duration, isNumeric, motionValue, reducedMotion, rounded, target, value]);

  return <span>{display}</span>;
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
      className="mt-8 max-w-xl space-y-5 sm:mt-10 sm:space-y-6"
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
        className="flex flex-wrap items-center gap-x-3 gap-y-2"
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
      <span className="hero-scroll-cue-arrow text-primary">↓</span>
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
    <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center sm:gap-4">
      <motion.div {...motionProps} className="w-full sm:w-auto">
        <Link
          to="/projects"
          className="inline-flex h-11 w-full items-center justify-center rounded-full bg-primary text-sm font-normal text-white transition hover:bg-[#0077ED] sm:h-12 sm:px-8"
        >
          {site.cta} →
        </Link>
      </motion.div>
      <motion.div {...motionProps} className="w-full sm:w-auto">
        <Link
          to="/contact"
          className="inline-flex h-11 w-full items-center justify-center rounded-full text-sm font-normal text-primary transition hover:underline sm:h-12 sm:px-2"
        >
          {site.ctaSecondary} ›
        </Link>
      </motion.div>
    </div>
  );
}
