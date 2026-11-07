import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import {
  ArrowRight,
  Wrench,
  Zap,
  Settings,
  Flame,
  Gauge,
  Clock,
  MapPin,
  Phone,
  ShieldCheck,
  Truck,
  Users,
} from 'lucide-react'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import CtaBand from '../components/CtaBand'
import usePageMeta from '../lib/usePageMeta'

const SERVICE_ICONS = [Wrench, Zap, Settings, Flame, Gauge, Clock, ShieldCheck, Wrench, Zap, MapPin]

export default function MMT() {
  const { t } = useTranslation()
  usePageMeta(t('mmt.title'), t('mmt.desc'))

  const services = t('mmt.services', { returnObjects: true }) as string[]

  return (
    <>
      <PageHero
        eyebrow={t('mmt.eyebrow')}
        title={t('mmt.title')}
        description={t('mmt.desc')}
        crumb={t('nav.home')}
        image="/img/mmt-team.jpg"
      />

      {/* Services */}
      <section className="bg-white py-20">
        <div className="container-x">
          <SectionHeading center title={t('mmt.servicesTitle')} subtitle={t('mmt.desc')} />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, idx) => {
              const IconCmp = SERVICE_ICONS[idx] ?? Wrench
              return (
                <Reveal key={s} delay={idx % 3} className="flex h-full items-start gap-4 rounded-2xl border border-slate-100 bg-surface p-6 transition-shadow hover:shadow-card">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-navy/5 text-gold">
                    <IconCmp size={22} />
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-navy">{s}</h3>
                    <span className="mt-2 block h-0.5 w-8 rounded bg-gold/60" />
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Vehicle */}
      <section className="bg-surface py-20">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="overflow-hidden rounded-3xl shadow-lift">
              <img src="/img/mmt-vehicle.jpg" alt="AL NAQEEB GROUP MMT mobile maintenance vehicle" loading="lazy" className="h-[420px] w-full object-cover" />
            </div>
          </Reveal>
          <div>
            <SectionHeading title={t('mmt.vehicleTitle')} />
            <p className="mt-5 text-lg leading-relaxed text-muted">{t('mmt.vehicleDesc')}</p>
            <Link to="/quote" className="btn-gold mt-7">
              {t('nav.quote')}<ArrowRight size={18} className="rtl:rotate-180" />
            </Link>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-white py-20">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <SectionHeading title={t('mmt.teamTitle')} />
            <p className="mt-5 text-lg leading-relaxed text-muted">{t('mmt.teamDesc')}</p>
            <div className="mt-7 flex flex-wrap gap-4">
              <Link to="/contact" className="btn-outline">
                <Phone size={18} />{t('nav.contact')}
              </Link>
            </div>
          </div>
          <Reveal className="order-1 lg:order-2">
            <div className="overflow-hidden rounded-3xl shadow-lift">
              <img src="/img/mmt-team.jpg" alt="MMT certified technicians on site" loading="lazy" className="h-[420px] w-full object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Request CTA */}
      <CtaBand title={t('mmt.requestTitle')} desc={t('mmt.requestDesc')} />
    </>
  )
}
