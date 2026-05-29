import React from 'react';

const AmbientBackground: React.FC = () => (
  <div aria-hidden="true" className="fixed inset-0 pointer-events-none z-[-1]" />
);

export default AmbientBackground;
