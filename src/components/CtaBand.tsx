import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ArrowRight } from 'lucide-react'
import Reveal from './Reveal'

/**
 * Shared conversion band used at the foot of most pages. Keeps the layout,
 * gradient and glow consistent across the site.
 */
export default function CtaBand({
  title,
  desc,
  primaryTo = '/quote',
  secondaryTo = '/services',
  className = '',
}: {
  title?: string
  desc?: string
  primaryTo?: string
  secondaryTo?: string
  className?: string
}) {
  const { t } = useTranslation()
  return (
    <section className={`bg-white py-16 ${className}`}>
      <div className="container-x">
        <Reveal className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy to-navy-800 px-8 py-10 text-center shadow-lift sm:px-12 sm:py-12">
          <div className="pointer-events-none absolute -end-16 -top-16 h-48 w-48 rounded-full bg-gold/20 blur-3xl" aria-hidden="true" />
          <div className="pointer-events-none absolute -bottom-16 -start-16 h-48 w-48 rounded-full bg-gold/10 blur-3xl" aria-hidden="true" />
          <div className="relative flex flex-col items-center justify-between gap-7 sm:flex-row sm:text-start">
            <div className="max-w-xl">
              <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
                {title || t('service.ctaTitle')}
              </h2>
              <p className="mt-2 text-white/75">{desc || t('service.ctaDesc')}</p>
            </div>
            <div className="flex shrink-0 flex-wrap justify-center gap-4">
              <Link to={primaryTo} className="btn-gold">
                {t('nav.quote')}
                <ArrowRight size={18} className="rtl:rotate-180" />
              </Link>
              <Link to={secondaryTo} className="btn-outline">
                {t('service.allServices')}
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
