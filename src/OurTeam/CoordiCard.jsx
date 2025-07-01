import React from 'react'
import Tilt from 'react-parallax-tilt'

const CoordiCard = ({ coordi, index }) => {
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

  const colors = getColorClasses(coordi.color)

  return (
    <Tilt
      glareEnable={true}
      glareMaxOpacity={0.15}
      glareColor="#fff"
      glarePosition="all"
      tiltMaxAngleX={15}
      tiltMaxAngleY={15}
      transitionSpeed={250}
      className={`relative glass-card p-0 cursor-pointer group transition-all duration-300 overflow-hidden ${colors.border} ${colors.glow}`}
      style={{
        willChange: 'transform',
        gridColumn: index === 2 ? 'span 1' : 'span 1',
        gridRow: index === 2 ? 'span 1' : 'span 1',
        minHeight: '320px',
        minWidth: '220px',
      }}
    >
      {/* Full background image */}
      <img
        src={coordi.image}
        alt={coordi.name}
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/60 z-10 transition group-hover:bg-black/40"></div>
      {/* Card content */}
      <div className="relative z-20 w-full flex flex-col items-center text-center px-6 pb-6 pt-12 h-full justify-end">
        <div className="w-full">
          <h3 className={`text-2xl font-bold font-lexend mb-1 text-white drop-shadow ${colors.text}`}>{coordi.name}</h3>
          <p className={`text-white/80 font-rajdhani mb-4 text-base drop-shadow ${colors.text}`}>{coordi.role}</p>
          <div className="flex justify-center gap-4 text-lg mt-2">
            {coordi.social?.linkedin && (
              <a href={coordi.social.linkedin} target="_blank" rel="noreferrer">
                <i className="fab fa-linkedin-in text-white/90 hover:text-white"></i>
              </a>
            )}
            {coordi.social?.github && (
              <a href={coordi.social.github} target="_blank" rel="noreferrer">
                <i className="fab fa-github text-white/90 hover:text-white"></i>
              </a>
            )}
          </div>
        </div>
      </div>
    </Tilt>
  );
};

export default CoordiCard;
