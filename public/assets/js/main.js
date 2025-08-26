/**
 * Tech Hub Main JavaScript - PHP/HTML Version
 * Modern ES6+ JavaScript for enhanced functionality
 */

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

/**
 * Main App Initialization
 */
function initializeApp() {
    initializeHeader();
    initializeImageCarousel();
    initializeScrollAnimations();
    initializePerformanceOptimizations();
    initializeLazyLoading();
    initializeFormHandlers();
    
    // Show stagger animations
    setTimeout(() => {
        document.querySelectorAll('.stagger-children').forEach(container => {
            container.classList.add('show');
        });
    }, 100);
}

/**
 * Header Functionality
 */
function initializeHeader() {
    const header = document.getElementById('main-header');
    const mobileToggle = document.getElementById('mobile-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    let isScrolled = false;

    // Scroll header effect
    function handleScroll() {
        const scrollY = window.scrollY;
        
        if (scrollY > 50 && !isScrolled) {
            header.classList.add('scrolled');
            isScrolled = true;
        } else if (scrollY <= 50 && isScrolled) {
            header.classList.remove('scrolled');
            isScrolled = false;
        }
    }

    // Mobile menu toggle
    function toggleMobileMenu() {
        const isActive = mobileToggle.classList.contains('active');
        
        if (isActive) {
            mobileToggle.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        } else {
            mobileToggle.classList.add('active');
            mobileMenu.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    // Close mobile menu when clicking on links
    function closeMobileMenu() {
        mobileToggle.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
        
        // Smooth scroll to top
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    // Event listeners
    window.addEventListener('scroll', throttle(handleScroll, 16), { passive: true });
    mobileToggle.addEventListener('click', toggleMobileMenu);

    // Close mobile menu on nav link clicks
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    // Close mobile menu on outside click
    document.addEventListener('click', (e) => {
        if (!header.contains(e.target) && mobileMenu.classList.contains('active')) {
            closeMobileMenu();
        }
    });
}

/**
 * Image Carousel for Hero Section
 */
function initializeImageCarousel() {
    const heroImage = document.getElementById('hero-image');
    const images = [
        '/images/front.webp',
        '/images/front2.webp',
        '/images/front3.webp'
    ];
    
    let currentIndex = 0;

    function switchImage() {
        currentIndex = (currentIndex + 1) % images.length;
        
        // Fade out
        heroImage.style.opacity = '0';
        
        setTimeout(() => {
            heroImage.src = images[currentIndex];
            heroImage.alt = `Tech Hub Course Preview ${currentIndex + 1}`;
            
            // Fade in
            heroImage.style.opacity = '1';
        }, 250);
    }

    // Start carousel
    setInterval(switchImage, 3000);

    // Preload images
    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

/**
 * Scroll Animations and Intersection Observer
 */
function initializeScrollAnimations() {
    // Intersection Observer for reveal animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                
                // Trigger stagger animations
                if (entry.target.classList.contains('stagger-children')) {
                    entry.target.classList.add('show');
                }
            }
        });
    }, observerOptions);

    // Observe elements with reveal class
    document.querySelectorAll('.reveal, .stagger-children').forEach(el => {
        observer.observe(el);
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/**
 * Performance Optimizations
 */
function initializePerformanceOptimizations() {
    // Preload critical resources
    const criticalResources = [
        '/logo.webp',
        '/images/front.webp',
        '/images/front2.webp',
        '/images/front3.webp',
        '/navtec-removebg-preview.webp',
        '/pseb-logo.webp',
        '/images/HEC Logo.webp'
    ];

    criticalResources.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
    });

    // Enable smooth scrolling
    if ('scrollBehavior' in document.documentElement.style) {
        document.documentElement.style.scrollBehavior = 'smooth';
    }

    // Performance monitoring (development only)
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        setTimeout(() => {
            checkPerformance();
        }, 2000);
    }
}

/**
 * Lazy Loading for Images
 */
function initializeLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    }
                    
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        });

        // Observe all images with data-src
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

/**
 * Form Handlers (for PHP integration)
 */
function initializeFormHandlers() {
    // Contact form handler
    const contactForms = document.querySelectorAll('.contact-form');
    
    contactForms.forEach(form => {
        form.addEventListener('submit', handleFormSubmit);
    });

    // Newsletter signup handler
    const newsletterForms = document.querySelectorAll('.newsletter-form');
    
    newsletterForms.forEach(form => {
        form.addEventListener('submit', handleNewsletterSubmit);
    });
}

/**
 * Form Submit Handler
 */
async function handleFormSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    const submitBtn = form.querySelector('button[type="submit"]');
    
    // Show loading state
    if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="loading-spinner"></span> Sending...';
    }

    try {
        const response = await fetch(form.action || 'contact.php', {
            method: 'POST',
            body: formData
        });

        const result = await response.text();
        
        if (response.ok) {
            showNotification('Message sent successfully!', 'success');
            form.reset();
        } else {
            showNotification('Failed to send message. Please try again.', 'error');
        }
    } catch (error) {
        console.error('Form submission error:', error);
        showNotification('An error occurred. Please try again.', 'error');
    } finally {
        // Reset button state
        if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = 'Send Message';
        }
    }
}

/**
 * Newsletter Submit Handler
 */
async function handleNewsletterSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const email = form.querySelector('input[type="email"]').value;
    
    if (!email) {
        showNotification('Please enter a valid email address.', 'error');
        return;
    }

    try {
        const response = await fetch('newsletter.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email })
        });

        if (response.ok) {
            showNotification('Successfully subscribed to newsletter!', 'success');
            form.reset();
        } else {
            showNotification('Failed to subscribe. Please try again.', 'error');
        }
    } catch (error) {
        console.error('Newsletter subscription error:', error);
        showNotification('An error occurred. Please try again.', 'error');
    }
}

/**
 * Notification System
 */
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <span>${message}</span>
        <button class="notification-close" onclick="this.parentElement.remove()">×</button>
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => notification.classList.add('show'), 100);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

/**
 * Performance Monitoring
 */
function checkPerformance() {
    // Check DOM size
    const elementCount = document.querySelectorAll('*').length;
    if (elementCount > 1500) {
        console.warn(`Large DOM detected: ${elementCount} elements`);
    }

    // Check memory usage (if available)
    if ('memory' in performance) {
        const memory = performance.memory;
        console.log('Memory usage:', {
            used: Math.round(memory.usedJSHeapSize / 1048576),
            total: Math.round(memory.totalJSHeapSize / 1048576),
            limit: Math.round(memory.jsHeapSizeLimit / 1048576),
        });
    }

    // Check for long tasks
    if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
                console.warn('Long task detected:', entry.duration + 'ms');
            }
        });
        observer.observe({ entryTypes: ['longtask'] });
    }
}

/**
 * Utility Functions
 */

// Throttle function for performance
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Get query parameters
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Smooth scroll to element
function scrollToElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Local storage helpers
const Storage = {
    set: (key, value) => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (e) {
            console.warn('LocalStorage not available:', e);
        }
    },
    
    get: (key) => {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : null;
        } catch (e) {
            console.warn('LocalStorage not available:', e);
            return null;
        }
    },
    
    remove: (key) => {
        try {
            localStorage.removeItem(key);
        } catch (e) {
            console.warn('LocalStorage not available:', e);
        }
    }
};

// Export for global access
window.TechHub = {
    scrollToElement,
    showNotification,
    Storage,
    throttle,
    debounce,
    getQueryParam
};
