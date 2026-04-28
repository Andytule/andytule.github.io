import { useState } from 'react';

/**
 * useHover — returns [hovered, hoverHandlers] for components that need
 * JS-driven hover state (e.g. when passing `color` as a prop to an icon
 * component that can't be driven by CSS `currentColor` alone).
 */
const useHover = (): [boolean, { onMouseEnter: () => void; onMouseLeave: () => void }] => {
  const [hovered, setHovered] = useState(false);
  return [
    hovered,
    {
      onMouseEnter: () => setHovered(true),
      onMouseLeave: () => setHovered(false),
    },
  ];
};

export default useHover;
