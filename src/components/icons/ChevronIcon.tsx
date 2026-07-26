type ChevronIconProps = {
  direction: "left" | "right" | "up" | "down";
  className?: string;
};

const chevronPaths = {
  left: "M15 18l-6-6 6-6",
  right: "M9 18l6-6-6-6",
  up: "M18 15l-6-6-6 6",
  down: "M6 9l6 6 6-6",
} as const;

export function ChevronIcon({ direction, className = "h-5 w-5" }: ChevronIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d={chevronPaths[direction]} />
    </svg>
  );
}

type ArrowUpRightIconProps = {
  className?: string;
};

export function ArrowUpRightIcon({ className = "h-4 w-4" }: ArrowUpRightIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M7 17L17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}
