import React from 'react';
import './Contractjob.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Textcoldescribe = () => {
    return(
        <>
        <Container>
            <Row className='textrow'>
                    <Col sm={12} className='textcol'>
                        <h4>Know your Needs</h4>
                        <p>Our team will evaluate your qualifications and work history to recommend the best path for your
                            professional development. With training from our experts, we are confident that we can guide
                            you to success in your desired field.</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
} 

export default Textcoldescribe