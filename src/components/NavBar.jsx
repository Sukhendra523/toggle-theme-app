import React from "react";
import { Link } from "react-router-dom";
import SwitchToggle from "./SwitchToggle";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/contact"}>Contact</Link>
      </div>
      <SwitchToggle />
    </nav>
  );
};

export default NavBar;
