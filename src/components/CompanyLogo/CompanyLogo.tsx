import React from "react";
import "./CompanyLogo.scss";

interface CompanyLogoProps {
  title: string;
  imageUrl: string;
}

const CompanyLogo: React.FC<CompanyLogoProps> = ({ title, imageUrl }) => (
  <div className="company-logo">
    <img
      src={imageUrl}
      alt={title}
      title={title}
      className="logo"
      loading="lazy"
    />
  </div>
);

export default CompanyLogo;
