export function HeaderBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="header-bg-gradient absolute inset-0" />
      <div className="header-bg-grid absolute inset-0 opacity-50" />
      <div className="header-shimmer absolute inset-y-0 -left-1/3 w-1/3" />
      <div className="header-stream absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
    </div>
  );
}
