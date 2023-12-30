import React from "react";
import "./Chip.scss";

interface ChipProps {
  technology: string;
  link: string;
}

const Chip: React.FC<ChipProps> = ({ technology, link }) => {
  return (
    <div className="chip">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        title={technology}
      >
        {technology}
      </a>
    </div>
  );
};

export default Chip;
