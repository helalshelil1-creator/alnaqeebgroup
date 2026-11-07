import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locales/en'
import ar from './locales/ar'

export const STORAGE_KEY = 'alnaqeeb.lang'

const getInitial = (): 'en' | 'ar' => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'en' || saved === 'ar') return saved
  } catch { /* ignore */ }
  const nav = typeof navigator !== 'undefined' ? navigator.language : 'en'
  return nav.toLowerCase().startsWith('ar') ? 'ar' : 'en'
}

export function applyDocumentLang(lng: string) {
  const rtl = lng === 'ar'
  const html = document.documentElement
  html.setAttribute('lang', lng)
  html.setAttribute('dir', rtl ? 'rtl' : 'ltr')
  html.style.colorScheme = 'light'
}

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ar: { translation: ar },
  },
  lng: getInitial(),
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
  // Never render a raw key like "service.title" if a translation is missing.
  parseMissingKeyHandler: (key: string) => {
    if (import.meta.env.DEV) console.warn(`[i18n] missing key: ${key}`)
    return ''
  },
})

applyDocumentLang(i18n.language)

i18n.on('languageChanged', (lng) => {
  applyDocumentLang(lng)
  try { localStorage.setItem(STORAGE_KEY, lng) } catch { /* ignore */ }
})

export default i18n
