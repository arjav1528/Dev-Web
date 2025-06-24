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
      
      <div className={`w-24 h-24 mx-auto rounded-full overflow-hidden border mb-4 ${colors.border}`}>
        <img
          src={coordi.image}
          alt={coordi.name}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className={`text-xl font-bold font-lexend mb-1 ${colors.text}`}>{coordi.name}</h3>
      <p className={`text-white/60 font-rajdhani mb-2 ${colors.text}`}>{coordi.role}</p>
      <div className="flex justify-center gap-4 text-lg mt-2 border">
        {coordi.social?.linkedin && (
          <a href={coordi.social.linkedin} target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin-in text-white/80 hover:text-white"></i>
          </a>
        )}
        {coordi.social?.github && (
          <a href={coordi.social.github} target="_blank" rel="noreferrer">
            <i className="fab fa-github text-white/80 hover:text-white"></i>
          </a>
        )}
      </div>
    </Tilt>
  );
};

export default CoordiCard;
