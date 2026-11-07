import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

/** Animated number that counts up the first time it scrolls into view. */
export default function Counter({
  value,
  suffix = '',
  duration = 1800,
  className = '',
}: {
  value: string
  suffix?: string
  duration?: number
  className?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [n, setN] = useState(0)
  const target = parseInt(value.replace(/[^0-9]/g, ''), 10) || 0

  useEffect(() => {
    if (!inView) return
    let raf = 0
    const start = performance.now()
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - p, 3)
      setN(Math.round(target * eased))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, target, duration])

  return (
    <span ref={ref} className={className}>
      {n}
      {suffix}
    </span>
  )
}
