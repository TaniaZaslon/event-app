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
            <img
              src="/logo.png"
              width="150"
              height="46"
              className="d-inline-block align-top"
              alt="Event app logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="top-navbar-nav"/>
          <Navbar.Collapse id="top-navbar-nav" className="text-center">
            <Nav className="mx-auto">
              <Nav.Link href="#about">About event</Nav.Link>             
              <Nav.Link href="#apply">Apply</Nav.Link>
              <Nav.Link href="#contacts">Contacts</Nav.Link>          
            </Nav>
            <Button variant="secondary" className="mt-3 mt-lg-0 btn-rounded">Get Ticket</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;