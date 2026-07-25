export function HeroTitleBackground() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      <div className="hero-title-gradient absolute inset-0" />
      <div className="hero-title-grid absolute inset-0 opacity-70" />
      <div className="hero-title-shimmer absolute inset-y-0 -left-1/4 w-1/2" />
      <div className="hero-title-orb hero-title-orb-green absolute left-[8%] top-[18%] h-48 w-48 sm:h-64 sm:w-64" />
      <div className="hero-title-orb hero-title-orb-cyan absolute bottom-[12%] right-[10%] h-40 w-40 sm:h-56 sm:w-56" />
    </div>
  );
}
