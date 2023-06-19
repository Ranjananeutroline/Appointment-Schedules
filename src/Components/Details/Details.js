import React, { useState, useMemo} from 'react';
import './Details.css';
import './Form.css';
import './calendarTimeslot.css';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BsTelephoneFill } from 'react-icons/bs';
import DayTimePicker from '@mooncake-dev/react-day-time-picker';
import TimezoneSelect, { allTimezones } from 'react-timezone-select'
import spacetime from "spacetime";
import Modal from 'react-bootstrap/Modal';
import { Controller, useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Select from "react-select";
import { TextField, Button, ButtonGroup } from "@mui/material";
import Submission from "./Submission";


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
        
       
        
        const {
            register,
            handleSubmit,
            reset,
            resetField,
            control,
        
            formState: { errors },
          } = useForm();
          const onSubmit = (data, e) => {
            console.log(data);
            reset();
            resetField();
            // const token = captchaRef.current.getValue();
            // captchaRef.current.reset();
            // swal("Form has been Submitted");
            toast.success("Success\n your form has been submitted");
          };
          const onCaptchaComplete = (response) => {
            console.log(response);
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
                    <div className="services-form-container">
      {" "}
      <div className="mainForm">
        <ToastContainer position="top-center" />
        <form className="form_container" onSubmit={handleSubmit(onSubmit)}>
          <Row
            className="form-row m-0"
            style={{ height: "auto", width: "auto" }}
          >
            <Col sm={12} lg={12} md={12} className="form-col ">

                <TextField
                  // required

                  fullWidth
                  label="Full Name"
                  margin="dense"
                  name="name"
                  variant="filled"
                  placeholder="Full Name"
                  // value={myForm.values.name}
                  // onChange={myForm.handleChange}
                  // error={!!myForm.errors.companyName}
                  // helperText={myForm.errors.name}
                  autoComplete="off"
                  sx={{
                    "& .MuiFilledInput-underline:before": {
                      borderBottom: "none",
                    },
                    "& .MuiFilledInput-underline:after": {
                      borderBottom: "none",
                    },
                    "& .MuiFilledInput-underline:hover:not(.Mui-disabled):before":
                      {
                        borderBottom: "none",
                      },
                  }}
                  {...register("name", { required: "Required", minLength: 3 })}
                  error={!!errors?.name}
                  // helperText={errors?.name ? errors.name.message : null}
                />

                <TextField
                  // required
                  fullWidth
                  label="Email"
                  margin="dense"
                  name="email"
                  variant="filled"
                  placeholder="Email"
                  autoComplete="off"
                  sx={{
                    "& .MuiFilledInput-underline:before": {
                      borderBottom: "none",
                    },
                    "& .MuiFilledInput-underline:after": {
                      borderBottom: "none",
                    },
                    "& .MuiFilledInput-underline:hover:not(.Mui-disabled):before":
                      {
                        borderBottom: "none",
                      },
                  }}
                  {...register("email", {
                    required: "Required field",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  error={!!errors?.email}
                />
               
                  
                  <TextField
                    // inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}

                    fullWidth
                    label="Phone"
                    margin="dense"
                    name="phone"
                    autoComplete="off"
                    variant="filled"
                    placeholder=" Landline/Mobile Number"
                    type="number"
                    className="txtfield_phone "
                    sx={{
                      "& .MuiFilledInput-underline:before": {
                        borderBottom: "none",
                      },
                      "& .MuiFilledInput-underline:after": {
                        borderBottom: "none",
                      },
                      "& .MuiFilledInput-underline:hover:not(.Mui-disabled):before":
                        {
                          borderBottom: "none",
                        },
                    }}
                    {...register("phone", { required: "Required" })}
                    error={!!errors?.phone}
                  />
                
                <TextField
                fullWidth
                  id="outlined-basic"
                  label="Company name (Optional)"
                  variant="filled"
                  size="small"
                  margin="dense"
                  name="CompanyName"
                  placeholder="Company name"
                  autoComplete="off"
                  sx={{
                    "& .MuiFilledInput-underline:before": {
                      borderBottom: "none",
                    },
                    "& .MuiFilledInput-underline:after": {
                      borderBottom: "none",
                    },
                    "& .MuiFilledInput-underline:hover:not(.Mui-disabled):before":
                      {
                        borderBottom: "none",
                      },
                  }}
                  {...register("CompanyName", { required: "Required" })}
                  error={!!errors?.CompanyName}
                />
               
                
                <TextField
                  fullWidth
                  multiline
                  rows={3}
                  label="Message"
                  margin="dense"
                  name="message"
                  variant="filled"
                  placeholder="Your Message"
                  // value={myForm.values.message}
                  // onChange={myForm.handleChange}
                  // error={!!myForm.errors.companyName}
                  // helperText={myForm.errors.message}
                  autoComplete="off"
                  sx={{
                    "& .MuiFilledInput-underline:before": {
                      borderBottom: "none",
                    },
                    "& .MuiFilledInput-underline:after": {
                      borderBottom: "none",
                    },
                    "& .MuiFilledInput-underline:hover:not(.Mui-disabled):before":
                      {
                        borderBottom: "none",
                      },
                  }}
                  {...register("message", { required: "Required" })}
                  error={!!errors?.message}
                />
              
                    
                   
               
                <div className="buttonsubmit">
                  <Button
                    className='submit-btn'
                   
                    // disabled={!myForm.isValid}
                    // onClick={myForm.submitForm}
                    type="submit"
                    variant="contained"
                  >
                    Submit
                  </Button>
                </div>
              
            </Col>
          </Row>
        </form>
      </div>
    </div>
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