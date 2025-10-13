import { HashRouter, Route, Routes } from 'react-router-dom'
//import AboutPage from './pages/AboutPage'
import PortfolioPage from './pages/PortfolioPage'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import NavBar from './components/NavBar'
import HeadshotsAndResumePage from './pages/HeadshotsAndResumePage'
import BlogPage from './pages/BlogPage'
import NewsPage from './pages/NewsPage'
import ContactPage from './pages/ContactPage'
import MediaPage from './pages/MediaPage'

const navItems = [
  { label: "Home", to: "/" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "About", to: "/about" },
  { label: "Headshots & Resume", to: "/headshots-and-resume" },
  { label: "Blog", to: "/blog" },
  { label: "News", to: "/news" },
  { label: "Contact", to: "/contact" }
];
function App() {

  return (
    <>
      <HashRouter>
        <NavBar items={navItems} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/headshots-and-resume" element={<HeadshotsAndResumePage />} />
          <Route path="/media" element={<MediaPage />} />
          <Route path="/projects" element={<PortfolioPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App