import { motion } from "framer-motion";

export function AnimatedHeroTitle({ name }: { name: string }) {
  return (
    <motion.h1
      className="text-[clamp(3rem,11vw,6.5rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-white"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {name}
    </motion.h1>
  );
}
