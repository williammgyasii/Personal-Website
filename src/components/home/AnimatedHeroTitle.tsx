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
      className="font-[550] leading-[0.88] tracking-[-0.04em]"
      aria-label={name}
    >
      <span className="inline-flex flex-nowrap items-baseline whitespace-nowrap text-[clamp(2.75rem,13vw,9.5rem)] sm:text-[clamp(3rem,12vw,10.5rem)]">
        {name.split("").map((char, i) => (
          <motion.span
            key={`${char}-${i}`}
            custom={i}
            initial="hidden"
            animate="visible"
            variants={letterVariants}
            className="inline-block shrink-0 text-glow"
          >
            {char}
          </motion.span>
        ))}
        <motion.span
          className="inline-block shrink-0 text-accent text-glow-accent"
          animate={{ opacity: [1, 0.2, 1] }}
          transition={{ repeat: Infinity, duration: 0.9, ease: "linear" }}
          aria-hidden="true"
        >
          _
        </motion.span>
      </span>
    </h1>
  );
}
