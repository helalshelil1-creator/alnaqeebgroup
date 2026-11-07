import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import FloatingActions from './FloatingActions'
import Preloader from './Preloader'
import ScrollProgress from './ScrollProgress'
import MobileCta from './MobileCta'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [pathname])
  return null
}

export default function Layout() {
  const location = useLocation()
  return (
    <div className="flex min-h-screen flex-col">
      <Preloader />
      <ScrollProgress />
      <ScrollToTop />
      <Header />
      <main id="main" className="flex-1">
        {/* key forces a remount per route so the entrance animation replays */}
        <div key={location.pathname} className="page-enter">
          <Outlet />
        </div>
      </main>
      <Footer />
      <FloatingActions />
      <MobileCta />
    </div>
  )
}
