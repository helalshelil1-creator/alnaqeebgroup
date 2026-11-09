import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ArrowRight, CheckCircle2, Compass, PenTool, Wrench, ClipboardCheck, Phone, Mail, MessageCircle } from 'lucide-react'
import HeroSlider from '../components/HeroSlider'
import Marquee from '../components/Marquee'
import Counter from '../components/Counter'
import Faq from '../components/Faq'
import Note from '../components/Note'
import ServiceCard from '../components/ServiceCard'
import AboutSection from '../components/AboutSection'
import SectionHeading from '../components/SectionHeading'
import Feature from '../components/Feature'
import Reveal from '../components/Reveal'
import usePageMeta from '../lib/usePageMeta'
import { services } from '../data/services'
import { company, contact } from '../data/site'
import { Icon } from '../lib/icons'

export default function Home() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language === 'ar' ? 'ar' : 'en'
  usePageMeta(t('page.homeTitle'), t('page.homeDesc'))

  const capabilities = t('home.capabilities', { returnObjects: true }) as string[]
  const officeItems = t('home.officeItems', { returnObjects: true }) as string[]
  const mmtHighlights = t('home.mmtHighlights', { returnObjects: true }) as string[]
  const execItems = t('home.execItems', { returnObjects: true }) as string[]
  const diagItems = t('home.diagItems', { returnObjects: true }) as string[]
  const coordItems = t('home.coordItems', { returnObjects: true }) as string[]
  const safetyPoints = t('home.safetyPoints', { returnObjects: true }) as string[]
  const hqCaptions = t('home.hqCaptions', { returnObjects: true }) as string[]

  const steps = [
    { icon: Compass, title: t('home.process1Title'), desc: t('home.process1Desc') },
    { icon: PenTool, title: t('home.process2Title'), desc: t('home.process2Desc') },
    { icon: Wrench, title: t('home.process3Title'), desc: t('home.process3Desc') },
    { icon: ClipboardCheck, title: t('home.process4Title'), desc: t('home.process4Desc') },
  ]

  const waDisplay = contact.whatsapp.replace(/^\+20(\d{3})(\d{3})(\d{4})$/, '+20 $1 $2 $3')

  const faqItems = [
    { q: t('home.faq1Q'), a: t('home.faq1A') },
    { q: t('home.faq2Q'), a: t('home.faq2A') },
    { q: t('home.faq3Q'), a: t('home.faq3A') },
    { q: t('home.faq4Q'), a: t('home.faq4A') },
  ]

  const hqImages = [
    { src: '/img/hq-office.jpg', alt: 'Executive office and design studio at AL NAQEEB GROUP headquarters' },
    { src: '/img/about.jpg', alt: 'AL NAQEEB GROUP headquarters exterior with corporate branding' },
    { src: '/img/office-design.png', alt: 'Design and technical office with modern workstations' },
  ]

  return (
    <>
      <HeroSlider />

      {/* Disciplines ticker */}
      <div className="border-y border-navy/5 bg-white py-5">
        <Marquee>
          {services.map((s) => (
            <span
              key={s.slug}
              className="mx-7 flex items-center gap-3 whitespace-nowrap text-xs font-bold uppercase tracking-[0.18em] text-navy/55"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              {s.title[lang]}
            </span>
          ))}
        </Marquee>
      </div>

      {/* Services */}
      <section className="bg-surface py-20 lg:py-24">
        <div className="container-x-wide">
          <SectionHeading
            center
            rule
            title={t('home.servicesTitle')}
            subtitle={t('home.servicesSubtitle')}
          />
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted">{t('home.servicesIntro')}</p>

          {/* Seven uniform portrait cards: one row on wide screens, snap-scroll strip below */}
          <ul className="mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 lg:grid lg:snap-none lg:grid-cols-4 lg:overflow-visible lg:pb-0 xl:grid-cols-7">
            {services.map((s, idx) => (
              <ServiceCard key={s.slug} service={s} index={idx % 7} />
            ))}
          </ul>

          <Reveal className="mt-12 text-center">
            <Link to="/services" className="btn-navy">
              {t('service.allServices')}
              <ArrowRight size={18} className="rtl:rotate-180" />
            </Link>
          </Reveal>
        </div>
      </section>

      <AboutSection />

      {/* Delivery process */}
      <section className="bg-surface py-20 lg:py-24">
        <div className="container-x">
          <SectionHeading
            center
            title={t('home.processTitle')}
            subtitle={t('home.processSubtitle')}
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, idx) => (
              <Reveal
                key={step.title}
                delay={idx}
                className="group relative h-full rounded-3xl border border-slate-100 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/40 hover:shadow-lift"
              >
                <span className="absolute end-6 top-5 text-5xl font-extrabold tabular-nums text-navy/5 transition-colors duration-300 group-hover:text-gold/30">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <span className="relative grid h-14 w-14 place-items-center rounded-2xl bg-navy text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-navy">
                  <step.icon size={26} />
                </span>
                <h3 className="relative mt-5 text-lg font-bold text-navy">{step.title}</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-muted">{step.desc}</p>
                <span className="mt-5 block h-0.5 w-8 rounded-full bg-gold/60 transition-all duration-300 group-hover:w-14" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities & Business Scale */}
      <section className="bg-surface py-20 lg:py-24">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="eyebrow">
              <span className="h-px w-8 bg-gold" />
              {t('home.capabilitiesEyebrow')}
            </div>
            <h2 className="mt-3 text-3xl font-extrabold text-navy sm:text-4xl">
              {t('home.capabilitiesTitle')}
            </h2>
            <p className="mt-4 leading-relaxed text-muted">{t('home.capabilitiesDesc')}</p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {capabilities.map((c) => (
                <li key={c} className="flex items-center gap-3 rounded-xl border border-navy/10 bg-white px-4 py-3 shadow-card transition-shadow hover:shadow-lift">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-gold/15 text-gold">
                    <CheckCircle2 size={16} />
                  </span>
                  <span className="text-sm font-bold text-navy">{c}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={1}>
            <div className="relative overflow-hidden rounded-3xl shadow-lift">
              <img src="/img/capabilities.jpg" alt={t('home.capabilitiesTitle')} loading="lazy" className="aspect-[16/9] w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Design & Technical Office teaser */}
      <Feature
        eyebrow={t('home.officeEyebrow')}
        title={t('home.officeTitle')}
        desc={t('home.officeDesc')}
        image="/img/office-design.png"
        alt="Design and technical office with modern workstations and project models"
        items={officeItems.slice(0, 8)}
        linkTo="/technical-office"
        linkLabel={t('office.learnMore')}
      />

      {/* MMT teaser band */}
      <section className="relative overflow-hidden bg-navy-800 py-20 lg:py-24">
        <div className="absolute inset-0 opacity-25">
          <img src="/img/mmt-vehicle.jpg" alt="AL NAQEEB GROUP MMT mobile maintenance vehicle on construction site" className="h-full w-full object-cover" loading="lazy" />
        </div>
        <div className="container-x relative">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <div className="eyebrow text-gold">
                <span className="h-px w-8 bg-gold" />
                {t('home.mmtEyebrow')}
              </div>
              <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
                {t('home.mmtTitle')}
              </h2>
              <p className="mt-3 text-lg font-bold text-gold">{t('home.mmtTagline')}</p>
              <p className="mt-4 leading-relaxed text-white/75">{t('home.mmtDesc')}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                {mmtHighlights.map((h) => (
                  <span key={h} className="rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-sm font-bold text-gold">
                    {h}
                  </span>
                ))}
              </div>
              <Link to="/mmt" className="btn-gold mt-8 inline-flex">
                {t('mmt.learnMore')}
                <ArrowRight size={18} className="rtl:rotate-180" />
              </Link>
            </Reveal>
            <Reveal delay={1}>
              <div className="overflow-hidden rounded-3xl shadow-lift ring-1 ring-white/10">
                <img src="/img/mmt-team.jpg" alt={t('home.mmtTitle')} loading="lazy" className="aspect-[16/9] w-full object-cover" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Project Execution & Site Operations */}
      <Feature
        eyebrow={t('home.execEyebrow')}
        title={t('home.execTitle')}
        desc={t('home.execDesc')}
        image="/img/execution-site.jpg"
        alt="Construction site with engineers and machinery at work"
        items={execItems}
        reverse
      />
      <section className="bg-white pb-20 lg:pb-24">
        <div className="container-x">
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              { src: '/img/execution2.jpg', alt: 'Construction machinery and equipment on site' },
              { src: '/img/execution3.jpg', alt: 'Engineering coordination and quality inspections at site' },
            ].map((g, i) => (
              <Reveal key={g.src} delay={i}>
                <div className="overflow-hidden rounded-2xl shadow-card">
                  <img src={g.src} alt={g.alt} loading="lazy" className="aspect-[16/9] w-full object-cover transition-transform duration-500 hover:scale-105" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance & Fault Diagnosis */}
      <Feature
        eyebrow={t('home.diagEyebrow')}
        title={t('home.diagTitle')}
        desc={t('home.diagDesc')}
        image="/img/diagnosis.jpg"
        alt="Maintenance technician with diagnostic tools on industrial site"
        items={diagItems}
        dark
        linkTo="/mmt"
        linkLabel={t('mmt.learnMore')}
      />

      {/* Project Management & Coordination */}
      <Feature
        eyebrow={t('home.coordEyebrow')}
        title={t('home.coordTitle')}
        desc={t('home.coordDesc')}
        image="/img/coordination.jpg"
        alt="Project management team in meeting discussing construction plans"
        items={coordItems}
        reverse
        linkTo="/projects"
        linkLabel={t('nav.projects')}
      />

      {/* Quality. Safety. Trust band */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0">
          <img src="/img/safety.jpg" alt="" className="h-full w-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-navy/85" />
        </div>
        <div className="container-x relative text-center">
          <Reveal>
            <h2 className="text-3xl font-extrabold tracking-wide text-white sm:text-5xl">
              {t('home.safetyTitle')}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-white/75">{t('home.safetyDesc')}</p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {safetyPoints.map((p) => (
                <span key={p} className="rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-bold text-white backdrop-blur">
                  {p}
                </span>
              ))}
            </div>
            <p className="mt-10 text-xl font-extrabold tracking-[0.2em] text-gold sm:text-2xl">
              {t('home.safetyMotto')}
            </p>
          </Reveal>
        </div>
      </section>

      {/* HQ & Executive Office gallery */}
      <section className="bg-surface py-20 lg:py-24">
        <div className="container-x">
          <SectionHeading
            center
            title={t('home.hqTitle')}
            subtitle={t('home.hqDesc')}
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {hqImages.map((img, i) => (
              <Reveal key={img.src} delay={i}>
                <figure className="group overflow-hidden rounded-2xl bg-white shadow-card transition-shadow hover:shadow-lift">
                  <div className="overflow-hidden">
                    <img src={img.src} alt={img.alt} loading="lazy" className="aspect-[16/9] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <figcaption className="border-t border-navy/5 px-5 py-4 text-sm font-bold text-navy">
                    {img.alt}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="relative overflow-hidden bg-navy py-16">
        <div className="absolute inset-0 opacity-20">
          <img src="/img/hero2.jpg" alt="" className="h-full w-full object-cover" loading="lazy" />
        </div>
        <div className="container-x relative">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {company.stats.map((s, idx) => (
              <Reveal key={s.label.en} delay={idx} className="text-center">
                <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-white/10 text-gold">
                  <Icon name={s.icon} size={26} />
                </span>
                <p className="mt-4 text-4xl font-extrabold tabular-nums text-white">
                  <Counter value={s.value} suffix="+"
                    className="text-gradient-gold" />
                </p>
                <p className="mt-1 text-sm text-white/70">{s.label[lang]}</p>
              </Reveal>
            ))}
          </div>
          {!company.statsVerified && (
            <Note className="mx-auto mt-8 max-w-2xl">{t('about.statsNote')}</Note>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-surface py-20 lg:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <Reveal className="lg:self-center">
            <div className="eyebrow">
              <span className="h-px w-8 bg-gold" />
              {t('home.faqEyebrow')}
            </div>
            <h2 className="mt-3 text-3xl font-extrabold text-navy sm:text-4xl">
              {t('home.faqTitle')}
            </h2>
            <p className="mt-4 leading-relaxed text-muted">{t('home.faqSubtitle')}</p>

            <div className="mt-8 space-y-1 rounded-2xl border border-slate-100 bg-white p-4 shadow-card">
              <a
                href={`tel:${contact.phone.replace(/[^+\d]/g, '')}`}
                className="group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-surface"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-navy/5 text-gold transition-colors group-hover:bg-gold group-hover:text-navy">
                  <Phone size={17} />
                </span>
                <span dir="ltr">{contact.phone}</span>
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-surface"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-navy/5 text-gold transition-colors group-hover:bg-gold group-hover:text-navy">
                  <Mail size={17} />
                </span>
                <span className="break-all">{contact.email}</span>
              </a>
              <a
                href={`https://wa.me/${contact.whatsapp.replace(/\D/g, '')}`}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-surface"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#25D366]/10 text-[#25D366] transition-colors group-hover:bg-[#25D366] group-hover:text-white">
                  <MessageCircle size={17} />
                </span>
                <span dir="ltr">{waDisplay}</span>
              </a>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <Faq items={faqItems} />
          </Reveal>
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-white py-20">
        <div className="container-x">
          <Reveal className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy to-navy-800 px-8 py-14 text-center shadow-lift sm:px-16">
            <div className="absolute -end-10 -top-10 h-40 w-40 rounded-full bg-gold/20 blur-2xl" />
            <div className="absolute -start-10 -bottom-10 h-40 w-40 rounded-full bg-gold/10 blur-2xl" />
            <h2 className="relative text-3xl font-extrabold text-white sm:text-4xl">{t('home.ctaTitle')}</h2>
            <p className="relative mx-auto mt-4 max-w-xl text-white/75">{t('home.ctaDesc')}</p>
            <div className="relative mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/quote" className="btn-gold">
                {t('nav.quote')}
                <ArrowRight size={18} className="rtl:rotate-180" />
              </Link>
              <Link to="/contact" className="btn-outline">
                {t('nav.contact')}
              </Link>
            </div>
            <div className="relative mt-10 overflow-hidden rounded-2xl shadow-lift">
              <img src="/img/we.png" alt="AL NAQEEB GROUP" className="h-auto w-full object-cover" />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
