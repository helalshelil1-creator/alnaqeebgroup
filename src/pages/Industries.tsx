import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ArrowRight } from 'lucide-react'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import usePageMeta from '../lib/usePageMeta'
import { industries } from '../data/industries'
import { Icon } from '../lib/icons'

export default function Industries() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language === 'ar' ? 'ar' : 'en'
  usePageMeta(t('page.industriesTitle'), t('page.industriesDesc'))

  return (
    <>
      <PageHero eyebrow={t('page.industriesEyebrow')} title={t('page.industriesTitle')}
        description={t('page.industriesDesc')} crumb="Home" image="/img/hero2.jpg" />

      <section className="bg-surface py-20">
        <div className="container-x">
          <h2 className="sr-only">{t('page.industriesTitle')}</h2>
        </div>
        <div className="container-x grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, idx) => (
            <Reveal key={ind.slug} delay={idx % 3} className="h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-card transition-all hover:-translate-y-1.5 hover:shadow-lift">
                <div className="relative h-48 overflow-hidden">
                  <img src={ind.image} alt={ind.title[lang]} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-navy/10" />
                  <span className="absolute bottom-4 start-4 grid h-12 w-12 place-items-center rounded-xl bg-gold text-navy shadow-lg">
                    <Icon name={ind.icon} size={24} />
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-bold text-navy">{ind.title[lang]}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{ind.description[lang]}</p>
                  <div className="mt-4">
                    <p className="text-xs font-bold uppercase tracking-wide text-muted">{t('industries.solutionsTitle')}</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {ind.solutions[lang].map((s, i) => (
                        <span key={i} className="rounded-full bg-surface px-3 py-1 text-xs font-medium text-navy">{s}</span>
                      ))}
                    </div>
                  </div>
                  <Link to="/quote" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-gold hover:text-gold-600">
                    {t('industries.learnMore')}<ArrowRight size={15} className="rtl:rotate-180" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
