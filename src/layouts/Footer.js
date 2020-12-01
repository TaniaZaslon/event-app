import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SocialNetworks from '../components/SocialNetworks';

const Footer = () => {
  return (
    <footer className="footer section">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} className="text-center">
            <h2 className="text-white mb-3">TechFest.</h2>
            <p className="text-white-50">We are a creative-led experiential Event Production Agency that helps brands connect, engage and evolve. </p>
            <SocialNetworks color="white" />
            <p class="mt-3 text-white-50">We will not spam at your inbox .Don't panic</p>            
          </Col>
        </Row>
        <Row>
          <Col lg={12} className="text-center mt-5">
  <p class="copy border-top pt-4 text-white-50 mb-0">Copyright Reserved to Themefisher. { new Date().getFullYear()}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;