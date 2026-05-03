import { useState } from 'react';

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
