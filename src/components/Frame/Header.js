import React, { useState, useEffect } from "react";
import {
  NavbarBrand,
  Navbar,
  Container,
  NavDropdown,
  Nav,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = (props) => {
  let {} = props;
  let token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  const closeMobileMenu = () => setClick(false);
  const [click, setClick] = useState(false);

  const logout = (e) => {
    localStorage.clear();
    window.location.href = "/login";
  };

  if (token && user.userType == "Customer") {
    var header = (
      <>
        <li className="nav-item">
          <Link to="/" className="nav-links" onClick={closeMobileMenu}>
            <h5><b>Home</b></h5>
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/shop" className="nav-links" onClick={closeMobileMenu}>
          <h5><b>Shop</b></h5>
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
          <h5><b>About</b></h5>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
          <h5><b>Contact Us</b></h5>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/wishlist" className="navtop-links">
            <i className="far fa-heart"></i> &nbsp; 
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/myCart" className="navtop-links">
          <i class="fas fa-shopping-cart"></i> &nbsp; 
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/vendorRequest"
            className="nav-links"
            onClick={closeMobileMenu}
          >
            <h5><b>Become a Vendor</b></h5>
          </Link>
        </li>
      </>
    );
  } else if (token && user.userType == "Vendor") {
    var header = (
      <>
        <li className="nav-item">
          <Link to="/" className="nav-links" onClick={closeMobileMenu}>
          <h5><b>Home</b></h5>
          </Link>
        </li>

        <li className="nav-item">
          <Link
            to="/controlPanel"
            className="nav-links"
            onClick={closeMobileMenu}
          >
            <h5><b>Control Panel</b></h5>
          </Link>
        </li>
      </>
    );
  } else if (token && user.userType == "Admin") {
    var header = (
      <>
        <li className="nav-item">
          <Link to="/" className="nav-links" onClick={closeMobileMenu}>
          <h5><b>Home</b></h5>
          </Link>
        </li>

        <li className="nav-item">
          <Link
            to="/controlPanel"
            className="nav-links"
            onClick={closeMobileMenu}
          >
            <h5><b>Control Panel</b></h5>
          </Link>
        </li>

        <li className="nav-item">
          <Link
            to="/vendorRequests"
            className="nav-links"
            onClick={closeMobileMenu}
          >
            <h5><b>Vendor Requests</b></h5>
          </Link>
        </li>
      </>
    );
  } else {
    var header = (
      <>
        <li className="nav-item">
          <Link to="/" className="nav-links" onClick={closeMobileMenu}>
          <h5><b>Home</b></h5>
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/login" className="nav-links" onClick={closeMobileMenu}>
          <h5><b>Login</b></h5>
          </Link>
        </li>
      </>
    );
  }

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/"><h2><b>Swifted</b></h2></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">{header}</Nav>
            {token && (
              <Nav className="mx-right">
                <NavDropdown
                  title={user.firstname}
                  id="collasible-nav-dropdown"
                >
                  <NavDropdown.Item href="/userprofile">
                    Edit Profile
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={(e) => {
                      logout(e);
                    }}
                  >
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
