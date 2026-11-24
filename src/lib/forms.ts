/**
 * Configurable form submission service.
 *
 * The brief requires that forms are NOT faked. This module makes submissions
 * genuinely work when a backend is configured, and honestly reports when one
 * is not, so the UI never claims a delivery that did not happen.
 *
 * HOW TO CONNECT A BACKEND (any one of these):
 *   1. Build-time env var:  VITE_FORM_ENDPOINT=https://your-api.example/submit
 *   2. Runtime config:      edit public/config.json -> { "formEndpoint": "https://..." }
 *                           (loaded at app start, no rebuild needed)
 *
 * The endpoint receives a JSON POST: { type, submittedAt, lang, data }.
 * It should respond 2xx on success. Works with Formspree, Basin, a serverless
 * function, or your own API.
 */

export type FormType = 'contact' | 'quote' | 'application' | 'mmt'

export interface SubmissionResult {
  ok: boolean
  mode: 'sent' | 'unconfigured' | 'error' | 'whatsapp' | 'demo'
  message?: string
  url?: string
  pdf?: { title: string; rows: [string, string][]; lang: string }
}

let runtimeConfig: { formEndpoint?: string } | null = null

export async function loadRuntimeConfig() {
  try {
    const res = await fetch('/config.json', { cache: 'no-store' })
    if (res.ok) runtimeConfig = await res.json()
  } catch {
    runtimeConfig = null
  }
}

export function getEndpoint(): string {
  const env = (import.meta as any).env?.VITE_FORM_ENDPOINT as string | undefined
  return (runtimeConfig?.formEndpoint || env || '').trim()
}

export function isBackendConfigured(): boolean {
  return getEndpoint().length > 0
}


const WA_NUMBER = '201551405418'
const LABELS: Record<string, { en: string; ar: string }> = {
  fullName: { en: 'Name', ar: 'الاسم' }, company: { en: 'Company', ar: 'الشركة' },
  email: { en: 'Email', ar: 'البريد' }, phone: { en: 'Phone', ar: 'الهاتف' },
  subject: { en: 'Subject', ar: 'الموضوع' }, message: { en: 'Message', ar: 'الرسالة' },
  service: { en: 'Service', ar: 'الخدمة' }, location: { en: 'Location', ar: 'الموقع' },
  projectType: { en: 'Project type', ar: 'نوع المشروع' }, budget: { en: 'Budget', ar: 'الميزانية' },
  description: { en: 'Description', ar: 'الوصف' }, attachmentName: { en: 'File name (not attached)', ar: 'اسم الملف (غير مرفق)' },
}

/** Build a wa.me link with the form content prefilled. Nothing is sent until the user presses send in WhatsApp. */
export function buildPdfPayload(type: FormType, data: Record<string, unknown>, lang: string) {
  const l = lang === 'ar' ? 'ar' : 'en'
  const title = type === 'quote'
    ? (l === 'ar' ? 'طلب عرض سعر - مجموعة النقيب' : 'Quotation request - AL NAQEEB GROUP')
    : (l === 'ar' ? 'رسالة تواصل - مجموعة النقيب' : 'Contact message - AL NAQEEB GROUP')
  const rows = Object.entries(data)
    .filter(([, v]) => typeof v === 'string' && v.trim())
    .map(([k, v]) => [LABELS[k]?.[l] ?? k, String(v).trim()] as [string, string])
  return { title, rows, lang: l }
}

export function buildWhatsAppUrl(type: FormType, data: Record<string, unknown>, lang: string): string {
  const l = lang === 'ar' ? 'ar' : 'en'
  const head = type === 'quote'
    ? (l === 'ar' ? 'طلب عرض سعر - مجموعة النقيب' : 'Quotation request - AL NAQEEB GROUP')
    : (l === 'ar' ? 'رسالة تواصل - مجموعة النقيب' : 'Contact message - AL NAQEEB GROUP')
  const lines = Object.entries(data)
    .filter(([, v]) => typeof v === 'string' && v.trim())
    .map(([k, v]) => `${LABELS[k]?.[l] ?? k}: ${String(v).trim()}`)
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent([head, ...lines].join('\n'))}`
}

export async function submitForm(
  type: FormType,
  data: Record<string, unknown>,
  lang: string,
  display?: Record<string, string>,
): Promise<SubmissionResult> {
  // Personal edition: nothing is sent, stored or opened.
  if (__EDITION__ === 'personal') return { ok: false, mode: 'demo' }

  const endpoint = getEndpoint()

  if (!endpoint && (type === 'contact' || type === 'quote')) {
    const url = buildWhatsAppUrl(type, display ?? data, lang)
    try { window.open(url, '_blank', 'noopener') } catch { /* link shown in the status box */ }
    return { ok: false, mode: 'whatsapp', url, pdf: buildPdfPayload(type, display ?? data, lang) }
  }

  if (!endpoint) {
    // No backend configured: do NOT pretend it was delivered.
    // Persist locally so nothing is lost, and let the UI be transparent.
    try {
      const key = 'alnaqeeb.pendingSubmissions'
      const prev = JSON.parse(localStorage.getItem(key) || '[]')
      prev.push({ type, lang, submittedAt: new Date().toISOString(), data })
      localStorage.setItem(key, JSON.stringify(prev.slice(-50)))
    } catch { /* storage may be unavailable */ }
    return { ok: false, mode: 'unconfigured' }
  }

  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ type, submittedAt: new Date().toISOString(), lang, data }),
    })
    if (!res.ok) return { ok: false, mode: 'error', message: `HTTP ${res.status}` }
    return { ok: true, mode: 'sent' }
  } catch (e) {
    return { ok: false, mode: 'error', message: String(e) }
  }
}
