import { motion, useMotionTemplate, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";
import { usePrefersReducedMotion } from "../../hooks/useMediaQuery";

type ScrollRevealWordsProps = {
  text: string;
  progress: MotionValue<number>;
  className?: string;
};

export function ScrollRevealWords({ text, progress, className = "" }: ScrollRevealWordsProps) {
  const words = text.split(" ").filter(Boolean);

  return (
    <span className={className}>
      {words.map((word, index) => (
        <ScrollRevealWord
          key={`${word}-${index}`}
          word={word}
          index={index}
          total={words.length}
          progress={progress}
          isLast={index === words.length - 1}
        />
      ))}
    </span>
  );
}

function ScrollRevealWord({
  word,
  index,
  total,
  progress,
  isLast,
}: {
  word: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
  isLast: boolean;
}) {
  const windowSize = 0.12;
  const start = (index / total) * (1 - windowSize);
  const end = start + windowSize;

  const opacity = useTransform(progress, [start, end], [0.14, 1]);
  const y = useTransform(progress, [start, end], [28, 0]);
  const blur = useTransform(progress, [start, end], [8, 0]);
  const filter = useMotionTemplate`blur(${blur}px)`;

  return (
    <motion.span
      style={{ opacity, y, filter }}
      className={`inline-block ${isLast ? "" : "mr-[0.28em]"}`}
    >
      {word}
    </motion.span>
  );
}

type ScrollStorySectionProps = {
  statement: string;
  marquee: string;
};

export function ScrollStorySection({ statement, marquee }: ScrollStorySectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const marqueeX = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const lineOpacity = useTransform(scrollYProgress, [0, 0.2, 0.85, 1], [0, 1, 1, 0.4]);

  if (reducedMotion) {
    return (
      <section className="border-y border-border px-4 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-[1320px]">
          <p className="max-w-4xl text-[clamp(1.5rem,4vw,3rem)] font-medium leading-[1.2] tracking-tight text-white/90">
            {statement}
          </p>
        </div>
      </section>
    );
  }

  const marqueeContent = `${marquee} ${marquee}`;

  return (
    <section ref={sectionRef} className="scroll-story-section relative h-[220vh]">
      <div className="sticky top-0 flex h-[100dvh] flex-col justify-center overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent" />

        <motion.div
          style={{ opacity: lineOpacity }}
          className="relative z-10 mx-auto w-full max-w-[1320px] px-4 sm:px-6"
        >
          <p className="max-w-5xl text-[clamp(1.65rem,4.8vw,3.75rem)] font-medium leading-[1.14] tracking-[-0.02em] text-white">
            <ScrollRevealWords text={statement} progress={scrollYProgress} />
          </p>
        </motion.div>

        <motion.div
          style={{ x: marqueeX, opacity: lineOpacity }}
          className="relative z-10 mt-14 whitespace-nowrap sm:mt-20"
          aria-hidden="true"
        >
          <p className="text-[clamp(2.5rem,8vw,5.5rem)] font-semibold uppercase tracking-[-0.04em] text-white/[0.07]">
            {marqueeContent}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
