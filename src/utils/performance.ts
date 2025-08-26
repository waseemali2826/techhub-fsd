/**
 * Performance monitoring utilities
 */

// Measure component render time
export const measureComponentRender = (componentName: string) => {
  return {
    start: () => performance.mark(`${componentName}-start`),
    end: () => {
      performance.mark(`${componentName}-end`);
      performance.measure(
        `${componentName}-render`,
        `${componentName}-start`,
        `${componentName}-end`
      );
      const measure = performance.getEntriesByName(`${componentName}-render`)[0];
      console.log(`${componentName} render time:`, measure.duration);
      return measure.duration;
    },
  };
};

// Check for performance issues
export const checkPerformance = () => {
  // Check for large DOM nodes
  const elementCount = document.querySelectorAll('*').length;
  if (elementCount > 1500) {
    console.warn(`Large DOM detected: ${elementCount} elements`);
  }

  // Check for memory usage (if available)
  if ('memory' in performance) {
    const memory = (performance as any).memory;
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
};

// Preload critical resources
export const preloadCriticalResources = () => {
  const criticalResources = [
    '/logo.webp',
    '/images/front.webp',
    '/images/front2.webp',
    '/images/front3.webp',
  ];

  criticalResources.forEach((src) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });
};

// Optimize scroll performance
export const optimizeScrollPerformance = () => {
  // Add passive scroll listeners hint
  document.addEventListener('wheel', () => {}, { passive: true });
  document.addEventListener('touchstart', () => {}, { passive: true });
  document.addEventListener('touchmove', () => {}, { passive: true });

  // Enable smooth scrolling with fallback
  if ('scrollBehavior' in document.documentElement.style) {
    document.documentElement.style.scrollBehavior = 'smooth';
  }
};

// Debounce function for performance
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// Throttle function for performance
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

// Initialize performance optimizations
export const initPerformanceOptimizations = () => {
  // Preload critical resources
  preloadCriticalResources();
  
  // Optimize scroll performance
  optimizeScrollPerformance();
  
  // Check performance periodically in development
  if (process.env.NODE_ENV === 'development') {
    setTimeout(checkPerformance, 2000);
  }
};
