/**
 * Generative Art System for Project Card Images
 * Creates domain-coded SVG patterns without photography budget
 * 
 * Domains:
 * - safety: Grid-based, structured (Antarctic, Holden)
 * - regulatory: Layered rectangles (ASIC, DCCEEW, Border)
 * - social: Organic curves (University, Icon Water, MDBA)
 */

// Seeded random for consistent patterns
class SeededRandom {
  constructor(seed) {
    this.seed = seed;
  }
  
  next() {
    this.seed = (this.seed * 9301 + 49297) % 233280;
    return this.seed / 233280;
  }
}

// Generate Safety/Critical pattern (hybrid: bold gradient + geometric shapes)
function generateSafetyPattern(seed, width = 500, height = 300) {
  const rng = new SeededRandom(seed);
  
  let svg = `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">`;
  
  // Bold gradient base
  svg += `<defs>
    <linearGradient id="safety-grad-${seed}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#1e40af;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#0f172a;stop-opacity:1" />
    </linearGradient>
    <filter id="noise-${seed}">
      <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" />
      <feColorMatrix type="saturate" values="0" />
      <feBlend mode="multiply" in="SourceGraphic" />
    </filter>
  </defs>`;
  
  svg += `<rect width="${width}" height="${height}" fill="url(#safety-grad-${seed})"/>`;
  
  // Add noise texture
  svg += `<rect width="${width}" height="${height}" fill="white" opacity="0.03" filter="url(#noise-${seed})"/>`;
  
  // Geometric shapes - bold circles and rectangles
  const shapeCount = 4 + Math.floor(rng.next() * 4);
  for (let i = 0; i < shapeCount; i++) {
    if (rng.next() > 0.5) {
      // Large circles
      const cx = rng.next() * width;
      const cy = rng.next() * height;
      const r = 80 + rng.next() * 120;
      const opacity = 0.08 + rng.next() * 0.12;
      svg += `<circle cx="${cx}" cy="${cy}" r="${r}" fill="#06b6d4" opacity="${opacity}"/>`;
    } else {
      // Bold rectangles
      const x = rng.next() * width * 0.7;
      const y = rng.next() * height * 0.7;
      const w = 100 + rng.next() * 200;
      const h = 100 + rng.next() * 200;
      const opacity = 0.08 + rng.next() * 0.12;
      svg += `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="#06b6d4" opacity="${opacity}" rx="8"/>`;
    }
  }
  
  svg += `</svg>`;
  return svg;
}

// Generate Government/Regulatory pattern (hybrid: bold gradient + layered geometry + texture)
function generateRegulatoryPattern(seed, width = 500, height = 300) {
  const rng = new SeededRandom(seed);
  
  let svg = `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">`;
  
  // Rich gradient with radial overlay
  svg += `<defs>
    <linearGradient id="reg-grad-${seed}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#92400e;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#451a03;stop-opacity:1" />
    </linearGradient>
    <radialGradient id="reg-radial-${seed}" cx="30%" cy="30%">
      <stop offset="0%" style="stop-color:#d97706;stop-opacity:0.2" />
      <stop offset="100%" style="stop-color:#451a03;stop-opacity:0" />
    </radialGradient>
    <filter id="reg-noise-${seed}">
      <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" />
      <feColorMatrix type="saturate" values="0" />
    </filter>
  </defs>`;
  
  svg += `<rect width="${width}" height="${height}" fill="url(#reg-grad-${seed})"/>`;
  svg += `<rect width="${width}" height="${height}" fill="url(#reg-radial-${seed})"/>`;
  
  // Layered geometric rectangles (document/framework metaphor)
  const layers = 5 + Math.floor(rng.next() * 5);
  for (let i = 0; i < layers; i++) {
    const w = 120 + rng.next() * 250;
    const h = 60 + rng.next() * 120;
    const x = rng.next() * (width - w);
    const y = rng.next() * (height - h);
    const opacity = 0.12 + rng.next() * 0.18;
    const rotation = (rng.next() - 0.5) * 15; // Slight rotation for interest
    
    svg += `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="#d97706" opacity="${opacity}" rx="6" transform="rotate(${rotation} ${x + w/2} ${y + h/2})"/>`;
  }
  
  // Noise texture overlay
  svg += `<rect width="${width}" height="${height}" fill="white" opacity="0.02" filter="url(#reg-noise-${seed})"/>`;
  
  svg += `</svg>`;
  return svg;
}

// Generate Social/Community pattern (hybrid: bold gradient + flowing shapes + circles)
function generateSocialPattern(seed, width = 500, height = 300) {
  const rng = new SeededRandom(seed);
  
  let svg = `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">`;
  
  // Vibrant gradient with radial accent
  svg += `<defs>
    <linearGradient id="social-grad-${seed}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0d9488;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#065f46;stop-opacity:1" />
    </linearGradient>
    <radialGradient id="social-radial-${seed}" cx="70%" cy="70%">
      <stop offset="0%" style="stop-color:#14b8a6;stop-opacity:0.3" />
      <stop offset="100%" style="stop-color:#065f46;stop-opacity:0" />
    </radialGradient>
    <filter id="social-noise-${seed}">
      <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="2" />
      <feColorMatrix type="saturate" values="0" />
    </filter>
  </defs>`;
  
  svg += `<rect width="${width}" height="${height}" fill="url(#social-grad-${seed})"/>`;
  svg += `<rect width="${width}" height="${height}" fill="url(#social-radial-${seed})"/>`;
  
  // Organic circles (community/connection metaphor)
  const circles = 4 + Math.floor(rng.next() * 4);
  for (let i = 0; i < circles; i++) {
    const cx = rng.next() * width;
    const cy = rng.next() * height;
    const r = 60 + rng.next() * 100;
    const opacity = 0.1 + rng.next() * 0.15;
    svg += `<circle cx="${cx}" cy="${cy}" r="${r}" fill="#14b8a6" opacity="${opacity}"/>`;
  }
  
  // Flowing curves (subtle background)
  const curves = 2 + Math.floor(rng.next() * 3);
  for (let i = 0; i < curves; i++) {
    const startX = rng.next() * width;
    const startY = rng.next() * height;
    const cp1X = rng.next() * width;
    const cp1Y = rng.next() * height;
    const cp2X = rng.next() * width;
    const cp2Y = rng.next() * height;
    const endX = rng.next() * width;
    const endY = rng.next() * height;
    const strokeWidth = 30 + rng.next() * 50;
    const opacity = 0.08 + rng.next() * 0.12;
    
    svg += `<path d="M${startX},${startY} C${cp1X},${cp1Y} ${cp2X},${cp2Y} ${endX},${endY}" stroke="#5eead4" stroke-width="${strokeWidth}" fill="none" opacity="${opacity}" stroke-linecap="round"/>`;
  }
  
  // Subtle noise texture
  svg += `<rect width="${width}" height="${height}" fill="white" opacity="0.02" filter="url(#social-noise-${seed})"/>`;
  
  svg += `</svg>`;
  return svg;
}

// Generate Education/Research pattern (hybrid: bold gradient + geometric grid + circles)
function generateEducationPattern(seed, width = 500, height = 300) {
  const rng = new SeededRandom(seed);
  
  let svg = `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">`;
  
  // Bold purple gradient with radial highlight
  svg += `<defs>
    <linearGradient id="edu-grad-${seed}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#6366f1;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#312e81;stop-opacity:1" />
    </linearGradient>
    <radialGradient id="edu-radial-${seed}" cx="50%" cy="50%">
      <stop offset="0%" style="stop-color:#a78bfa;stop-opacity:0.25" />
      <stop offset="100%" style="stop-color:#312e81;stop-opacity:0" />
    </radialGradient>
    <filter id="edu-noise-${seed}">
      <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3" />
      <feColorMatrix type="saturate" values="0" />
    </filter>
  </defs>`;
  
  svg += `<rect width="${width}" height="${height}" fill="url(#edu-grad-${seed})"/>`;
  svg += `<rect width="${width}" height="${height}" fill="url(#edu-radial-${seed})"/>`;
  
  // Geometric composition - circles and squares (learning/knowledge metaphor)
  const shapes = 5 + Math.floor(rng.next() * 5);
  for (let i = 0; i < shapes; i++) {
    if (rng.next() > 0.6) {
      // Large circles
      const cx = rng.next() * width;
      const cy = rng.next() * height;
      const r = 50 + rng.next() * 90;
      const opacity = 0.1 + rng.next() * 0.15;
      svg += `<circle cx="${cx}" cy="${cy}" r="${r}" fill="#c4b5fd" opacity="${opacity}"/>`;
    } else {
      // Rounded squares
      const x = rng.next() * width * 0.8;
      const y = rng.next() * height * 0.8;
      const size = 70 + rng.next() * 120;
      const opacity = 0.1 + rng.next() * 0.15;
      const rotation = (rng.next() - 0.5) * 20;
      svg += `<rect x="${x}" y="${y}" width="${size}" height="${size}" fill="#a78bfa" opacity="${opacity}" rx="16" transform="rotate(${rotation} ${x + size/2} ${y + size/2})"/>`;
    }
  }
  
  // Subtle noise texture
  svg += `<rect width="${width}" height="${height}" fill="white" opacity="0.02" filter="url(#edu-noise-${seed})"/>`;
  
  svg += `</svg>`;
  return svg;
}

// Main generator function
function generateProjectImage(domain, projectName, width = 500, height = 300) {
  // Create consistent seed from project name
  let seed = 0;
  for (let i = 0; i < projectName.length; i++) {
    seed += projectName.charCodeAt(i) * (i + 1);
  }
  
  switch (domain) {
    case 'safety':
      return generateSafetyPattern(seed, width, height);
    case 'regulatory':
      return generateRegulatoryPattern(seed, width, height);
    case 'social':
      return generateSocialPattern(seed, width, height);
    case 'education':
      return generateEducationPattern(seed, width, height);
    default:
      return generateRegulatoryPattern(seed, width, height);
  }
}

// Initialize generative art on page load
function initGenerativeArt() {
  const placeholders = document.querySelectorAll('[data-gen-art]');
  
  placeholders.forEach(placeholder => {
    const domain = placeholder.dataset.genArt;
    const projectName = placeholder.dataset.projectName || 'default';
    
    // Get dimensions from parent or use defaults
    const wrapper = placeholder.closest('.project-card-image-wrapper');
    const width = (wrapper ? wrapper.clientWidth : placeholder.clientWidth) || 800;
    const height = (wrapper ? wrapper.clientHeight : placeholder.clientHeight) || 280;
    
    const svgContent = generateProjectImage(domain, projectName, width, height);
    placeholder.innerHTML = svgContent;
  });
}

// Re-run after images might have loaded or layout settled
function reinitGenerativeArt() {
  setTimeout(() => {
    initGenerativeArt();
  }, 100);
}

// Run on DOM loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    initGenerativeArt();
    reinitGenerativeArt();
  });
} else {
  initGenerativeArt();
  reinitGenerativeArt();
}

// Also reinit after window load (all assets loaded)
window.addEventListener('load', initGenerativeArt);

// Export for manual use if needed
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { generateProjectImage };
}

// Make initGenerativeArt available globally for masonry
window.initGenerativeArt = initGenerativeArt;


