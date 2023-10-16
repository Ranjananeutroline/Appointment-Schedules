import React, { useState } from "react";
import { Accordion } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Offer.css";

const Offer = () => {
 
  return (
    <div className="offer">
      <div className="left">
        <div className="title">What we offer?</div>
        <div className="title-info">
        Partner with us and let us help you build your team.
        </div>
        <p className="offer-content">
        With our IT staffing services, you'll have access to a pool of highly skilled professionals for both
        long-term and short-term engagements. This allows you to bring on the talent quickly and cost-
        effectively you need to complete projects and drive your business forward. We offer a wide range
        of IT staffing services to meet the unique needs of each client. Our services include:
        </p>
        
<Accordion  style={{width:"100%", marginTop:"1rem"}} flush={true}>
{/* defaultActiveKey="0" */}
<Accordion.Item eventKey="0" className="parent bg-color-contract">
        <Accordion.Header className="offer-btn">Contract Staffing</Accordion.Header>
        <Accordion.Body className="details">
        We offer contract staffing services for long-term and short-term projects, providing clients with
        the flexibility to scale their workforce as needed. Our contract staff are fully vetted and qualified
        professionals that can hit the ground running and provide immediate value to your team.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" className="parent bg-color-hire">
        <Accordion.Header className="offer-btn" >Contract to Hire</Accordion.Header>
        <Accordion.Body className="details">
        We provide contract-to-hire services, which allows the client to evaluate a candidate's skills,
        performance, and compatibility before committing to a full-time hire. This is a great option for
        clients who are unsure about the long-term needs of a particular role or who want to test the
        waters with a new hire.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2" className="parent bg-color-cont2hire">
        <Accordion.Header className="offer-btn">Direct Hire</Accordion.Header>
        <Accordion.Body className="details">
        We provide direct hire services to help clients fill full-time positions, providing them with the
        talent they need to grow their business. Our direct hire services are designed to find the best-
        suited candidates for specific roles, ensuring a smooth and efficient hiring process.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        {/* </div> */}
      </div>
      <div className="right">
        <div className="right-title">How It Works?</div>
        <div className="subtitle">Our Process</div>
        <p className="subtitle-content">At Neutrosys, we follow a structured process to ensure that we provide the best IT staffing
          services to our clients. The process we follow includes the following steps:</p>
        <div className="processes">
          <div className="process">
            <div className="process-title">
              <div className="circle">01</div>
              <div className="process-text">Initial Consultation</div>
            </div>
            <div className="process-content">
            We work closely with the client to understand their specific IT staffing needs, goals, and any
            constraints that might be present.
            </div>
          </div>

          <div className="process">
            <div className="process-title">
              <div className="circle">02</div>
              <div className="process-text">Talent Sourcing</div>
            </div>
            <div className="process-content">
            We have a wide network of IT professionals, and we use a variety of recruiting methods to
            find the best candidates for the client's needs.
            </div>
          </div>

          <div className="process">
            <div className="process-title">
              <div className="circle">03</div>
              <div className="process-text">Screening and Interviewing</div>
            </div>
            <div className="process-content">
            We screen and interview the candidates to ensure that they have the required skills,
            experience, and qualifications to meet the client's needs.
            </div>
          </div>

          <div className="process">
            <div className="process-title">
              <div className="circle">04</div>
              <div className="process-text">Presentation and Placement</div>
            </div>
            <div className="process-content">
            We present the client with a selection of the best-suited candidates and assist the client in
            the placement process, making sure that all necessary paperwork is completed.
            </div>
          </div>

          <div className="process">
            <div className="process-title">
              <div className="circle">05</div>
              <div className="process-text">Onboarding and Support</div>
            </div>
            <div className="process-content">
            We assist with the onboarding process and provide ongoing support to both the client and
            the placed candidate to ensure a smooth transition and successful placement.
            </div>
          </div>

          <div className="process">
            <div className="process-title">
              <div className="circle">06</div>
              <div className="process-text">Communication</div>
            </div>
            <div className="process-content">
            We believe that open communication is key to a successful placement, and we make sure
            that both the client and the placed candidate are kept informed throughout the process.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
