import Reveal from './Reveal'

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = false,
  light = false,
  rule = false,
}: {
  eyebrow?: string
  title: string
  subtitle?: string
  center?: boolean
  light?: boolean
  rule?: boolean
}) {
  return (
    <Reveal className={center ? 'text-center' : ''}>
      {eyebrow && (
        <div className={`eyebrow ${center ? 'justify-center' : ''}`}>
          <span className="h-px w-8 bg-gold" />
          {eyebrow}
        </div>
      )}
      {rule && center ? (
        <div className="mt-3 flex items-center justify-center gap-3 sm:gap-5">
          <span className="h-px w-8 bg-gradient-to-l from-gold/80 to-transparent sm:w-16 rtl:bg-gradient-to-r" />
          <h2
            className={`text-2xl font-extrabold sm:text-4xl lg:text-5xl ${
              light ? 'text-white' : 'text-navy'
            }`}
          >
            {title}
          </h2>
          <span className="h-px w-8 bg-gradient-to-r from-gold/80 to-transparent sm:w-16 rtl:bg-gradient-to-l" />
        </div>
      ) : (
        <h2
          className={`mt-3 text-3xl font-extrabold sm:text-4xl lg:text-5xl ${
            light ? 'text-white' : 'text-navy'
          }`}
        >
          {title}
        </h2>
      )}
      {rule && center && <span className="orn mx-auto mt-4" aria-hidden="true" />}
      {subtitle && (
        <p
          className={`mt-3 text-base sm:text-lg ${
            center ? 'mx-auto max-w-2xl' : 'max-w-2xl'
          } ${light ? 'text-white/75' : 'text-muted'}`}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  )
}
