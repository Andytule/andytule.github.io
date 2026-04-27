import React from 'react';

import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import Contact from '@/components/sections/Contact';
import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';
import Resume from '@/components/sections/Resume';
import Skills from '@/components/sections/Skills';
import Timeline from '@/components/sections/Timeline';

const App = (): React.ReactElement => (
  <div
    style={{
      position: 'relative',
      minHeight: '100vh',
      overflowX: 'hidden',
      background: 'var(--color-bg)',
    }}
  >
    {/* Subtle ambient orbs — very restrained, Apple-like */}
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        right: '-5%',
        top: '-10%',
        height: '700px',
        width: '700px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(77,166,255,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }}
    />
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        left: '-10%',
        top: '45%',
        height: '700px',
        width: '700px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(77,166,255,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }}
    />

    <Navbar />

    <main style={{ position: 'relative', zIndex: 10 }}>
      <Hero />
      <Skills />
      <Timeline />
      <Projects />
      <Contact />
      <Resume />
    </main>

    <Footer />
  </div>
);

export default App;
