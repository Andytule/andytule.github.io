import React from "react";
import "./Chip.scss";

interface ChipProps {
  technology: string;
}

const Chip: React.FC<ChipProps> = ({ technology }) => {
  return <div className="chip">{technology}</div>;
};

export default Chip;
