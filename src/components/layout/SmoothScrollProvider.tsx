import type { ReactNode } from "react";
import { ReactLenis } from "lenis/react";
import { ParallaxProvider } from "react-scroll-parallax";
import { usePrefersReducedMotion } from "../../hooks/useMediaQuery";
import "lenis/dist/lenis.css";

type SmoothScrollProviderProps = {
  children: ReactNode;
};

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const reducedMotion = usePrefersReducedMotion();

  if (reducedMotion) {
    return <ParallaxProvider isDisabled>{children}</ParallaxProvider>;
  }

  return (
    <ReactLenis root options={{ lerp: 0.09, duration: 1.35, smoothWheel: true }}>
      <ParallaxProvider>{children}</ParallaxProvider>
    </ReactLenis>
  );
}
