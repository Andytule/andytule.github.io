import React, { useState } from "react";
import "./SideBar.scss";
import { slide as BurgerMenu } from "react-burger-menu";
import { Link } from "react-router-dom";

const SideBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleStateChange = (state: { isOpen: boolean }) => {
    setIsOpen(state.isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <BurgerMenu isOpen={isOpen} onStateChange={handleStateChange}>
      <Link to="/" onClick={closeMenu}>
        Home
      </Link>
      <Link to="/projects" onClick={closeMenu}>
        Projects
      </Link>
      <Link to="/contact" onClick={closeMenu}>
        Contact
      </Link>
    </BurgerMenu>
  );
};

export default SideBar;
