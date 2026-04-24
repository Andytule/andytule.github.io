import { useEffect, useRef } from 'react';

const useScrollReveal = <T extends HTMLElement>(): React.RefObject<T | null> => {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('animate-fade-up');
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    el.style.opacity = '0';
    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return ref;
};

export default useScrollReveal;
