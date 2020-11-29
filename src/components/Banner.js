import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'

const Banner = () => {
  return (
    <div className="banner-section d-flex align-items-center">
      <Container>
        <Row>
          <Col lg="7" className="mr-auto">
            <div className="banner-content">
              <span>November 30, at 10.00am</span>
              <h1 className="mt-3 mb-5">The future <br />&amp; Tech Expo</h1>
              <Button variant="hero" className="btn-rounded">Discover more</Button>
            </div>               
          </Col>
        </Row>
      </Container>
    </div> 
  );
};

export default Banner;