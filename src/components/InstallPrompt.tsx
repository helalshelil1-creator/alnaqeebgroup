import { useEffect, useState } from 'react'
import { Download, Share, X } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const KEY = 'alnaqeeb.install.dismissed'

type Prompt = Event & { prompt: () => Promise<void>; userChoice: Promise<{ outcome: string }> }

/**
 * Dismissible "install the app" welcome. Uses the browser's own install prompt when it offers one,
 * otherwise shows the manual steps for the device. Never shown when already installed, and once closed
 * (or installed) it is not shown again on this device. No service worker, nothing is cached or sent.
 */
export default function InstallPrompt() {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)
  const [deferred, setDeferred] = useState<Prompt | null>(null)
  const [mode, setMode] = useState<'native' | 'ios' | 'manual'>('manual')

  useEffect(() => {
    const standalone = window.matchMedia('(display-mode: standalone)').matches || (navigator as any).standalone === true
    let dismissed = false
    try { dismissed = localStorage.getItem(KEY) === '1' } catch { /* storage may be blocked */ }
    if (standalone || dismissed) return
    const ua = navigator.userAgent
    const ios = /iPad|iPhone|iPod/.test(ua) || (ua.includes('Mac') && 'ontouchend' in document)
    const onPrompt = (e: Event) => { e.preventDefault(); setDeferred(e as Prompt); setMode('native') }
    const onInstalled = () => { try { localStorage.setItem(KEY, '1') } catch { /* ignore */ } setOpen(false) }
    window.addEventListener('beforeinstallprompt', onPrompt)
    window.addEventListener('appinstalled', onInstalled)
    if (ios) setMode('ios')
    // Never over the first screen: only after the visitor has scrolled past the hero.
    const onScroll = () => { if (window.scrollY > window.innerHeight * 0.7) { setOpen(true); window.removeEventListener('scroll', onScroll) } }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('beforeinstallprompt', onPrompt); window.removeEventListener('appinstalled', onInstalled) }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const close = () => { try { localStorage.setItem(KEY, '1') } catch { /* ignore */ } setOpen(false) }
  const install = async () => {
    if (!deferred) return
    await deferred.prompt()
    await deferred.userChoice.catch(() => null)
    close()
  }
  if (!open) return null

  return (
    <div role="dialog" aria-label={t('install.title')} data-testid="install-prompt"
      className="fixed inset-x-3 bottom-20 z-[55] mx-auto max-w-md rounded-2xl border border-gold/40 bg-white p-4 shadow-2xl sm:bottom-6 sm:start-6 sm:end-auto sm:mx-0">
      <button type="button" onClick={close} aria-label={t('install.close')}
        className="absolute end-2 top-2 grid h-8 w-8 place-items-center rounded-full text-muted hover:bg-slate-100">
        <X size={18} />
      </button>
      <div className="flex items-start gap-3 pe-6">
        <img src="/img/app-icon-192.png" alt="" width={48} height={48} className="h-12 w-12 shrink-0 rounded-xl" />
        <div>
          <p className="font-extrabold text-navy">{t('install.title')}</p>
          <p className="mt-0.5 text-sm text-muted">{t('install.text')}</p>
        </div>
      </div>
      {mode === 'native' && (
        <button type="button" onClick={install} className="btn-navy mt-3 w-full justify-center">
          <Download size={16} /> {t('install.button')}
        </button>
      )}
      {mode === 'ios' && (
        <p className="mt-3 flex items-start gap-2 rounded-lg bg-navy/[0.05] p-3 text-sm text-ink">
          <Share size={16} className="mt-0.5 shrink-0" /> {t('install.ios')}
        </p>
      )}
      {mode === 'manual' && (
        <p className="mt-3 rounded-lg bg-navy/[0.05] p-3 text-sm text-ink">{t('install.manual')}</p>
      )}
    </div>
  )
}
