import React, { useState } from 'react';
import './Details.css';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BsTelephoneFill } from 'react-icons/bs';
import Calendar from 'react-calendar';
import TimezoneSelect from 'react-timezone-select'
// import TimezonePicker from 'react-timezone';


function Details() {
    // const [value, onChange] = useState(new Date());

    const [selectedTimezone, setSelectedTimezone] =useState(
        Intl.DateTimeFormat().resolvedOptions().timeZone
      )

      const [date, setDate] = useState(new Date());

  return (
    <>
    <div className='detail-main'>
        <Container>
            <Row>
            <Col className='detail-left'>
                <h3>Select Date and Time</h3>
            <div>
                {/* <TimezonePicker
                    value="Asia/Yerevan"
                    onChange={timezone => console.log('New Timezone Selected:', timezone)}
                    inputProps={{
                    placeholder: 'Select Timezone...',
                    name: 'timezone',
                    }}
                /> */}

                    <div className="select-wrapper">
                        <TimezoneSelect
                        value={selectedTimezone}
                        onChange={setSelectedTimezone}
                        />
                    </div> 
                    <div className='calendar-container'>
                        <Calendar
                        onChange={setDate}
                        value={date}
                        selectRange={true}
                        />
                    </div>
                    {date.length > 0 ? (
                        <p className='text-center'>
                        <span className='bold'>Start:&nbsp;</span>{' '}
                        {date[0].toDateString()}
                        &nbsp;&nbsp;|&nbsp;&nbsp;
                        <span className='bold'>End:&nbsp;</span> {date[1].toDateString()}
                        </p>
                    ) : (
                        <p className='text-center'>
                        <span className='bold'>Selected date:&nbsp;&nbsp;</span>{' '}
                        {date.toDateString()}
                        </p>
                    )}
                                    
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