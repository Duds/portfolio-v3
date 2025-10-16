/**
 * Main JavaScript file for Strategic & Service Design Portfolio
 * This file contains core functionality and interactive features
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Portfolio website loaded successfully');
    
    // Initialise features
    initNavigation();
    initMobileMenu();
    initActiveNavStates();
    initFormHandling();
    initWaveAnimation();
    initGridToggle();
});

/**
 * Initialise navigation functionality
 */
function initNavigation() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            // Skip if it's just "#"
            if (targetId === '#') return;
            
            e.preventDefault();
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Close mobile menu if open
                const navMenu = document.querySelector('.nav-menu');
                const menuToggle = document.querySelector('.menu-toggle');
                if (navMenu && navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    menuToggle.setAttribute('aria-expanded', 'false');
                }
                
                // Scroll to section
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Update active state
                updateActiveNavLink(this);
            }
        });
    });
}

/**
 * Initialise mobile menu toggle
 */
function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            
            // Toggle menu
            navMenu.classList.toggle('active');
            
            // Update ARIA attribute
            this.setAttribute('aria-expanded', !isExpanded);
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
                navMenu.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });
        
        // Close menu with Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
                menuToggle.focus(); // Return focus to toggle button
            }
        });
    }
}

/**
 * Track and update active navigation states based on scroll position
 */
function initActiveNavStates() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    function updateActiveOnScroll() {
        const scrollPos = window.scrollY + 100; // Offset for header
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    // Update on scroll
    window.addEventListener('scroll', updateActiveOnScroll);
    
    // Update on load
    updateActiveOnScroll();
}

/**
 * Update active navigation link
 */
function updateActiveNavLink(clickedLink) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.classList.remove('active'));
    clickedLink.classList.add('active');
}

/**
 * Initialise form handling
 */
function initFormHandling() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData.entries());
            
            // Basic validation
            if (!data.name || !data.email || !data.message) {
                showFormMessage('Please fill in all required fields.', 'error');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(data.email)) {
                showFormMessage('Please enter a valid email address.', 'error');
                return;
            }
            
            // Disable submit button during submission
            const submitButton = this.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.textContent;
            submitButton.disabled = true;
            submitButton.textContent = 'Sending...';
            
            try {
                // Submit to Azure Logic App
                const response = await fetch(this.action, {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                });
                
                if (response.ok) {
                    // Show success message
                    showFormMessage('Thank you for your enquiry! We\'ll respond within 24 hours to discuss your service design needs.', 'success');
                    
                    // Reset form
                    this.reset();
                } else {
                    throw new Error('Form submission failed');
                }
            } catch (error) {
                console.error('Form submission error:', error);
                showFormMessage('Sorry, there was an error sending your message. Please email us directly at hello@example.com or call +61 400 000 000', 'error');
            } finally {
                // Re-enable submit button
                submitButton.disabled = false;
                submitButton.textContent = originalButtonText;
            }
        });
    }
}

/**
 * Show form feedback message
 */
function showFormMessage(message, type) {
    // Remove any existing messages
    const existingMessage = document.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create message element
    const messageEl = document.createElement('div');
    messageEl.className = `form-message ${type === 'error' ? 'error-message' : 'success-message'}`;
    messageEl.textContent = message;
    messageEl.setAttribute('role', type === 'error' ? 'alert' : 'status');
    
    // Insert message
    const form = document.querySelector('.contact-form');
    form.insertBefore(messageEl, form.firstChild);
    
    // Auto-remove success messages after 5 seconds
    if (type === 'success') {
        setTimeout(() => {
            messageEl.remove();
        }, 5000);
    }
}

/**
 * Initialize wave animation for logo hand
 */
function initWaveAnimation() {
    const logoHand = document.querySelector('.logo-hand');
    if (!logoHand) return;
    
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;
    
    /**
     * Trigger wave animation
     */
    function wave() {
        logoHand.classList.add('waving');
        
        // Remove class after animation completes
        setTimeout(() => {
            logoHand.classList.remove('waving');
        }, 1200);
    }
    
    /**
     * Schedule next wave at random interval
     */
    function scheduleNextWave() {
        // Random interval between 8-15 seconds
        const delay = Math.random() * (15000 - 8000) + 8000;
        setTimeout(() => {
            wave();
            scheduleNextWave();
        }, delay);
    }
    
    // Initial wave after 1 second
    setTimeout(() => {
        wave();
        scheduleNextWave();
    }, 1000);
}

/**
 * Initialize grid overlay toggle functionality
 * Development tool for visualizing the 12-column grid layout
 * Keyboard shortcut: Ctrl/Cmd + G to toggle grid
 */
function initGridToggle() {
    const gridOverlay = document.getElementById('gridOverlay');
    
    if (!gridOverlay) return;
    
    // Keyboard shortcut: Ctrl/Cmd + G to toggle grid
    document.addEventListener('keydown', function(e) {
        if ((e.ctrlKey || e.metaKey) && e.key === 'g') {
            e.preventDefault();
            gridOverlay.classList.toggle('active');
        }
    });
}

