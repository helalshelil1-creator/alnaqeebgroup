/**
 * Infinite horizontal ticker. Content is rendered twice so the -50% translate
 * loops seamlessly. RTL reverses automatically via the `[dir='rtl']` rule.
 */
export default function Marquee({
  children,
  className = '',
  fast = false,
  mask = true,
}: {
  children: React.ReactNode
  className?: string
  fast?: boolean
  mask?: boolean
}) {
  return (
    <div
      className={`relative overflow-hidden ${mask ? 'marquee-mask' : ''} ${className}`}
    >
      <div className={`flex w-max ${fast ? 'animate-marquee-fast' : 'animate-marquee'}`}>
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  )
}
