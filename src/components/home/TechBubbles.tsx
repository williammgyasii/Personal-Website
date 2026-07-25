import { motion } from "framer-motion";
import type { ProjectTech, TechTone } from "../../data/projects";

const toneStyles: Record<TechTone, string> = {
  primary: "border-primary/40 bg-primary/10 text-primary shadow-[0_0_20px_rgba(7,196,44,0.15)]",
  accent: "border-accent/40 bg-accent/10 text-accent shadow-[0_0_20px_rgba(56,189,248,0.15)]",
  violet: "border-violet-400/40 bg-violet-500/10 text-violet-300 shadow-[0_0_20px_rgba(167,139,250,0.15)]",
  amber: "border-amber-400/40 bg-amber-500/10 text-amber-200 shadow-[0_0_20px_rgba(251,191,36,0.12)]",
};

type TechBubblesProps = {
  items: ProjectTech[];
};

export function TechBubbles({ items }: TechBubblesProps) {
  return (
    <motion.ul
      className="flex flex-wrap gap-2"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.06, delayChildren: 0.12 } },
      }}
    >
      {items.map((tech, index) => (
        <motion.li
          key={tech.name}
          variants={{
            hidden: { opacity: 0, y: 14, scale: 0.92 },
            visible: { opacity: 1, y: 0, scale: 1 },
          }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className={`tech-bubble rounded-full border px-3 py-1.5 text-[10px] font-medium tracking-wide sm:text-[11px] ${toneStyles[tech.tone]}`}
          style={{ animationDelay: `${index * 0.15}s` }}
        >
          {tech.name}
        </motion.li>
      ))}
    </motion.ul>
  );
}
