import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const CyberpunkBackground = () => {
  const containerRef = useRef(null)
  const layersRef = useRef([])
  const buildingsRef = useRef([])
  const particlesRef = useRef([])

  useEffect(() => {
    const container = containerRef.current
    const layers = layersRef.current
    const buildings = buildingsRef.current
    const particles = particlesRef.current

    // Parallax scrolling for different layers
    layers.forEach((layer, index) => {
      const speed = (index + 1) * 0.2
      gsap.to(layer, {
        yPercent: -50 * speed,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      })
    })

    // Building animations
    buildings.forEach((building, index) => {
      // Floating animation
      gsap.to(building, {
        y: `random(-10, 10)`,
        duration: `random(4, 8)`,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: index * 0.2
      })

      // Window flickering
      const windows = building.querySelectorAll('.building-window')
      windows.forEach((window, windowIndex) => {
        gsap.to(window, {
          opacity: `random(0.3, 1)`,
          duration: `random(1, 3)`,
          repeat: -1,
          yoyo: true,
          ease: "power2.inOut",
          delay: windowIndex * 0.1
        })
      })
    })

    // Particle system
    particles.forEach((particle, index) => {
      gsap.to(particle, {
        y: -window.innerHeight,
        duration: `random(10, 20)`,
        repeat: -1,
        ease: "none",
        delay: index * 0.5
      })

      gsap.to(particle, {
        opacity: `random(0.2, 0.8)`,
        duration: `random(2, 4)`,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      })
    })

    // Mouse parallax
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      
      const xPos = (clientX / innerWidth - 0.5) * 2
      const yPos = (clientY / innerHeight - 0.5) * 2
      
      layers.forEach((layer, index) => {
        const speed = (index + 1) * 0.05
        gsap.to(layer, {
          x: xPos * 30 * speed,
          y: yPos * 20 * speed,
          duration: 1,
          ease: "power2.out"
        })
      })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const addToLayersRef = (el) => {
    if (el && !layersRef.current.includes(el)) {
      layersRef.current.push(el)
    }
  }

  const addToBuildingsRef = (el) => {
    if (el && !buildingsRef.current.includes(el)) {
      buildingsRef.current.push(el)
    }
  }

  const addToParticlesRef = (el) => {
    if (el && !particlesRef.current.includes(el)) {
      particlesRef.current.push(el)
    }
  }

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 overflow-hidden pointer-events-none z-0"
    >
      {/* Sky Layer */}
      <div 
        ref={addToLayersRef}
        className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-blue-900/30 to-cyan-900/40"
      >
        {/* Stars */}
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 60}%`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: Math.random() * 0.8 + 0.2
            }}
          />
        ))}
      </div>

      {/* Far Buildings Layer */}
      <div 
        ref={addToLayersRef}
        className="absolute bottom-0 left-0 right-0 h-96"
      >
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            ref={addToBuildingsRef}
            className="absolute bottom-0 bg-gradient-to-t from-gray-900/80 to-gray-700/60"
            style={{
              left: `${i * 12}%`,
              width: `${Math.random() * 8 + 6}%`,
              height: `${Math.random() * 200 + 150}px`,
              clipPath: 'polygon(0 100%, 0 20%, 20% 15%, 25% 0, 75% 0, 80% 15%, 100% 20%, 100% 100%)'
            }}
          >
            {/* Building windows */}
            {[...Array(Math.floor(Math.random() * 20 + 10))].map((_, j) => (
              <div
                key={j}
                className="building-window absolute w-2 h-2 bg-cyber-cyan rounded-sm"
                style={{
                  left: `${(j % 4) * 20 + 10}%`,
                  top: `${Math.floor(j / 4) * 15 + 20}%`,
                  opacity: Math.random() * 0.8 + 0.2
                }}
              />
            ))}
          </div>
        ))}
      </div>

      {/* Mid Buildings Layer */}
      <div 
        ref={addToLayersRef}
        className="absolute bottom-0 left-0 right-0 h-80"
      >
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            ref={addToBuildingsRef}
            className="absolute bottom-0 bg-gradient-to-t from-gray-800/90 to-gray-600/70"
            style={{
              left: `${i * 16 + 2}%`,
              width: `${Math.random() * 12 + 8}%`,
              height: `${Math.random() * 150 + 200}px`,
              clipPath: 'polygon(0 100%, 0 10%, 15% 5%, 20% 0, 80% 0, 85% 5%, 100% 10%, 100% 100%)'
            }}
          >
            {/* Building details */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-8 bg-red-500/60 rounded-t"></div>
            
            {/* Windows */}
            {[...Array(Math.floor(Math.random() * 30 + 15))].map((_, j) => (
              <div
                key={j}
                className="building-window absolute w-3 h-3 bg-cyber-purple rounded-sm"
                style={{
                  left: `${(j % 5) * 18 + 8}%`,
                  top: `${Math.floor(j / 5) * 12 + 15}%`,
                  opacity: Math.random() * 0.9 + 0.1
                }}
              />
            ))}
          </div>
        ))}
      </div>

      {/* Near Buildings Layer */}
      <div 
        ref={addToLayersRef}
        className="absolute bottom-0 left-0 right-0 h-64"
      >
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            ref={addToBuildingsRef}
            className="absolute bottom-0 bg-gradient-to-t from-gray-700/95 to-gray-500/80"
            style={{
              left: `${i * 24 + 4}%`,
              width: `${Math.random() * 16 + 12}%`,
              height: `${Math.random() * 100 + 180}px`,
              clipPath: 'polygon(0 100%, 0 5%, 10% 0, 90% 0, 100% 5%, 100% 100%)'
            }}
          >
            {/* Neon signs */}
            <div 
              className="absolute w-8 h-4 bg-cyber-green/80 rounded"
              style={{
                left: '20%',
                top: '30%',
                boxShadow: '0 0 10px rgba(57, 255, 20, 0.6)'
              }}
            ></div>
            <div 
              className="absolute w-6 h-3 bg-cyber-orange/80 rounded"
              style={{
                right: '25%',
                top: '50%',
                boxShadow: '0 0 8px rgba(255, 107, 0, 0.6)'
              }}
            ></div>

            {/* Windows */}
            {[...Array(Math.floor(Math.random() * 25 + 12))].map((_, j) => (
              <div
                key={j}
                className="building-window absolute w-4 h-4 bg-cyber-cyan rounded"
                style={{
                  left: `${(j % 4) * 22 + 10}%`,
                  top: `${Math.floor(j / 4) * 15 + 20}%`,
                  opacity: Math.random() * 1 + 0.3,
                  boxShadow: '0 0 4px currentColor'
                }}
              />
            ))}
          </div>
        ))}
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            ref={addToParticlesRef}
            className="absolute w-1 h-8 bg-gradient-to-t from-cyber-cyan/60 to-transparent rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: '100%',
              animationDelay: `${Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      {/* Atmospheric Effects */}
      <div 
        ref={addToLayersRef}
        className="absolute inset-0 bg-gradient-to-t from-transparent via-cyber-cyan/5 to-transparent"
      ></div>
      
      {/* Fog Layer */}
      <div 
        ref={addToLayersRef}
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/10 to-transparent"
      ></div>

      {/* Grid Overlay */}
      <div 
        ref={addToLayersRef}
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 217, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 217, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      ></div>
    </div>
  )
}

export default CyberpunkBackground