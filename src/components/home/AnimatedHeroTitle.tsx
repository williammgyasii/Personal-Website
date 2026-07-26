import { motion } from "framer-motion";
import type { HeroMotion } from "../../hooks/useHeroMotion";

type AnimatedHeroTitleProps = {
  name: string;
  motionConfig: HeroMotion;
};

export function AnimatedHeroTitle({ name, motionConfig }: AnimatedHeroTitleProps) {
  if (motionConfig.reducedMotion) {
    return (
      <h1 className="text-[clamp(2.75rem,13vw,9.5rem)] font-semibold leading-[0.92] tracking-[-0.03em] text-foreground">
        {name}
      </h1>
    );
  }

  const { letter, letterStagger, letterDelay } = motionConfig;

  return (
    <motion.h1
      className="text-[clamp(2.75rem,13vw,9.5rem)] font-semibold leading-[0.92] tracking-[-0.03em] text-foreground"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: letterStagger, delayChildren: letterDelay } },
      }}
      aria-label={name}
    >
      {name.split("").map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          variants={letter}
          className="inline-block"
          style={{ willChange: "transform, opacity, filter" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.h1>
  );
}
