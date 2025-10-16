/**
 * Scroll Effects
 * Implement Future Friendly-style dynamic background transitions
 */

// Background fade effect - entire page background fades to amber
function initBackgroundFade() {
  const fadeSection = document.querySelector('.section-fade');
  if (!fadeSection) return;
  
  function updateBackgroundFade() {
    const rect = fadeSection.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    
    // Check if section is in viewport
    if (rect.top < windowHeight && rect.bottom > 0) {
      // Calculate how much of the section is visible
      const visibleTop = Math.max(0, windowHeight - rect.top);
      const visibleAmount = Math.min(visibleTop, rect.height);
      const progress = visibleAmount / rect.height;
      
      // Fade in when section enters viewport (smooth transition)
      if (progress > 0.3) {
        document.body.classList.add('bg-faded');
      } else {
        document.body.classList.remove('bg-faded');
      }
    } else if (rect.top > windowHeight) {
      // Section is below viewport - remove fade
      document.body.classList.remove('bg-faded');
    } else if (rect.bottom < 0) {
      // Section is above viewport - keep fade if we scrolled past
      // Don't remove fade here
    }
  }
  
  // Update on scroll with throttling for performance
  let scrollTimeout;
  window.addEventListener('scroll', () => {
    if (scrollTimeout) {
      window.cancelAnimationFrame(scrollTimeout);
    }
    scrollTimeout = window.requestAnimationFrame(updateBackgroundFade);
  }, { passive: true });
  
  // Initial check
  updateBackgroundFade();
}

// Fade in elements on scroll
function initFadeInOnScroll() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);
  
  // Observe elements with fade-in class
  document.querySelectorAll('.fade-in').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
}

// Initialize all scroll effects
document.addEventListener('DOMContentLoaded', () => {
  initBackgroundFade();
  initFadeInOnScroll();
});



