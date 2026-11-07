import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Home, ArrowRight } from 'lucide-react'

export default function NotFound() {
  const { t } = useTranslation()
  return (
    <section className="relative overflow-hidden bg-navy">
      <div className="absolute inset-0">
        <img src="/img/hero2.jpg" alt="" className="h-full w-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy/95 to-navy-800" />
        <div className="bg-grid-dark absolute inset-0 opacity-25" aria-hidden="true" />
      </div>

      <div className="container-x relative grid min-h-[72vh] place-items-center px-6 py-24 text-center">
        <div>
          <p className="text-gradient-gold text-7xl font-extrabold tabular-nums sm:text-9xl">
            404
          </p>
          <h1 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
            {t('notFound.title')}
          </h1>
          <p className="mx-auto mt-3 max-w-md leading-relaxed text-white/70">
            {t('notFound.desc')}
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link to="/" className="btn-gold">
              <Home size={18} /> {t('notFound.back')}
            </Link>
            <Link to="/services" className="btn-outline">
              {t('nav.services')}
              <ArrowRight size={18} className="rtl:rotate-180" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
