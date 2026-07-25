import type { ServiceIconName } from "../../data/services";

const iconPaths: Record<ServiceIconName, React.ReactNode> = {
  layers: (
    <>
      <path d="M12 4L4 8l8 4 8-4-8-4Z" strokeWidth="1.5" />
      <path d="M4 12l8 4 8-4" strokeWidth="1.5" />
      <path d="M4 16l8 4 8-4" strokeWidth="1.5" />
    </>
  ),
  sparkles: (
    <>
      <path d="M12 3v2" strokeWidth="1.5" />
      <path d="M12 19v2" strokeWidth="1.5" />
      <path d="M3 12h2" strokeWidth="1.5" />
      <path d="M19 12h2" strokeWidth="1.5" />
      <path d="m5.6 5.6 1.4 1.4" strokeWidth="1.5" />
      <path d="m17 17 1.4 1.4" strokeWidth="1.5" />
      <path d="m17 7 1.4-1.4" strokeWidth="1.5" />
      <path d="M5.6 18.4 7 17" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="3" strokeWidth="1.5" />
    </>
  ),
  mobile: (
    <>
      <rect x="7" y="3" width="10" height="18" rx="2" strokeWidth="1.5" />
      <path d="M11 18h2" strokeWidth="1.5" />
    </>
  ),
  grid: (
    <>
      <rect x="4" y="4" width="7" height="7" rx="1.5" strokeWidth="1.5" />
      <rect x="13" y="4" width="7" height="7" rx="1.5" strokeWidth="1.5" />
      <rect x="4" y="13" width="7" height="7" rx="1.5" strokeWidth="1.5" />
      <rect x="13" y="13" width="7" height="7" rx="1.5" strokeWidth="1.5" />
    </>
  ),
};

export function ServiceIcon({ name }: { name: ServiceIconName }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden="true"
    >
      {iconPaths[name]}
    </svg>
  );
}
