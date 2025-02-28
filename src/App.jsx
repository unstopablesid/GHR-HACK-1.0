
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
import Video from './Componets/Video'
import { Analytics } from "@vercel/analytics/react"
import Mentors from './Componets/Mentors'
import Lenis from 'lenis'





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
    <Video/>
    <Sponsors />
    <Mentors/>
    <Team />
    <FAQ />
    <Contact />
    <Footer />
    <Analytics/>
    </div>
  )
}

export default App
