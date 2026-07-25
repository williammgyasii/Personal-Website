import { motion } from "framer-motion";

const letterVariants = {
  hidden: { opacity: 0, y: 48, filter: "blur(8px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      delay: 0.35 + i * 0.07,
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export function AnimatedHeroTitle({ name }: { name: string }) {
  return (
    <h1
      className="font-[550] leading-[0.88] tracking-[-0.05em]"
      aria-label={name}
    >
      <span className="inline-flex flex-wrap items-baseline text-[clamp(3.25rem,16vw,11rem)] sm:text-[clamp(4rem,18vw,12rem)]">
        {name.split("").map((char, i) => (
          <motion.span
            key={`${char}-${i}`}
            custom={i}
            initial="hidden"
            animate="visible"
            variants={letterVariants}
            className="inline-block text-glow"
          >
            {char}
          </motion.span>
        ))}
        <motion.span
          className="inline-block text-primary text-glow-primary"
          animate={{ opacity: [1, 0.15, 1] }}
          transition={{ repeat: Infinity, duration: 0.9, ease: "linear" }}
          aria-hidden="true"
        >
          _
        </motion.span>
      </span>
    </h1>
  );
}
