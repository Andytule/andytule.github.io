import React from 'react';

import { HeroGrid } from './HeroGrid';
import { MobileLayout } from './MobileLayout';

const Hero: React.FC = () => {
  const gridRef = React.useRef<HTMLDivElement>(null);
  const [rowHeight, setRowHeight] = React.useState<number | null>(null);

  React.useEffect(() => {
    const el = gridRef.current;
    if (!el) return;
    const measure = () => {
      const totalGap = 5 * 12;
      const colWidth = (el.offsetWidth - totalGap) / 6;
      setRowHeight(Math.round(colWidth));
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <section id="hero" className="mx-auto max-w-[1100px] px-6 pt-16 pb-8">
      <MobileLayout />
      <HeroGrid gridRef={gridRef} rowHeight={rowHeight} />
    </section>
  );
};

export default Hero;
