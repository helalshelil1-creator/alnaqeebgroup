import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Phone } from 'lucide-react'
import WhatsAppIcon from './WhatsAppIcon'
import { contact } from '../data/site'

/**
 * Sticky action bar for small screens — keeps the two highest-value actions
 * (call / WhatsApp / quote) reachable without scrolling.
 */
export default function MobileCta() {
  const { t } = useTranslation()
  const wa = contact.whatsapp.replace(/[^0-9]/g, '')

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-navy/10 bg-white/95 px-4 py-3 backdrop-blur-lg sm:hidden">
      <div className="flex items-center gap-3">
        <a
          href={`https://wa.me/${wa}`}
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp"
          className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#25D366] text-white transition-transform active:scale-95"
        >
          <WhatsAppIcon size={22} />
        </a>
        <a
          href={`tel:${contact.phone.replace(/[^+\d]/g, '')}`}
          aria-label={t('forms.phone')}
          className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-navy/15 text-navy transition-colors active:bg-surface"
        >
          <Phone size={19} />
        </a>
        <Link to="/quote" className="btn-navy flex-1 py-3 text-sm">
          {t('nav.quote')}
        </Link>
      </div>
    </div>
  )
}
