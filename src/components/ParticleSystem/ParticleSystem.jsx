import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const ParticleSystem = () => {
  const containerRef = useRef(null)
  const particlesRef = useRef([])

  useEffect(() => {
    const container = containerRef.current
    const particles = []

    // Create particles
    for (let i = 0; i < 100; i++) {
      const particle = document.createElement('div')
      particle.className = 'particle fixed pointer-events-none z-10'
      
      const size = Math.random() * 10 + 1
      const opacity = Math.random() * 0.1 + 0.3 
      const hue = Math.random() * 60 + 180 
      
      particle.style.width = `${size}px`
      particle.style.height = `${size}px`
      particle.style.background = `hsl(${hue}, 100%, 60%)`
      particle.style.borderRadius = '50%'
      particle.style.opacity = opacity
      particle.style.boxShadow = `0 0 ${size * 2}px hsl(${hue}, 100%, 60%)`
      
      // Random initial position
      particle.style.left = `${Math.random() * window.innerWidth}px`
      particle.style.top = `${Math.random() * window.innerHeight}px`
      
      container.appendChild(particle)
      particles.push(particle)
    }

    particlesRef.current = particles

    // Animate particles
    particles.forEach((particle, index) => {
      // Floating animation
      gsap.to(particle, {
        y: `random(-100, 100)`,
        x: `random(-50, 50)`,
        duration: `random(8, 15)`,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: index * 0.1
      })

      // Opacity pulsing
      gsap.to(particle, {
        opacity: `random(0.1, 0.8)`,
        duration: `random(2, 4)`,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: index * 0.05
      })

      // Slow rotation
      gsap.to(particle, {
        rotation: 360,
        duration: `random(20, 40)`,
        repeat: -1,
        ease: "none"
      })
    })
  }, [])

  return <div ref={containerRef} className="fixed inset-0 pointer-events-none z-10" />
}

export default ParticleSystem