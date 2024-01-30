import React, { useState } from "react";
import "./SideBar.scss";
import { slide as BurgerMenu } from "react-burger-menu";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faLaptopCode,
  faBriefcase,
  faFile,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import SleepingCat from "../../assets/images/sleeping-cat.svg";

const SideBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleStateChange = (state: { isOpen: boolean }) => {
    setIsOpen(state.isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <BurgerMenu isOpen={isOpen} onStateChange={handleStateChange}>
      <Link
        to="/"
        onClick={closeMenu}
        className={location.pathname === "/" ? "active-link" : ""}
      >
        <FontAwesomeIcon icon={faHome} />
        Home
      </Link>
      <Link
        to="/projects"
        onClick={closeMenu}
        className={location.pathname === "/projects" ? "active-link" : ""}
      >
        <FontAwesomeIcon icon={faLaptopCode} />
        Projects
      </Link>
      <Link
        to="/work-experience"
        onClick={closeMenu}
        className={
          location.pathname === "/work-experience" ? "active-link" : ""
        }
      >
        <FontAwesomeIcon icon={faBriefcase} />
        Work Experience
      </Link>
      <Link
        to="/resume"
        onClick={closeMenu}
        className={location.pathname === "/resume" ? "active-link" : ""}
      >
        <FontAwesomeIcon icon={faFile} />
        Resume
      </Link>
      <Link
        to="/contact"
        onClick={closeMenu}
        className={location.pathname === "/contact" ? "active-link" : ""}
      >
        <FontAwesomeIcon icon={faAddressCard} />
        Contact
      </Link>
      <div className="sidebar-divider"></div>
      <a
        href="https://github.com/Andytule"
        target="_blank"
        rel="noopener noreferrer"
        onClick={closeMenu}
      >
        <FontAwesomeIcon icon={faGithub} />
        GitHub
      </a>
      <a
        href="https://www.linkedin.com/in/andy-tu-le/"
        target="_blank"
        rel="noopener noreferrer"
        onClick={closeMenu}
      >
        <FontAwesomeIcon icon={faLinkedin} />
        LinkedIn
      </a>
      <img
        alt="Sleeping Cat"
        className="sleeping-cat-image"
        src={SleepingCat}
        loading="lazy"
      />
    </BurgerMenu>
  );
};

export default SideBar;
