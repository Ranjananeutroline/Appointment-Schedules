import React, { useState, useRef, Component } from 'react';
import '../contactUs.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import { BsPrinterFill } from 'react-icons/bs';
import { Button } from 'react-bootstrap';
import ReactToPrint from "react-to-print";
import GoogleMapReact from 'google-map-react';
import { Marker } from "google-maps-react"


const AnyReactComponent = ({ text }) => <div style={{color:"red", fontSize:"15px"}}>
    {text}
    </div>;

export default function LocationDetail() {
    const renderMarkers = (map, maps) => {
        let marker = new maps.Marker({
        position: { lat: 32.890030, lng: -96.976220 },
        map,
        title: 'Neutrosys Inc.'
        });
        return marker;
       };

    const [show, setShow] = useState(false);
    const Componentref = useRef();

    // const defaultProps = {
    //     center: {
    //         lat: 32.890030,
    //         lng: -96.976220
    //     },
    //     zoom: 10
    //   };
      

    return(
        <>
            <Row className='location-row'>
                <h2 className='detail-heading'>Connect With Us</h2>
                    <Col sm={3} className='location-col mb-5'>
                    <div className='timeicon-div'>
                        <img src='./images/contact-us/timer.png' height={33} width={33} alt="icons"></img>
                    </div>
                        <h6>Working Hours</h6>
                        <p>Monday - Friday<br></br>
                        8:30 AM - 5:00 PM</p>
                            
                    </Col>
                    <Col sm={3} className='location-col mb-5'>
                    <div className='locationicon-div'>
                        <img src='./images/contact-us/iconlocation.png' height={35} width={35} alt="icons"></img>
                    </div>
                      <h6>Headquarters</h6>
                        <p>1431 Greenway Drive, 8th Floor
                        Irving, TX 75038, United States</p>
                    <div className='viewlocation-div'>
                        <div style={{cursor:"pointer",color:"blue"}}onClick={() => setShow(true)}>View Location</div>
                    </div>
                    <Modal
                        
                        size="lg"
                        show={show}
                        onHide={() => setShow(false)}
                        dialogClassName="my-modal"
                        aria-labelledby="example-custom-modal-styling-title">
                        <Modal.Header closeButton className='close-btn'>
                        <Modal.Title id="example-custom-modal-styling-title">
                            Our Location 
                        </Modal.Title>
                        <Button className='map-btn' style={{background:"none", border:"none", paddingTop:"6px"}}
                         onClick={() => window.print()}>
                       
                            <p style={{color:"#00bbf9", marginLeft:"0.5rem"}}><BsPrinterFill/></p>
                            
                            
                            <span className='tooltiptext'>
                              <span style={{ marginLeft: ".7rem" }}>
                                Print 
                              </span>
                           </span>
                        </Button>
                        </Modal.Header>
                        <Modal.Body>
                            <div style={{ height: '60vh', width: '100%' }} className='printme'> 
                             <iframe  title="map" style={{height:'60vh',width:'100%'}} id="gmap_canvas"
                        src="https://maps.google.com/maps?q=neutrosys.Inc&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                                {/* <GoogleMapReact
                                    bootstrapURLKeys={{ key: "AIzaSyDSbBgzgcR7cAerh02MJVWl9exdM7F9EsU" }}
                                    defaultCenter={{ lat: 32.890030, lng: -96.976220 }}
                                    defaultZoom={10}
                                    yesIWantToUseGoogleMapApiInternals
                                    onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
                                >
                                    
                            
                                     <AnyReactComponent
                                    lat={32.890030}
                                    lng={-96.976220}
                                    text={"Neutrosys Inc."}
                                    /> 
                                    
                                </GoogleMapReact>  */}
                                
                            </div> 

                        
                        
                        
                        </Modal.Body>
                    </Modal>
                                    
                    </Col>
                    <Col sm={3} className='location-col mb-5'>
                    <div className='socialicon-div'>
                        <img src='./images/contact-us/social.png' height={35} width={35} alt="icons"></img>
                    </div>
                        <h6>Socials</h6>
                        <p className='follow-para'>Follow us!</p>
                        <div className='socialsicon-div'>
                            <a href="https://www.linkedin.com/company/neutrosys/" target="_blank" rel="noopener noreferrer"><img src='./images/contact-us/linkedinicon.png' height={41} width={41} alt="icons"></img></a>
                            <a href="https://www.facebook.com/Neutrosys" target="_blank" rel="noopener noreferrer"><img src='./images/contact-us/fbicon.png' className='image-class' height={40} width={40} alt="icons"></img></a>

                        </div>
                    </Col>
            </Row>
               
               
            
           
        </>
    )
}