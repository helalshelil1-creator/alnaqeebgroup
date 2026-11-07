import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import type { ReactNode } from 'react'

export default function Reveal({
  children,
  delay = 0,
  className,
  as = 'div',
}: {
  children: ReactNode
  delay?: number
  className?: string
  as?: 'div' | 'section' | 'li' | 'span'
}) {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (inView) setShow(true)
  }, [inView])

  // Safety net: guarantee content is revealed even if IntersectionObserver
  // never fires (e.g. unusual environments, full-page captures).
  useEffect(() => {
    const t = window.setTimeout(() => setShow(true), 1400)
    return () => window.clearTimeout(t)
  }, [])

  const MotionTag = motion[as] as any
  return (
    <MotionTag
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 26 }}
      animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 26 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: delay * 0.08 }}
    >
      {children}
    </MotionTag>
  )
}
