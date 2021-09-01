import React from 'react'
import { NavbarBrand,Navbar,Container,NavDropdown,Nav  } from 'react-bootstrap'

const logout=(e)=>{
  localStorage.clear()
  window.location.href="/"
}
const Header = (props) => {
  let { }=props;
  let token =  localStorage.getItem('token');
  const user = JSON.parse(localStorage.getItem('user'));

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
                        
                        <Nav.Link to="/wishlist" className="text-black-50">
                            <i className="ni far fa-heart"></i>
                        </Nav.Link>
                        <Nav.Link to="/mycart" className="text-black-50">
                            <i class="ni fas fa-shopping-cart"></i>
                        </Nav.Link>
    
    </Nav>
    <Nav className="mx-right">
      {
        token !== null && user.userType=='Admin'?
        (
          <NavDropdown title={user.username} id="collasible-nav-dropdown">
          <NavDropdown.Item href="/userprofile">Edit Profile</NavDropdown.Item>
          <NavDropdown.Item onClick={(e)=>{logout(e)}}>Logout</NavDropdown.Item>
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
