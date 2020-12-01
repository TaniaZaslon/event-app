import React from 'react';
import { Container } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

const Header = () => {
  return (
    <header>
      <Navbar variant="light" className="top-nav" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <div className="d-inline-block align-top brand-logo">TechFest.</div>            
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="top-navbar-nav"/>
          <Navbar.Collapse id="top-navbar-nav" className="justify-content-end">
            <Nav>
              <Nav.Link href="#about">About event</Nav.Link>             
              <Nav.Link href="#apply">Apply</Nav.Link>
              <Nav.Link href="#contacts">Contacts</Nav.Link>          
            </Nav>            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;