import React from 'react'
import { NavbarBrand,Navbar,Container,NavDropdown,Nav  } from 'react-bootstrap'

const logout=()=>{
  localStorage.clear()
  window.location.href="/"
}
const Header = (props) => {
  let token =  localStorage.getItem('token');
  const user = localStorage.getItem('user');

    return (
        <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mx-auto">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Nav className="mx-right">
      {
        token !=null && user.userType=="Admin" ?
        (
          <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">profile</NavDropdown.Item>
          <NavDropdown.Item onClick={logout()}>Logout</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Settings</NavDropdown.Item>
        </NavDropdown>
        ):(
          <>
           <Nav.Link href="#features">Create Account</Nav.Link>
      <Nav.Link href="/login">Login</Nav.Link>
          </>
        )
      }
   
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </>
    )
}

export default Header
