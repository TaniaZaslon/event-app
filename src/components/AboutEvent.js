import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import img1 from '../images/img-7.jpg';
import img2 from '../images/img-1.jpg';

const AboutEvent = () => {
  return (
    <Container>
      <Row>
        <Col lg="5" md="5">
          <div className="about-img position-relative">
            <img src={img1} alt="Tech Fest" className="img-fluid w-100" />
            <div className="img-block">
              <img src={img2} alt="Our voluntears" className="img-fluid" />
            </div>
          </div>
        </Col>
        <Col lg="7" md="7">
        <div className="about-content-wrap mt-5 mt-md-0">
					<span className="stroke-text">Tech Fest</span>
					<div className="ml-90">
						<h2 className="text-lg mb-3 mt-3">The New Era of Tech Companies </h2>
						<p>Lorem ipsum proin gravida nibh vel velit auctor aliquet. Aeneansollicitudin, lorem quis bibendum auctonisi elit consequat ipsum nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursusa sit nibh vel velit.</p>
						<a href="#" className="btn btn-hero btn-rounded mt-3">Discover More</a>
					</div>
				</div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutEvent;