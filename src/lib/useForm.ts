import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { submitForm, type FormType, type SubmissionResult } from '../lib/forms'
import { validate, type Errors } from '../lib/validation'

export function useForm(
  type: FormType,
  initialValues: Record<string, string>,
  required: string[],
  successTextKey: string,
) {
  const { t, i18n } = useTranslation()
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState<Errors>({})
  const [result, setResult] = useState<SubmissionResult | null>(null)
  const [submitting, setSubmitting] = useState(false)

  const setField = (name: string, value: string) => {
    setValues((v) => ({ ...v, [name]: value }))
    setErrors((e) => (e[name] ? { ...e, [name]: '' } : e))
  }

  const reset = () => {
    setValues(initialValues)
    setErrors({})
    setResult(null)
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate(values, required, t)
    setErrors(errs)
    if (Object.keys(errs).length > 0) return
    setSubmitting(true)
    const res = await submitForm(type, values, i18n.language)
    setResult(res)
    setSubmitting(false)
    if (res.ok) {
      setTimeout(reset, 6000)
    }
  }

  return {
    values, errors, result, submitting,
    setField, onSubmit,
    successText: t(successTextKey),
    sendingLabel: t('forms.sending'),
  }
}
