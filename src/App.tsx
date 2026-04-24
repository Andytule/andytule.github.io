import React from 'react';

import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import Contact from '@/components/sections/Contact';
import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import Timeline from '@/components/sections/Timeline';

const App = (): React.ReactElement => (
  <div className="app">
    <div className="app__bloom" aria-hidden="true" />
    <div className="app__bloom app__bloom--secondary" aria-hidden="true" />

    <Navbar />

    <main className="main">
      <Hero />
      <Skills />
      <Timeline />
      <Projects />
      <Contact />
    </main>

    <Footer />
  </div>
);

export default App;
