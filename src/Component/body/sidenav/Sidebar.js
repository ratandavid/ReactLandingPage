import React from "react";

import "./sidenav.css";

function Sidenav() {
  let showNav = false;

  function ToggleNavigation() {
    showNav = !showNav;
    if (showNav) {
      document.getElementById("nav-links").style.display = "block";
    } else {
      document.getElementById("nav-links").style.display = "none";
    }
  }
  return (
    <>
      <div className="sidenavbar">
        <nav>
          <i className="fas fa-bars menubar" onClick={ToggleNavigation}></i>
          <i className="fas fa-shopping-cart mycart"></i>
          <h1>
            <b>
              Loreum <span>Ipsum</span>
            </b>
          </h1>
          <ul id="nav-links">
            <li>
              <a className="disabled" href="#home">
                About
              </a>
            </li>
            <li>
              <a href="#news">Services</a>
            </li>
            <li>
              <a href="#contact">Cuisine</a>
            </li>
            <li>
              <a href="#about">Gallery</a>
            </li>
            <li>
              <a href="#about">Contact</a>
            </li>
            <li>
              <a href="#about">Book</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="button">
        <input className="btn" type="submit" value="Cart" />
      </div>
    </>
  );
}

export default Sidenav;
