import React from 'react';
import './WorkWithUs.css';
import Container from 'react-bootstrap/Container';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { RiTeamFill } from 'react-icons/ri';
import { GiSatelliteCommunication } from 'react-icons/gi';
import { MdOutlineComputer } from 'react-icons/md';
import { MdGames } from 'react-icons/md';
import { BsBookmarkStarFill } from 'react-icons/bs';


export default function Workwithus() {
    return(
        <>
            <div className='workwithus-maindiv'>
                <h2>Why work with us?</h2>
                <Container className="work-with-us-container">
                    <Row className='box-row mt-3'>
                        <Col md={6} lg={4}className='box-col'>
                        <div className='parabox-text'>
                            <div className='icon1'><RiTeamFill/></div>
                            <h5 className='icon1-h5'>Benefits</h5>
                            <p className='box1-text'>We offer competitive compensation packages with benefits, bonuses, and incentives, as
                            well as paid vacation, sick leave, holidays, and remote work options.</p>
                        </div>
                           
                        </Col>

                        <Col md={6} lg={4} className='box-col'>
                        <div className='parabox-text'>
                            <div className='icon2'><GiSatelliteCommunication/></div>
                            <h5 className='icon2-h5'>Opportunities</h5>
                            <p className='box2-text'>We offer diverse opportunities for career advancement to our consultants and
                            employees through challenging projects and leadership roles.</p>
                        </div>
                        </Col>

                        <Col md={6} lg={4} className='box-col'>
                        <div className='parabox-text'>
                            <div className='icon3'><MdOutlineComputer/></div>
                            <h5 className='icon3-h5'>Training</h5>
                            <p className='box3-text'>Employees can take advantage of training and development opportunities to acquire
                            new skills and advance their careers.</p>
                        </div>
                        </Col>
                    {/* <Row className='box-row2'> */}
                        <Col md={6} lg={4}className='box-col2'>
                        <div className='parabox-text'>
                            <div className='icon4'><MdGames/></div>
                            <h5 className='icon4-h5'>Communication</h5>
                            <p className='box4-text'>We keep open and transparent communication with our employees and
                            consultants to ensure that they are aware of all the opportunities available, and that their needs are met.</p>
                        </div>
                        </Col>

                        <Col md={6} lg={4} className='box-col3'>
                        <div className='parabox-text'>
                            <div className='icon5'><BsBookmarkStarFill/></div>
                            <h5 className='icon5-h5'>Reputation</h5>
                            <p className='box5-text'>We are known for placing top consultants in various industries, maintaining long-
                            term client relationships, and providing a network of future job opportunities for our employees.</p>
                        </div>
                        </Col>
                        </Row>

                    {/* </Row> */}
                </Container>
            </div>
        </>
    )
}