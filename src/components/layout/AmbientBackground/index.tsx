import React from 'react';

const AmbientBackground: React.FC = () => (
  <div aria-hidden="true" className="fixed inset-0 pointer-events-none z-0">
    <div
      className="absolute inset-0"
      style={{
        background:
          'linear-gradient(135deg, rgba(40,90,200,0.05) 0%, transparent 55%, rgba(90,30,180,0.04) 100%)',
      }}
    />
    <div
      className="absolute rounded-full"
      style={{
        left: '-20%',
        top: '-15%',
        height: '900px',
        width: '900px',
        background: 'radial-gradient(circle at center, rgba(60,130,255,0.05) 0%, transparent 65%)',
        filter: 'blur(80px)',
      }}
    />
    <div
      className="absolute rounded-full"
      style={{
        right: '-15%',
        bottom: '-10%',
        height: '900px',
        width: '900px',
        background: 'radial-gradient(circle at center, rgba(120,50,240,0.05) 0%, transparent 65%)',
        filter: 'blur(80px)',
      }}
    />
  </div>
);

export default AmbientBackground;
