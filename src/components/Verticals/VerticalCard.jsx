import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'

const VerticalCard = ({ vertical, index }) => {
  const cardRef = useRef(null)
  const glowRef = useRef(null)

  useEffect(() => {
    const card = cardRef.current
    const glow = glowRef.current

    const handleMouseEnter = () => {
      gsap.to(card, {
        y: -20,
        scale: 1.05,
        duration: 0.5,
        ease: "back.out(1.7)"
      })
      
      gsap.to(glow, {
        opacity: 1,
        scale: 1.1,
        duration: 0.3
      })
    }

    const handleMouseLeave = () => {
      gsap.to(card, {
        y: 0,
        scale: 1,
        duration: 0.5,
        ease: "power2.out"
      })
      
      gsap.to(glow, {
        opacity: 0,
        scale: 1,
        duration: 0.3
      })
    }

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      
      const rotateX = (y - centerY) / 10
      const rotateY = (centerX - x) / 10
      
      gsap.to(card, {
        rotationX: rotateX,
        rotationY: rotateY,
        duration: 0.3,
        transformPerspective: 1000
      })
    }

    const handleMouseLeaveReset = () => {
      gsap.to(card, {
        rotationX: 0,
        rotationY: 0,
        duration: 0.5,
        ease: "power2.out"
      })
    }

    card.addEventListener('mouseenter', handleMouseEnter)
    card.addEventListener('mouseleave', handleMouseLeave)
    card.addEventListener('mousemove', handleMouseMove)
    card.addEventListener('mouseleave', handleMouseLeaveReset)

    return () => {
      card.removeEventListener('mouseenter', handleMouseEnter)
      card.removeEventListener('mouseleave', handleMouseLeave)
      card.removeEventListener('mousemove', handleMouseMove)
      card.removeEventListener('mouseleave', handleMouseLeaveReset)
    }
  }, [])

  const getColorClasses = (color) => {
  const colorMap = {
    'cyber-cyan': {
      border: 'border-cyber-cyan/30',
      glow: 'hover:shadow-cyber',
      text: 'text-cyber-cyan',
      bg: 'bg-cyber-cyan/10'
    },
    'cyber-purple': {
      border: 'border-cyber-purple/30',
      glow: 'hover:shadow-purple',
      text: 'text-cyber-purple',
      bg: 'bg-cyber-purple/10'
    },
    'cyber-green': {
      border: 'border-cyber-green/30',
      glow: 'hover:shadow-green',
      text: 'text-cyber-green',
      bg: 'bg-cyber-green/10'
    },
    'cyber-orange': {
      border: 'border-cyber-orange/30',
      glow: 'hover:shadow-orange',
      text: 'text-cyber-orange',
      bg: 'bg-cyber-orange/10'
    },
    'cyber-pink': {
      border: 'border-cyber-pink/30',
      glow: 'hover:shadow-pink',  
      text: 'text-cyber-pink',
      bg: 'bg-cyber-pink/10'
    }
  }
  return colorMap[color] || colorMap['cyber-cyan']
}


  const colors = getColorClasses(vertical.color)

  return (
    <div 
      ref={cardRef}
      className={`relative glass-card p-8 cursor-pointer group transition-all duration-300 ${colors.border} ${colors.glow}`}
      style={{ 
        gridColumn: index === 2 ? 'span 1' : 'span 1',
        gridRow: index === 2 ? 'span 1' : 'span 1'
      }}
    >
      {/* Glow effect */}
      <div 
        ref={glowRef}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 rounded-xl"
      ></div>
      
      {/* Icon */}
      <div className={`w-16 h-16 ${colors.bg} rounded-lg flex items-center justify-center mb-6 relative overflow-hidden`}>
        <span className="text-3xl relative z-10">{vertical.icon}</span>
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
      </div>
      
      {/* Content */}
      <h3 className={`text-2xl font-orbitron font-bold mb-4 ${colors.text}`}>
        {vertical.title}
      </h3>
      
      <p className="text-white/70 font-rajdhani text-lg leading-relaxed mb-6">
        {vertical.description}
      </p>
      
      {/* Technologies */}
      <div className="flex flex-wrap gap-2">
        {vertical.technologies.map((tech, techIndex) => (
          <span 
            key={techIndex}
            className={`px-3 py-1 ${colors.bg} ${colors.text} rounded-full text-sm font-rajdhani font-medium border ${colors.border}`}
          >
            {tech}
          </span>
        ))}
      </div>
      
      {/* Hover arrow
      <div className="absolute top-4 right-4 transform translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
        <svg 
          className={`w-6 h-6 ${colors.text}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div> */}
    </div>
  )
}

export default VerticalCard