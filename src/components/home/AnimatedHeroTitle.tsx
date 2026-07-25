import { motion } from "framer-motion";

export function AnimatedHeroTitle({ name }: { name: string }) {
  return (
    <motion.h1
      className="text-[clamp(2.75rem,13vw,9.5rem)] font-[550] leading-[0.88] tracking-[-0.04em] text-glow"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      {name}
    </motion.h1>
  );
}
