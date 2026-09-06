import type { ServiceIconName } from "../../data/services";

const iconPaths: Record<ServiceIconName, React.ReactNode> = {
  layers: (
    <>
      <path d="M4 8.5 12 4l8 4.5L12 13 4 8.5Z" strokeWidth="1.5" />
      <path d="M4 12.5 12 17l8-4.5" strokeWidth="1.5" />
      <path d="M4 16.5 12 21l8-4.5" strokeWidth="1.5" />
    </>
  ),
  workflow: (
    <>
      <circle cx="6" cy="7" r="2.2" strokeWidth="1.5" />
      <circle cx="18" cy="7" r="2.2" strokeWidth="1.5" />
      <circle cx="12" cy="17" r="2.2" strokeWidth="1.5" />
      <path d="M8.2 7h7.6M7.4 8.8 11 15M16.6 8.8 13 15" strokeWidth="1.5" />
    </>
  ),
  mobile: (
    <>
      <rect x="8" y="3.5" width="8" height="17" rx="2" strokeWidth="1.5" />
      <path d="M11 17.5h2" strokeWidth="1.6" />
    </>
  ),
  grid: (
    <>
      <path d="M4 8h16M4 16h16M8 4v16M16 4v16" strokeWidth="1.5" />
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
