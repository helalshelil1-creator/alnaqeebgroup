import { useTranslation } from 'react-i18next'
import { Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react'
import Note from '../components/Note'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import Field from '../components/Field'
import FormStatus from '../components/FormStatus'
import usePageMeta from '../lib/usePageMeta'
import { useForm } from '../lib/useForm'
import { contact, company } from '../data/site'

export default function Contact() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language === 'ar' ? 'ar' : 'en'
  usePageMeta(t('page.contactTitle'), t('page.contactDesc'))

  const form = useForm(
    'contact',
    { fullName: '', company: '', email: '', phone: '', subject: '', message: '' },
    ['fullName', 'email', 'phone', 'message'],
    'forms.successContact',
  )

  const cards = [
    { icon: Mail, label: t('forms.email'), value: contact.email, href: `mailto:${contact.email}` },
    { icon: Phone, label: t('forms.phone'), value: contact.phone, href: `tel:${contact.phone.replace(/[^+\d]/g, '')}` },
    { icon: MessageCircle, label: 'WhatsApp', value: contact.whatsapp, href: `https://wa.me/${contact.whatsapp.replace(/\D/g, '')}` },
    { icon: MapPin, label: t('common.address'), value: contact.address[lang], href: '' },
    { icon: Clock, label: t('footer.contactHeading'), value: contact.hours[lang], href: '' },
  ]

  return (
    <>
      <PageHero eyebrow={t('page.contactEyebrow')} title={t('page.contactTitle')}
        description={t('page.contactDesc')} crumb="Home" image="/img/about.jpg" />

      <section className="bg-surface py-16">
        <div className="container-x grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, idx) => (
            <Reveal key={idx} delay={idx} className="rounded-2xl bg-white p-6 text-center shadow-card">
              <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-navy text-gold"><c.icon size={24} /></span>
              <p className="mt-4 text-xs font-bold uppercase tracking-wide text-muted">{c.label}</p>
              {c.href ? (
                <a href={c.href} className="mt-1 block break-all font-semibold text-navy hover:text-gold">{c.value}</a>
              ) : (
                <p className="mt-1 font-semibold text-navy">{c.value}</p>
              )}
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          {/* Form */}
          <div>
            <SectionHeading title={t('page.contactTitle')} subtitle={t('page.contactDesc')} />
            <form onSubmit={form.onSubmit} className="mt-8 grid gap-5 sm:grid-cols-2" noValidate>
              <Field label={t('forms.fullName')} name="fullName" required value={form.values.fullName} onChange={(v) => form.setField('fullName', v)} error={form.errors.fullName} />
              <Field label={t('forms.companyName')} name="company" value={form.values.company} onChange={(v) => form.setField('company', v)} />
              <Field label={t('forms.email')} name="email" type="email" required value={form.values.email} onChange={(v) => form.setField('email', v)} error={form.errors.email} />
              <Field label={t('forms.phone')} name="phone" type="tel" required value={form.values.phone} onChange={(v) => form.setField('phone', v)} error={form.errors.phone} />
              <div className="sm:col-span-2">
                <Field label={t('forms.subject')} name="subject" value={form.values.subject} onChange={(v) => form.setField('subject', v)} />
              </div>
              <div className="sm:col-span-2">
                <Field label={t('forms.message')} name="message" type="textarea" required rows={5} value={form.values.message} onChange={(v) => form.setField('message', v)} error={form.errors.message} />
              </div>
              <div className="sm:col-span-2">
                <button type="submit" disabled={form.submitting} className="btn-navy w-full">
                  {form.submitting ? form.sendingLabel : t('forms.submitContact')}
                </button>
              </div>
              <div className="sm:col-span-2">
                <FormStatus result={form.result} successText={form.successText} />
              </div>
            </form>
          </div>

          {/* Map / location */}
          <div className="flex flex-col gap-6">
            <Reveal className="overflow-hidden rounded-3xl shadow-lift">
              <img src="/img/hq-office.jpg" alt="Modern office lobby interior with corporate branding" loading="lazy" className="h-[280px] w-full object-cover" />
            </Reveal>
            <Reveal className="rounded-3xl border border-slate-100 bg-surface p-8">
              <h3 className="text-xl font-bold text-navy">{t('common.address')}</h3>
              {contact.mapUrl ? (
                <div className="mt-4 overflow-hidden rounded-2xl">
                  <iframe title="map" src={contact.mapUrl} className="h-64 w-full border-0" loading="lazy" />
                </div>
              ) : (
                <Note className="mt-4">
                  {contact.verified ? t('footer.mapNote') : t('footer.placeholderNote')}
                </Note>
              )}
              <p className="mt-4 text-muted">{contact.address[lang]}</p>
              <div className="mt-6 border-t border-slate-200 pt-5">
                <p className="text-xs font-bold uppercase tracking-wide text-muted">{t('about.chairmanEyebrow')}</p>
                <div className="mt-3 flex items-center gap-3">
                  <img
                    src="/img/chairman.jpg"
                    alt={company.chairman.name[lang]}
                    loading="lazy"
                    className="h-12 w-12 shrink-0 rounded-full object-cover object-top ring-1 ring-slate-200"
                    width={48}
                    height={48}
                  />
                  <div>
                    <p className="text-base font-bold text-navy">{company.chairman.name[lang]}</p>
                    <p className="text-sm text-muted">{company.chairman.role[lang]}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
