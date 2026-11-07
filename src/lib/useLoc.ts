import { useTranslation } from 'react-i18next'

/** Returns the current-language string from a { en, ar } object. */
export function useLoc() {
  const { i18n } = useTranslation()
  const lang = i18n.language === 'ar' ? 'ar' : 'en'
  return <T extends { en: string; ar: string }>(obj: T): string => obj[lang]
}

/** Non-hook variant for places without component context. */
export function pickLoc(obj: { en: string; ar: string }, lang: string): string {
  return lang === 'ar' ? obj.ar : obj.en
}

export function pickList(obj: { en: string[]; ar: string[] }, lang: string): string[] {
  return lang === 'ar' ? obj.ar : obj.en
}
