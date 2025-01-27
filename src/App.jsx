
import './App.css'
import AboutSection from './Componets/About'
import FAQ from './Componets/Faq'
import Footer from './Componets/Footer'
import PrizeCards from './Componets/Box'
import RegistrationDetails from './Componets/RegistrationDetails'
import Sponsors from './Componets/Sponsors'
import Contact from './Componets/contact'
import Team from './Componets/Team'
import EventHighlights from './Componets/EventHeightlight'
import Background from './Componets/Background'
import HackathonThemes from './Componets/Theme'
import RegistrationTimeline from './Componets/Timeline'



function App() {
  return (
    <div className='App' >
    <Background />
    <AboutSection />
    <EventHighlights />
    <HackathonThemes />
    <PrizeCards />
    <RegistrationTimeline />
    <RegistrationDetails />
    <Sponsors />
    <Team />
    <FAQ />
    <Contact />
    <Footer />
    </div>
  )
}

export default App
