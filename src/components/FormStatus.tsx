import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle2, AlertTriangle, Info } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import type { SubmissionResult } from '../lib/forms'

export default function FormStatus({
  result,
  successText,
}: {
  result: SubmissionResult | null
  successText: string
}) {
  const { t } = useTranslation()
  return (
    <AnimatePresence>
      {result && (
        <motion.div
          initial={{ opacity: 0, y: 8, height: 0 }}
          animate={{ opacity: 1, y: 0, height: 'auto' }}
          exit={{ opacity: 0, y: -8, height: 0 }}
          className="overflow-hidden"
          role="status"
          aria-live="polite"
        >
          {result.mode === 'sent' && (
            <div className="mt-5 flex gap-3 rounded-xl border border-green-200 bg-green-50 p-4">
              <CheckCircle2 className="mt-0.5 shrink-0 text-green-600" size={22} />
              <div>
                <p className="font-bold text-green-800">{t('forms.successTitle')}</p>
                <p className="text-sm text-green-700">{successText}</p>
              </div>
            </div>
          )}
          {result.mode === 'unconfigured' && (
            <div className="mt-5 flex gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4">
              <Info className="mt-0.5 shrink-0 text-amber-600" size={22} />
              <div>
                <p className="font-bold text-amber-800">{t('forms.successTitle')}</p>
                <p className="text-sm text-amber-700">{t('forms.successNote')}</p>
              </div>
            </div>
          )}
          {result.mode === 'error' && (
            <div className="mt-5 flex gap-3 rounded-xl border border-red-200 bg-red-50 p-4">
              <AlertTriangle className="mt-0.5 shrink-0 text-red-600" size={22} />
              <div>
                <p className="font-bold text-red-800">{t('forms.errorTitle')}</p>
                <p className="text-sm text-red-700">{t('forms.errorServer')}</p>
              </div>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
