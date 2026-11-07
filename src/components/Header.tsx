import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, Menu, X, Globe, ArrowRight } from 'lucide-react'
import { company } from '../data/site'
import { services } from '../data/services'
import { pickLoc } from '../lib/useLoc'

const NAV = [
  { to: '/', key: 'home' },
  { to: '/about', key: 'about' },
  { to: '/services', key: 'services' },
  { to: '/careers', key: 'careers' },
  { to: '/contact', key: 'contact' },
]

export default function Header() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language === 'ar' ? 'ar' : 'en'
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [svcOpen, setSvcOpen] = useState(false)
  const [mobileSvcOpen, setMobileSvcOpen] = useState(false)
  const location = useLocation()
  const svcRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setSvcOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (svcRef.current && !svcRef.current.contains(e.target as Node)) setSvcOpen(false)
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [])

  const toggleLang = () => i18n.changeLanguage(lang === 'en' ? 'ar' : 'en')

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? 'bg-white/85 shadow-[0_6px_24px_-12px_rgba(6,43,82,0.28)] backdrop-blur-xl'
            : 'bg-white'
        }`}
      >
        {/* gold accent line that appears on scroll */}
        <div
          className={`h-[2px] bg-gradient-to-r from-gold/0 via-gold to-gold/0 transition-opacity duration-500 ${
            scrolled ? 'opacity-100' : 'opacity-0'
          }`}
          aria-hidden="true"
        />
        <div className="container-x flex items-center justify-between gap-4 py-1.5">
          {/* Logo */}
          <Link to="/" className="flex shrink-0 items-center" aria-label={company.name}>
            <img
              src={company.logo}
              alt={`${company.name} — ${company.nameAr}`}
              className={`h-12 w-auto object-contain transition-all duration-300 sm:h-[68px] ${scrolled ? 'sm:h-16' : ''}`}
              width={136}
              height={68}
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-3 xl:flex 2xl:gap-6" aria-label="Primary">
            {NAV.map((item) =>
              item.key === 'services' ? (
                <div key={item.key} className="relative" ref={svcRef}
                  onMouseEnter={() => setSvcOpen(true)}
                  onMouseLeave={() => setSvcOpen(false)}
                >
                  <NavLink
                    to="/services"
                    className={({ isActive }) => `nav-link flex items-center gap-1 ${isActive ? 'active' : ''}`}
                  >
                    {t('nav.services')}
                    <ChevronDown size={15} className={`transition-transform ${svcOpen ? 'rotate-180' : ''}`} />
                  </NavLink>
                  <AnimatePresence>
                    {svcOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.18 }}
                        className="absolute start-0 top-full mt-2 w-72 overflow-hidden rounded-2xl border border-slate-100 bg-white p-2 shadow-lift"
                      >
                        {services.map((s) => (
                          <Link
                            key={s.slug}
                            to={`/services/${s.slug}`}
                            className="group flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-surface"
                          >
                            <span className="grid h-8 w-8 place-items-center rounded-lg bg-navy/5 text-gold transition-colors group-hover:bg-navy">
                              <ArrowRight size={15} />
                            </span>
                            <span className="text-sm font-semibold text-ink group-hover:text-navy">
                              {pickLoc(s.title, lang)}
                            </span>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <NavLink key={item.key} to={item.to} end={item.to === '/'}
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                >
                  {t(`nav.${item.key}`)}
                </NavLink>
              )
            )}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={toggleLang}
              className="hidden items-center gap-1.5 rounded-full border border-slate-200 px-3 py-2 text-sm font-semibold text-navy transition-colors hover:border-navy hover:bg-surface sm:inline-flex"
              aria-label="Switch language"
            >
              <Globe size={16} />
              {lang === 'en' ? 'العربية' : 'EN'}
            </button>
            <Link to="/quote" className="btn-navy hidden whitespace-nowrap text-sm sm:inline-flex sm:px-4 sm:py-2">
              {t('nav.quote')}
            </Link>
            <button
              className="grid h-11 w-11 place-items-center rounded-xl bg-navy text-white xl:hidden"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[60] xl:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-navy/60 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
            <motion.aside
              className="absolute inset-y-0 end-0 flex w-[86%] max-w-sm flex-col bg-white shadow-2xl"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative overflow-hidden bg-navy px-5 py-5">
                <div className="bg-grid-dark absolute inset-0 opacity-30" aria-hidden="true" />
                <div className="relative flex items-center justify-between">
                  <img src={company.logo} alt={company.name} className="h-10 w-auto rounded-lg bg-white px-2 py-1" />
                  <button className="grid h-10 w-10 place-items-center rounded-lg bg-white/10 text-white transition-colors hover:bg-gold hover:text-navy"
                    onClick={() => setMobileOpen(false)} aria-label="Close menu">
                    <X size={20} />
                  </button>
                </div>
                <p className="relative mt-4 text-xs font-bold uppercase tracking-[0.2em] text-gold">
                  {t('hero.eyebrow')}
                </p>
              </div>
              <nav className="flex-1 overflow-y-auto px-3 py-4">
                {NAV.map((item) =>
                  item.key === 'services' ? (
                    <div key={item.key} className="border-b border-slate-50">
                      <button
                        className="flex w-full items-center justify-between px-3 py-3 text-start text-base font-semibold text-ink"
                        onClick={() => setMobileSvcOpen((v) => !v)}
                      >
                        {t('nav.services')}
                        <ChevronDown size={18} className={`transition-transform ${mobileSvcOpen ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {mobileSvcOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden ps-3"
                          >
                            {services.map((s) => (
                              <Link key={s.slug} to={`/services/${s.slug}`}
                                className="block rounded-lg px-3 py-2 text-sm text-muted hover:bg-surface hover:text-navy">
                                {pickLoc(s.title, lang)}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <NavLink key={item.key} to={item.to} end={item.to === '/'}
                      className={({ isActive }) =>
                        `block border-b border-slate-50 px-3 py-3 text-base font-semibold ${
                          isActive ? 'text-gold' : 'text-ink'}`}>
                      {t(`nav.${item.key}`)}
                    </NavLink>
                  )
                )}
              </nav>
              <div className="space-y-3 border-t border-slate-100 p-5">
                <button onClick={toggleLang}
                  className="btn w-full border border-slate-200 py-3 text-navy">
                  <Globe size={18} /> {lang === 'en' ? 'التبديل إلى العربية' : 'Switch to English'}
                </button>
                <Link to="/quote" className="btn-gold w-full py-3">{t('nav.quote')}</Link>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
