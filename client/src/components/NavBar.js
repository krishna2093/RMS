import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from 'react-bootstrap';

const NavBar = (props) => {
  return (
    <div>
      <Navbar expand="lg" className='fixed-top bg-body-tertiary shadow'>
        <Container className="d-flex align-items-center">
          <Navbar.Brand className="d-flex align-items-center">
            <div className="mr-3">
              <img src="https://www.freeiconspng.com/thumbs/restaurant-icon-png/restaurant-icon-png-plate-1.png" alt="" style={{width:'50px', height: '50px', border: "none", marginRight: '10px'}}/> {/* Added marginRight style */}
            </div>
            <Link to="/" className='navbar-brand text-success fw-semibold'>
               Restaurant
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto justify-content-end w-100'>
              <Nav.Link as={Link} to='/' className='active text-uppercase'>Home</Nav.Link>
              <Nav.Link as={Link} to='/menu' className='text-uppercase'>Menu</Nav.Link>
              <Nav.Link as={Link} to='/about' className='text-uppercase'>About</Nav.Link>
              <Nav.Link as={Link} to='/book' className='text-uppercase'>Book Table</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {props.children}
    </div>
  );
};

export default NavBar;
