import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import {
  Mail, Phone, MapPin, Clock, Linkedin, Instagram, Facebook, Twitter,
  ArrowUpRight, ShieldCheck,
} from 'lucide-react'
import { company, contact } from '../data/site'
import { services } from '../data/services'
import { pickLoc } from '../lib/useLoc'

export default function Footer() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language === 'ar' ? 'ar' : 'en'
  const year = new Date().getFullYear()

  const quickLinks = [
    { to: '/about', label: t('nav.about') },
    { to: '/projects', label: t('nav.projects') },
    { to: '/industries', label: t('nav.industries') },
    { to: '/mmt', label: t('nav.mmt') },
    { to: '/technical-office', label: t('nav.office') },
    { to: '/quality', label: t('nav.quality') },
    { to: '/careers', label: t('nav.careers') },
    { to: '/contact', label: t('nav.contact') },
  ]

  const socials = [
    { icon: Linkedin, url: contact.social.linkedin, label: 'LinkedIn' },
    { icon: Instagram, url: contact.social.instagram, label: 'Instagram' },
    { icon: Facebook, url: contact.social.facebook, label: 'Facebook' },
    { icon: Twitter, url: contact.social.x, label: 'X' },
  ].filter((s) => s.url)

  return (
    <footer className="relative overflow-hidden bg-navy text-white">
      {/* decorative gradients */}
      <div className="pointer-events-none absolute inset-0 opacity-50" aria-hidden="true">
        <div className="absolute -top-24 end-0 h-72 w-72 rounded-full bg-navy-800 blur-3xl" />
        <div className="absolute bottom-0 start-1/4 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />
      </div>

      <div className="container-x relative pb-10 pt-16">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="inline-flex rounded-2xl bg-white p-3 shadow-lift">
              <img src={company.logo} alt={company.name} className="h-12 w-auto" />
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
              {t('footer.about')}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-lg bg-white/10 text-white transition-all hover:-translate-y-0.5 hover:bg-gold hover:text-navy"
                >
                  <s.icon size={18} />
                </a>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold">
                <ShieldCheck size={15} />
                {t('about.chairmanEyebrow')}
              </p>
              <div className="mt-3 flex items-center gap-3">
                <img
                  src="/img/chairman.jpg"
                  alt={company.chairman.name[lang]}
                  loading="lazy"
                  className="h-12 w-12 shrink-0 rounded-full object-cover object-top ring-1 ring-white/20"
                  width={48}
                  height={48}
                />
                <div>
                  <p className="text-base font-bold text-white">{company.chairman.name[lang]}</p>
                  <p className="text-xs text-white/60">{company.chairman.role[lang]}</p>
                  <a
                    href="https://Alnaqeeb-group.vercel.app/"
                    target="_blank"
                    rel="me noopener"
                    className="mt-1.5 inline-flex items-center gap-1 text-[11px] font-bold text-gold transition-colors hover:text-white"
                  >
                    <ArrowUpRight size={12} />
                    Alnaqeeb-group.vercel.app
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-gold">{t('footer.quickLinks')}</h3>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="group inline-flex items-center gap-1.5 text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {l.label}
                    <ArrowUpRight size={13} className="opacity-0 transition-opacity group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-gold">{t('footer.ourServices')}</h3>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/services/${s.slug}`}
                    className="group inline-flex items-center gap-1.5 text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {pickLoc(s.title, lang)}
                    <ArrowUpRight size={13} className="opacity-0 transition-opacity group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-gold">{t('footer.contactHeading')}</h3>
            <ul className="mt-5 space-y-4 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <MapPin size={17} className="mt-0.5 shrink-0 text-gold" />
                <span>{pickLoc(contact.address, lang)}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="shrink-0 text-gold" />
                <a href={`tel:${contact.phone.replace(/[^+\d]/g, '')}`} className="transition-colors hover:text-white">
                  {contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="shrink-0 text-gold" />
                <a href={`mailto:${contact.email}`} className="break-all transition-colors hover:text-white">
                  {contact.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={16} className="shrink-0 text-gold" />
                <span>{pickLoc(contact.hours, lang)}</span>
              </li>
            </ul>
            {!contact.verified && (
              <p className="mt-4 rounded-lg bg-white/5 px-3 py-2 text-xs text-white/50">
                {t('footer.placeholderNote')}
              </p>
            )}
            <Link
              to="/quote"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-bold text-navy transition-all hover:-translate-y-0.5 hover:brightness-110"
            >
              {t('nav.quote')}
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 text-sm text-white/60 sm:flex-row">
          <p>© {year} {company.name} — {company.nameAr}. {t('footer.rights')}</p>
          <div className="flex items-center gap-5">
            <p className="text-white/40">{t('footer.built')}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
