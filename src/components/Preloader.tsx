import { useEffect, useState } from 'react'

/**
 * Branded preloader. Pure CSS exit (see `.preloader` in index.css) so it can
 * never trap the page if framer-motion is slow to hydrate.
 */
export default function Preloader() {
  const [hidden, setHidden] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const start = performance.now()
    const duration = 1300
    let raf = 0
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration)
      setProgress(p)
      if (p < 1) raf = requestAnimationFrame(tick)
      else window.setTimeout(() => setHidden(true), 220)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <div className={`preloader ${hidden ? 'is-done' : ''}`} aria-hidden={hidden} role="status" aria-label="Loading">
      <div className="flex flex-col items-center gap-7">
        <div className="relative grid h-24 w-24 place-items-center">
          <span className="animate-pulse-ring absolute inset-0 rounded-3xl bg-gold/25" />
          <span className="absolute inset-0 rounded-3xl border border-gold/40" />
          <img src="/img/logo-icon.png" alt="" className="h-16 w-auto object-contain" />
        </div>

        <div className="text-center">
          <p className="text-lg font-extrabold uppercase tracking-[0.32em] text-white">
            Al Naqeeb
          </p>
          <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.42em] text-gold">
            Group
          </p>
        </div>

        <div className="h-0.5 w-44 overflow-hidden rounded-full bg-white/15">
          <div
            className="h-full rounded-full bg-gold"
            style={{ width: `${Math.round(progress * 100)}%` }}
          />
        </div>
      </div>
    </div>
  )
}
