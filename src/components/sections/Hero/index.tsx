import React, { RefObject, useEffect, useRef, useState } from 'react';

import { HeroGrid } from './HeroGrid';
import { MobileLayout } from './MobileLayout';

const GRID_COLUMNS: number = 6;
const GRID_GAP_PX: number = 14;

const Hero: React.FC = () => {
  const gridRef: RefObject<HTMLDivElement | null> = useRef<HTMLDivElement>(null);
  const [rowHeight, setRowHeight] = useState<number | null>(null);

  useEffect(() => {
    const el: HTMLDivElement | null = gridRef.current;
    if (!el) return;
    const measure = () => {
      const colWidth = (el.offsetWidth - GRID_GAP_PX * (GRID_COLUMNS - 1)) / GRID_COLUMNS;
      setRowHeight(Math.round(colWidth));
    };
    measure();
    const ro: ResizeObserver = new ResizeObserver(measure);
    ro.observe(el);
    window.addEventListener('resize', measure);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, []);

  return (
    <section
      id="hero"
      className="mx-auto max-w-[1200px] px-8 pt-10 pb-10 min-h-[calc(100vh-60px)] flex flex-col justify-center"
    >
      <MobileLayout />
      <HeroGrid gridRef={gridRef} rowHeight={rowHeight} />
    </section>
  );
};

export default Hero;
