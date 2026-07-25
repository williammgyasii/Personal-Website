export function HeroPanelBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl" aria-hidden="true">
      <div className="hero-panel-gradient absolute inset-0" />
      <div className="hero-panel-grid absolute inset-0 opacity-50" />
      <div className="hero-panel-shimmer absolute inset-y-0 -left-1/3 w-1/3" />
      <div className="hero-panel-glow-top absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
      <div className="hero-panel-glow-bottom absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent" />
    </div>
  );
}
