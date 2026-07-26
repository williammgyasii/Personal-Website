import { motion } from "framer-motion";
import type { ProjectTech } from "../../data/projects";

type TechBubblesProps = {
  items: ProjectTech[];
};

export function TechBubbles({ items }: TechBubblesProps) {
  return (
    <motion.p
      className="text-sm leading-relaxed text-muted"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      {items.map((tech) => tech.name).join(" · ")}
    </motion.p>
  );
}
