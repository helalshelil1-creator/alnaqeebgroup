import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import Industries from './pages/Industries'
import MMT from './pages/MMT'
import TechnicalOffice from './pages/TechnicalOffice'
import Quality from './pages/Quality'
import Careers from './pages/Careers'
import Contact from './pages/Contact'
import RequestQuote from './pages/RequestQuote'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="services/:slug" element={<ServiceDetail />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/:slug" element={<ProjectDetail />} />
        <Route path="industries" element={<Industries />} />
        <Route path="mmt" element={<MMT />} />
        <Route path="technical-office" element={<TechnicalOffice />} />
        <Route path="quality" element={<Quality />} />
        <Route path="careers" element={<Careers />} />
        <Route path="contact" element={<Contact />} />
        <Route path="quote" element={<RequestQuote />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
