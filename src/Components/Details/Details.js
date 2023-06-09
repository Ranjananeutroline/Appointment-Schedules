import React, { useState, useMemo} from 'react';
import './Details.css';
import './Form.css';
import './calendarTimeslot.css';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BsTelephoneFill } from 'react-icons/bs';
import Modal from 'react-bootstrap/Modal';
import { Controller, useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TextField, Button, ButtonGroup } from "@mui/material";
import Submission from "./Submission";
import TimezoneSelect, { allTimezones } from "react-timezone-select"
import Calendar from 'react-calendar';
import Time from './Time.js'




 function Details() {
    // const [value, onChange] = useState(new Date());

    // const [selectedTimezone, setSelectedTimezone] =useState(
    //     Intl.DateTimeFormat().resolvedOptions().timeZone
    //   )

     const [selectedTimezone, setSelectedTimezone] = useState( Intl.DateTimeFormat().resolvedOptions().timeZone)

        // const [date, setDate] = useState(new Date());
        
        const handleScheduled = dateTime => {
        console.log('scheduled: ', dateTime);
            };

            
       
        
        const [show, setShow] = useState(false);
        
        const [value, setValue] = useState();
        
       
        
        

          
          const [date, setDate] = useState(new Date());
          const [showTime, setShowTime] = useState(false)

         

  return (
    <>
    <div className='detail-main'>
        <Container>
            <Row>
            <Col className='detail-left'>
                <h3>Select Date and Time</h3>
               
                    <div className="timezonediv">
                        <div className="timezone--wrapper">
                            <div className="select-wrapper" >
                              <TimezoneSelect
                                sx={{height: "5px"}}
                                value={selectedTimezone}
                                onChange={setSelectedTimezone}
                                // placeholder= {"Select Time zone"}
                                
                              />
                          
                            </div> 
                         
                        </div>
                      </div>
                  
                     
                <div style={{paddingLeft:"0.6rem"}}>
               
                  <div className="calendar-container">
                    <Calendar onChange={setDate}
                     value={date}
                      onClickDay={() => setShowTime(true)}
                      minDate={new Date()}
                      />
                    { showTime ? <Time showTime={showTime} date={date} value={date}/> : null }
                    
                  </div>
                
                    {/* <DayTimePicker 
                    timeSlotSizeMinutes={30}
                    confirmText={"Book Appointment"} onConfirm={() => setShow(true)}
                   
                     /> */}
                
                
                 
                 
                   
                </div>  
                
                
                            
                
                   
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
