import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import type { Service } from '../data/services'
import Reveal from './Reveal'

/**
 * Tall portrait service card: a full-bleed photograph with a navy gradient
 * rising from the base and the discipline named in elegant type only —
 * no icons, no arrows. Hover lifts the card, deepens the gradient and
 * lets the photograph breathe.
 */
export default function ServiceCard({ service, index = 0 }: { service: Service; index?: number }) {
  const { i18n } = useTranslation()
  const lang = i18n.language === 'ar' ? 'ar' : 'en'
  return (
    <Reveal
      delay={index}
      as="li"
      className="w-[176px] shrink-0 snap-start sm:w-[186px] lg:w-full"
    >
      <Link
        to={`/services/${service.slug}`}
        className="group relative flex aspect-[3/5] w-full flex-col overflow-hidden rounded-2xl bg-navy shadow-card ring-1 ring-navy/5 transition-all duration-500 ease-smooth hover:-translate-y-2 hover:shadow-lift hover:ring-gold/60"
      >
        <img
          src={service.image}
          alt={service.imageAlt || service.title[lang]}
          loading="eager"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-smooth group-hover:scale-110"
        />

        {/* soft top-to-bottom dim for legibility */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-navy via-navy/80 to-transparent transition-opacity duration-500 group-hover:opacity-95" />
        {/* gentle wash that deepens on hover */}
        <div className="pointer-events-none absolute inset-0 bg-navy/0 transition-colors duration-500 group-hover:bg-navy/15" />

        {/* caption: gold rule + elegant title only */}
        <div className="relative mt-auto flex flex-col gap-2.5 p-4">
          <span className="block h-0.5 w-8 rounded-full bg-gold transition-all duration-500 ease-smooth group-hover:w-14" />
          <span className="min-h-[2.8em] text-[15px] font-extrabold leading-[1.4] text-white [text-shadow:0_1px_10px_rgba(4,31,59,0.8)]">
            {service.title[lang]}
          </span>
        </div>
      </Link>
    </Reveal>
  )
}
