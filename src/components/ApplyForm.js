import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import SocialNetworks from './SocialNetworks';
import applyImg from '../images/apply.png';
import { useFormFields } from '../utils/forms';

const ApplyForm = () => {
  const [validated, setValidated] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [hideForm, setHideForm] = useState(false);
  const [fields, handleFieldChange] = useFormFields({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    gender: '',  
    skil_1: '',
    skil_2: '',
    skil_3: '',
    skil_4: '',
    skil_5: '',
    skil_6: '',  
    skil_7: '',
    skil_8: '',
    message: ''
  });  

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    //Shows collected data
    console.log(fields);    

    setValidated(true);
    setSubmitted(true);
    setHideForm(true);
  };

  return (
    <Container>
      <div className="box-shadow">
        <Row className="justify-content-center no-gutters">
          <Col lg={4} className="d-none d-lg-block ">
            <img src={applyImg} alt="Join us!" className="img-fluid" />
          </Col>
          <Col lg={8}>
            {submitted && (<div className="p-5">              
                <h4>Thank You For Registration!</h4>
                <div className="mb-2 mt-3">Don't forget follow us in social network</div>
                <SocialNetworks />
              </div>)}
            <div className={`apply-form p-5 border-left ${hideForm && "d-none"}`}>
              <div className="mb-4">
                <h2 className="mb-2">Welcome</h2>
                <p>Ready become a part of this great event?</p>
              </div>
              
              <Form noValidate validated={validated}  onSubmit={handleSubmit}>
                <Form.Group>
                  <Row className="mb-4">
                    <Col>
                      <Form.Control required type="text" value={fields.firstName} placeholder="First name" onChange={handleFieldChange} id="firstName" />                      
                      <Form.Control.Feedback type="invalid">Enter correct first name</Form.Control.Feedback>
                    </Col>
                    <Col>
                      <Form.Control required type="text" value={fields.lastName} placeholder="Last name" onChange={handleFieldChange} id="lastName" />                      
                      <Form.Control.Feedback type="invalid">Enter correct last name</Form.Control.Feedback>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Control required type="email" value={fields.email} placeholder="E-mail" onChange={handleFieldChange} id="email" />                      
                      <Form.Control.Feedback type="invalid">Enter correct e-mail</Form.Control.Feedback>
                    </Col>
                    <Col>
                      <Form.Control required type="tel" value={fields.phone} placeholder="Phone" onChange={handleFieldChange} id="phone" />                      
                      <Form.Control.Feedback type="invalid">Enter correct phone number</Form.Control.Feedback>
                    </Col>
                  </Row>
                </Form.Group> 

                <Form.Group>     
                  <Form.Label>Genger</Form.Label><br />             
                    <Form.Check inline name="gender" type="radio" onChange={(e) => handleFieldChange(e, "M")} label="M" id="genderRadiobutton1" />
                    <Form.Check inline name="gender" type="radio" onChange={(e) => handleFieldChange(e, "F")} label="F" id="genderRadiobutton2" />
                </Form.Group>

                <Form.Group>                
                  <Form.Label>Skills</Form.Label>
                  <Row>
                    <Col>
                      <Form.Check type="checkbox" name="skil_1" label="Commitment" onChange={(e) => handleFieldChange(e, "Skill: Commitment")} id="skillCheckbox1" />
                      <Form.Check type="checkbox" name="skil_2" label="Timeliness" onChange={(e) => handleFieldChange(e, "Skill: Timeliness")} id="skillCheckbox2" />
                      <Form.Check type="checkbox" name="skil_3" label="Communication" onChange={(e) => handleFieldChange(e, "Skill: Communication")} id="skillCheckbox3" />
                      <Form.Check type="checkbox" name="skil_4" label="Time-Management" onChange={(e) => handleFieldChange(e, "Skill: Time-Management")} id="skillCheckbox4" />
                    </Col>
                    <Col>
                      <Form.Check type="checkbox" name="skil_5" label="Leadership" onChange={(e) => handleFieldChange(e, "Skill: Leadership")} id="skillCheckbox5" />
                      <Form.Check type="checkbox" name="skil_6" label="Teamwork" onChange={(e) => handleFieldChange(e, "Skill: Teamwork")} id="skillCheckbox6" />
                      <Form.Check type="checkbox" name="skil_7" label="Public relations" onChange={(e) => handleFieldChange(e, "Skill: Public relations")} id="skillCheckbox7" />
                      <Form.Check type="checkbox" name="skil_8" label="Problem-Solving" onChange={(e) => handleFieldChange(e, "Skill: Problem-Solving")} id="skillCheckbox8" />
                    </Col>
                  </Row>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Write something</Form.Label>
                    <Form.Control as="textarea" rows={3} onChange={(e) => handleFieldChange(e)} id="message" />                  
                </Form.Group>
                <Button type="submit" variant="hero" className="btn-rounded mt-4">Join Now!</Button>
              </Form>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default ApplyForm;