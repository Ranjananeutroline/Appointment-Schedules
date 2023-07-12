import React, { useState } from 'react';
import './Timedetail.css';
import { GoClock } from 'react-icons/go';
import { BsArrowRight } from 'react-icons/bs';
import Data from "./Data";
import Modal from "react-bootstrap/Modal";
import Firstappointment from "./Firstappointment";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Timedetail() {

    const [state, setstate] = useState(false);
  const [nextstate, setNextstate] = useState();
 

  const callMe = (item) => {
    if (item.id == 1) {
      setstate(!state);
      setNextstate(<Firstappointment />);
    } else if (item.id == 2) {
      setstate(!state);
      setNextstate(<Firstappointment />);
    } else if(item.id==3) {
      setstate(!state);
      setNextstate(<Firstappointment />);
    }else if(item.id==4) {
        setstate(!state);
        setNextstate(<Firstappointment />);
    }else if(item.id==5) {
        setstate(!state);
        setNextstate(<Firstappointment />);
    }
    else {
      setstate(!state);
      setNextstate(<Firstappointment />);
    }
    
  };
  const closeButton = () => {
    setstate(false);
  };

    

    return(
    <>
      
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
      </Row>

      <Modal show={state} onHide={closeButton}>
        <Modal.Header closeButton  className="modalheader"> 
        </Modal.Header>
        <Modal.Body className="modalbody">{nextstate}</Modal.Body>
      </Modal>
    </>

    );
}
    
    
    
    export default Timedetail;
   