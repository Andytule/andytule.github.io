import React, { useState } from "react";
import "./SideBar.scss";
import { slide as BurgerMenu } from "react-burger-menu";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faLaptopCode,
  faBriefcase,
  faFile,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons";

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
        <FontAwesomeIcon icon={faHome} />
        Home
      </Link>
      <Link to="/projects" onClick={closeMenu}>
        <FontAwesomeIcon icon={faLaptopCode} />
        Projects
      </Link>
      <Link to="/experiences" onClick={closeMenu}>
        <FontAwesomeIcon icon={faBriefcase} />
        Work Experience
      </Link>
      <Link to="/resume" onClick={closeMenu}>
        <FontAwesomeIcon icon={faFile} />
        Resume
      </Link>
      <Link to="/contact" onClick={closeMenu}>
        <FontAwesomeIcon icon={faAddressCard} />
        Contact
      </Link>
    </BurgerMenu>
  );
};

export default SideBar;
