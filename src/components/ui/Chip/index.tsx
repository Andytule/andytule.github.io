import React from 'react';

interface ChipProps {
  label: string;
  variant?: 'default' | 'lavender' | 'pink';
}

const Chip: React.FC<ChipProps> = ({ label, variant = 'default' }) => (
  <span className={`chip chip--${variant}`}>{label}</span>
);

export default Chip;
