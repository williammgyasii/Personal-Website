import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "../../hooks/useMediaQuery";

export function BrandRobot({
  light = false,
  className = "h-9 w-9",
}: {
  light?: boolean;
  className?: string;
}) {
  const reducedMotion = usePrefersReducedMotion();
  const ink = light ? "#f2f1ed" : "#11110f";
  const face = light ? "#2c2924" : "#f2f1ed";

  return (
    <motion.span
      className={`relative inline-flex items-center justify-center ${className}`}
      aria-hidden="true"
      animate={reducedMotion ? undefined : { y: [0, -3, 0] }}
      transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
    >
      <svg viewBox="0 0 36 36" className="h-full w-full" fill="none">
        <motion.line
          x1="18"
          y1="5"
          x2="18"
          y2="9"
          stroke={ink}
          strokeWidth="1.6"
          strokeLinecap="round"
          animate={reducedMotion ? undefined : { y1: [5, 3, 5], y2: [9, 8, 9] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle
          cx="18"
          cy="4"
          r="1.7"
          fill="#ff5b2e"
          animate={reducedMotion ? undefined : { cy: [4, 2.4, 4] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        />
        <rect x="6" y="9" width="24" height="20" rx="7" fill={ink} />
        <rect x="9" y="13" width="18" height="9" rx="4" fill={face} />
        <motion.g
          animate={
            reducedMotion
              ? undefined
              : { scaleY: [1, 1, 0.12, 1, 1] }
          }
          transition={{ duration: 3.2, repeat: Infinity, times: [0, 0.72, 0.78, 0.84, 1] }}
          style={{ transformOrigin: "18px 17px" }}
        >
          <circle cx="14.2" cy="17.2" r="1.6" fill={ink} />
          <circle cx="21.8" cy="17.2" r="1.6" fill={ink} />
        </motion.g>
        <path d="M14 25h8" stroke={face} strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    </motion.span>
  );
}
