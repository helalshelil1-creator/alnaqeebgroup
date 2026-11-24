import { lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
const About = lazy(() => import('./pages/About'))
const Services = lazy(() => import('./pages/Services'))
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'))
const Projects = lazy(() => import('./pages/Projects'))
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'))
const Industries = lazy(() => import('./pages/Industries'))
const MMT = lazy(() => import('./pages/MMT'))
const TechnicalOffice = lazy(() => import('./pages/TechnicalOffice'))
const Quality = lazy(() => import('./pages/Quality'))
const Careers = lazy(() => import('./pages/Careers'))
const Contact = lazy(() => import('./pages/Contact'))
const RequestQuote = lazy(() => import('./pages/RequestQuote'))
const NotFound = lazy(() => import('./pages/NotFound'))

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
