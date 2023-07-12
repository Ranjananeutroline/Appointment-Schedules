import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Header.css'

function Header() {
    return(
    <>
        
            <Row className='header-row'>
                <Col  className='header-col'>
                    <h3>Neutroline Pvt. Ltd.</h3>
                    <p>Dallas, Texas, USA</p>
                </Col>
            </Row>
       
    </>

    );
}
    
    
    
    export default Header;
   