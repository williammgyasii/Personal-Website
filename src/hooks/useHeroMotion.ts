import { useIsMobile, usePrefersReducedMotion } from "./useMediaQuery";

export const easeOut = [0.22, 1, 0.36, 1] as const;

function readIsMobile() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(max-width: 767px)").matches;
}

export function useHeroMotion() {
  const reducedMotion = usePrefersReducedMotion();
  const isMobileHook = useIsMobile();
  const isMobile = typeof window !== "undefined" ? readIsMobile() || isMobileHook : isMobileHook;

  return {
    reducedMotion,
    isMobile,
    easeOut,
    fadeUp: {
      hidden: { opacity: 0, y: isMobile ? 10 : 20, scale: isMobile ? 0.99 : 0.98 },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: isMobile ? 0.45 : 0.6, ease: easeOut },
      },
    },
    roleStagger: isMobile ? 0.05 : 0.07,
    letter: {
      hidden: { opacity: 0, y: isMobile ? 18 : 36, filter: `blur(${isMobile ? 5 : 10}px)` },
      visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: isMobile ? 0.42 : 0.55, ease: easeOut },
      },
    },
    letterStagger: isMobile ? 0.032 : 0.045,
    letterDelay: isMobile ? 0.1 : 0.18,
    lineDelay: isMobile ? 0.28 : 0.42,
    lineDuration: isMobile ? 0.6 : 0.85,
    statsStagger: isMobile ? 0.08 : 0.12,
    statsDelay: isMobile ? 0.34 : 0.5,
    statBaseDelay: isMobile ? 0.4 : 0.55,
    statStep: isMobile ? 0.08 : 0.12,
    countDuration: isMobile ? 0.85 : 1.15,
    availabilityDelay: isMobile ? 0.62 : 0.82,
    availabilityStagger: isMobile ? 0.08 : 0.12,
    availabilityTextDelay: isMobile ? 0.68 : 0.88,
    timezoneDelay: isMobile ? 0.74 : 0.96,
    dotDelay: isMobile ? 0.66 : 0.85,
    wordStagger: isMobile ? 0.016 : 0.028,
    wordDelay: isMobile ? 0.78 : 1.02,
    wordY: isMobile ? 6 : 10,
    wordBlur: isMobile ? 2 : 4,
    scrollCueDelay: isMobile ? 1 : 1.35,
  };
}

export type HeroMotion = ReturnType<typeof useHeroMotion>;
