import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import Reveal from './Reveal'

interface FeatureProps {
  eyebrow?: string
  title: string
  desc?: string
  image: string
  alt: string
  items?: string[]
  reverse?: boolean
  dark?: boolean
  linkTo?: string
  linkLabel?: string
}

export default function Feature({
  eyebrow, title, desc, image, alt, items, reverse, dark, linkTo, linkLabel,
}: FeatureProps) {
  return (
    <section className={dark ? 'bg-navy py-20 lg:py-24' : 'bg-white py-20 lg:py-24'}>
      <div className="container-x grid items-center gap-12 lg:grid-cols-2">
        <Reveal className={reverse ? 'lg:order-2' : ''}>
          <div className="relative overflow-hidden rounded-3xl shadow-lift">
            <img src={image} alt={alt} loading="lazy" className="aspect-[16/9] w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent" />
          </div>
        </Reveal>
        <Reveal delay={1} className={reverse ? 'lg:order-1' : ''}>
          {eyebrow && (
            <div className={`eyebrow ${dark ? 'text-gold' : ''}`}>
              <span className="h-px w-8 bg-gold" />
              {eyebrow}
            </div>
          )}
          <h2 className={`mt-3 text-3xl font-extrabold sm:text-4xl ${dark ? 'text-white' : 'text-navy'}`}>
            {title}
          </h2>
          {desc && (
            <p className={`mt-4 leading-relaxed ${dark ? 'text-white/75' : 'text-muted'}`}>{desc}</p>
          )}
          {items && items.length > 0 && (
            <ul className={`mt-6 grid gap-3 sm:grid-cols-2 ${dark ? 'text-white/85' : 'text-ink'}`}>
              {items.map((it) => (
                <li key={it} className="flex items-start gap-2.5">
                  <span className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full ${dark ? 'bg-gold/20 text-gold' : 'bg-navy/5 text-gold'}`}>
                    <Check size={12} />
                  </span>
                  <span className="text-sm font-semibold">{it}</span>
                </li>
              ))}
            </ul>
          )}
          {linkTo && (
            <Link to={linkTo} className={`mt-8 inline-flex ${dark ? 'btn-gold' : 'btn-navy'}`}>
              {linkLabel}
              <ArrowRight size={18} className="rtl:rotate-180" />
            </Link>
          )}
        </Reveal>
      </div>
    </section>
  )
}
