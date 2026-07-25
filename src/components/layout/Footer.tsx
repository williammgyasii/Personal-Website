import { site } from "../../data/site";

export function Footer() {
  return (
    <footer className="border-t border-border px-4 py-8 sm:px-6">
      <div className="mx-auto flex max-w-[1320px] flex-col items-start justify-between gap-3 text-xs text-muted sm:flex-row sm:items-center">
        <span>© {site.year} William Gyasi</span>
        <span className="text-primary">Built with React · Vite · Three.js</span>
      </div>
    </footer>
  );
}
