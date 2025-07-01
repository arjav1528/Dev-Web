import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { fadeInUp, mouseParallax } from '../../utils/gsapConfig'
import Typewriter from 'typewriter-effect'

const Hero = () => {
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const descriptionRef = useRef(null)
  const backgroundElementsRef = useRef([])

  useEffect(() => {
    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger)
    
    const hero = heroRef.current
    const title = titleRef.current
    const subtitle = subtitleRef.current
    const description = descriptionRef.current

    // Ensure elements exist before animating
    if (!hero || !title || !subtitle || !description) return

    // Set initial states with more dramatic values
    gsap.set([title, subtitle, description], { 
      opacity: 0, 
      y: 100,
      scale: 0.9
    })

    // Create a more dramatic entrance animation
    const tl = gsap.timeline({ delay: 0.3 })
    
    // Animate main title with dramatic effect
    tl.fromTo(subtitle,
      { y: 150, opacity: 0, rotationX: 90, scale: 0.8 },
      { 
        y: 0, 
        opacity: 1, 
        rotationX: 0,
        scale: 1,
        duration: 2, 
        ease: "back.out(1.7)" 
      }
    )
    // Animate typewriter section
    .fromTo(title,
      { y: 80, opacity: 0, scale: 0.9 },
      { y: 0, opacity: 1, scale: 1, duration: 1.2, ease: "power3.out" },
      "-=1.2"
    )
    // Animate description
    .fromTo(description,
      { y: 60, opacity: 0, scale: 0.95 },
      { y: 0, opacity: 1, scale: 1, duration: 1, ease: "power3.out" },
      "-=0.8"
    )

    // Add scroll-triggered animations for better visibility
    ScrollTrigger.create({
      trigger: hero,
      start: "top center",
      end: "bottom center",
      onEnter: () => {
        gsap.to(hero, {
          scale: 1.02,
          duration: 0.5,
          ease: "power2.out"
        })
      },
      onLeave: () => {
        gsap.to(hero, {
          scale: 1,
          duration: 0.5,
          ease: "power2.out"
        })
      }
    })

    // Setup mouse parallax effect with enhanced sensitivity
    const cleanup = mouseParallax(hero, backgroundElementsRef.current)

    // Enhanced floating animation for geometric shapes with more visible movement
    backgroundElementsRef.current.forEach((element, index) => {
      if (element) {
        // Initial random position
        gsap.set(element, {
          x: `random(-50, 50)`,
          y: `random(-50, 50)`,
          rotation: `random(-45, 45)`
        })
        
        // Continuous floating animation
        gsap.to(element, {
          y: "random(-40, 40)",
          x: "random(-30, 30)",
          rotation: "random(-180, 180)",
          duration: "random(5, 10)",
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.4
        })
      }
    })

    return () => {
      cleanup()
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  const addToRefs = (el) => {
    if (el && !backgroundElementsRef.current.includes(el)) {
      backgroundElementsRef.current.push(el)
    }
  }

  return (
    <section 
      id="hero" 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black/50"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0">
          <div ref={addToRefs} className="absolute top-20 left-10 w-64 h-64 bg-cyber-purple/30 rounded-full blur-3xl animate-pulse"></div>
          <div ref={addToRefs} className="absolute bottom-20 right-10 w-96 h-96 bg-cyber-cyan/30 rounded-full blur-3xl z-10 animate-pulse"></div>
        </div>
        {/* Geometric shapes with enhanced visibility */}
        <div 
          ref={addToRefs}
          className="absolute top-28 left-28 w-24 h-24 border-2 border-white transform rotate-45 rounded-3xl opacity-80 shadow-lg shadow-cyber-cyan/50"
        ></div>
        <div 
          ref={addToRefs}
          className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-white to-cyber-cyan rounded-full opacity-80 shadow-lg shadow-cyber-cyan/50"
        ></div>
        <div 
          ref={addToRefs}
          className="absolute bottom-40 left-40 w-16 h-16 border-2 border-cyber-cyan rounded-full opacity-80 shadow-lg shadow-cyber-cyan/50"
        ></div>
        <div 
          ref={addToRefs}
          className="absolute bottom-28 right-40 w-20 h-20 bg-gradient-to-r from-white to-cyber-cyan transform rotate-12 rounded-3xl opacity-80 shadow-lg shadow-cyber-cyan/50"
        ></div>
        
        {/* Additional animated elements */}
        <div 
          ref={addToRefs}
          className="absolute top-1/2 left-1/4 w-12 h-12 border border-cyber-purple rounded-full opacity-60"
        ></div>
        <div 
          ref={addToRefs}
          className="absolute top-1/3 right-1/4 w-8 h-8 bg-cyber-purple/40 rounded-full opacity-60"
        ></div>
        
        {/* Holographic overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyber-cyan/10 to-transparent"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl bg-transparent">
        <div
          ref={subtitleRef}
          className="font-vt323 font-black text-6xl md:text-8xl lg:text-9xl mb-20 leading-none"
        >
          <span className="block text-gradient mb-4 drop-shadow-lg">DEVELOPERS'</span>
          <span className="block text-white mb-4 drop-shadow-lg">SOCIETY</span>
        </div>
        <div
          ref={titleRef}
          className="flex items-center justify-center gap-2 text-xl sm:text-2xl lg:text-3xl font-semibold text-muted-foreground mb-6 min-h-[2.5rem]"
        >
          <span>Diving into</span>
          <span className="text-white font-semibold text-2xl md:text-3xl lg:text-4xl font-vt323">
            <Typewriter
              options={{
                strings: [
                  ' ',
                  'AI/ML',
                  'App Development',
                  'Web Development',
                  'Game Development',
                  'UI/UX and Design',
                  'SysCall',
                ],
                autoStart: true,
                loop: true,
                delay: 80,
                deleteSpeed: 40,
                cursor: '|',
                wrapperClassName : "text-white font-semibold text-2xl md:text-3xl lg:text-4xl"
              }}
            />
          </span>
        </div>
        
        <p 
          ref={descriptionRef}
          className="text-xl md:text-2xl lg:text-3xl text-white/80 font-vt323 font-light mb-12 max-w-3xl mx-auto drop-shadow-lg"
        >
          Shaping the Future of Technology Through Innovation and Collaboration
        </p>
      </div>
    </section>
  )
}

export default Hero