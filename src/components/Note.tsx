import { Info } from 'lucide-react'

/**
 * Subtle inline notice. Used for "sample data" / "coming soon" disclosures so
 * they read as intentional UI rather than a warning banner.
 */
export default function Note({
  children,
  tone = 'slate',
  className = '',
}: {
  children: React.ReactNode
  tone?: 'slate' | 'amber'
  className?: string
}) {
  const styles =
    tone === 'amber'
      ? 'border-amber-200 bg-amber-50 text-amber-800'
      : 'border-navy/10 bg-navy/[0.04] text-muted'

  return (
    <div
      className={`flex items-start gap-2.5 rounded-xl border px-4 py-3 text-xs leading-relaxed ${styles} ${className}`}
      role="note"
    >
      <Info size={15} className="mt-0.5 shrink-0 opacity-70" aria-hidden="true" />
      <span>{children}</span>
    </div>
  )
}
