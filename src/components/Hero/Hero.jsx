import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { fadeInUp, mouseParallax } from '../../utils/gsapConfig'
import Typewriter from 'typewriter-effect'

const Hero = () => {
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const backgroundElementsRef = useRef([])

  useEffect(() => {
    const hero = heroRef.current
    const title = titleRef.current
    const subtitle = subtitleRef.current

    gsap.set([title, subtitle], { opacity: 0 })

    const tl = gsap.timeline({ delay: 1 })
    
    tl.fromTo(title,
      { y: 100, opacity: 1, rotationX: 90 },
      { 
        y: 0, 
        opacity: 1, 
        rotationX: 0,
        duration: 1.2, 
        stagger: 0.2, 
        ease: "back.out(1.7)" 
      }
    )
    .fromTo(subtitle,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
      "-=0.5"
    )

    const cleanup = mouseParallax(hero, backgroundElementsRef.current)

    // Floating animation for geometric shapes
    backgroundElementsRef.current.forEach((element, index) => {
      gsap.to(element, {
        y: "random(-20, 20)",
        x: "random(-15, 15)",
        rotation: "random(-180, 180)",
        duration: "random(3, 6)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: index * 0.2
      })
    })

    return cleanup
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0">
        <div ref={addToRefs} className="absolute top-20 left-10 w-64 h-64 bg-cyber-purple/20 rounded-full blur-3xl"></div>
        <div ref={addToRefs} className="absolute bottom-20 right-10 w-96 h-96 bg-cyber-cyan/20 rounded-full blur-3xl z-10"></div>
      </div>
        {/* Geometric shapes */}
        <div 
          ref={addToRefs}
          className="absolute top-28 left-28 w-24 h-24 border-2 border-white transform rotate-45 rounded-3xl"
        ></div>
        <div 
          ref={addToRefs}
          className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-white to-cyber-cyan rounded-full"
        ></div>
        <div 
          ref={addToRefs}
          className="absolute bottom-40 left-40 w-16 h-16 border-2 border-cyber-cyan rounded-full"
        ></div>
        <div 
          ref={addToRefs}
          className="absolute bottom-28 right-40 w-20 h-20 bg-gradient-to-r from-white to-cyber-cyan transform rotate-12 rounded-3xl"
        ></div>
        
        {/* Holographic overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyber-cyan/5 to-transparent"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl bg-transparent">
        <div
          ref={titleRef}
          className="font-sour-gummy font-black text-6xl md:text-8xl lg:text-9xl mb-20 leading-none z"
        >
          <span className="block text-gradient mb-4">DEVELOPERS'</span>
          <span className="block text-white mb-4">SOCIETY</span>
          
        </div>
        <div
          ref={subtitleRef}
          className="flex items-center justify-center gap-2 text-xl sm:text-2xl lg:text-3xl font-semibold text-muted-foreground mb-6 min-h-[2.5rem]"
        >
          <span>Diving into</span>
          <span className="text-white font-semibold text-2xl md:text-3xl lg:text-4xl font-sour-gummy">
            <Typewriter
              options={{
                strings: [
                  'App Development',
                  'Web Development',
                  'UI/UX and Design',
                  'Game Development',
                  'AI/ML',
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
          ref={subtitleRef}
          className="text-xl md:text-2xl lg:text-3xl text-white/80 font-sour-gummy font-light mb-12 max-w-3xl mx-auto"
        >
          Shaping the Future of Technology Through Innovation and Collaboration
        </p>
      </div>
    </section>
  )
}

export default Hero