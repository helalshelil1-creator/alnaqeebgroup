import { useCallback, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, ArrowRight, Mouse } from 'lucide-react'

const SLIDES = [
  { image: '/img/hero.webp', alt: 'Construction site with tower crane and city skyline at dusk' },
  { image: '/img/hero2.webp', alt: 'Modern highway interchange with traffic and road signs' },
  { image: '/img/hero3.webp', alt: 'Engineers in safety helmets reviewing construction plans at site' },
  { image: '/img/hero4.webp', alt: 'AL NAQEEB GROUP promotional banner — Building a Greater Tomorrow' },
  { image: '/img/mmt-vehicle.webp', alt: 'AL NAQEEB GROUP MMT mobile maintenance vehicle on site' },
  { image: '/img/execution-site.webp', alt: 'Construction site operations with equipment and crews' },
  { image: '/img/ind-infrastructure.webp', alt: 'Infrastructure and highway interchange works' },
]

const AUTOPLAY_MS = 5000

/** 800px variant for phones (…-800.webp) next to the 1600px one. */
const small = (src: string) => src.replace(/\.webp$/, '-800.webp')

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

  // Warm the next slide so the swap never waits on the network.
  useEffect(() => {
    const n = new Image()
    n.srcset = `${small(SLIDES[(i + 1) % SLIDES.length].image)} 800w, ${SLIDES[(i + 1) % SLIDES.length].image} 1600w`
    n.sizes = '100vw'
    n.src = SLIDES[(i + 1) % SLIDES.length].image
  }, [i])

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
    <section className="relative overflow-hidden bg-navy hero-fill">
      {/* Background image with slow Ken-Burns drift */}
      <AnimatePresence initial={false}>
        <motion.div
          key={i}
          className="absolute inset-x-0 top-0 h-[var(--ih)] sm:inset-0 sm:h-auto"
          initial={{ opacity: 0, x: dir > 0 ? 72 : -72 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: dir > 0 ? -72 : 72 }}
          transition={{ duration: 0.9, ease: 'easeInOut' }}
        >
          <motion.img
            src={SLIDES[i].image}
            srcSet={`${small(SLIDES[i].image)} 800w, ${SLIDES[i].image} 1600w`}
            sizes="100vw"
            width={1600}
            height={900}
            alt=""
            loading="eager"
            decoding="async"
            fetchPriority={i === 0 ? 'high' : 'auto'}
            className="h-full w-full object-cover"
            initial={{ scale: 1.14 }}
            animate={{ scale: 1 }}
            transition={{ duration: 5, ease: [0.22, 1, 0.36, 1] }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlays */}
      <div className="absolute inset-0 hidden bg-gradient-to-r from-navy via-navy/85 to-navy/25 sm:block" />
      <div className="absolute inset-0 hidden bg-gradient-to-t from-navy/90 via-transparent to-navy/45 sm:block" />
      {/* Phones: the photo is shown whole (16:9, no crop) above the text panel */}
      <div className="absolute inset-x-0 top-[calc(var(--ih)-40px)] h-10 bg-gradient-to-b from-transparent to-navy sm:hidden" aria-hidden="true" />
      <div className="bg-grid-dark absolute inset-0 opacity-30" aria-hidden="true" />

      {/* Content */}
      <div className="container-x hero-fill relative flex items-center pt-[var(--ih)] sm:pt-0">
        <div className="pointer-events-none absolute inset-y-0 start-0 w-6 bg-gradient-to-r from-navy/40 to-transparent sm:hidden" aria-hidden="true" />
        <div className="max-w-3xl pb-20 pt-5 sm:py-24 sm:px-14 xl:px-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial="hidden"
              animate="show"
              exit={{ opacity: 0, y: -18, transition: { duration: 0.3 } }}
              variants={{ show: { transition: { staggerChildren: 0.09 } } }}
            >
              <motion.div
                className="eyebrow hidden sm:inline-flex"
                variants={{ hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="h-px w-8 bg-gold" />
                {t('hero.eyebrow')}
              </motion.div>

              <motion.h1
                className="hero-h1 mt-5 text-[1.7rem] font-bold uppercase leading-[1.12] tracking-[0.01em] text-white sm:text-4xl lg:text-5xl xl:text-6xl"
                variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              >
                {title1}
                <br />
                <span className="text-gradient-gold">{title2}</span>
              </motion.h1>

              <motion.div
                className="mt-5 flex flex-wrap items-center gap-3 sm:mt-8 sm:gap-4 max-sm:[&_a]:px-4 max-sm:[&_a]:py-2.5 max-sm:[&_a]:text-sm"
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
      <div className="absolute top-[calc(var(--ih)-22px)] start-1/2 z-10 sm:top-auto sm:bottom-6 flex -translate-x-1/2 gap-2.5 rtl:translate-x-1/2">
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
