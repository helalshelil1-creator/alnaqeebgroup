import { useId } from 'react'
import type { ReactNode } from 'react'

interface FieldProps {
  label: string
  name: string
  value: string
  onChange: (v: string) => void
  error?: string
  required?: boolean
  type?: 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'number'
  placeholder?: string
  options?: { value: string; label: string }[]
  rows?: number
  children?: ReactNode
}

export default function Field({
  label, name, value, onChange, error, required,
  type = 'text', placeholder, options, rows = 4, children,
}: FieldProps) {
  const id = useId()
  const common = {
    id,
    name,
    value,
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => onChange(e.target.value),
    placeholder,
    className: `field ${error ? 'border-red-400 focus:border-red-500 focus:ring-red-100' : ''}`,
    'aria-invalid': !!error,
    'aria-describedby': error ? `${id}-err` : undefined,
  }

  return (
    <div>
      <label htmlFor={id} className="field-label">
        {label} {required && <span className="text-gold">*</span>}
      </label>
      {type === 'textarea' ? (
        <textarea {...common} rows={rows} />
      ) : type === 'select' ? (
        <select {...common}>
          <option value="">{placeholder || 'Select…'}</option>
          {options?.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
      ) : (
        <input {...common} type={type} />
      )}
      {children}
      {error && <p id={`${id}-err`} className="field-error">{error}</p>}
    </div>
  )
}
