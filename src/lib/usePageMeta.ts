import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

const BASE = 'AL NAQEEB GROUP'
const BASE_AR = 'النقيب جروب للمقاولات الهندسية'
const SITE_NAME = 'AL NAQEEB GROUP | النقيب جروب للمقاولات الهندسية'
const DEFAULT_IMAGE = '/img/favicon.png'

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

function setAlternate(hreflang: string, href: string) {
  const links = Array.from(document.head.querySelectorAll<HTMLLinkElement>('link[rel="alternate"]'))
  let el = links.find((l) => l.getAttribute('hreflang') === hreflang)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'alternate')
    el.setAttribute('hreflang', hreflang)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

/**
 * Per-page SEO: title, description, canonical, Open Graph, Twitter and
 * hreflang alternates. URLs are made absolute from the current origin so
 * the tags stay correct on Vercel or any custom domain.
 */
export default function usePageMeta(title: string, description: string) {
  const { i18n } = useTranslation()
  useEffect(() => {
    const isAr = i18n.language === 'ar'
    const origin = window.location.origin
    const path = window.location.pathname
    const url = origin + path

    // Append the brand only when the page title does not already carry it
    const alreadyBranded = title.includes(BASE) || title.includes(BASE_AR)
    const full = alreadyBranded ? title : (isAr ? `${title} | ${BASE_AR}` : `${title} | ${BASE}`)
    const siteDesc = isAr
      ? 'مجموعة النقيب (AL NAQEEB GROUP) — النقيب للمقاولات: شركة مقاولات في مدينة السادس من أكتوبر. المهندس هلال شليل (النقيب هلال) — أعمال كهربائية، أعمال ميكانيكا، تكييف، مكافحة حريق وإنذار، لوحات تحكم، أنظمة ذكية وصيانة.'
      : 'AL NAQEEB GROUP (النقيب جروب / مجموعة النقيب) — Al Naqeeb for Contracting: engineering & contracting company in 6th of October City, Egypt. Chairman: Eng. Helal Shelil (النقيب هلال). Electrical works, mechanical works, HVAC, fire fighting & fire alarm, control panels, ELV & smart systems, maintenance.'

    const desc = description && description.trim().length > 0 ? description : siteDesc
    const img = origin + DEFAULT_IMAGE

    document.title = full

    /* --- primary --- */
    setMeta('name', 'description', desc)
    setMeta('name', 'twitter:title', full)
    setMeta('name', 'twitter:description', desc)
    setMeta('name', 'twitter:card', 'summary_large_image')
    setMeta('name', 'twitter:image', img)
    setMeta('name', 'twitter:image:alt', 'AL NAQEEB GROUP — contracting')

    /* --- open graph --- */
    setMeta('property', 'og:site_name', SITE_NAME)
    setMeta('property', 'og:title', full)
    setMeta('property', 'og:description', desc)
    setMeta('property', 'og:type', 'website')
    setMeta('property', 'og:url', url)
    setMeta('property', 'og:image', img)
    setMeta('property', 'og:image:width', '1280')
    setMeta('property', 'og:image:height', '720')
    setMeta('property', 'og:image:alt', 'AL NAQEEB GROUP — contracting')
    setMeta('property', 'og:locale', isAr ? 'ar_AR' : 'en_US')
    setMeta('property', 'og:locale:alternate', isAr ? 'en_US' : 'ar_AR')
    setMeta('property', 'og:email', 'alnaqeebgroup@gmail.com')

    /* --- canonical + hreflang (per current page) --- */
    setCanonical(url)
    const arHref = path + (path.includes('?') ? '&' : '?') + 'lng=ar'
    setAlternate('en', origin + path)
    setAlternate('ar', origin + arHref)
    setAlternate('ar-eg', origin + arHref)
    setAlternate('x-default', origin + path)
  }, [title, description, i18n.language])
}
