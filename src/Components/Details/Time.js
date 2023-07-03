import React from 'react'
import {useState} from 'react';
import Calendar from 'react-calendar';
import Modal from 'react-bootstrap/Modal';
import { Controller, useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TextField, Button, ButtonGroup } from "@mui/material";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MdDateRange } from 'react-icons/md';
import { MdOutlineAccessTimeFilled } from 'react-icons/md';
import { BsArrowLeft } from 'react-icons/bs';



const time = ['09:00','09:30','10:00','10:30','11:00','11:30','12:00','12:30','13:00','13:30','14:00','14:30',
'15:00','15:30','16:00','16:30']


function Times(props) {

 const [event, setEvent] = useState(null)
 const [info, setInfo] = useState(false)
 const [book, setBook] = useState(false)

 const [date, setDate] = useState(new Date());

 const [show, setShow] = useState(false);

 const handleClick = () => {
  props.ShowTime();
 }

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
  setShow(false);
  // const token = captchaRef.current.getValue();
  // captchaRef.current.reset();
  // swal("Form has been Submitted");
  toast.success("Success\n your form has been submitted", {
    position: toast.POSITION.TOP_CENTER
  });
 
};


 function displayInfo(e) {
   setInfo(true);
   
   setEvent(e.target.innerText);
}


const handleCloseModal = () => {
  setShow(false);
  reset();
};


return (
 
 <div className="times">
  <div className='date-div'>
    <button 
    className='backbtn' onClick={handleClick}><BsArrowLeft/>
    
    </button>
   
  {date.length > 0 ? (
    
              <p>
                <span>Start:</span>
                {date[0].toDateString()}
                &nbsp;
                &nbsp;
                <span>End:</span>{date[1].toDateString()}
              </p>
                      ) : (
              <p className='date-p'><MdDateRange/>&nbsp;
                  {date.toDateString()}
              </p> 
      
                      )
              } 
               {info ? <p className='set-p'><MdOutlineAccessTimeFilled/>&nbsp;Appointment is set to {event},&nbsp;
               {props.date.toDateString()}</p>: null}
      </div>

      <div className='timeslot-div'>
   {time.map(times => {
    return (
    <div className="space">
       <button onClick={(e)=> displayInfo(e)} className='time-btn'> {times} </button>
     
    </div>
    
        )
     })}

     </div>
    <div className='book-div'>
      <div className='bookbtn-div'>
      { info ? <Button onClick={() => setShow(true)} 
      className='bookbtn'>Book Appointment</Button> : null }
      </div>
     
    </div>
    
    { show ? (
      <Modal
      show={show}
      onHide={handleCloseModal}
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
                    // placeholder="Full Name"
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
                    // placeholder="Email"
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
                    // {...register("CompanyName", { required: "Required" })}
                    // error={!!errors?.CompanyName}
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
                    // {...register("message", { required: "Required" })}
                    // error={!!errors?.message}
                  />
                 {/* <Form.Group className="mb-3 mt-1">
                    <Form.Check
                      required
                      label="Agree to terms and conditions"
                      feedback="You must agree before submitting."
                      feedbackType="invalid"
                      className='agree-term'
                    />
                  </Form.Group> */}
                      
                     <div className="buttonsubmit">
                    <Button
                      className='submit-btn'
                    
                      // disabled={!myForm.isValid}
                      // onClick={myForm.submitForm}
                      type="submit"
                      variant="contained"
                     
                      
                      // onClick={handleCloseModal}
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
) : (
  <ToastContainer />
      
    
)}
   

    
 </div>
  )
}

export default Times;