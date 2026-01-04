import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import SocialSidebar from './components/SocialSidebar'
import Home from './pages/Home'
import Verein from './pages/Verein'
import AktuelleProjekte from './pages/AktuelleProjekte'
import GeplanteProjekte from './pages/GeplanteProjekte'
import Media from './pages/Media'
import JahresRuckblick from './pages/JahresRuckblick'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <SocialSidebar />
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/verein" element={<Verein />} />
            <Route path="/aktuelle-projekte" element={<AktuelleProjekte />} />
            <Route path="/geplante-projekte" element={<GeplanteProjekte />} />
            <Route path="/media" element={<Media />} />
            <Route path="/jahres-ruckblick" element={<JahresRuckblick />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App