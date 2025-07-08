import React, { useEffect } from 'react'
import { Routes,Router,Navigate } from 'react-router'
import { initGSAP } from './utils/gsapConfig'
import { initSmoothScroll } from './utils/smoothScroll'
import Cursor from './components/Cursor/Cursor'
import Navigation from './components/Navigation/Navigation'
import Hero from './components/Hero/Hero'
import Verticals from './components/Verticals/Verticals'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import ParticleSystem from './components/ParticleSystem/ParticleSystem'
import Projects from './Projects/Projects'
import Coordis from './OurTeam/Coordis'
function App() {
  useEffect(() => {
    initGSAP()
    initSmoothScroll()
  }, [])

  return (
    <div className="App relative">
      {/* <Cursor /> */}
      <Navigation />
      <ParticleSystem />
      
      <main className="relative z-10">
        

        <Hero />
        <About />
        <Verticals />
        <Projects />
        <Coordis />
        <Contact />
      </main>
    </div>
  )
}

export default App