/**
 * Vanilla JS Masonry Layout
 * Based on: https://functionalfrontend.medium.com/masonry-layout-using-flexbox-and-vanilla-js-292c18c56533
 * 
 * Creates true masonry layout using flexbox columns
 */

function initMasonry() {
  const masonryContainer = document.querySelector('.masonry-grid');
  if (!masonryContainer) return;
  
  // Get all project cards
  const items = Array.from(masonryContainer.querySelectorAll('.project-card'));
  if (items.length === 0) return;
  
  // Determine number of columns based on viewport
  function getColumnCount() {
    const width = window.innerWidth;
    if (width >= 1024) return 3;
    if (width >= 768) return 2;
    return 1;
  }
  
  // Build masonry layout
  function buildMasonry() {
    const cols = getColumnCount();
    
    // Clear container
    masonryContainer.innerHTML = '';
    masonryContainer.style.display = 'flex';
    masonryContainer.style.gap = 'var(--space-xl)';
    
    // Create columns
    const columns = [];
    for (let i = 0; i < cols; i++) {
      const col = document.createElement('div');
      col.classList.add('masonry-column');
      col.style.display = 'flex';
      col.style.flexDirection = 'column';
      col.style.gap = 'var(--space-xl)';
      col.style.flex = '1';
      columns.push(col);
      masonryContainer.appendChild(col);
    }
    
    // Distribute items across columns
    items.forEach((item, index) => {
      const columnIndex = index % cols;
      columns[columnIndex].appendChild(item.cloneNode(true));
    });
    
    // Trigger generative art after masonry is built
    if (typeof initGenerativeArt === 'function') {
      setTimeout(() => initGenerativeArt(), 50);
    }
  }
  
  // Initial build
  buildMasonry();
  
  // Rebuild on resize (debounced)
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      buildMasonry();
    }, 250);
  });
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', initMasonry);

// Expose to global scope for filter functionality
window.initMasonry = initMasonry;


