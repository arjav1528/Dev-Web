import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'

export const initGSAP = () => {
  gsap.registerPlugin(ScrollTrigger, TextPlugin)
  
  // Set default ease
  gsap.defaults({
    ease: "power2.out",
    duration: 0.8
  })
  
  // Refresh ScrollTrigger on resize
  window.addEventListener('resize', () => {
    ScrollTrigger.refresh()
  })
}

// Animation utilities
export const fadeInUp = (element, delay = 0) => {
  return gsap.fromTo(element, 
    { y: 60, opacity: 0 },
    { 
      y: 0, 
      opacity: 1, 
      duration: 1,
      delay,
      ease: "power3.out"
    }
  )
}

export const fadeInLeft = (element, delay = 0) => {
  return gsap.fromTo(element,
    { x: -60, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      duration: 1,
      delay,
      ease: "power3.out"
    }
  )
}

export const fadeInRight = (element, delay = 0) => {
  return gsap.fromTo(element,
    { x: 60, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      duration: 1,
      delay,
      ease: "power3.out"
    }
  )
}

export const scaleIn = (element, delay = 0) => {
  return gsap.fromTo(element,
    { scale: 0.8, opacity: 0 },
    {
      scale: 1,
      opacity: 1,
      duration: 1,
      delay,
      ease: "back.out(1.7)"
    }
  )
}

export const staggerChildren = (container, children, delay = 0.1) => {
  return gsap.fromTo(children,
    { y: 40, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: container,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    }
  )
}

export const parallaxEffect = (element, speed = 0.5) => {
  gsap.to(element, {
    yPercent: -50 * speed,
    ease: "none",
    scrollTrigger: {
      trigger: element,
      start: "top bottom",
      end: "bottom top",
      scrub: true
    }
  })
}

export const mouseParallax = (container, elements) => {
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e
    const { innerWidth, innerHeight } = window
    
    const xPos = (clientX / innerWidth - 0.5) * 2
    const yPos = (clientY / innerHeight - 0.5) * 2
    
    elements.forEach((element, index) => {
      const speed = (index + 1) * 0.1
      gsap.to(element, {
        x: xPos * 20 * speed,
        y: yPos * 20 * speed,
        duration: 0.8,
        ease: "power2.out"
      })
    })
  }
  
  container.addEventListener('mousemove', handleMouseMove)
  
  return () => {
    container.removeEventListener('mousemove', handleMouseMove)
  }
}