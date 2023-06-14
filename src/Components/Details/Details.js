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
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';


 function Details() {
    // const [value, onChange] = useState(new Date());

    const [tz, setTz] = useState(
        Intl.DateTimeFormat().resolvedOptions().timeZone
      );
      const [datetime, setDatetime] = useState(spacetime.now());
      
      useMemo(() => {
        const tzValue = tz.value ?? tz;
        setDatetime(datetime.goto(tzValue));
      }, [tz]);

        const [date, setDate] = useState(new Date());
        
        const handleScheduled = dateTime => {
        console.log('scheduled: ', dateTime);
            };

     
        const [isScheduling, setIsScheduling] = useState(false);
        const [isScheduled, setIsScheduled] = useState(false);
        const [scheduleErr, setScheduleErr] = useState('');
        
        const [show, setShow] = useState(false);
        
       

  return (
    <>
    <div className='detail-main'>
        <Container>
            <Row>
            <Col className='detail-left'>
                <h3>Select Date and Time</h3>
                <div className="timezone--wrapper">
                        <TimezoneSelect
                        value={tz}
                        onChange={setTz}
                        labelStyle="altName"
                        timezones={{
                            ...allTimezones,
                            "America/Lima": "Pittsburgh",
                            "Europe/Berlin": "Frankfurt"
                        }}
                        />
                    </div>
                 <div>
                    
                   
                <DayTimePicker
                    timeSlotSizeMinutes={30}
                    isLoading={isScheduling}
                    isDone={isScheduled}
                    err={scheduleErr}
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
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Name"
                        className="mb-3"
                    >
                        <Form.Control type="name" placeholder="name@example.com" />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Email"
                        className="mb-3"
                    >
                        <Form.Control type="email" placeholder="name@example.com" />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Phone"
                        className="mb-3"
                    >
                        <Form.Control type="phone" placeholder="name@example.com" />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Company name (Optional)"
                        className="mb-3"
                    >
                        <Form.Control type="name" placeholder="name@example.com" />
                    </FloatingLabel>
                    <FloatingLabel 
                    controlId="floatingTextarea2"
                     label="Message">
                        <Form.Control
                        as="textarea"
                        placeholder="Leave a comment here"
                        style={{ height: '100px' }}
                        />
                </FloatingLabel>
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