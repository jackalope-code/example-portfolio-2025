import { HashRouter, Route, Routes } from 'react-router-dom'
//import AboutPage from './pages/AboutPage'
import PortfolioPage from './pages/PortfolioPage'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import NavBar from './components/NavBar'
import HeadshotsAndResumePage from './pages/HeadshotsAndResumePage'
import ContactPage from './pages/ContactPage'
import MediaPage from './pages/MediaPage'
import Footer from './components/Footer'

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Headshots & Resume", to: "/headshots-and-resume" },
  { label: "Media", to: "/media" },
  { label: "Projects", to: "/projects" },
  { label: "Contact", to: "/contact" }
];
function App() {

  return (
    <>
      <HashRouter>
        <NavBar items={navItems} />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/headshots-and-resume" element={<HeadshotsAndResumePage />} />
            <Route path="/media" element={<MediaPage />} />
            <Route path="/projects" element={<PortfolioPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </HashRouter>
    </>
  )
}

export default App