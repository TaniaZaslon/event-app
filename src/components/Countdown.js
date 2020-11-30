import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Timer from '../components/Timer';
import { calculateTimeLeft } from '../utils/date';

const Countdown = ({eventDate}) => {

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(eventDate));
  
  useEffect(() => {
    if(Object.keys(timeLeft).length > 0) {
      const timer = setTimeout(() => {
        setTimeLeft(calculateTimeLeft(eventDate));
      }, 1000);  
      return () => clearTimeout(timer);
    }    
  });

  return (
    <Container>
      <div className="countdown-inner">
        <Row className="align-items-center">
          <Col lg="6">
            <div className="countdown-stat">
              <h2 className="font-weight-light"><span className="font-weight-bold">Count the day</span> <br />until conference start</h2>
            </div>
          </Col>
            <Timer timeLeft={timeLeft} />            
        </Row>
      </div>
    </Container>
  );
};

export default Countdown;