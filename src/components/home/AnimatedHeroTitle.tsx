import type { HeroMotion } from "../../hooks/useHeroMotion";
import { site } from "../../data/site";

type AnimatedHeroTitleProps = {
  name: string;
  motionConfig: HeroMotion;
};

export function AnimatedHeroTitle({ name, motionConfig }: AnimatedHeroTitleProps) {
  const lines = site.heroLines;
  const last = lines.length - 1;

  return (
    <h1
      className="max-w-full text-[clamp(1.75rem,5.6vw,4.35rem)] font-medium leading-[0.96] tracking-[-0.05em] text-foreground"
      aria-label={`${name}. ${lines.join(" ")}`}
    >
      {lines.map((line, index) => (
        <span
          key={line}
          className={`${motionConfig.reducedMotion ? "block" : "hero-title-line"} ${
            index === last ? "text-primary" : ""
          }`}
        >
          <span className="break-words">{line}</span>
        </span>
      ))}
    </h1>
  );
}
