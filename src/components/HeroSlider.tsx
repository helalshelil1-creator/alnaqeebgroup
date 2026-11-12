import { useCallback, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, ArrowRight, Mouse } from 'lucide-react'

const SLIDES = [
  { image: '/img/hero.jpg', alt: 'Construction site with tower crane and city skyline at dusk' },
  { image: '/img/hero2.jpg', alt: 'Modern highway interchange with traffic and road signs' },
  { image: '/img/hero3.jpg', alt: 'Engineers in safety helmets reviewing construction plans at site' },
  { image: '/img/hero4.png', alt: 'AL NAQEEB GROUP promotional banner — Building a Greater Tomorrow' },
  { image: '/img/mmt-vehicle.jpg', alt: 'AL NAQEEB GROUP MMT mobile maintenance vehicle on site' },
  { image: '/img/execution-site.jpg', alt: 'Construction site operations with equipment and crews' },
  { image: '/img/ind-infrastructure.jpg', alt: 'Infrastructure and highway interchange works' },
]

const AUTOPLAY_MS = 6500

export default function HeroSlider() {
  const { t } = useTranslation()
  const [i, setI] = useState(0)
  const [dir, setDir] = useState<1 | -1>(1)
  const timer = useRef<number | null>(null)

  const go = useCallback((next: number, d: 1 | -1) => {
    setDir(d)
    setI((next + SLIDES.length) % SLIDES.length)
  }, [])

  const resetAutoplay = useCallback(() => {
    if (timer.current) clearInterval(timer.current)

    timer.current = window.setInterval(() => {
      setI((p) => (p + 1) % SLIDES.length)
      setDir(1)
    }, AUTOPLAY_MS)
  }, [])

  const next = () => go(i + 1, 1)
  const prev = () => go(i - 1, -1)

  useEffect(() => {
    resetAutoplay()
    return () => {
      if (timer.current) clearInterval(timer.current)
    }
  }, [resetAutoplay])

  const title1 = t('hero.title1')
  const title2 = t('hero.title2')

  return (
    <section className="relative min-h-[600px] overflow-hidden bg-navy lg:h-[92vh] lg:min-h-[680px]">
      {/* Background image with slow Ken-Burns drift */}
      <AnimatePresence initial={false}>
        <motion.div
          key={i}
          className="absolute inset-0"
          initial={{ opacity: 0, x: dir > 0 ? 72 : -72 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: dir > 0 ? -72 : 72 }}
          transition={{ duration: 0.9, ease: 'easeInOut' }}
        >
          <motion.img
            src={SLIDES[i].image}
            alt=""
            loading="eager"
            className="h-full w-full object-cover"
            initial={{ scale: 1.14 }}
            animate={{ scale: 1 }}
            transition={{ duration: 6.5, ease: [0.22, 1, 0.36, 1] }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-transparent to-navy/45" />
      <div className="bg-grid-dark absolute inset-0 opacity-30" aria-hidden="true" />

      {/* Content */}
      <div className="container-x relative flex min-h-[600px] items-center lg:h-[92vh]">
        <div className="pointer-events-none absolute inset-y-0 start-0 w-6 bg-gradient-to-r from-navy/40 to-transparent sm:hidden" aria-hidden="true" />
        <div className="max-w-3xl py-24">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial="hidden"
              animate="show"
              exit={{ opacity: 0, y: -18, transition: { duration: 0.3 } }}
              variants={{ show: { transition: { staggerChildren: 0.09 } } }}
            >
              <motion.div
                className="eyebrow"
                variants={{ hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="h-px w-8 bg-gold" />
                {t('hero.eyebrow')}
              </motion.div>

              <motion.h1
                className="mt-5 text-4xl font-extrabold uppercase leading-[1.06] text-white sm:text-5xl lg:text-6xl xl:text-7xl"
                variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              >
                {title1}
                <br />
                <span className="text-gradient-gold">{title2}</span>
              </motion.h1>

              <motion.p
                className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg"
                variants={{ hidden: { opacity: 0, y: 26 }, show: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                {t('hero.desc')}
              </motion.p>

              <motion.div
                className="mt-8 flex flex-wrap items-center gap-4"
                variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link to="/services" className="btn-gold sheen">
                  {t('common.explore')}
                  <ArrowRight size={18} className="rtl:rotate-180" />
                </Link>
                <Link to="/quote" className="btn-outline">
                  {t('nav.quote')}
                  <ArrowRight size={18} className="rtl:rotate-180" />
                </Link>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Scroll indicator */}
          <motion.div
            className="mt-14 hidden items-center gap-2 text-white/70 sm:flex"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <span className="grid h-9 w-9 place-items-center rounded-full border border-white/25">
              <Mouse size={17} className="animate-float" />
            </span>
            <span className="text-sm">{t('common.scrollDown')}</span>
          </motion.div>
        </div>
      </div>

      {/* Slide counter */}
      <div className="absolute end-6 top-1/2 z-10 hidden -translate-y-1/2 flex-col items-center gap-3 lg:flex">
        {SLIDES.map((_, idx) => (
          <span
            key={idx}
            className={`text-xs font-bold tabular-nums transition-colors ${
              idx === i ? 'text-gold' : 'text-white/40'
            }`}
          >
            {String(idx + 1).padStart(2, '0')}
          </span>
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={() => {
          prev()
          resetAutoplay()
        }}
        aria-label={t('hero.prev')}
        className="absolute start-4 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/30 bg-navy/30 text-white backdrop-blur transition-all hover:scale-105 hover:border-gold hover:bg-gold hover:text-navy sm:grid"
      >
        <ChevronLeft size={22} />
      </button>
      <button
        onClick={() => {
          next()
          resetAutoplay()
        }}
        aria-label={t('hero.next')}
        className="absolute end-4 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/30 bg-navy/30 text-white backdrop-blur transition-all hover:scale-105 hover:border-gold hover:bg-gold hover:text-navy sm:grid"
      >
        <ChevronRight size={22} />
      </button>

      {/* Dots / progress */}
      <div className="absolute bottom-6 start-1/2 z-10 flex -translate-x-1/2 gap-2.5 rtl:translate-x-1/2">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              go(idx, idx > i ? 1 : -1)
              resetAutoplay()
            }}
            aria-label={`Slide ${idx + 1}`}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              idx === i ? 'w-8 bg-gold' : 'w-2.5 bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
