
import { useEffect, useRef } from 'react';

export function useRevealOnScroll() {
  const elementsRef = useRef<Element[]>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, { threshold: 0.1 });
    
    const elements = document.querySelectorAll('.reveal-animation');
    elements.forEach((el) => {
      observer.observe(el);
      elementsRef.current.push(el);
    });
    
    return () => {
      if (elementsRef.current) {
        elementsRef.current.forEach((el) => {
          if (el) observer.unobserve(el);
        });
      }
    };
  }, []);
  
  return elementsRef;
}
