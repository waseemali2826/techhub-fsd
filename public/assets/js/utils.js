/**
 * Tech Hub Utility Functions
 * Common utility functions for the application
 */

// Utility object for global access
window.TechHubUtils = {
    // DOM manipulation utilities
    dom: {
        // Get element by ID
        get: (id) => document.getElementById(id),
        
        // Get elements by class name
        getByClass: (className) => document.getElementsByClassName(className),
        
        // Query selector
        query: (selector) => document.querySelector(selector),
        
        // Query selector all
        queryAll: (selector) => document.querySelectorAll(selector),
        
        // Create element
        create: (tag, attributes = {}, text = '') => {
            const element = document.createElement(tag);
            Object.keys(attributes).forEach(key => {
                if (key === 'className') {
                    element.className = attributes[key];
                } else {
                    element.setAttribute(key, attributes[key]);
                }
            });
            if (text) element.textContent = text;
            return element;
        },
        
        // Add class
        addClass: (element, className) => {
            if (element) element.classList.add(className);
        },
        
        // Remove class
        removeClass: (element, className) => {
            if (element) element.classList.remove(className);
        },
        
        // Toggle class
        toggleClass: (element, className) => {
            if (element) element.classList.toggle(className);
        },
        
        // Check if element has class
        hasClass: (element, className) => {
            return element ? element.classList.contains(className) : false;
        }
    },

    // Event utilities
    events: {
        // Add event listener
        on: (element, event, handler, options = {}) => {
            if (element) {
                element.addEventListener(event, handler, options);
            }
        },
        
        // Remove event listener
        off: (element, event, handler) => {
            if (element) {
                element.removeEventListener(event, handler);
            }
        },
        
        // Trigger custom event
        trigger: (element, eventName, data = {}) => {
            if (element) {
                const event = new CustomEvent(eventName, { detail: data });
                element.dispatchEvent(event);
            }
        },
        
        // Delegate event
        delegate: (parent, selector, event, handler) => {
            parent.addEventListener(event, function(e) {
                if (e.target.matches(selector)) {
                    handler.call(e.target, e);
                }
            });
        }
    },

    // Animation utilities
    animation: {
        // Fade in element
        fadeIn: (element, duration = 300) => {
            if (!element) return;
            
            element.style.opacity = '0';
            element.style.display = 'block';
            
            let start = performance.now();
            
            function animate(currentTime) {
                let elapsed = currentTime - start;
                let progress = elapsed / duration;
                
                if (progress < 1) {
                    element.style.opacity = progress;
                    requestAnimationFrame(animate);
                } else {
                    element.style.opacity = '1';
                }
            }
            
            requestAnimationFrame(animate);
        },
        
        // Fade out element
        fadeOut: (element, duration = 300) => {
            if (!element) return;
            
            let start = performance.now();
            let startOpacity = parseFloat(window.getComputedStyle(element).opacity);
            
            function animate(currentTime) {
                let elapsed = currentTime - start;
                let progress = elapsed / duration;
                
                if (progress < 1) {
                    element.style.opacity = startOpacity * (1 - progress);
                    requestAnimationFrame(animate);
                } else {
                    element.style.opacity = '0';
                    element.style.display = 'none';
                }
            }
            
            requestAnimationFrame(animate);
        },
        
        // Slide up element
        slideUp: (element, duration = 300) => {
            if (!element) return;
            
            element.style.height = element.offsetHeight + 'px';
            element.style.overflow = 'hidden';
            element.style.transition = `height ${duration}ms ease`;
            
            setTimeout(() => {
                element.style.height = '0';
            }, 10);
            
            setTimeout(() => {
                element.style.display = 'none';
                element.style.height = '';
                element.style.overflow = '';
                element.style.transition = '';
            }, duration);
        },
        
        // Slide down element
        slideDown: (element, duration = 300) => {
            if (!element) return;
            
            element.style.display = 'block';
            let height = element.offsetHeight;
            element.style.height = '0';
            element.style.overflow = 'hidden';
            element.style.transition = `height ${duration}ms ease`;
            
            setTimeout(() => {
                element.style.height = height + 'px';
            }, 10);
            
            setTimeout(() => {
                element.style.height = '';
                element.style.overflow = '';
                element.style.transition = '';
            }, duration);
        }
    },

    // String utilities
    string: {
        // Capitalize first letter
        capitalize: (str) => {
            if (!str) return '';
            return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
        },
        
        // Convert to slug
        slugify: (str) => {
            if (!str) return '';
            return str
                .toLowerCase()
                .trim()
                .replace(/[^\w\s-]/g, '')
                .replace(/[\s_-]+/g, '-')
                .replace(/^-+|-+$/g, '');
        },
        
        // Truncate string
        truncate: (str, length = 100, suffix = '...') => {
            if (!str || str.length <= length) return str;
            return str.substring(0, length).trim() + suffix;
        },
        
        // Strip HTML tags
        stripHtml: (str) => {
            if (!str) return '';
            const div = document.createElement('div');
            div.innerHTML = str;
            return div.textContent || div.innerText || '';
        },
        
        // Escape HTML
        escapeHtml: (str) => {
            if (!str) return '';
            const div = document.createElement('div');
            div.textContent = str;
            return div.innerHTML;
        }
    },

    // Number utilities
    number: {
        // Format number with commas
        format: (num) => {
            return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        },
        
        // Format currency
        currency: (amount, currency = 'PKR') => {
            return new Intl.NumberFormat('en-PK', {
                style: 'currency',
                currency: currency
            }).format(amount);
        },
        
        // Generate random number
        random: (min = 0, max = 100) => {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },
        
        // Clamp number between min and max
        clamp: (num, min, max) => {
            return Math.min(Math.max(num, min), max);
        }
    },

    // Date utilities
    date: {
        // Format date
        format: (date, format = 'YYYY-MM-DD') => {
            const d = new Date(date);
            const year = d.getFullYear();
            const month = String(d.getMonth() + 1).padStart(2, '0');
            const day = String(d.getDate()).padStart(2, '0');
            
            return format
                .replace('YYYY', year)
                .replace('MM', month)
                .replace('DD', day);
        },
        
        // Get relative time
        relative: (date) => {
            const now = new Date();
            const diff = now - new Date(date);
            const seconds = Math.floor(diff / 1000);
            const minutes = Math.floor(seconds / 60);
            const hours = Math.floor(minutes / 60);
            const days = Math.floor(hours / 24);
            
            if (days > 0) return `${days} day${days > 1 ? 's' : ''} ago`;
            if (hours > 0) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
            if (minutes > 0) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
            return 'Just now';
        },
        
        // Check if date is today
        isToday: (date) => {
            const today = new Date();
            const checkDate = new Date(date);
            return checkDate.toDateString() === today.toDateString();
        }
    },

    // URL utilities
    url: {
        // Get query parameter
        getParam: (param) => {
            const urlParams = new URLSearchParams(window.location.search);
            return urlParams.get(param);
        },
        
        // Set query parameter
        setParam: (param, value) => {
            const url = new URL(window.location);
            url.searchParams.set(param, value);
            window.history.pushState({}, '', url);
        },
        
        // Remove query parameter
        removeParam: (param) => {
            const url = new URL(window.location);
            url.searchParams.delete(param);
            window.history.pushState({}, '', url);
        },
        
        // Build URL with parameters
        build: (base, params = {}) => {
            const url = new URL(base);
            Object.keys(params).forEach(key => {
                url.searchParams.set(key, params[key]);
            });
            return url.toString();
        }
    },

    // Storage utilities
    storage: {
        // Local storage with JSON support
        local: {
            set: (key, value) => {
                try {
                    localStorage.setItem(key, JSON.stringify(value));
                    return true;
                } catch (e) {
                    console.warn('localStorage not available:', e);
                    return false;
                }
            },
            
            get: (key, defaultValue = null) => {
                try {
                    const item = localStorage.getItem(key);
                    return item ? JSON.parse(item) : defaultValue;
                } catch (e) {
                    console.warn('localStorage not available:', e);
                    return defaultValue;
                }
            },
            
            remove: (key) => {
                try {
                    localStorage.removeItem(key);
                    return true;
                } catch (e) {
                    console.warn('localStorage not available:', e);
                    return false;
                }
            },
            
            clear: () => {
                try {
                    localStorage.clear();
                    return true;
                } catch (e) {
                    console.warn('localStorage not available:', e);
                    return false;
                }
            }
        },
        
        // Session storage with JSON support
        session: {
            set: (key, value) => {
                try {
                    sessionStorage.setItem(key, JSON.stringify(value));
                    return true;
                } catch (e) {
                    console.warn('sessionStorage not available:', e);
                    return false;
                }
            },
            
            get: (key, defaultValue = null) => {
                try {
                    const item = sessionStorage.getItem(key);
                    return item ? JSON.parse(item) : defaultValue;
                } catch (e) {
                    console.warn('sessionStorage not available:', e);
                    return defaultValue;
                }
            },
            
            remove: (key) => {
                try {
                    sessionStorage.removeItem(key);
                    return true;
                } catch (e) {
                    console.warn('sessionStorage not available:', e);
                    return false;
                }
            }
        }
    },

    // Validation utilities
    validation: {
        // Email validation
        email: (email) => {
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return regex.test(email);
        },
        
        // Phone validation (Pakistani format)
        phone: (phone) => {
            const regex = /^(\+92|0)?[0-9]{10}$/;
            return regex.test(phone.replace(/\s|-/g, ''));
        },
        
        // URL validation
        url: (url) => {
            try {
                new URL(url);
                return true;
            } catch {
                return false;
            }
        },
        
        // Required field validation
        required: (value) => {
            return value !== null && value !== undefined && value.toString().trim() !== '';
        },
        
        // Minimum length validation
        minLength: (value, length) => {
            return value && value.toString().length >= length;
        },
        
        // Maximum length validation
        maxLength: (value, length) => {
            return !value || value.toString().length <= length;
        }
    },

    // Performance utilities
    performance: {
        // Throttle function
        throttle: (func, limit) => {
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
        },
        
        // Debounce function
        debounce: (func, wait, immediate = false) => {
            let timeout;
            return function executedFunction(...args) {
                const later = () => {
                    timeout = null;
                    if (!immediate) func(...args);
                };
                const callNow = immediate && !timeout;
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
                if (callNow) func(...args);
            };
        },
        
        // Measure execution time
        measure: (name, func) => {
            const start = performance.now();
            const result = func();
            const end = performance.now();
            console.log(`${name} took ${end - start} milliseconds`);
            return result;
        }
    },

    // Device detection utilities
    device: {
        // Check if mobile
        isMobile: () => {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        },
        
        // Check if tablet
        isTablet: () => {
            return /iPad|Android/i.test(navigator.userAgent) && window.innerWidth >= 768;
        },
        
        // Check if touch device
        isTouch: () => {
            return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        },
        
        // Get screen size category
        getScreenSize: () => {
            const width = window.innerWidth;
            if (width < 640) return 'mobile';
            if (width < 1024) return 'tablet';
            return 'desktop';
        }
    },

    // Cookie utilities
    cookies: {
        // Set cookie
        set: (name, value, days = 7) => {
            const expires = new Date();
            expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
            document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
        },
        
        // Get cookie
        get: (name) => {
            const nameEQ = name + "=";
            const ca = document.cookie.split(';');
            for (let i = 0; i < ca.length; i++) {
                let c = ca[i];
                while (c.charAt(0) === ' ') c = c.substring(1, c.length);
                if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
            }
            return null;
        },
        
        // Delete cookie
        delete: (name) => {
            document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/`;
        }
    }
};

// Make utilities available globally
window.Utils = window.TechHubUtils;

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = window.TechHubUtils;
}
