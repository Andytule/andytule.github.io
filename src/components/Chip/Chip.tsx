import React from "react";
import "./Chip.scss";

interface ChipProps {
  text: string;
  link?: string;
}

const Chip: React.FC<ChipProps> = ({ text, link }) => {
  return (
    <div className="chip">
      <a href={link} target="_blank" rel="noopener noreferrer" title={text}>
        {text}
      </a>
    </div>
  );
};

export default Chip;
