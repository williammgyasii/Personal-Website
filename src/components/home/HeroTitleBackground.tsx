import { lazy, Suspense } from "react";

const FloatingShape = lazy(() =>
  import("../three/FloatingShape").then((module) => ({ default: module.FloatingShape })),
);

export function HeroTitleBackground() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      <div className="hero-title-gradient absolute inset-0" />
      <div className="hero-title-grid absolute inset-0" />
      <Suspense fallback={null}>
        <FloatingShape className="absolute inset-0 opacity-70" />
      </Suspense>
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-surface sm:h-52" />
    </div>
  );
}
