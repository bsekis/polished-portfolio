import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

function Header() {

  const location = useLocation();

  return (
    <Navbar expand={'md'} variant='dark' className='bodyfont' style={{backgroundColor: 'transparent'}}>
      <Container fluid>
        <Navbar.Brand className='linkHover' as={Link} to='/'>
          <h2>Ben Ekis</h2>
          </Navbar.Brand>
        {/* button for mobile nav */}
        <Navbar.Toggle aria-controls='navbar-nav' />
        <Navbar.Collapse id='navbar-nav'>
          <Nav navbar className='ml-auto'>
            <Nav.Link as={Link} to='/' className={location.pathname === '/' ? 'linkHover active' : 'linkHover'}>
          
              </Nav.Link>
            <Nav.Link as={Link} to='/projects' className={location.pathname === './Project.js' ? 'linkHover active' : 'linkHover'}>
              Projects
              </Nav.Link>
            <Nav.Link as={Link} to='/about' className={location.pathname === './About.js' ? 'linkHover active' : 'linkHover'}>
              About
              </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
