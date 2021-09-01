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
  <Navbar.Brand href="/">Swifted</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    {
      token !==null && user.userType=="Customer"?(
        <>
        <Nav className="mx-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/about">About</Nav.Link>
      <Nav.Link href="/shop">Products</Nav.Link>
      <Nav.Link href="/contact">Contact Us</Nav.Link>
<Nav.Link to="/wishlist" className="text-black-50">
                            <i className="ni far fa-heart"></i>
                        </Nav.Link>
                        <Nav.Link to="/mycart" className="text-black-50">
                            <i class="ni fas fa-shopping-cart"></i>
                        </Nav.Link>
    
    </Nav>
        </>
      ):(
        <>
        </>
      )
    }
       {
      token !==null && user.userType=="Admin"?(
        <>
        <Nav className="mx-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/about">About</Nav.Link>
      <Nav.Link href="/shop">Products</Nav.Link>
      <Nav.Link href="/contact">Contact Us</Nav.Link>
    
    </Nav>
        </>
      ):(
        <>
        </>
      )
    }
       {
      token !==null && user.userType=="Vendor"?(
        <>
        <Nav className="mx-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/about">About</Nav.Link>
      <Nav.Link href="/shop">Products</Nav.Link>
      <Nav.Link href="/contact">Contact Us</Nav.Link>
      <Nav.Link href="/contact">Contact Us</Nav.Link>
 <Nav.Link href="/contact">Dashboard</Nav.Link>
    
    </Nav>
        </>
      ):(
        <>
        </>
      )
    }
       {
      token ==null ?(
        <>
        <Nav className="mx-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/about">About</Nav.Link>
      <Nav.Link href="/shop">Products</Nav.Link>
      <Nav.Link href="/contact">Contact Us</Nav.Link>
    
    </Nav>
        </>
      ):(
        <>
        </>
      )
    }
    <Nav className="mx-right">
      {
        token !== null && user.userType=='Admin' || token !== null && user.userType==="Customer" ||token !== null && user.userType==="Vendor"? 
        (
          <NavDropdown title={user.username} id="collasible-nav-dropdown">
          <NavDropdown.Item href="/userprofile">Edit Profile</NavDropdown.Item>
          <NavDropdown.Item onClick={(e)=>{logout(e)}}>Logout</NavDropdown.Item>
        </NavDropdown>
        ):(
          
          <>
          </>
        )
      }
       {
        token !== null && user.userType=='Customer'? 
        (
          <NavDropdown title={user.firstname} id="collasible-nav-dropdown">
          <NavDropdown.Item href="/userprofile">Edit Profile</NavDropdown.Item>
          <NavDropdown.Item onClick={(e)=>{logout(e)}}>Logout</NavDropdown.Item>
        </NavDropdown>
        ):(
          
          <>
           
          </>
        )
      }
      {
        token == null ? 
        (
          <>
          <Nav.Link href="#features">Create Account</Nav.Link>
          <Nav.Link href="/login">Login</Nav.Link>
          </>
        ):(
          
          <>
          
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
