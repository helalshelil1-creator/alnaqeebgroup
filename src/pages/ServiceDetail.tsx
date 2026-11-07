import { Link, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ArrowRight, Check, ChevronRight } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import ServiceCard from '../components/ServiceCard'
import usePageMeta from '../lib/usePageMeta'
import { getService, services } from '../data/services'
import { projects } from '../data/projects'
import { Icon } from '../lib/icons'
import NotFound from './NotFound'

export default function ServiceDetail() {
  const { slug } = useParams()
  const { t, i18n } = useTranslation()
  const lang = i18n.language === 'ar' ? 'ar' : 'en'
  const service = slug ? getService(slug) : undefined

  usePageMeta(
    service ? `${service.title[lang]} — ${t('page.servicesTitle')}` : t('page.servicesTitle'),
    service ? service.blurb[lang] : t('page.servicesDesc'),
  )

  if (!service) return <NotFound />

  const related = service.related.map(getService).filter(Boolean)
  const relatedProjects = projects.filter((p) => p.services.includes(service.slug)).slice(0, 3)

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy">
        <div className="absolute inset-0">
          <img src={service.image} alt="" className="h-full w-full object-cover opacity-40" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/50" />
        </div>
        <div className="container-x relative py-16 sm:py-24">
          <Reveal>
            <div className="flex items-center gap-2 text-sm text-white/60">
              <Link to="/" className="hover:text-gold">Home</Link><ChevronRight size={14} className="rtl:rotate-180" />
              <Link to="/services" className="hover:text-gold">{t('nav.services')}</Link><ChevronRight size={14} className="rtl:rotate-180" />
              <span className="text-gold">{service.title[lang]}</span>
            </div>
            <div className="mt-6 flex items-center gap-4">
              <span className="grid h-16 w-16 place-items-center rounded-2xl bg-gold text-navy shadow-lg">
                <Icon name={service.icon} size={32} />
              </span>
              <h1 className="text-3xl font-extrabold text-white sm:text-5xl">{service.title[lang]}</h1>
            </div>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">{service.description[lang]}</p>
            <Link to="/quote" className="btn-gold mt-8">
              {t('nav.quote')}<ArrowRight size={18} className="rtl:rotate-180" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Scope + capabilities */}
      <section className="bg-white py-20">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading title={t('service.scopeTitle')} />
            <ul className="mt-6 space-y-3">
              {service.scope[lang].map((item, idx) => (
                <Reveal as="li" key={idx} delay={idx} className="flex items-start gap-3 rounded-xl border border-slate-100 bg-surface p-4">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-navy text-white"><Check size={14} /></span>
                  <span className="font-medium text-ink">{item}</span>
                </Reveal>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading title={t('service.capabilitiesTitle')} />
            <ul className="mt-6 space-y-3">
              {service.capabilities[lang].map((item, idx) => (
                <Reveal as="li" key={idx} delay={idx} className="flex items-start gap-3 rounded-xl border border-slate-100 bg-surface p-4">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gold text-navy"><Check size={14} /></span>
                  <span className="font-medium text-ink">{item}</span>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Related projects */}
      {relatedProjects.length > 0 && (
        <section className="bg-surface py-20">
          <div className="container-x">
            <SectionHeading title={t('page.projectsTitle')} />
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProjects.map((p, idx) => (
                <Reveal key={p.slug} delay={idx}>
                  <Link to={`/projects/${p.slug}`} className="group block overflow-hidden rounded-2xl bg-white shadow-card transition-all hover:-translate-y-1">
                    <div className="h-44 overflow-hidden">
                      <img src={p.image} alt={p.title[lang]} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold text-navy group-hover:text-gold">{p.title[lang]}</h3>
                      <p className="mt-1 text-sm text-muted">{p.sector[lang]}</p>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related services */}
      <section className="bg-white py-20">
        <div className="container-x-wide">
          <SectionHeading title={t('service.related')} />
          <ul className="mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 lg:grid lg:snap-none lg:grid-cols-3 lg:overflow-visible lg:pb-0">
            {related.map((s, idx) => s && <ServiceCard key={s.slug} service={s} index={idx} />)}
          </ul>
        </div>
      </section>
    </>
  )
}
