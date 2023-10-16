import React from 'react';
import '../contactUs.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function Header() {
    return(
        <>

            {/* <Row className='header-row '>
                <Col className="col-p">
                    <h2 className='heading-h'>Contact Us</h2>
                    <p className='para-p'>Neutrosys is an IT staffing and software development company.<br></br>
                    We are currently providing IT services mainly in the US and <br></br>Nepal. We provide 
                    services from USA, Nepal, India and Finland.</p>
                </Col>

                <Col sm={12} className="col-image">
                    <img src='./images/contact-us/headerimg1.jpg' alt="icons"></img>
                </Col>
            </Row> */}

<div className='header-container'>
        <div className="header-photo">
          <img 
          className='header-photo'
          src="./images/contact-us/headerimg1.jpg" alt=""
          />

        <div className="about-text ">  
            <h2>Contact Us</h2>
            <p>
            We would love to hear from you! Please don't hesitate to reach out if you have any
            questions or concerns.
            </p>
           
        </div>
        </div>
    </div>
        </>
    
        )
    }
