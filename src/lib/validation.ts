export type Errors = Record<string, string>

export const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim())
export const isPhone = (v: string) => /^[+]?[\d\s().-]{7,20}$/.test(v.trim())

export function validate(
  values: Record<string, string>,
  required: string[],
  t: (key: string) => string,
): Errors {
  const errors: Errors = {}
  for (const field of required) {
    const v = (values[field] || '').trim()
    if (!v) {
      errors[field] = t('forms.errorRequired')
      continue
    }
    if (field === 'email' && !isEmail(v)) errors[field] = t('forms.errorEmail')
    if ((field === 'phone' || field === 'phone2') && !isPhone(v)) errors[field] = t('forms.errorPhone')
  }
  return errors
}
