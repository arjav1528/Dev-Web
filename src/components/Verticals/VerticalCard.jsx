import React from 'react'
import Tilt from 'react-parallax-tilt'

const VerticalCard = ({ vertical, index }) => {
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
    <Tilt
      glareEnable={true}
      glareMaxOpacity={0.15}
      glareColor="#fff"
      glarePosition="all"
      tiltMaxAngleX={15}
      tiltMaxAngleY={15}
      transitionSpeed={250}
      className={`relative glass-card p-8 cursor-pointer group transition-all duration-300 ${colors.border} ${colors.glow}`}
      style={{
        willChange: 'transform',
        gridColumn: index === 2 ? 'span 1' : 'span 1',
        gridRow: index === 2 ? 'span 1' : 'span 1'
      }}
    >
      {/* Glow effect */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 rounded-xl pointer-events-none"
      ></div>

      {/* Icon */}
      <div className={`w-16 h-16 ${colors.bg} rounded-lg flex items-center justify-center mb-6 relative overflow-hidden`}>
        <span className="text-3xl relative z-10">{vertical.icon}</span>
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
      </div>

      {/* Content */}
      <h3 className={`text-2xl font-lexend font-bold mb-4 ${colors.text}`}>
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
    </Tilt>
  )
}

export default VerticalCard
