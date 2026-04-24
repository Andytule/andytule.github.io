import { useEffect, useState } from 'react';

const SECTIONS = ['hero', 'skills', 'timeline', 'portfolio', 'contact'];

const useActiveSection = (): string => {
  const [active, setActive] = useState<string>('hero');

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActive(id);
          }
        },
        { threshold: 0.4 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  return active;
};

export default useActiveSection;
