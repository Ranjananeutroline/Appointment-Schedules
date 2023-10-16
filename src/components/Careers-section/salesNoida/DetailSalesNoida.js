import React, { useMemo, useRef, useState } from "react";
import "./DetailSalesNoida.css";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { MdEmail } from "react-icons/md";
import { HiPrinter } from "react-icons/hi";
import { MdFileCopy } from "react-icons/md";

import Button from "react-bootstrap/Button";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Modal } from "react-bootstrap";
import { ImLocation } from "react-icons/im";
import { FaSuitcase } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";
import { ImLinkedin } from "react-icons/im";
import { FaTwitterSquare } from "react-icons/fa";
import ReactToPrint from "react-to-print";
import { CopyToClipboard } from "react-copy-to-clipboard";
import swal from "sweetalert";


const Detail = (props) => {
  const [mobile, setMobile] = useState("+977");

  const [state, setState] = useState(false);
  
  const [show, setShow] = useState(false);

  

  
  const Componentref = useRef();
  

  
  
  const navigate = useNavigate();
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 

  
 

  return (
    <div className="main-divbg">
      <Container className="details-container">
        <Row className="back-row">
          <Col className="back-col">
            <button className="back-btn-internaljob" onClick={() => navigate(-1)}>
              Back
            </button>
          </Col>
        </Row>

        <Row className="top-row">
          <Col sm={9} className="jobs-top-col">
            <h2>Sales/Marketing</h2>
          </Col>

          <Col sm={3} className="jobs-top-col2">
            <button
             
              onClick={handleShow}
              className="jobs-top-btn"
            >
              Apply Now
            </button>
          </Col>
        </Row>

        <Modal show={show} onHide={handleClose} size="md">
          <Modal.Header closeButton className="closing-header">

          </Modal.Header>
          <Modal.Body className="closing-body">
           <p>OOPS! The position you are applying is closed!!</p>
            
          </Modal.Body>
        </Modal>

        <Row className="jobs-outer-row">
          <Col sm={4} className="outer-col">
            <Row className="second-row">
              <Col sm={12} className="left-col">
                <h3>Job Overview</h3>
                <p>
                  Req #:<span> 1017</span>
                </p>

                <div className="section section-first">
                  <i className="fa-solid">
                    <ImLocation />
                  </i>
                  <div className="inner-section inner-loc">
                    <h1>Location:</h1>
                    <span>Irving, Texas, United States</span>
                  </div>
                </div>

                <div className="section">
                  <i className="fa-solid">
                    <FaSuitcase />
                  </i>
                  <div className="inner-section">
                    <h1>Job Category:</h1>
                    <span>Technology</span>
                  </div>
                </div>

                <div className="section">
                  <i className="fa-solid">
                    <FaRegClock />
                  </i>
                  <div className="inner-section">
                    <h1>Date Posted:</h1>
                    <span>2021-11-09 16:30:20</span>
                  </div>
                </div>
              </Col>
            </Row>

            <Row className="leftbottom-row">
              <Col sm={12} className="leftbottom-col">
                <h4>Share this job</h4>
                <Row className="share-row">
                  <Col sm={6} className="share-col ">
                    <div className="socials">
                      <a href="https://www.facebook.com/Neutrosys" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands">
                          <ImFacebook2 />
                        </i>
                      </a>

                      <a href="https://www.linkedin.com/company/neutrosys/" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands">
                          <ImLinkedin />
                        </i>
                      </a>

                      <a href="/#">
                        <i className="fa-brands twitticon">
                          <FaTwitterSquare />
                        </i>
                      </a>
                    </div>
                  </Col>
                  <Col sm={6} className="share-col2">
                    <div className="vertical-div">
                      <p>
                        <MdEmail />
                        &nbsp;&nbsp;
                        <span
                          onClick={(e) => {
                            window.location.href =
                              "mailto:neutroline@gmail.com";
                          }}
                        >
                          Email this job
                        </span>
                      </p>
                      <p>
                        <HiPrinter />

                        <ReactToPrint
                          trigger={() => (
                            <span style={{ marginLeft: ".7rem" }}>
                              Print 
                            </span>
                          )}
                          content={() => Componentref.current}
                        />
                      </p>
                      <p>
                        <MdFileCopy />
                        &nbsp;&nbsp;
                        <span>
                          <CopyToClipboard
                            text="http://localhost:3000/Details/sales#"
                            onCopy={() =>
                              swal({
                                title: "Good job!",
                                text: "Job link has been copied!",
                                icon: "success",
                                button: "ok",
                              })
                            }
                          >
                            <span>Copy</span>
                          </CopyToClipboard>
                        </span>
                      </p>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>

          <Col sm={8} className="right-col" ref={Componentref}>
            <h3>Job Description</h3>
            <p>
              Neutrosys Inc is looking for a few recent graduate individuals to
              join a growing office in the staffing business. This is a great
              opportunity to get your foot into the door with a staffing firm to
              start a career in either recruitment or sales. The ideal candidate
              would be a self-starter, self-motivated, persuasive, and
              enthusiastic, and enjoy working in a group or individual.
            </p>

            <h6>Responsibilities</h6>
            <ul>
              <li>Involve in new business development</li>
              <li>
                Update and manage all sales activities, opportunities, and
                account information
              </li>
              <li>Emailing/cold calling new accounts</li>
              <li>Information gathering and sorting</li>
              <li>Work closely with Recruitment and Operations teams</li>
            </ul>

            <h6> Qualifications:</h6>
            <ul>
              <li>1 year of relevant work experience is preferred</li>
              <li>Excellent communication skills (Written & Verbal)</li>
              <li>Ability to multitask, organize, and prioritize work</li>
              <li>
                Self-directed, can-do attitude and sense of humor appreciated
              </li>
              <li>Authorized to work in the United States</li>
            </ul>

            <h6>Why join us?</h6>
            <p>
              We are committed to a diversified and happy employee working
              culture with the opportunity to grow. We are a company that
              rewards employees for their performance and dedication. We believe
              that employees’ happiness is the key to level-up the company. We
              are committed to the enjoyable and flexible working environment.
            </p>

            <p className="benefits">Some of our benefits include:</p>
            <ul>
              <li>Competitive Base Salary</li>
              <li>Competitive Commission Structure</li>
              <li>Bonus</li>
              <li>PTO</li>
              <li>Flexible Working Hours</li>
            </ul>

            <p className="italic">
              Neutrosys Inc is an EEO Employer providing IT solutions in United
              States, Asia, and Europe.
            </p>
            <button
              className="apply-btn"
              
              // type="submit"
              onClick={handleShow}
            >
              <a href="/#">Apply Now</a>
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Detail;
