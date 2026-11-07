import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export interface FaqItem {
  q: string
  a: string
}

/** Accessible single-open accordion. */
export default function Faq({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number>(0)

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-card">
      {items.map((item, i) => {
        const isOpen = open === i
        return (
          <div key={item.q} className={i > 0 ? 'border-t border-slate-100' : ''}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${i}`}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-start transition-colors hover:bg-surface"
            >
              <span className="text-base font-bold text-navy sm:text-lg">{item.q}</span>
              <span
                className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border transition-all duration-300 ${
                  isOpen ? 'border-gold bg-gold text-navy' : 'border-slate-200 text-navy'
                }`}
              >
                <ChevronDown
                  size={18}
                  className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                />
              </span>
            </button>
            <div
              id={`faq-panel-${i}`}
              role="region"
              className={`grid transition-all duration-300 ease-smooth ${
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-6 leading-relaxed text-muted">{item.a}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
