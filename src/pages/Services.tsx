import { useTranslation } from 'react-i18next'
import { ShieldCheck, Award, Truck, RefreshCcw } from 'lucide-react'
import PageHero from '../components/PageHero'
import ServiceCard from '../components/ServiceCard'
import CtaBand from '../components/CtaBand'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import usePageMeta from '../lib/usePageMeta'
import { services } from '../data/services'

export default function Services() {
  const { t } = useTranslation()
  usePageMeta(t('page.servicesTitle'), t('page.servicesDesc'))

  return (
    <>
      <PageHero eyebrow={t('page.servicesEyebrow')} title={t('page.servicesTitle')}
        description={t('page.servicesDesc')} crumb="Home" image="/img/svc-electrical.jpg" />

      <section className="bg-surface py-20">
        <div className="container-x-wide">
          <h2 className="sr-only">{t('page.servicesTitle')}</h2>
          <ul className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 lg:grid lg:snap-none lg:grid-cols-4 lg:overflow-visible lg:pb-0 xl:grid-cols-7">
            {services.map((s, idx) => (
              <ServiceCard key={s.slug} service={s} index={idx} />
            ))}
          </ul>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-white py-20">
        <div className="container-x">
          <SectionHeading center title={t('service.whyTitle')} subtitle={t('service.whyDesc')} />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: ShieldCheck, title: t('service.why1Title'), desc: t('service.why1Desc') },
              { icon: Award, title: t('service.why2Title'), desc: t('service.why2Desc') },
              { icon: Truck, title: t('service.why3Title'), desc: t('service.why3Desc') },
              { icon: RefreshCcw, title: t('service.why4Title'), desc: t('service.why4Desc') },
            ].map((f, idx) => (
              <Reveal key={f.title} delay={idx} className="group rounded-2xl border border-slate-100 bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lift">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-navy text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-navy">
                  <f.icon size={26} />
                </span>
                <h3 className="mt-5 text-lg font-bold text-navy">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{f.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
