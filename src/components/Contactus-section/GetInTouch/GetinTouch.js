import React from 'react';
import '../contactUs.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormWithMui from '../Form/FormWithMui';
// import FormWithMui from './FormWithMui';



export default function LocationDetail() {
    return(
        <>
            <div className='Maingetintouch-div'>
            <Container>
                <h2 className='getintouch'>Get in Touch!</h2>
                <p className='helpquote-p'>Let’s connect and talk to find out how our company can benefit you from our services.</p>
                    <Row className='getintouch-row'>
                        <Col sm={3} className='getintouch-col'>
                            <div className='locationicon'>
                                <img src='./images/contact-us/locationicon.png' alt="icons"></img>
                            </div>
                            <p className='icon-para'>Irving, Texas, USA</p>
                        </Col>

                        <Col sm={3} className='getintouch-col'>
                        <div className='phoneicon'>
                                <img src='./images/contact-us/phoneicon.png' alt="icons"></img>
                            </div>
                            <p className='icon-para'>+1 (214) 382-6161</p>
                        </Col>

                        <Col sm={3} className='getintouch-col'>
                        <div className='emailicon'>
                                <img src='./images/contact-us/emailicon.png' alt="icons"></img>
                            </div>
                            <p className='icon-para'>Info@neutrosys.com</p>
                        </Col>
                    </Row>
                <FormWithMui />
            </Container>
            </div>
            
        </>
    )
}