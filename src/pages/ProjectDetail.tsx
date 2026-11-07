import { Link, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { MapPin, Calendar, Building2, CheckCircle2, ArrowLeft, ArrowRight, ChevronRight } from 'lucide-react'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import usePageMeta from '../lib/usePageMeta'
import { getProject, projects } from '../data/projects'
import { getService } from '../data/services'
import NotFound from './NotFound'

export default function ProjectDetail() {
  const { slug } = useParams()
  const { t, i18n } = useTranslation()
  const lang = i18n.language === 'ar' ? 'ar' : 'en'
  const project = slug ? getProject(slug) : undefined
  usePageMeta(project ? `${project.title[lang]} — ${t('nav.projects')}` : t('nav.projects'), project ? project.summary[lang] : '')

  if (!project) return <NotFound />

  const idx = projects.findIndex((p) => p.slug === slug)
  const prev = projects[(idx - 1 + projects.length) % projects.length]
  const next = projects[(idx + 1) % projects.length]
  const relatedServices = project.services.map(getService).filter(Boolean)

  const meta = [
    { icon: MapPin, label: t('projects.location'), value: project.location[lang] },
    { icon: Building2, label: t('projects.sector'), value: project.sector[lang] },
    { icon: Calendar, label: t('projects.year'), value: project.year },
    { icon: CheckCircle2, label: t('projects.status'), value: project.status[lang] },
  ]

  return (
    <>
      <section className="relative overflow-hidden bg-navy">
        <div className="absolute inset-0">
          <img src={project.image} alt="" className="h-full w-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/70 to-navy/40" />
        </div>
        <div className="container-x relative py-16 sm:py-24">
          <div className="flex items-center gap-2 text-sm text-white/60">
            <Link to="/" className="hover:text-gold">Home</Link><ChevronRight size={14} className="rtl:rotate-180" />
            <Link to="/projects" className="hover:text-gold">{t('nav.projects')}</Link>
          </div>
          <Reveal>
            <h1 className="mt-5 max-w-3xl text-3xl font-extrabold text-white sm:text-5xl">{project.title[lang]}</h1>
            <p className="mt-4 max-w-2xl text-lg text-white/80">{project.summary[lang]}</p>
          </Reveal>
        </div>
      </section>

      {/* Meta bar */}
      <section className="border-b border-slate-100 bg-white">
        <div className="container-x grid grid-cols-2 gap-6 py-8 lg:grid-cols-4">
          {meta.map((m, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-navy/5 text-navy"><m.icon size={20} /></span>
              <div>
                <p className="text-xs uppercase tracking-wide text-muted">{m.label}</p>
                <p className="font-bold text-ink">{m.value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface py-16">
        <div className="container-x grid gap-10 lg:grid-cols-3">
          <div className="space-y-8 lg:col-span-2">
            <Reveal className="rounded-2xl bg-white p-8 shadow-card">
              <h2 className="text-2xl font-bold text-navy">{t('projects.challenge')}</h2>
              <p className="mt-3 leading-relaxed text-muted">{project.challenge[lang]}</p>
            </Reveal>
            <Reveal className="rounded-2xl bg-white p-8 shadow-card">
              <h2 className="text-2xl font-bold text-navy">{t('projects.solution')}</h2>
              <p className="mt-3 leading-relaxed text-muted">{project.solution[lang]}</p>
            </Reveal>
            <Reveal className="rounded-2xl bg-white p-8 shadow-card">
              <h2 className="text-2xl font-bold text-navy">{t('projects.results')}</h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-3">
                {project.results[lang].map((r, i) => (
                  <li key={i} className="flex items-start gap-2 rounded-xl bg-surface p-4">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-gold" />
                    <span className="text-sm font-medium text-ink">{r}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <div className="space-y-6">
            <Reveal className="rounded-2xl bg-navy p-6 text-white">
              <h3 className="text-lg font-bold">{t('projects.services')}</h3>
              <ul className="mt-4 space-y-2">
                {relatedServices.map((s) => s && (
                  <li key={s.slug}>
                    <Link to={`/services/${s.slug}`} className="flex items-center justify-between rounded-lg bg-white/5 px-4 py-2.5 text-sm transition-colors hover:bg-white/10">
                      {s.title[lang]}<ArrowRight size={15} className="rtl:rotate-180" />
                    </Link>
                  </li>
                ))}
              </ul>
              <Link to="/quote" className="btn-gold mt-5 w-full">{t('nav.quote')}</Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Prev / Next */}
      <section className="bg-white py-12">
        <div className="container-x grid gap-4 sm:grid-cols-2">
          <Link to={`/projects/${prev.slug}`} className="group flex items-center gap-4 rounded-2xl border border-slate-100 p-5 transition-colors hover:border-navy">
            <ArrowLeft size={22} className="text-navy rtl:rotate-180" />
            <div>
              <p className="text-xs uppercase tracking-wide text-muted">{t('projects.prev')}</p>
              <p className="font-bold text-ink group-hover:text-navy">{prev.title[lang]}</p>
            </div>
          </Link>
          <Link to={`/projects/${next.slug}`} className="group flex items-center justify-end gap-4 rounded-2xl border border-slate-100 p-5 text-end transition-colors hover:border-navy">
            <div>
              <p className="text-xs uppercase tracking-wide text-muted">{t('projects.next')}</p>
              <p className="font-bold text-ink group-hover:text-navy">{next.title[lang]}</p>
            </div>
            <ArrowRight size={22} className="text-navy rtl:rotate-180" />
          </Link>
        </div>
        <div className="container-x mt-8 text-center">
          <Link to="/projects" className="btn-navy">{t('projects.back')}</Link>
        </div>
      </section>
    </>
  )
}
