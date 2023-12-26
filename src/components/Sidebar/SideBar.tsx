import React from "react";
import "./SideBar.scss";
import { slide as BurgerMenu } from "react-burger-menu";
import { Link } from "react-router-dom";

const SideBar: React.FC = () => {
  return (
    <BurgerMenu>
      <Link to="/">Home</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact</Link>
    </BurgerMenu>
  );
};

export default SideBar;
