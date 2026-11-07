import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import Reveal from './Reveal'

export default function PageHero({
  eyebrow,
  title,
  description,
  crumb,
  image = '/img/hero2.jpg',
}: {
  eyebrow: string
  title: string
  description?: string
  crumb: string
  image?: string
}) {
  return (
    <section className="relative overflow-hidden bg-navy">
      <div className="absolute inset-0">
        <img src={image} alt="" className="h-full w-full object-cover opacity-35" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/55 rtl:bg-gradient-to-l" />
        <div className="bg-grid-dark absolute inset-0 opacity-25" aria-hidden="true" />
      </div>

      {/* gold accent */}
      <div className="absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-transparent via-gold to-transparent rtl:bg-gradient-to-l" aria-hidden="true" />

      <div className="container-x relative py-20 sm:py-24 lg:py-28">
        <Reveal>
          <nav className="flex items-center gap-2 text-sm text-white/60" aria-label="Breadcrumb">
            <Link to="/" className="transition-colors hover:text-gold">{crumb === 'Home' ? 'Home' : crumb}</Link>
            <ChevronRight size={14} className="rtl:rotate-180" />
            <span className="text-gold">{title}</span>
          </nav>
          <div className="eyebrow mt-6"><span className="h-px w-8 bg-gold" />{eyebrow}</div>
          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
              {description}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  )
}
