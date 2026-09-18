interface AvatarPlaceholderProps {
  label: string;
  className?: string;
  imageClassName?: string;
}

/**
 * Avatar genérico (silhueta) para integrantes sem foto real.
 * Usa apenas tokens do design system — reaproveitável em outras demos.
 */
export function AvatarPlaceholder({ label, className, imageClassName }: AvatarPlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={`Avatar genérico de ${label}`}
      className={`relative w-full overflow-hidden bg-[var(--bg-secondary)] ${className ?? ''}`}
      style={{ aspectRatio: '4 / 5' }}
    >
      <svg
        viewBox="0 0 400 500"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
        className={`absolute inset-0 size-full ${imageClassName ?? ''}`}
      >
        <defs>
          <linearGradient id="avatar-bg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--surface)" />
            <stop offset="100%" stopColor="var(--bg)" />
          </linearGradient>
          <linearGradient id="avatar-figure" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--surface-elevated)" />
            <stop offset="100%" stopColor="var(--surface)" />
          </linearGradient>
        </defs>

        <rect width="400" height="500" fill="url(#avatar-bg)" />

        <g fill="url(#avatar-figure)">
          <circle cx="200" cy="205" r="62" />
          <path d="M200 288c-62 0-112 42-124 100-3 14-5 28-6 42h260c-1-14-3-28-6-42-12-58-62-100-124-100z" />
        </g>

        <g fill="none" stroke="var(--border-subtle)" strokeWidth="1.25" opacity="0.9">
          <circle cx="200" cy="205" r="62" />
          <path d="M200 288c-62 0-112 42-124 100-3 14-5 28-6 42h260c-1-14-3-28-6-42-12-58-62-100-124-100z" />
        </g>
      </svg>
    </div>
  );
}
