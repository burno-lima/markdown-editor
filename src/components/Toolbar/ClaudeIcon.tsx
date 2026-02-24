interface ClaudeIconProps {
  width?: number;
  height?: number;
  className?: string;
}

export function ClaudeIcon({ width = 24, height = 24, className }: ClaudeIconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Claude official logo - stylized quotation marks */}
      <path
        d="M10.5 4C7.5 6 5.5 8.5 5.5 12c0 1.5.5 2.8 1.5 3.8s2.2 1.5 3.5 1.5c1.2 0 2.2-.4 3-1.2.8-.8 1.2-1.8 1.2-3 0-1.1-.4-2-1.1-2.8-.7-.8-1.7-1.1-2.9-1.1-1.1 0-2.1.4-3 1.1.5-2.5 2-4.5 4.5-6L10.5 4z"
        fill="currentColor"
      />
      <path
        d="M19.5 4c-3 2-5 4.5-5 8.5 0 1.5.5 2.8 1.5 3.8s2.2 1.5 3.5 1.5c1.2 0 2.2-.4 3-1.2.8-.8 1.2-1.8 1.2-3 0-1.1-.4-2-1.1-2.8-.7-.8-1.7-1.1-2.9-1.1-1.1 0-2.1.4-3 1.1.5-2.5 2-4.5 4.5-6L19.5 4z"
        fill="currentColor"
      />
    </svg>
  );
}
