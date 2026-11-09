import { useTranslation } from 'react-i18next'
import { PencilRuler, FileStack, Layers, Box, Share2, FileCheck2, ClipboardCheck, FolderGit2, Headset } from 'lucide-react'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import usePageMeta from '../lib/usePageMeta'
import CtaBand from '../components/CtaBand'

const ITEM_ICONS = [PencilRuler, ClipboardCheck, FileStack, Layers, Share2, Box, FileCheck2, FolderGit2, Headset]

export default function TechnicalOffice() {
  const { t } = useTranslation()
  usePageMeta(
    t('office.title'),
    t('office.desc'),
  )

  const items = t('home.officeItems', { returnObjects: true }) as string[]
  const captions = t('office.galleryCaptions', { returnObjects: true }) as string[]

  const gallery = [
    { src: '/img/office-design.png', caption: captions[0] },
    { src: '/img/office-mep.jpg', caption: captions[1] },
    { src: '/img/hero2.jpg', caption: captions[2] },
  ]

  return (
    <>
      <PageHero
        eyebrow={t('office.eyebrow')}
        title={t('office.title')}
        description={t('office.desc')}
        crumb={t('nav.home')}
        image="/img/office-design.png"
      />

      {/* Technical services */}
      <section className="bg-surface py-20 lg:py-24">
        <div className="container-x">
          <SectionHeading center title={t('office.itemsTitle')} subtitle={t('home.officeDesc')} />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((it, idx) => {
              const IconCmp = ITEM_ICONS[idx] ?? FileStack
              return (
                <Reveal key={it} delay={idx % 3}>
                  <li className="group flex h-full items-start gap-4 rounded-2xl border border-slate-100 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-navy/5 text-gold transition-colors group-hover:bg-navy group-hover:text-white">
                      <IconCmp size={22} />
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-navy">{it}</h3>
                      <span className="mt-1 block h-0.5 w-8 rounded bg-gold/60 transition-all duration-300 group-hover:w-14" />
                    </div>
                  </li>
                </Reveal>
              )
            })}
          </ul>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-white py-20 lg:py-24">
        <div className="container-x">
          <SectionHeading center title={t('office.galleryTitle')} />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {gallery.map((g, idx) => (
              <Reveal key={g.src} delay={idx}>
                <figure className="group overflow-hidden rounded-3xl shadow-card transition-shadow hover:shadow-lift">
                  <div className="overflow-hidden">
                    <img src={g.src} alt={g.caption} loading="lazy"
                      className="aspect-[16/9] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <figcaption className="bg-navy px-5 py-4 text-sm font-semibold text-white/85">
                    {g.caption}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaBand title={t('office.ctaTitle')} desc={t('office.ctaDesc')} />
    </>
  )
}
