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

const WORD_MS = 240

/** Headline that writes itself word by word from zero. Mounted fresh on every slide change.
 *  Every word is laid out from the start (hidden), so nothing moves while it types. */
type Heading = { title1: string; title2: string }
const words = (x: string) => x.split(/\s+/).filter(Boolean)

function TypedH1({ all, active }: { all: Heading[]; active: number }) {
  const cur = all[active]
  const w1 = words(cur.title1)
  const w2 = words(cur.title2)
  const total = w1.length + w2.length
  const [n, setN] = useState(0)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setN(total)
      return
    }
    let iv: number | undefined
    const st = window.setTimeout(() => {
      iv = window.setInterval(() => {
        setN((v) => {
          if (v + 1 >= total && iv) clearInterval(iv)
          return Math.min(v + 1, total)
        })
      }, WORD_MS)
    }, 500)
    return () => { clearTimeout(st); if (iv) clearInterval(iv) }
  }, [total])
  const word = (wd: string, k: number, gold: boolean) => (
    <span key={k} className={`inline-block transition-opacity duration-300 ${gold ? 'text-gradient-gold' : ''}`} style={{ opacity: k < n ? 1 : 0 }}>
      {wd}
    </span>
  )
  const line = (ws: string[], off: number, gold: boolean) =>
    ws.map((wd, k) => (
      <span key={k}>
        {word(wd, off + k, gold)}
        {k < ws.length - 1 ? ' ' : ''}
      </span>
    ))
  // All headlines share one grid cell, so the block is always as tall as the longest one and nothing moves between slides.
  return (
    <div className="mt-5 grid">
      {all.map((h, k) =>
        k === active ? (
          <h1 key={k} className="hero-h1 text-[1.7rem] font-bold leading-[1.12] text-white sm:text-4xl xl:text-5xl [grid-area:1/1]">
            {line(w1, 0, false)}
            <br />
            {line(w2, w1.length, true)}
          </h1>
        ) : (
          <div key={k} aria-hidden="true" className="hero-h1 invisible select-none text-[1.7rem] font-bold leading-[1.12] sm:text-4xl xl:text-5xl [grid-area:1/1]">
            {h.title1}
            <br />
            {h.title2}
          </div>
        )
      )}
    </div>
  )
}

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

  const hs = t('hero.slides', { returnObjects: true }) as unknown
  const headings: Heading[] = Array.isArray(hs) && hs.length ? (hs as Heading[]) : [{ title1: t('hero.title1'), title2: t('hero.title2') }]

  return (
    <section className="relative overflow-hidden bg-navy hero-fill">
      {/* Background image with slow Ken-Burns drift */}
      <AnimatePresence initial={false}>
        <motion.div
          key={i}
          className="absolute inset-x-0 top-[var(--hh)] h-[var(--ih)] [mask-image:linear-gradient(to_bottom,#000_86%,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,#000_86%,transparent)] lg:[mask-image:none] lg:[-webkit-mask-image:none]"
          initial={{ opacity: 0, x: dir > 0 ? 72 : -72 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: dir > 0 ? -72 : 72 }}
          transition={{ duration: 0.9, ease: 'easeInOut' }}
        >
          <img
            src={SLIDES[i].image}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 block h-full w-full scale-110 object-cover opacity-50 blur-2xl"
          />
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
            className="relative h-full w-full object-contain"
            initial={{ scale: 1.14 }}
            animate={{ scale: 1 }}
            transition={{ duration: 5, ease: [0.22, 1, 0.36, 1] }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlays */}
      {/* Phones: the photo is shown whole (16:9, no crop) above the text panel */}
      <div className="absolute inset-x-0 top-[calc(var(--hh)+var(--ih)-40px)] h-10 bg-gradient-to-b from-transparent to-navy" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[5] h-24 bg-gradient-to-b from-navy/75 to-transparent lg:hidden" aria-hidden="true" />
      <div className="bg-grid-dark absolute inset-0 opacity-30" aria-hidden="true" />

      {/* Content */}
      <div className="container-x hero-fill relative flex items-start lg:items-center pt-[calc(var(--hh)+var(--ih))]">
        <div className="pointer-events-none absolute inset-y-0 start-0 w-6 bg-gradient-to-r from-navy/40 to-transparent hidden" aria-hidden="true" />
        <div className="mx-auto w-full max-w-3xl pb-10 pt-4 text-center sm:px-14 lg:max-w-5xl lg:pb-10 xl:px-0">
          {/* Phones: the logo (smaller on short screens) pulses with a moving shine above the headline */}
          <div className="mb-2 flex justify-center [@media(min-height:740px)]:mb-4" aria-hidden="true">
            <span
              className="logo-pulse relative block h-[52px] w-[78px] [@media(min-height:740px)]:h-[88px] [@media(min-width:1024px)]:!h-[64px] [@media(min-height:740px)]:w-[132px] [@media(min-width:1024px)]:!w-[96px]"
              style={{ ['--logo' as string]: `url(/img/logo-hero.webp)` }}
            >
              <img src="/img/logo-hero.webp" alt="" width={612} height={407} className="h-full w-full object-contain" />
              <span className="logo-shine absolute inset-0" />
            </span>
          </div>

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

              <TypedH1 all={headings} active={i % headings.length} />

              <motion.div
                className="mt-5 flex flex-wrap items-center justify-center gap-3 sm:mt-8 sm:gap-4 max-sm:[&_a]:px-4 max-sm:[&_a]:py-2.5 max-sm:[&_a]:text-sm"
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
            className="mt-8 hidden items-center justify-center gap-2 text-white/70 [@media(min-width:1024px)_and_(min-height:900px)]:flex"
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
      <div className="absolute end-6 top-[calc(var(--hh)+var(--ih)/2)] z-10 hidden -translate-y-1/2 flex-col items-center gap-3 lg:flex">
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
        className="absolute start-4 top-[calc(var(--hh)+var(--ih)/2)] z-10 hidden h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/30 bg-navy/30 text-white backdrop-blur transition-all hover:scale-105 hover:border-gold hover:bg-gold hover:text-navy lg:grid"
      >
        <ChevronLeft size={22} />
      </button>
      <button
        onClick={() => {
          next()
          resetAutoplay()
        }}
        aria-label={t('hero.next')}
        className="absolute end-4 top-[calc(var(--hh)+var(--ih)/2)] z-10 hidden h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/30 bg-navy/30 text-white backdrop-blur transition-all hover:scale-105 hover:border-gold hover:bg-gold hover:text-navy lg:grid"
      >
        <ChevronRight size={22} />
      </button>

      {/* Dots / progress */}
      <div className="absolute top-[calc(var(--hh)+var(--ih)-22px)] start-1/2 z-10  flex -translate-x-1/2 gap-2.5 rtl:translate-x-1/2">
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
