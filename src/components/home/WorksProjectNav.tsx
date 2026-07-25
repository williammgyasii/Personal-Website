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
      <div className="flex items-center gap-6">
        <motion.button
          type="button"
          onClick={onPrev}
          className="text-sm text-muted transition hover:text-primary"
          whileTap={{ scale: 0.98 }}
          aria-label="Previous project"
        >
          ← Previous
        </motion.button>

        <motion.button
          type="button"
          onClick={onNext}
          className="text-sm text-muted transition hover:text-primary"
          whileTap={{ scale: 0.98 }}
          aria-label="Next project"
        >
          Next →
        </motion.button>
      </div>

      <p className="text-sm tabular-nums text-muted">
        {active + 1} / {total}
      </p>
    </div>
  );
}
