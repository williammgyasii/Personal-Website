import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "../../hooks/useMediaQuery";

type WorksProjectNavProps = {
  active: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
};

const easeOut = [0.22, 1, 0.36, 1] as const;

export function WorksProjectNav({ active, total, onPrev, onNext }: WorksProjectNavProps) {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <motion.div
      className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
      initial={reducedMotion ? false : { opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: easeOut }}
    >
      <div className="flex items-center gap-2 sm:gap-3">
        <motion.button
          type="button"
          onClick={onPrev}
          className="inline-flex h-10 items-center justify-center rounded-full border border-border bg-surface px-5 text-sm font-medium text-foreground shadow-sm transition-colors"
          whileHover={
            reducedMotion
              ? undefined
              : { y: -2, borderColor: "rgba(0, 113, 227, 0.45)", color: "#0071e3" }
          }
          whileTap={reducedMotion ? undefined : { scale: 0.98, y: 0 }}
          transition={{ type: "spring", stiffness: 420, damping: 28 }}
          aria-label="Previous project"
        >
          Previous
        </motion.button>

        <motion.button
          type="button"
          onClick={onNext}
          className="inline-flex h-10 items-center justify-center rounded-full bg-primary px-5 text-sm font-medium text-white shadow-sm"
          whileHover={reducedMotion ? undefined : { y: -2, backgroundColor: "#0077ED" }}
          whileTap={reducedMotion ? undefined : { scale: 0.98, y: 0 }}
          transition={{ type: "spring", stiffness: 420, damping: 28 }}
          aria-label="Next project"
        >
          Next
        </motion.button>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1.5" aria-hidden="true">
          {Array.from({ length: total }).map((_, index) => (
            <motion.span
              key={index}
              className={`h-1.5 rounded-full transition-all ${
                index === active ? "w-5 bg-primary" : "w-1.5 bg-border"
              }`}
              animate={
                reducedMotion
                  ? undefined
                  : { scale: index === active ? 1 : 0.92, opacity: index === active ? 1 : 0.65 }
              }
              transition={{ duration: 0.25, ease: easeOut }}
            />
          ))}
        </div>
        <p className="text-sm tabular-nums text-muted">
          {active + 1} / {total}
        </p>
      </div>
    </motion.div>
  );
}
