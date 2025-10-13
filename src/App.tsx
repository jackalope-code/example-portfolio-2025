import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
//import AboutPage from './pages/AboutPage'
import PortfolioPage from './pages/PortfolioPage'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'

function App() {

  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App