import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { contact } from '../data/site'
import WhatsAppIcon from './WhatsAppIcon'

export default function FloatingActions() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const hasWhatsapp = contact.verified && contact.whatsapp.trim().length > 0

  return (
    <>
      {hasWhatsapp && (
        <a
          href={`https://wa.me/${contact.whatsapp.replace(/[^0-9]/g, '')}`}
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp"
          className="fixed bottom-6 right-6 z-40 hidden h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lift transition-transform hover:scale-110 sm:grid"
        >
          <WhatsAppIcon size={28} />
        </a>
      )}
      <AnimatePresence>
        {show && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
            className="fixed bottom-24 left-4 z-40 grid h-12 w-12 place-items-center rounded-full bg-navy text-white shadow-lift transition-colors hover:bg-gold hover:text-navy sm:bottom-6 sm:left-6"
          >
            <ArrowUp size={22} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}
