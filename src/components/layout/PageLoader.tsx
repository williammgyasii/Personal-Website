import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "../../hooks/useMediaQuery";
import { BrandRobot } from "./BrandRobot";

type PageLoaderProps = {
  onComplete: () => void;
};

const MIN_LOAD_MS = 2400;

export function PageLoader({ onComplete }: PageLoaderProps) {
  const reducedMotion = usePrefersReducedMotion();
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const finish = () => {
      if (cancelled) return;
      if (reducedMotion) {
        onComplete();
        return;
      }
      setExiting(true);
    };

    const minDelay = new Promise<void>((resolve) => {
      window.setTimeout(resolve, reducedMotion ? 0 : MIN_LOAD_MS);
    });

    Promise.all([document.fonts.ready, minDelay]).then(finish);

    return () => {
      cancelled = true;
    };
  }, [onComplete, reducedMotion]);

  if (reducedMotion) return null;

  return (
    <motion.div
      className="loader-screen fixed inset-0 z-[200] flex items-center justify-center bg-surface"
      initial={{ opacity: 1 }}
      animate={{ opacity: exiting ? 0 : 1 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      onAnimationComplete={() => {
        if (exiting) onComplete();
      }}
      aria-live="polite"
      aria-busy={!exiting}
      aria-label="Loading portfolio"
    >
      <div className="loader-grid absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="loader-scanlines absolute inset-0 opacity-[0.06]" aria-hidden="true" />

      <div className="relative flex flex-col items-center gap-10 px-6">
        <div className="loader-orbit relative flex h-44 w-44 items-center justify-center sm:h-52 sm:w-52">
          <span className="loader-ring loader-ring-outer" aria-hidden="true" />
          <span className="loader-ring loader-ring-mid" aria-hidden="true" />
          <span className="loader-ring loader-ring-inner" aria-hidden="true" />

          <div className="relative z-10">
            <BrandRobot className="h-24 w-24 sm:h-28 sm:w-28" />
          </div>

          <span className="loader-node loader-node-a" aria-hidden="true" />
          <span className="loader-node loader-node-b" aria-hidden="true" />
          <span className="loader-node loader-node-c" aria-hidden="true" />
        </div>

        <div className="w-full max-w-[220px] space-y-3">
          <div className="flex items-center justify-between text-[10px] font-medium tracking-[0.2em] text-faint">
            <span>BOOT</span>
            <span className="loader-status text-muted">LOADING</span>
          </div>
          <div className="loader-track h-1 overflow-hidden rounded-full bg-neutral-200">
            <div className="loader-bar h-full rounded-full bg-primary shadow-none" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
