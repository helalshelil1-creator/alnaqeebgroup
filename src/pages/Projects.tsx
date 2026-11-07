import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, MapPin } from 'lucide-react'
import Note from '../components/Note'
import PageHero from '../components/PageHero'
import usePageMeta from '../lib/usePageMeta'
import { projects, projectCategories } from '../data/projects'

export default function Projects() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language === 'ar' ? 'ar' : 'en'
  usePageMeta(t('page.projectsTitle'), t('page.projectsDesc'))
  const [filter, setFilter] = useState<string>('all')

  const filtered = useMemo(
    () => (filter === 'all' ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  )

  return (
    <>
      <PageHero eyebrow={t('page.projectsEyebrow')} title={t('page.projectsTitle')}
        description={t('page.projectsDesc')} crumb="Home" image="/img/about.jpg" />

      <section className="bg-surface py-16">
        <div className="container-x">
          <h2 className="sr-only">{t('page.projectsTitle')}</h2>
          <p className="mb-6 text-sm font-semibold text-muted">{t('projects.filterTitle')}</p>
          <div className="flex flex-wrap gap-2.5">
            <FilterChip active={filter === 'all'} onClick={() => setFilter('all')} label={t('common.all')} />
            {projectCategories.map((c) => (
              <FilterChip key={c.key} active={filter === c.key} onClick={() => setFilter(c.key)} label={c.label[lang]} />
            ))}
          </div>

          <Note className="mt-6">{t('projects.note')}</Note>

          <motion.div layout className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((p) => (
                <motion.div
                  key={p.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link to={`/projects/${p.slug}`} className="group block h-full overflow-hidden rounded-2xl bg-white shadow-card transition-all hover:-translate-y-1.5 hover:shadow-lift">
                    <div className="relative h-52 overflow-hidden">
                      <img src={p.image} alt={p.title[lang]} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
                      <span className="absolute bottom-3 start-3 rounded-full bg-gold px-3 py-1 text-xs font-bold text-navy">
                        {projectCategories.find((c) => c.key === p.category)?.label[lang]}
                      </span>
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-bold text-navy group-hover:text-gold">{p.title[lang]}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted line-clamp-2">{p.summary[lang]}</p>
                      <div className="mt-4 flex items-center justify-between">
                        <span className="flex items-center gap-1.5 text-xs text-muted"><MapPin size={14} className="text-gold" />{p.location[lang]}</span>
                        <span className="inline-flex items-center gap-1 text-sm font-semibold text-navy group-hover:text-gold">
                          {t('common.viewProject')}<ArrowRight size={15} className="rtl:rotate-180" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </>
  )
}

function FilterChip({ active, onClick, label }: { active: boolean; onClick: () => void; label: string }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
        active ? 'bg-navy text-white shadow-card' : 'bg-white text-ink hover:bg-navy/5'
      }`}
    >
      {label}
    </button>
  )
}
