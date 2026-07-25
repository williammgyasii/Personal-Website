export function HeroTitleBackground() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      <div className="hero-title-gradient absolute inset-0" />
      <div className="hero-title-grid absolute inset-0 opacity-70" />
      <div className="hero-title-shimmer absolute inset-0" />
      <div className="hero-title-orb hero-title-orb-green absolute -left-16 bottom-[8%] h-64 w-64 sm:h-80 sm:w-80 lg:-left-8 lg:h-96 lg:w-96" />
      <div className="hero-title-orb hero-title-orb-cyan absolute -right-16 top-[10%] h-56 w-56 sm:h-72 sm:w-72 lg:-right-8 lg:h-80 lg:w-80" />
      <div className="hero-title-orb hero-title-orb-mid absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 sm:h-96 sm:w-96" />
    </div>
  );
}
