import React from 'react';

const AmbientBackground: React.FC = () => (
  <div aria-hidden="true" className="fixed inset-0 pointer-events-none z-[-1]">
    {/* Wallpaper */}
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: 'url(/wallpaper.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center bottom',
        backgroundRepeat: 'no-repeat',
      }}
    />
  </div>
);

export default AmbientBackground;
