import { useEffect, type RefObject } from 'react'

/**
 * Slowly steps a horizontal strip card by card, then back again (bounce).
 * Direction-agnostic (works in RTL). Pauses on any touch/mouse/key/focus
 * interaction and while off-screen; respects reduced motion.
 */
export default function useAutoBounce(ref: RefObject<HTMLElement | null>, intervalMs = 3000, resumeMs = 6000) {
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return
    let dir = 1
    let visible = true
    let pausedUntil = 0
    const pause = () => { pausedUntil = Date.now() + resumeMs }
    const evs = ['pointerdown', 'touchstart', 'wheel', 'keydown', 'focusin', 'mouseenter'] as const
    evs.forEach((e) => el.addEventListener(e, pause, { passive: true }))
    const io = new IntersectionObserver(([en]) => { visible = en.isIntersecting }, { threshold: 0.4 })
    io.observe(el)
    const rtl = () => getComputedStyle(el).direction === 'rtl'
    const tick = () => {
      if (!visible || document.hidden || Date.now() < pausedUntil) return
      const max = el.scrollWidth - el.clientWidth
      if (max <= 4) return
      const kids = Array.from(el.children) as HTMLElement[]
      const r = el.getBoundingClientRect()
      const edge = (c: HTMLElement) => { const b = c.getBoundingClientRect(); return rtl() ? r.right - b.right : b.left - r.left }
      // index of the first card whose start edge is at/after the strip start
      let cur = kids.findIndex((c) => edge(c) > -4)
      if (cur < 0) cur = kids.length - 1
      const atEnd = Math.abs(el.scrollLeft) >= max - 4
      if (atEnd) dir = -1
      else if (cur <= 0 && Math.abs(el.scrollLeft) < 4) dir = 1
      const next = Math.min(kids.length - 1, Math.max(0, cur + dir))
      const delta = edge(kids[next])
      el.scrollBy({ left: rtl() ? -delta : delta, behavior: 'smooth' })
    }
    const id = window.setInterval(tick, intervalMs)
    return () => { window.clearInterval(id); io.disconnect(); evs.forEach((e) => el.removeEventListener(e, pause)) }
  }, [ref, intervalMs, resumeMs])
}
