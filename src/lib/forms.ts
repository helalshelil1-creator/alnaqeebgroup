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
  mode: 'sent' | 'unconfigured' | 'error'
  message?: string
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

export async function submitForm(
  type: FormType,
  data: Record<string, unknown>,
  lang: string,
): Promise<SubmissionResult> {
  const endpoint = getEndpoint()

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
