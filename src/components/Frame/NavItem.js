import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import Dropdown from "../Frame/Dropdown/Dropdown";

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  if (token && user.userType == "Customer") {
    var header = (
      <>
        <li className="nav-item">
          <Link to="/" className="nav-links" onClick={closeMobileMenu}>
            Home
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/shop" className="nav-links" onClick={closeMobileMenu}>
            Shop
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/" className="nav-links" onClick={closeMobileMenu}>
            New Arrivals
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/" className="nav-links" onClick={closeMobileMenu}>
            Trending
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
            Contact Us
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/vendorRequest"
            className="nav-links"
            onClick={closeMobileMenu}
          >
            Become A Vendor
          </Link>
        </li>
      </>
    );
  } else if (token && (user.userType == "Vendor" || user.userType == "Admin")) {
    var header = (
      <>
        <li className="nav-item">
          <Link to="/" className="nav-links" onClick={closeMobileMenu}>
            Home
          </Link>
        </li>

        <li className="nav-item">
          <Link
            to="/controlPanel"
            className="nav-links"
            onClick={closeMobileMenu}
          >
            Control Panel
          </Link>
        </li>
      </>
    );
  } else {
    var header = (
      <>
        <li className="nav-item">
          <Link to="/" className="nav-links" onClick={closeMobileMenu}>
            Home
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/login" className="nav-links" onClick={closeMobileMenu}>
            Login
          </Link>
        </li>
      </>
    );
  }

  return (
    <>
      <nav className="navbar" fixed-top>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              <i className="fas fa-bars"></i>&nbsp;All Categories
              &nbsp;&nbsp;&nbsp;
              <i className="fas fa-caret-down" />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          {header}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
