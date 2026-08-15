export function ArrowRight({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="square"
      className={`h-5 w-5 ${className}`}
    >
      <path d="M4 12h16M13 5l7 7-7 7" />
    </svg>
  );
}

export function ArrowDown({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="square"
      className={`h-5 w-5 ${className}`}
    >
      <path d="M12 4v16M5 13l7 7 7-7" />
    </svg>
  );
}