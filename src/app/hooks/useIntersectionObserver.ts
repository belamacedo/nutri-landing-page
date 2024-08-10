
import { useState, useEffect } from 'react';

const useIntersectionObserver = (options: IntersectionObserverInit) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);

    const element = document.querySelector('.observe');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [options]);

  return isVisible;
};

export default useIntersectionObserver;
