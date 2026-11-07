import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ArrowRight } from 'lucide-react'
import { values } from '../data/site'
import { Icon } from '../lib/icons'
import Reveal from './Reveal'

export default function AboutSection() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language === 'ar' ? 'ar' : 'en'

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Image */}
        <Reveal className="relative">
          <div className="overflow-hidden rounded-3xl shadow-lift">
            <img
              src="/img/about.jpg"
              alt="AL NAQEEB GROUP headquarters exterior with corporate branding"
              loading="lazy"
              className="h-[380px] w-full object-cover sm:h-[460px]"
            />
          </div>
          {/* floating badge */}
          <div className="absolute -bottom-6 end-6 hidden rounded-2xl bg-navy px-6 py-5 text-white shadow-lift sm:block">
            <p className="text-3xl font-extrabold text-gold">24/7</p>
            <p className="text-sm text-white/70">Engineering support</p>
          </div>
          <div className="absolute -start-4 -top-4 -z-10 h-24 w-24 rounded-2xl bg-gold/20" />
        </Reveal>

        {/* Text */}
        <div>
          <Reveal>
            <div className="eyebrow"><span className="h-px w-8 bg-gold" />{t('home.servicesSubtitle')}</div>
            <h2 className="mt-3 text-3xl font-extrabold text-navy sm:text-4xl">{t('home.aboutTitle')}</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">{t('home.aboutDesc')}</p>
          </Reveal>

          <div className="mt-8 grid grid-cols-2 gap-5">
            {values.map((v, idx) => (
              <Reveal key={v.title.en} delay={idx} className="flex items-start gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-navy/5 text-navy">
                  <Icon name={v.icon} size={22} />
                </span>
                <div>
                  <h3 className="font-bold text-ink">{v.title[lang]}</h3>
                  <p className="mt-0.5 text-sm text-muted">{v.text[lang]}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={1}>
            <Link to="/about" className="btn-gold mt-9">
              {t('common.learnMore')}
              <ArrowRight size={18} className="rtl:rotate-180" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
