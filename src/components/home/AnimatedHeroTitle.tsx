import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import type { HeroMotion } from "../../hooks/useHeroMotion";
import { site } from "../../data/site";

type AnimatedHeroTitleProps = {
  name: string;
  motionConfig: HeroMotion;
};

export function AnimatedHeroTitle({ name, motionConfig }: AnimatedHeroTitleProps) {
  const lines = site.heroLines;
  const lead = lines.slice(0, -1);
  const accent = lines[lines.length - 1] ?? "";

  return (
    <h1
      className="mx-auto max-w-5xl text-center text-[clamp(2.35rem,7.4vw,6.15rem)] font-extrabold leading-[0.9] tracking-[-0.055em] text-foreground"
      aria-label={`${name}. ${lines.join(" ")}`}
    >
      {lead.map((line) => (
        <span key={line} className={motionConfig.reducedMotion ? "block" : "hero-title-line"}>
          <span className="break-words">{line}</span>
        </span>
      ))}
      <span className="mt-1 block text-primary sm:mt-2">
        <TypewriterLine text={accent} reducedMotion={motionConfig.reducedMotion} />
      </span>
    </h1>
  );
}

function TypewriterLine({ text, reducedMotion }: { text: string; reducedMotion: boolean }) {
  const [shown, setShown] = useState(reducedMotion ? text : "");

  useEffect(() => {
    if (reducedMotion) {
      setShown(text);
      return;
    }

    let count = 0;
    let interval = 0;
    const start = window.setTimeout(() => {
      interval = window.setInterval(() => {
        count += 1;
        setShown(text.slice(0, count));
        if (count >= text.length) window.clearInterval(interval);
      }, 58);
    }, 720);

    return () => {
      window.clearTimeout(start);
      window.clearInterval(interval);
    };
  }, [reducedMotion, text]);

  return (
    <span className="inline-flex items-baseline justify-center">
      <span>{shown}</span>
      <motion.span
        className="ml-[0.06em] inline-block h-[0.78em] w-[0.09em] translate-y-[0.04em] bg-primary"
        animate={reducedMotion ? { opacity: 1 } : { opacity: [1, 0, 1] }}
        transition={{ duration: 0.72, repeat: Infinity, ease: "linear" }}
        aria-hidden="true"
      />
    </span>
  );
}
