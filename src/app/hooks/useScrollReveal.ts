import { useCallback, useEffect } from 'react';
import { ScrollRevealOptions } from '../types/ScrollReveal';

const useScrollReveal = (options: ScrollRevealOptions) => {
  const { origin = 'bottom', distance = '20px', duration = 1000, easing = 'ease', interval = 0, reset = false } = options;

  const scrollReveal = useCallback((el: HTMLElement | null) => {
    if (el) {
      el.style.opacity = '0';
      el.style.transform = `translateY(${distance})`;
      el.style.transition = `opacity ${duration}ms ${easing}, transform ${duration}ms ${easing}`;

      const handleScroll = () => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) { // Adjust the threshold as needed
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        }
      };

      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Initial check

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [distance, duration, easing]);

  return scrollReveal;
};

export default useScrollReveal;
