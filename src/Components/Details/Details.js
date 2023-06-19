import React, { useState, useMemo} from 'react';
import './Details.css';
import './Form.css';
import './calendarTimeslot.css';
import { Button, Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BsTelephoneFill } from 'react-icons/bs';
import DayTimePicker from '@mooncake-dev/react-day-time-picker';
import TimezoneSelect, { allTimezones } from 'react-timezone-select'
import spacetime from "spacetime";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import InputGroup from 'react-bootstrap/InputGroup';



 function Details() {
    // const [value, onChange] = useState(new Date());

    const [selectedTimezone, setSelectedTimezone] =useState(
        Intl.DateTimeFormat().resolvedOptions().timeZone
      )

        const [date, setDate] = useState(new Date());
        
        const handleScheduled = dateTime => {
        console.log('scheduled: ', dateTime);
            };

     
       
        
        const [show, setShow] = useState(false);
        
        const [value, setValue] = useState();
        
        const [validated, setValidated] = useState(false);

        const handleSubmit = (event) => {
          const form = event.currentTarget;
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
      
          setValidated(true);
        };

  return (
    <>
    <div className='detail-main'>
        <Container>
            <Row>
            <Col className='detail-left'>
                <h3>Select Date and Time</h3>
               
                    <div className="timezonediv">
                        <div className="timezone--wrapper">
                        <TimezoneSelect
                            value={selectedTimezone}
                            onChange={setSelectedTimezone}
                            labelStyle='altName'
                            timezones={{
                                ...allTimezones,
                                'America/Lima': 'Pittsburgh',
                                'Europe/Berlin': 'Frankfurt',
                            }}
                            />
                        </div>
                        
                    
                    </div>
                    {/* <TimezonePicker  
                     absolute      = {false}  
                      defaultValue  = "Europe/Moscow" 
                        placeholder   = "Select timezone..."   onChange      = {this.handleChange} /> */}


                 <div style={{paddingLeft:"0.6rem"}}>
                    <DayTimePicker
                    timeSlotSizeMinutes={30}
                    onConfirm={handleScheduled}
                    confirmText={"Book Appointment"} onConfirm={() => setShow(true)}
                   
                     />
                     
                     
                </div>  
                 
                <Modal
                    show={show}
                    onHide={() => setShow(false)}
                    dialogClassName="modal-90w"
                    aria-labelledby="example-custom-modal-styling-title"
                >
                    <Modal.Header closeButton className='header-form'>
                    <Modal.Title id="example-custom-modal-styling-title">
                        Enter Details
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='form-body'>
                    <div>
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Group  controlId="validationCustom01">
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Full Name"
                                    className="mb-3"
                                >
                                <Form.Control 
                                required
                                type="text"
                                 placeholder="Full Name"
                                
                                  />
                                  <Form.Control.Feedback type="invalid">
                                    Required.
                                    </Form.Control.Feedback>
                                </FloatingLabel>
                             </Form.Group>  

                             <Form.Group  controlId="validationCustomUsername">
                             <InputGroup hasValidation>
                            
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Email"
                                    className="mb-3"
                                >
                                    <Form.Control 
                                    type="text"
                                    placeholder="name@example.com"
                                    aria-describedby="inputGroupPrepend"
                                    required
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Required.
                                        </Form.Control.Feedback>
                                </FloatingLabel>
                            </InputGroup>
                            </Form.Group>

                            <Form.Group  controlId="validationCustom03">
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Phone"
                                    className="mb-3"
                                >
                                    <Form.Control 
                                    required
                                    type="number"
                                    placeholder="Phone"
                                    />
                                     <Form.Control.Feedback type="invalid">
                                     Required.
                                    </Form.Control.Feedback>
                                </FloatingLabel>
                                </Form.Group>

                                <Form.Group controlId="validationCustom04">
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Company name (Optional)"
                                        className="mb-3"
                                    >
                                        <Form.Control 
                                        required
                                        type="text" 
                                        placeholder="Company name"
                                        />
                                         <Form.Control.Feedback type="invalid">
                                         Required.
                                        </Form.Control.Feedback>
                                    </FloatingLabel>
                                    </Form.Group>

                                    <Form.Group controlId="validationCustom05">
                                    <FloatingLabel 
                                        controlId="floatingTextarea2"
                                        label="Message">
                                        <Form.Control
                                        required
                                        as="textarea"
                                        placeholder="Leave a comment here"
                                        className='message-box'
                                        />
                                        <Form.Control.Feedback type="invalid">
                                        Required.
                                        </Form.Control.Feedback>
                                    </FloatingLabel>
                                    </Form.Group>

                                    <Form.Group className='terms-check'>
                                        <Form.Check
                                        required
                                        label="Agree to terms and conditions" style={{fontWeight:"100"}}
                                        feedback="You must agree before submitting."
                                        feedbackType="invalid"
                                        className='form-label' 
                                        />
                                    </Form.Group>

                                    <div style={{textAlign:"center", marginTop:"1rem"}}>
                                        <button className='submit-btn'>Submit</button>
                                    </div>
                        
                  
                    </Form>
                    </div>
                    </Modal.Body>
                </Modal>
                            
                
                   
                    
             
            

                   
           
               
            </Col>

            <Col className='detail-right'>
                <div className='client-detail'>
                    <div className='heading'>
                        <h4>Appointments - Current Clients Only</h4>
                        <p>Law Offices of Keshav Raj Seadie, PC</p>
                        
                    </div>
                    <div className='detail-body'>
                        <div className='phone'>
                            <p><span className='phn-icon'><BsTelephoneFill/>&nbsp;&nbsp;&nbsp;&nbsp;
                            </span>
                            Phone call</p>
                        </div>
                        <p className='firstp'>
                        Please select an available time slot and complete the appointment form. 
                        We will contact you at the time that you have selected.
                        </p>
                        <p className='secondp'>
                        Note: Up to 15 mins to discuss any aspects of your case.
                        This meeting is set for 15 mins but you will be charged for the time spent on the case 
                        </p>
                    </div>
                </div>
            </Col>
            </Row>
            
           

        </Container>
        
    </div> 
    
    </>
  );
}

export default Details;