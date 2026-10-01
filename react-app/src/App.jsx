import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import { EnquireProvider } from './components/EnquireModal'
import Home from './pages/Home'
import Projects from './pages/Projects'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'
import Services from './pages/Services'
import Legal from './pages/Legal'
import ProjectDetail from './pages/ProjectDetail'
import NotFound from './pages/NotFound'
import CommercialProjects from './pages/CommercialProjects'
import ResidentialProjects from './pages/ResidentialProjects'
import SaleProjects from './pages/SaleProjects'
import RentProjects from './pages/RentProjects'
import LeaseProjects from './pages/LeaseProjects'

export default function App() {
  return (
    <EnquireProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/commercial" element={<CommercialProjects />} />
          <Route path="/projects/residential" element={<ResidentialProjects />} />
          <Route path="/projects/sale" element={<SaleProjects />} />
          <Route path="/projects/rent" element={<RentProjects />} />
          <Route path="/projects/lease" element={<LeaseProjects />} />
          <Route path="/projects/:category/:slug" element={<ProjectDetail />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/privacy-policy" element={<Legal type="privacy" />} />
          <Route path="/terms-of-use" element={<Legal type="terms" />} />
          <Route path="/website-disclaimer" element={<Legal type="disclaimer" />} />
          <Route path="/contact" element={<Navigate to="/contact-us" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </EnquireProvider>
  )
}
