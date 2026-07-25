import { motion } from "framer-motion";

type WorksProjectNavProps = {
  active: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
};

export function WorksProjectNav({ active, total, onPrev, onNext }: WorksProjectNavProps) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-3 sm:gap-4">
        <motion.button
          type="button"
          onClick={onPrev}
          className="works-nav-btn group inline-flex min-h-[52px] flex-1 items-center justify-center gap-3 rounded-full border border-primary/50 bg-primary/10 px-5 text-xs font-semibold tracking-[0.14em] text-primary sm:flex-none sm:px-7 sm:text-sm"
          whileHover={{ scale: 1.03, boxShadow: "0 0 32px rgba(7,196,44,0.25)" }}
          whileTap={{ scale: 0.97 }}
          aria-label="Previous project"
        >
          <span className="works-nav-arrow inline-block transition group-hover:-translate-x-1">←</span>
          PREVIOUS
        </motion.button>

        <motion.button
          type="button"
          onClick={onNext}
          className="works-nav-btn group inline-flex min-h-[52px] flex-1 items-center justify-center gap-3 rounded-full border border-accent/50 bg-accent/10 px-5 text-xs font-semibold tracking-[0.14em] text-accent sm:flex-none sm:px-7 sm:text-sm"
          whileHover={{ scale: 1.03, boxShadow: "0 0 32px rgba(56,189,248,0.25)" }}
          whileTap={{ scale: 0.97 }}
          aria-label="Next project"
        >
          NEXT
          <span className="works-nav-arrow inline-block transition group-hover:translate-x-1">→</span>
        </motion.button>
      </div>

      <p className="text-center text-sm tabular-nums text-muted sm:text-right">
        <span className="text-2xl font-semibold text-white">{String(active + 1).padStart(2, "0")}</span>
        <span className="mx-2 text-white/30">/</span>
        <span>{String(total).padStart(2, "0")}</span>
      </p>
    </div>
  );
}
