type Props = { className?: string }

/**
 * Marca do Instagram desenhada no mesmo sistema dos ícones do lucide
 * (viewBox 24, traço 2, pontas arredondadas), para não destoar do conjunto.
 */
export function IconeInstagram({ className }: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <rect x="2" y="2" width="20" height="20" rx="5.5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.6" cy="6.4" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  )
}
