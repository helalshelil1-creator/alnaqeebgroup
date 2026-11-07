import { useTranslation } from 'react-i18next'
import {
  ArrowRight,
  ShieldCheck,
  HardHat,
  Leaf,
  RefreshCcw,
  ClipboardCheck,
  FileCheck2,
  PackageCheck,
  TestTube2,
  CheckCircle2,
} from 'lucide-react'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import usePageMeta from '../lib/usePageMeta'
import Note from '../components/Note'
import CtaBand from '../components/CtaBand'

const PILLAR_ICONS = [ShieldCheck, HardHat, Leaf, RefreshCcw]
const PRACTICE_ICONS = [ClipboardCheck, FileCheck2, PackageCheck, TestTube2]

export default function Quality() {
  const { t } = useTranslation()
  usePageMeta(t('page.qualityTitle'), t('page.qualityDesc'))

  const pillars = t('quality.pillars', { returnObjects: true }) as Record<string, { t: string; d: string }>
  const practices = t('quality.practices', { returnObjects: true }) as Record<string, { t: string; d: string }>
  const safetyPoints = t('home.safetyPoints', { returnObjects: true }) as string[]

  return (
    <>
      <PageHero
        eyebrow={t('page.qualityEyebrow')}
        title={t('page.qualityTitle')}
        description={t('page.qualityDesc')}
        crumb={t('nav.home')}
        image="/img/safety.jpg"
      />

      {/* Pillars */}
      <section className="bg-white py-20">
        <div className="container-x">
          <SectionHeading center title={t('quality.pillarsTitle')} subtitle={t('page.qualityDesc')} />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {Object.values(pillars).map((p, idx) => {
              const IconCmp = PILLAR_ICONS[idx] ?? ShieldCheck
              return (
                <Reveal key={p.t} delay={idx} className="rounded-2xl border border-slate-100 bg-surface p-6 transition-shadow hover:shadow-card">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-navy text-gold">
                    <IconCmp size={26} />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-navy">{p.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{p.d}</p>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Practices */}
      <section className="bg-surface py-20">
        <div className="container-x">
          <SectionHeading center title={t('quality.practicesTitle')} />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {Object.values(practices).map((p, idx) => {
              const IconCmp = PRACTICE_ICONS[idx] ?? ClipboardCheck
              return (
                <Reveal key={p.t} delay={idx} className="flex h-full items-start gap-4 rounded-2xl bg-white p-6 shadow-card">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-navy/5 text-gold">
                    <IconCmp size={22} />
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-navy">{p.t}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{p.d}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Safety banner */}
      <section className="relative overflow-hidden bg-navy py-20">
        <div className="container-x text-center">
          <Reveal>
            <h2 className="text-3xl font-extrabold uppercase tracking-wide text-white sm:text-4xl">
              {t('home.safetyTitle')}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-white/75">
              {t('home.safetyDesc')}
            </p>
          </Reveal>
          <Reveal delay={1}>
            <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {safetyPoints.map((sp) => (
                <div key={sp} className="flex items-center justify-center gap-2 rounded-xl bg-white/5 px-4 py-3">
                  <CheckCircle2 size={18} className="shrink-0 text-gold" />
                  <span className="text-sm font-medium text-white/90">{sp}</span>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-10 text-xl font-bold uppercase tracking-widest text-gold">
              {t('home.safetyMotto')}
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <CtaBand title={t('quality.ctaTitle')} desc={t('quality.ctaDesc')} className="pb-8" />
      <div className="bg-white pb-16">
        <div className="container-x">
          <Note className="mx-auto max-w-2xl">{t('quality.certNote')}</Note>
        </div>
      </div>
    </>
  )
}
