import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "../../hooks/useMediaQuery";

export function FooterBackground() {
  const reducedMotion = usePrefersReducedMotion();

  if (reducedMotion) {
    return (
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,113,227,0.16),transparent_55%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.06),transparent_50%)]"
        aria-hidden="true"
      />
    );
  }

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="footer-mesh absolute inset-0 opacity-80" />

      <motion.span
        className="footer-orb absolute -left-10 top-8 h-40 w-40 rounded-full bg-primary/20 blur-3xl"
        animate={{ x: [0, 28, 0], y: [0, 18, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.span
        className="footer-orb absolute -right-8 bottom-6 h-44 w-44 rounded-full bg-white/10 blur-3xl"
        animate={{ x: [0, -24, 0], y: [0, -16, 0], scale: [1, 1.12, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
      />
      <motion.span
        className="footer-orb absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl"
        animate={{ opacity: [0.35, 0.7, 0.35], scale: [0.95, 1.15, 0.95] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
      />

      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.04),transparent_40%,rgba(0,0,0,0.2))]" />
    </div>
  );
}
