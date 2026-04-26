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
    style={{ position: 'relative', minHeight: '100vh', overflowX: 'hidden', background: '#000' }}
  >
    {/* Subtle ambient orbs — very restrained, Apple-like */}
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        right: '-5%',
        top: '-10%',
        height: '600px',
        width: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(41,151,255,0.03) 0%, transparent 70%)',
        pointerEvents: 'none',
      }}
    />
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        left: '-10%',
        top: '45%',
        height: '600px',
        width: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(41,151,255,0.025) 0%, transparent 70%)',
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
