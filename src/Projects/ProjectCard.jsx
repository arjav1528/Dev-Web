import React from 'react'
import Tilt from 'react-parallax-tilt'

const ProjectCard = ({ project, index }) => {
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

  const colors = getColorClasses(project.color);

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
        <span className="text-3xl relative z-10">{project.icon}</span>
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
      </div>
      
      {/* Content */}
      <h3 className={`text-2xl font-lexend font-bold mb-4 ${colors.text}`}>
        {project.title}
      </h3>
      
      <p className="text-white/70 font-rajdhani text-lg leading-relaxed mb-6">
        {project.description}
      </p>
      
      {/* Technologies */}
      <div className="flex flex-wrap gap-2">
        {project.techStack.map((tech, techIndex) => (
          <span 
            key={techIndex}
            className={`px-3 py-1 ${colors.bg} ${colors.text} rounded-full text-sm font-rajdhani font-medium border ${colors.border}`}
          >
            {tech}
          </span>
        ))}
      </div>
      
      {/* Hover arrow */}
      {project.link && (
        <div className="absolute top-4 right-4 transform translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-sm underline font-rajdhani hover:opacity-80 flex items-center gap-1 ${colors.text}`}
            title="Visit Project"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M17 8l4 4m0 0l-4 4m4-4H3" 
              />
            </svg>
          </a>
        </div>
      )}
    </Tilt>
  );
};

export default ProjectCard;
