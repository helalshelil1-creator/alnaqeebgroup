import { useEffect, useRef, useState } from 'react'
import { FileDown, Share2 } from 'lucide-react'
import { useTranslation } from 'react-i18next'

type Payload = { title: string; rows: [string, string][]; lang: string }

/**
 * Commercial edition only. Builds a PDF of the request in the browser (nothing is uploaded or stored),
 * then offers Share (phone share sheet: the sender picks WhatsApp and the chat and taps send)
 * and Download (attach it manually). Generation happens before the tap, and the share call is made
 * straight from the tap with no waiting, so the browser allows it.
 */
export default function PdfActions({ payload }: { payload: Payload }) {
  const { t } = useTranslation()
  const [state, setState] = useState<'busy' | 'ready' | 'error'>('busy')
  const [msg, setMsg] = useState('')
  const blob = useRef<Blob | null>(null)
  const mod = useRef<typeof import('../lib/pdfShare') | null>(null)
  const [canShare, setCanShare] = useState(false)
  const name = `${payload.lang === 'ar' ? 'talab' : 'request'}-alnaqeeb-${new Date().toLocaleDateString('en-CA')}.pdf`

  useEffect(() => {
    let dead = false
    ;(async () => {
      try {
        const m = await import('../lib/pdfShare')
        const b = await m.buildRequestPdf({ ...payload, footer: t('forms.pdfFooter') })
        if (dead) return
        mod.current = m; blob.current = b
        setCanShare(m.canShareFile(b, name)); setState('ready')
      } catch { if (!dead) setState('error') }
    })()
    return () => { dead = true }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [payload])

  const share = async () => {
    if (!blob.current || !mod.current) return
    const r = await mod.current.shareOrDownload(blob.current, name, '')
    setMsg(r === 'shared' ? t('forms.pdfShared') : r === 'downloaded' ? t('forms.pdfDownloaded') : '')
  }
  const download = async () => {
    if (!blob.current) return
    const a = document.createElement('a')
    a.href = URL.createObjectURL(blob.current); a.download = name
    document.body.appendChild(a); a.click(); a.remove()
    setTimeout(() => URL.revokeObjectURL(a.href), 10000)
    setMsg(t('forms.pdfDownloaded'))
  }

  return (
    <div className="mt-3 border-t border-amber-200 pt-3" data-testid="pdf-actions">
      <p className="text-sm font-semibold text-amber-800">{t('forms.pdfTitle')}</p>
      {state === 'busy' && <p className="mt-1 text-sm text-amber-700" role="status">{t('forms.pdfBusy')}</p>}
      {state === 'error' && <p className="mt-1 text-sm text-red-700" role="status">{t('forms.pdfError')}</p>}
      {state === 'ready' && (
        <>
          <p className="mt-1 text-sm text-amber-700">{canShare ? t('forms.pdfShareNote') : t('forms.pdfDownloadNote')}</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {canShare && (
              <button type="button" onClick={share} className="inline-flex items-center gap-2 rounded-lg bg-navy px-4 py-2 text-sm font-bold text-white">
                <Share2 size={16} /> {t('forms.pdfShare')}
              </button>
            )}
            <button type="button" onClick={download} className="inline-flex items-center gap-2 rounded-lg border border-navy px-4 py-2 text-sm font-bold text-navy">
              <FileDown size={16} /> {t('forms.pdfDownload')}
            </button>
          </div>
          {msg && <p className="mt-2 text-sm text-amber-800" role="status">{msg}</p>}
        </>
      )}
    </div>
  )
}
