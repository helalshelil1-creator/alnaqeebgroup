import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ArrowRight, Eye, Target, Award, CheckCircle2, ExternalLink } from 'lucide-react'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import usePageMeta from '../lib/usePageMeta'
import { values, company } from '../data/site'
import { services } from '../data/services'
import { Icon } from '../lib/icons'
import Note from '../components/Note'

export default function About() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language === 'ar' ? 'ar' : 'en'
  usePageMeta(t('page.aboutTitle'), t('page.aboutDesc'))

  const why = [
    { en: 'One accountable partner for all engineering disciplines', ar: 'شريك واحد مسؤول عن كل التخصصات الهندسية' },
    { en: 'Integrated design, installation, commissioning and maintenance', ar: 'تكامل التصميم والتركيب والتشغيل والصيانة' },
    { en: 'Safety-first culture across every site', ar: 'ثقافة السلامة أولًا في كل موقع' },
    { en: 'Modern, efficient and innovative building systems', ar: 'أنظمة مبانٍ حديثة وفعّالة ومبتكرة' },
    { en: 'Experienced multidisciplinary engineering teams', ar: 'فرق هندسية متعددة التخصصات وذات خبرة' },
    { en: 'Committed to quality and on-time delivery', ar: 'التزام بالجودة والتسليم في الموعد' },
  ]

  return (
    <>
      <PageHero eyebrow={t('page.aboutEyebrow')} title={t('page.aboutTitle')}
        description={t('page.aboutDesc')} crumb="Home" image="/img/about.jpg" />

      {/* Intro */}
      <section className="bg-white py-20">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="overflow-hidden rounded-3xl shadow-lift">
              <img src="/img/hero3.jpg" alt="AL NAQEEB engineers" loading="lazy" className="h-[420px] w-full object-cover" />
            </div>
          </Reveal>
          <div>
            <SectionHeading title={t('about.introTitle')} />
            <p className="mt-5 text-lg leading-relaxed text-muted">{t('about.introBody')}</p>
            <Link to="/services" className="btn-gold mt-7">
              {t('common.explore')}<ArrowRight size={18} className="rtl:rotate-180" />
            </Link>
          </div>
        </div>
      </section>

      {/* Vision / Mission */}
      <section className="bg-surface py-20">
        <div className="container-x grid gap-6 md:grid-cols-2">
          <Reveal className="card-surface p-8">
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-navy text-gold"><Eye size={26} /></span>
            <h3 className="mt-5 text-2xl font-bold text-navy">{t('about.visionTitle')}</h3>
            <p className="mt-3 leading-relaxed text-muted">{t('about.visionBody')}</p>
          </Reveal>
          <Reveal delay={1} className="card-surface p-8">
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-navy text-gold"><Target size={26} /></span>
            <h3 className="mt-5 text-2xl font-bold text-navy">{t('about.missionTitle')}</h3>
            <p className="mt-3 leading-relaxed text-muted">{t('about.missionBody')}</p>
          </Reveal>
        </div>
      </section>

      {/* Chairman */}
      <section className="bg-navy py-16 lg:py-20">
        <div className="container-x">
          <Reveal className="mx-auto flex max-w-4xl flex-col items-center gap-8 sm:flex-row sm:items-center sm:gap-12">
            <div className="relative shrink-0">
              <div className="absolute -inset-3 rounded-[2rem] bg-gold/25 blur-2xl" aria-hidden="true" />
              <div className="relative rounded-3xl bg-white p-2 shadow-lift">
                <img
                  src="/img/chairman.jpg"
                  alt={company.chairman.name[lang]}
                  loading="lazy"
                  className="h-60 w-44 rounded-2xl object-cover object-top sm:h-72 sm:w-52"
                  width={208}
                  height={288}
                />
              </div>
            </div>
            <div className="text-center sm:text-start">
              <div className="eyebrow justify-center text-gold sm:justify-start">
                <span className="h-px w-8 bg-gold" />
                {t('about.chairmanEyebrow')}
              </div>
              <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">
                {company.chairman.name[lang]}
              </h2>
              <p className="mt-2 text-sm font-bold uppercase tracking-[0.18em] text-gold">
                {company.chairman.role[lang]}
              </p>
              <p className="mt-5 max-w-xl leading-relaxed text-white/70">
                {t('about.chairmanDesc')}
              </p>
              <a
                href="https://Alnaqeeb-group.vercel.app/"
                target="_blank"
                rel="me noopener"
                className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-gold underline-offset-4 transition-colors hover:text-white hover:underline"
              >
                <ExternalLink size={15} />
                {lang === 'ar' ? 'مكتب المهندس هلال شليل — الهندسة الكهربائية والأعمال الكهروميكانيكية' : 'Eng. Helal Shelil — Electrical & Electromechanical Engineering Office'}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Core values */}
      <section className="bg-white py-20">
        <div className="container-x">
          <SectionHeading center title={t('about.valuesTitle')} />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, idx) => (
              <Reveal key={v.title.en} delay={idx} className="rounded-2xl border border-slate-100 bg-surface p-6 text-center transition-shadow hover:shadow-card">
                <span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-navy text-gold">
                  <Icon name={v.icon} size={30} />
                </span>
                <h3 className="mt-4 text-lg font-bold text-navy">{v.title[lang]}</h3>
                <p className="mt-2 text-sm text-muted">{v.text[lang]}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities / expertise */}
      <section className="bg-surface py-20">
        <div className="container-x">
          <SectionHeading center title={t('about.capabilitiesTitle')} subtitle={t('about.expertiseDesc')} />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, idx) => (
              <Reveal key={s.slug} delay={idx % 3}>
                <Link to={`/services/${s.slug}`} className="group flex h-full items-center gap-4 rounded-2xl bg-white p-5 shadow-card transition-all hover:-translate-y-1">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-navy/5 text-navy transition-colors group-hover:bg-navy group-hover:text-gold">
                    <Icon name={s.icon} size={24} />
                  </span>
                  <span className="font-semibold text-ink group-hover:text-navy">{s.title[lang]}</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-navy py-16">
        <div className="container-x grid grid-cols-2 gap-8 lg:grid-cols-4">
          {company.stats.map((s, idx) => (
            <Reveal key={s.label.en} delay={idx} className="text-center">
              <p className="text-4xl font-extrabold text-gold">{s.value}</p>
              <p className="mt-2 text-sm text-white/70">{s.label[lang]}</p>
            </Reveal>
          ))}
        </div>
        {!company.statsVerified && (
          <div className="container-x mt-8">
            <Note className="mx-auto max-w-2xl">{t('about.statsNote')}</Note>
          </div>
        )}
      </section>

      {/* Why choose us */}
      <section className="bg-white py-20">
        <div className="container-x">
          <SectionHeading center title={t('about.whyTitle')} subtitle={t('about.whyDesc')} />
          <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2">
            {why.map((w, idx) => (
              <Reveal key={idx} delay={idx % 2} className="flex items-start gap-3 rounded-xl border border-slate-100 bg-surface p-5">
                <CheckCircle2 className="mt-0.5 shrink-0 text-gold" size={22} />
                <span className="font-medium text-ink">{w[lang]}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
