import { useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Upload, Send, ClipboardList, Layers, ShieldCheck } from 'lucide-react'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import Field from '../components/Field'
import FormStatus from '../components/FormStatus'
import usePageMeta from '../lib/usePageMeta'
import { useForm } from '../lib/useForm'
import { services } from '../data/services'

export default function RequestQuote() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language === 'ar' ? 'ar' : 'en'
  usePageMeta(t('page.quoteTitle'), t('page.quoteDesc'))
  const fileRef = useRef<HTMLInputElement>(null)
  const [fileName, setFileName] = useState('')

  const form = useForm(
    'quote',
    { fullName: '', company: '', email: '', phone: '', service: '', location: '', projectType: '', budget: '', description: '' },
    ['fullName', 'email', 'phone', 'service', 'location', 'projectType', 'description'],
    'forms.successQuote',
  )

  const steps = [
    { icon: ClipboardList, en: 'Tell us your requirements', ar: 'أخبرنا بمتطلباتك' },
    { icon: Layers, en: 'We scope the engineering solution', ar: 'نحدد نطاق الحل الهندسي' },
    { icon: ShieldCheck, en: 'You receive a tailored proposal', ar: 'تستلم عرضًا مخصصًا' },
  ]

  return (
    <>
      <PageHero eyebrow={t('page.quoteEyebrow')} title={t('page.quoteTitle')}
        description={t('page.quoteDesc')} crumb="Home" image="/img/hero.jpg" />

      {/* How it works */}
      <section className="bg-white py-14">
        <div className="container-x grid gap-6 sm:grid-cols-3">
          {steps.map((s, idx) => (
            <Reveal key={idx} delay={idx} className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-surface p-5">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-navy text-gold">
                <s.icon size={22} />
              </span>
              <div>
                <p className="text-xs font-bold text-gold">Step {idx + 1}</p>
                <p className="font-semibold text-ink">{s[lang]}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-surface py-16">
        <div className="container-x">
          <div className="mx-auto max-w-4xl rounded-3xl bg-white p-8 shadow-lift sm:p-10">
            <form onSubmit={form.onSubmit} className="grid gap-5 sm:grid-cols-2" noValidate>
              <Field label={t('forms.fullName')} name="fullName" required value={form.values.fullName} onChange={(v) => form.setField('fullName', v)} error={form.errors.fullName} />
              <Field label={t('forms.companyName')} name="company" value={form.values.company} onChange={(v) => form.setField('company', v)} />
              <Field label={t('forms.email')} name="email" type="email" required value={form.values.email} onChange={(v) => form.setField('email', v)} error={form.errors.email} />
              <Field label={t('forms.phone')} name="phone" type="tel" required value={form.values.phone} onChange={(v) => form.setField('phone', v)} error={form.errors.phone} />
              <Field
                label={t('forms.requiredService')} name="service" type="select" required
                value={form.values.service} onChange={(v) => form.setField('service', v)} error={form.errors.service}
                placeholder={t('forms.choose')}
                options={services.map((s) => ({ value: s.slug, label: s.title[lang] }))}
              />
              <Field label={t('forms.projectLocation')} name="location" required value={form.values.location} onChange={(v) => form.setField('location', v)} error={form.errors.location} />
              <Field
                label={t('forms.projectType')} name="projectType" type="select" required
                value={form.values.projectType} onChange={(v) => form.setField('projectType', v)} error={form.errors.projectType}
                placeholder={t('forms.choose')}
                options={[
                  { value: 'new', label: { en: 'New Build', ar: 'بناء جديد' }[lang] },
                  { value: 'retrofit', label: { en: 'Retrofit / Upgrade', ar: 'تجديد / ترقية' }[lang] },
                  { value: 'maintenance', label: { en: 'Maintenance', ar: 'صيانة' }[lang] },
                  { value: 'consultation', label: { en: 'Consultation', ar: 'استشارة' }[lang] },
                ]}
              />
              <Field
                label={t('forms.budget')} name="budget" type="select"
                value={form.values.budget} onChange={(v) => form.setField('budget', v)}
                placeholder={t('forms.choose')}
                options={[
                  { value: 'under-100k', label: { en: 'Under EGP 100k', ar: 'أقل من 100 ألف جنيه' }[lang] },
                  { value: '100k-500k', label: { en: 'EGP 100k – 500k', ar: '100 – 500 ألف جنيه' }[lang] },
                  { value: '500k-1m', label: { en: 'EGP 500k – 1M', ar: '500 ألف – 1 مليون جنيه' }[lang] },
                  { value: 'over-1m', label: { en: 'Over EGP 1M', ar: 'أكثر من 1 مليون جنيه' }[lang] },
                ]}
              />
              <div className="sm:col-span-2">
                <Field label={t('forms.projectDescription')} name="description" type="textarea" required rows={5} value={form.values.description} onChange={(v) => form.setField('description', v)} error={form.errors.description} />
              </div>
              <div className="sm:col-span-2">
                <label className="field-label">{t('forms.attachment')}</label>
                <button type="button" onClick={() => fileRef.current?.click()}
                  className="flex w-full items-center gap-3 rounded-xl border border-dashed border-slate-300 bg-white px-4 py-3 text-start text-sm text-muted transition-colors hover:border-navy">
                  <Upload size={18} className="text-navy" />
                  {fileName || t('forms.fileHint')}
                </button>
                <input ref={fileRef} type="file" accept=".pdf,.doc,.docx,.dwg,.zip" className="hidden"
                  onChange={(e) => { const f = e.target.files?.[0]; if (f) { setFileName(f.name); form.setField('attachmentName', f.name) } }} />
              </div>
              <div className="sm:col-span-2">
                <button type="submit" disabled={form.submitting} className="btn-gold w-full text-base">
                  {form.submitting ? form.sendingLabel : t('forms.submitQuote')}
                  {!form.submitting && <Send size={18} />}
                </button>
              </div>
              <div className="sm:col-span-2">
                <FormStatus result={form.result} successText={form.successText} />
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
