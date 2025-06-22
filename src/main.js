import './styles/main.css';
import { initParallax } from './js/parallax.js';
import { initAnimations } from './js/animations.js';
import { initCursor } from './js/cursor.js';
import { initNavigation } from './js/navigation.js';
import { initParticles } from './js/particles.js';

// Initialize all modules when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  initCursor();
  initNavigation();
  initParallax();
  initAnimations();
  initParticles();
});