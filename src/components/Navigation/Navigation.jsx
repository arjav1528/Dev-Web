import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { scrollTo } from '../../utils/smoothScroll'
import logo from './dev.svg'

const Navigation = () => {
  const navRef = useRef(null)
  const logoRef = useRef(null)
  const menuRef = useRef(null)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const nav = navRef.current
    const logo = logoRef.current
    const menuItems = menuRef.current?.children

    // Initial animation
    gsap.fromTo(nav, 
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.5, ease: "power3.out" }
    )

    gsap.fromTo(logo,
      { scale: 0, rotation: -180 },
      { scale: 1, rotation: 0, duration: 1, delay: 0.7, ease: "back.out(1.7)" }
    )

    if (menuItems) {
      gsap.fromTo(menuItems,
        { x: 30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, stagger: 0.1, delay: 0.9, ease: "power3.out" }
      )
    }

    // Scroll effect
    const handleScroll = () => {
      const scrollY = window.scrollY
      setIsScrolled(scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, target) => {
    e.preventDefault()
    scrollTo(target)
  }

  return (
    <nav 
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-dark-100/80 backdrop-blur-lg border-b border-white/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div 
            ref={logoRef}
            className="flex items-center space-x-3 cursor-pointer"
            onClick={(e) => handleNavClick(e, '#hero')}
            data-cursor="pointer"
          >
            <img 
              src={logo}
              alt="DevSoc Logo"
              className="w-12 h-12 object-contain bg-transparent gradient-to-r from-cyber-cyan to-white rounded-lg shadow-cyber transition-transform duration-300 hover:scale-110 animate-pulse"
            />
            <span className="text-3xl font-vt323 font-bold text-gradient">
              DevSoc
            </span>
          </div>
          
          <ul ref={menuRef} className="hidden md:flex items-center space-x-8">
            {[
              { label: 'Home', target: '#hero' },
              { label: 'About', target: '#about' },
              { label: 'Verticals', target: '#verticals' },
              { label: 'Projects', target: '#projects' },
              { label: 'Our Team', target: '#team' },
              { label: 'Contact', target: '#contact' },
            ].map((item, index) => (
              <li key={index}>
                <a
                  href={item.target}
                  onClick={(e) => handleNavClick(e, item.target)}
                  className="text-white/80 hover:text-cyber-cyan transition-colors duration-300 font-vt323 font-medium text-lg relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyber-cyan to-white group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </nav>
  )
}

export default Navigation