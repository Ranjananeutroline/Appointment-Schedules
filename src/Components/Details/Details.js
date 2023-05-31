import React, { useState } from 'react';
import './Details.css';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BsTelephoneFill } from 'react-icons/bs';
import Calendar from 'react-calendar';



function Details() {
    const [value, onChange] = useState(new Date());

  return (
    <>
    <div className='detail-main'>
        <Container>
            <Row>
            <Col className='detail-left'>
                <h3>Select Date and Time</h3>
                <div className='calendar-main'>
                    <Calendar onChange={onChange} value={value} />
                </div>
            </Col>

            <Col className='detail-right'>
                <div className='client-detail'>
                    <div className='heading'>
                        <p>Law Offices of Keshav Raj Seadie, PC</p>
                        <h4>Appointments - Current Clients Only</h4>
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