import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { getDay, getMonthName, getTime } from '../utils/date';

const Banner = ({eventDate}) => {
  const day = getDay(eventDate);
  const month = getMonthName(eventDate);
  const time = getTime(eventDate);

  return (
    <div className="banner-section d-flex align-items-center">
      <Container>
        <Row>
          <Col lg="7" className="mr-auto">
            <div className="banner-content">
              <span>{month} {day}, at {time}</span>
              <h1 className="mt-3 mb-5">Welcome<br />to Tech Fest</h1>
              <Button variant="hero" className="btn-rounded">Join team</Button>
            </div>               
          </Col>
        </Row>
      </Container>
    </div> 
  );
};

export default Banner;