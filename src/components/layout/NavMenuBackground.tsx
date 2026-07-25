export function NavMenuBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-full" aria-hidden="true">
      <div className="nav-menu-gradient absolute inset-0" />
      <div className="nav-menu-grid absolute inset-0 opacity-60" />
      <div className="nav-menu-shimmer absolute inset-y-0 -left-1/2 w-1/2" />
      <div className="nav-menu-glow absolute inset-x-4 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent" />
    </div>
  );
}
