import { useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { MapPin, Clock, Briefcase, Upload, CheckCircle2 } from 'lucide-react'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import Field from '../components/Field'
import FormStatus from '../components/FormStatus'
import usePageMeta from '../lib/usePageMeta'
import { useForm } from '../lib/useForm'
import { services } from '../data/services'

const OPENINGS = ['senior-electrical', 'hvac-engineer', 'safety-officer', 'project-engineer', 'qc-inspector', 'general-application']

export default function Careers() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language === 'ar' ? 'ar' : 'en'
  usePageMeta(t('page.careersTitle'), t('page.careersDesc'))
  const [selected, setSelected] = useState<string>('')
  const fileRef = useRef<HTMLInputElement>(null)
  const [fileName, setFileName] = useState('')

  const form = useForm(
    'application',
    { fullName: '', email: '', phone: '', position: selected, experience: '', additional: '' },
    ['fullName', 'email', 'phone', 'position'],
    'forms.successApplication',
  )

  const roleDescriptions: Record<string, { en: string; ar: string }> = {
    'senior-electrical': { en: 'Lead electrical design, installation and commissioning on major electromechanical projects, mentoring junior engineers.', ar: 'قيادة تصميم وتركيب وتشغيل الأعمال الكهربائية في المشاريع الكهروميكانيكية الكبرى وإرشاد المهندسين المبتدئين.' },
    'hvac-engineer': { en: 'Design and deliver energy-efficient HVAC systems across commercial and industrial sites.', ar: 'تصميم وتنفيذ أنظمة تكييف موفرة للطاقة في المواقع التجارية والصناعية.' },
    'safety-officer': { en: 'Drive site HSE compliance, risk assessments and a strong safety-first culture.', ar: 'قيادة امتثال السلامة بالموقع وتقييمات المخاطر وثقافة السلامة أولًا.' },
    'project-engineer': { en: 'Coordinate electromechanical project delivery across planning, execution and handover.', ar: 'تنسيق تسليم المشاريع الكهروميكانيكية عبر التخطيط والتنفيذ والتسليم.' },
    'qc-inspector': { en: 'Perform inspections, hold points and quality documentation across disciplines.', ar: 'أداء الفحوصات ونقاط التوقف والتوثيق الجودة في التخصصات المختلفة.' },
    'general-application': { en: 'Send your CV for future openings — we keep strong candidates on file.', ar: 'أرسل سيرتك الذاتية للفرص المستقبلية — نحتفظ بالمرشحين المتميزين.' },
  }

  return (
    <>
      <PageHero eyebrow={t('page.careersEyebrow')} title={t('page.careersTitle')}
        description={t('page.careersDesc')} crumb="Home" image="/img/hero3.jpg" />

      <section className="bg-white py-16">
        <div className="container-x grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <SectionHeading title={t('careers.introTitle')} />
            <p className="mt-4 text-lg leading-relaxed text-muted">{t('careers.introBody')}</p>
          </Reveal>
          <Reveal delay={1} className="overflow-hidden rounded-3xl shadow-lift">
            <img src="/img/careers.jpg" alt="Construction workers and engineers in safety helmets" loading="lazy" className="h-[320px] w-full object-cover" />
          </Reveal>
        </div>
      </section>

      {/* Openings */}
      <section className="bg-surface py-16">
        <div className="container-x">
          <SectionHeading title={t('careers.openingsTitle')} />
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {OPENINGS.map((key, idx) => (
              <Reveal key={key} delay={idx % 3} className="flex flex-col rounded-2xl bg-white p-6 shadow-card">
                <div className="flex items-center gap-2">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-navy/5 text-navy"><Briefcase size={18} /></span>
                  <h3 className="font-bold text-navy">{t(`careers.positions.${key}.title`)}</h3>
                </div>
                <div className="mt-3 flex flex-wrap gap-3 text-xs text-muted">
                  <span className="inline-flex items-center gap-1"><MapPin size={13} className="text-gold" />{t(`careers.positions.${key}.loc`)}</span>
                  <span className="inline-flex items-center gap-1"><Clock size={13} className="text-gold" />{t(`careers.positions.${key}.type`)}</span>
                </div>
                <p className="mt-3 flex-1 text-sm text-muted">{roleDescriptions[key][lang]}</p>
                <button
                  onClick={() => { setSelected(key); form.setField('position', key); document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' }) }}
                  className="btn-gold mt-4 text-sm"
                >
                  {t('careers.apply')}
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Application form */}
      <section id="apply" className="bg-white py-16">
        <div className="container-x">
          <div className="mx-auto max-w-3xl rounded-3xl border border-slate-100 bg-surface p-8 shadow-card sm:p-10">
            <SectionHeading title={t('careers.applyTitle')} subtitle={t('careers.applyDesc')} />
            <form onSubmit={form.onSubmit} className="mt-8 grid gap-5 sm:grid-cols-2" noValidate>
              <Field label={t('forms.fullName')} name="fullName" required value={form.values.fullName} onChange={(v) => form.setField('fullName', v)} error={form.errors.fullName} />
              <Field label={t('forms.email')} name="email" type="email" required value={form.values.email} onChange={(v) => form.setField('email', v)} error={form.errors.email} />
              <Field label={t('forms.phone')} name="phone" type="tel" required value={form.values.phone} onChange={(v) => form.setField('phone', v)} error={form.errors.phone} />
              <Field label={t('forms.experience')} name="experience" type="number" value={form.values.experience} onChange={(v) => form.setField('experience', v)} placeholder="0" />
              <div className="sm:col-span-2">
                <Field
                  label={t('forms.position')} name="position" type="select" required
                  value={form.values.position} onChange={(v) => { setSelected(v); form.setField('position', v) }}
                  error={form.errors.position} placeholder={t('forms.choose')}
                  options={OPENINGS.map((k) => ({ value: k, label: t(`careers.positions.${k}.title`) }))}
                />
              </div>
              <div className="sm:col-span-2">
                <label className="field-label">{t('forms.uploadCv')}</label>
                <button
                  type="button"
                  onClick={() => fileRef.current?.click()}
                  className="flex w-full items-center gap-3 rounded-xl border border-dashed border-slate-300 bg-white px-4 py-3 text-start text-sm text-muted transition-colors hover:border-navy"
                >
                  <Upload size={18} className="text-navy" />
                  {fileName || t('forms.fileHint')}
                </button>
                <input
                  ref={fileRef} type="file" accept=".pdf,.doc,.docx" className="hidden"
                  onChange={(e) => { const f = e.target.files?.[0]; if (f) { setFileName(f.name); form.setField('cvName', f.name) } }}
                />
              </div>
              <div className="sm:col-span-2">
                <Field label={t('forms.additional')} name="additional" type="textarea" value={form.values.additional} onChange={(v) => form.setField('additional', v)} rows={4} />
              </div>
              <div className="sm:col-span-2">
                <button type="submit" disabled={form.submitting} className="btn-gold w-full">
                  {form.submitting ? form.sendingLabel : t('forms.submitApplication')}
                  {!form.submitting && <CheckCircle2 size={18} />}
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
