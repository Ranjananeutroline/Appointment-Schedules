import React, { useState } from 'react';
import './Timedetail.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { GoClock } from 'react-icons/go';
import { BsArrowRight } from 'react-icons/bs';
import { ImArrowRight } from 'react-icons/im';
import Data from "./Data";
import Modal from "react-bootstrap/Modal";
import Firstappointment from "./Firstappointment";
import Secondappointment from "./Secondappointment";
import Thirdappointment from "./Thirdappointment";
import Fourthappointment from "./Fourthappointment";
import Fifthappointment from "./Fifthappointment";
import Sixthappointment from "./Sixthappointment";
import { Routes, Route, Link, Outlet } from "react-router-dom";


function Timedetail() {

    const [state, setstate] = useState(false);
  const [nextstate, setNextstate] = useState();

  const [show, setShow] = useState(false);
 

  const callMe = (item) => {
    if (item.id == 1) {
      setstate(!state);
      setNextstate(<Firstappointment />);
    } else if (item.id == 2) {
      setstate(!state);
      setNextstate(<Secondappointment />);
    } else if(item.id==3) {
      setstate(!state);
      setNextstate(<Thirdappointment />);
    }else if(item.id==4) {
        setstate(!state);
        setNextstate(<Fourthappointment />);
    }else if(item.id==5) {
        setstate(!state);
        setNextstate(<Fifthappointment />);
    }
    else {
      setstate(!state);
      setNextstate(<Sixthappointment />);
    }
    
  };
  const closeButton = () => {
    setstate(false);
  };

    

    return(
    <>
      <div className='body-div'>
        <div className='time-title'>
            <h5>Choose Time Duration</h5>
        </div>
        
        <Row className='time-box'>
        {Data.map((item) => {
          return (
            <Col className='time-col'> 
                <div className='inner-time'>
                    <p className='time-icon'><GoClock /></p> 
                    <div style={{padding:"0.7rem 0 0 1.5rem"}}>
                        <h6>{item.heading}
                            <p className='time-p'>{item.desc}</p>
                        </h6>
                    </div>
                </div>
                    <button className='more-btn'
                     key={item.id}
                     onClick={() => callMe(item)}>
                        Details&nbsp;<BsArrowRight/>
                    </button>
                </Col>
            
          );
        })}

        <div className='next-div'>
          <button className='nxt-btn'>
            <Link to="Appointment">
            <ImArrowRight />
            </Link>
              <Outlet />
          </button>
            
        </div>
      </Row>

      <Modal 
      show={state} 
      onHide={closeButton}
      className='modal-box'
      dialogClassName="modal-width"
      >
        <Modal.Header closeButton className="modalheader"> 
        </Modal.Header>
        <Modal.Body className="body-modal">{nextstate}</Modal.Body>
      </Modal> 


     </div> 
    </>

    );
}
    
    
    
    export default Timedetail;
   