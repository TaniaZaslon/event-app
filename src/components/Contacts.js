import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SocialNetworks from './SocialNetworks';
import { getDay, getMonthName } from '../utils/date';

const Contacts = ({eventDate}) => {
  return (
    <>
      <div className="contact-header">
        <div className="overly"></div>
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
            <div className="content text-center">
              <h1 className="mb-3 text-white text-capitalize letter-spacing">Contacts</h1>
              <div className="divider mx-auto mb-4 bg-white"></div>        
            </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={6}>
            <div className="contact-info-block box-shadow p-5">
                <h5 className="text-uppercase letter-spacing mb-4">Venue location</h5>
                <h6 className="text-color mb-3">{getDay(eventDate)} {getMonthName(eventDate)}, {eventDate.getFullYear()} </h6>	
                <p className="text-sm-2">85 Golden Street, Darlinghurst <br />ERP 2019, United States </p>
                <h5 className="text-uppercase letter-spacing mb-2 mt-3">Call Us</h5>
                <p className="text-sm-2">+45 31897727</p>
                <h5 className="text-uppercase letter-spacing mb-2 mt-3">Message Us</h5>
                <p className="text-sm-2">zaslontania@gmail.com</p>
                <SocialNetworks />
              </div>
            </Col>           
          </Row>
        </Container>
      </div>    
    </>
  );
};

export default Contacts;