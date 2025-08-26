import { useCallback, useEffect, useRef } from 'react';

/**
 * Hook for optimized scroll handling with throttling
 */
export const useOptimizedScroll = (callback: () => void, delay: number = 16) => {
  const lastRun = useRef(Date.now());

  const throttledCallback = useCallback(() => {
    if (Date.now() - lastRun.current >= delay) {
      callback();
      lastRun.current = Date.now();
    }
  }, [callback, delay]);

  useEffect(() => {
    window.addEventListener('scroll', throttledCallback, { passive: true });
    return () => window.removeEventListener('scroll', throttledCallback);
  }, [throttledCallback]);
};

/**
 * Hook for intersection observer with performance optimization
 */
export const useIntersectionObserver = (
  callback: (isIntersecting: boolean) => void,
  options?: IntersectionObserverInit
) => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => callback(entry.isIntersecting),
      {
        threshold: 0.1,
        rootMargin: '50px',
        ...options,
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [callback, options]);

  return elementRef;
};

/**
 * Hook for debouncing values
 */
export const useDebounce = <T>(value: T, delay: number): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
};

/**
 * Hook for optimized resize handling
 */
export const useOptimizedResize = (callback: () => void) => {
  const callbackRef = useRef(callback);
  callbackRef.current = callback;

  useEffect(() => {
    let timeoutId: number;
    
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => callbackRef.current(), 100);
    };

    window.addEventListener('resize', handleResize, { passive: true });
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeoutId);
    };
  }, []);
};

import { useState } from 'react';