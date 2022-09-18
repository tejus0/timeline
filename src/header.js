import React from "react";
import "./header.css";
import NavbarTop from "./Navbar";
import AStro from "./leftSide.jpg";
import Flag from "./middle.jpg";
import HinduFlag from "./right.jpg";

function Header() {
  // Import result is the URL of your image
  return (

    <div className="container-header">
      <NavbarTop />
    {<div className="header-images">
      <img className="left" src={AStro} alt="Indian Astronomy" />
      <img className="middle" src={Flag} alt="Indian Flag" />
      <img className="right" src={HinduFlag} alt="Hinduism Flag" />
    </div>}
    </div>
  );
}

export default Header;
