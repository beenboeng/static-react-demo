import { useId } from 'react'

type BottleProps = {
  /** Liquid / glass tint. */
  tint: string
  /** Cap and label accent. */
  cap: string
  label?: string
  className?: string
}

/**
 * Inline SVG stand-in for product photography — self-contained so the page
 * never depends on a remote image host. Swap for real shots when available.
 */
export function Bottle({ tint, cap, label = 'LUMIRA', className }: BottleProps) {
  // Colors are oklch() strings — unusable inside an id, since `url(#…)` would
  // break on the parentheses. useId gives a collision-free reference instead.
  const rawId = useId()
  const gradientId = `glass${rawId.replace(/[^a-zA-Z0-9]/g, '')}`

  return (
    <svg
      viewBox="0 0 160 240"
      className={className}
      role="img"
      aria-label={`${label} product bottle`}
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={tint} stopOpacity="0.95" />
          <stop offset="55%" stopColor={tint} stopOpacity="0.7" />
          <stop offset="100%" stopColor={tint} stopOpacity="0.95" />
        </linearGradient>
      </defs>

      <rect x="66" y="12" width="28" height="26" rx="6" fill={cap} />
      <rect x="70" y="34" width="20" height="12" rx="3" fill={cap} opacity="0.75" />

      <rect
        x="34"
        y="44"
        width="92"
        height="182"
        rx="26"
        fill={`url(#${gradientId})`}
      />
      <rect
        x="34"
        y="44"
        width="92"
        height="182"
        rx="26"
        fill="none"
        stroke={cap}
        strokeOpacity="0.28"
        strokeWidth="1.5"
      />

      {/* Highlight */}
      <rect x="46" y="62" width="12" height="128" rx="6" fill="#fff" opacity="0.45" />

      {/* Paper label */}
      <rect x="48" y="112" width="64" height="72" rx="8" fill="#fff" opacity="0.92" />
      <text
        x="80"
        y="140"
        textAnchor="middle"
        fontFamily="Fraunces, Georgia, serif"
        fontSize="13"
        letterSpacing="1.5"
        fill={cap}
      >
        {label}
      </text>
      <line x1="60" y1="150" x2="100" y2="150" stroke={cap} strokeOpacity="0.35" />
      <line x1="60" y1="160" x2="100" y2="160" stroke={cap} strokeOpacity="0.2" />
      <line x1="60" y1="169" x2="88" y2="169" stroke={cap} strokeOpacity="0.2" />
    </svg>
  )
}
