import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const Cursor = () => {
  const cursorRef = useRef(null)
  const followerRef = useRef(null)
  const isVisible = useRef(false)

  useEffect(() => {
    const cursor = cursorRef.current
    const follower = followerRef.current

    const handleMouseMove = (e) => {
      if (!isVisible.current) {
        gsap.set([cursor, follower], { opacity: 1 })
        isVisible.current = true
      }

      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out"
      })

      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: "power2.out"
      })
    }

    const handleMouseEnter = () => {
      gsap.to([cursor, follower], {
        scale: 1.5,
        duration: 0.3,
        ease: "back.out(1.7)"
      })
    }

    const handleMouseLeave = () => {
      gsap.to([cursor, follower], {
        scale: 1,
        duration: 0.3,
        ease: "back.out(1.7)"
      })
    }

    const handleMouseDown = () => {
      gsap.to([cursor, follower], {
        scale: 0.8,
        duration: 0.1
      })
    }

    const handleMouseUp = () => {
      gsap.to([cursor, follower], {
        scale: 1.5,
        duration: 0.1
      })
    }

    // Event listeners
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('mouseup', handleMouseUp)

    // Interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [data-cursor="pointer"]')
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('mouseup', handleMouseUp)
      
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [])

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-2 h-2 bg-cyber-cyan rounded-full pointer-events-none z-[9999] opacity-0 mix-blend-difference"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-8 h-8 border border-cyber-cyan/50 rounded-full pointer-events-none z-[9998] opacity-0"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
    </>
  )
}

export default Cursor