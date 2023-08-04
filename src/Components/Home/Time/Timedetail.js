import React, { Component, useEffect, useState } from "react";
import "./Timedetail.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { LuClock6 } from "react-icons/lu";
import { BiSolidDownArrow } from 'react-icons/bi';
import { BsArrowRight } from "react-icons/bs";
import Data from "./Data";
import Modal from "react-bootstrap/Modal";
import Firstappointment from "./Firstappointment";
import Secondappointment from "./Secondappointment";
import Thirdappointment from "./Thirdappointment";
import Fourthappointment from "./Fourthappointment";
import Fifthappointment from "./Fifthappointment";
import Sixthappointment from "./Sixthappointment";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import AppointmentComponent from "./AppointmentComponent";
// import "react-tooltip/dist/react-tooltip.css";
// import { Tooltip as ReactTooltip } from "react-tooltip";

function Timedetail() {
  const [state, setstate] = useState(false);
  const [nextstate, setNextstate] = useState();

  const [show, setShow] = useState(false);

  const [showBoxInFull, setShowBoxInFull] = useState(false)

  useEffect(()=>{
    console.log('i rand');
   if(Data.length < 6){
    setShowBoxInFull(true)
    console.log(showBoxInFull);
   }
   else{
    console.log('nothing to do');
   }
  },[Data.length])
  console.log(show);
  // const callMe = (item) => {
  //   if (item.id == 1) {
  //     setstate(!state);
  //     setNextstate(<Firstappointment />);
  //   } else if (item.id == 2) {
  //     setstate(!state);
  //     setNextstate(<Secondappointment />);
  //   } else if(item.id==3) {
  //     setstate(!state);
  //     setNextstate(<Thirdappointment />);
  //   }else if(item.id==4) {
  //       setstate(!state);
  //       setNextstate(<Fourthappointment />);
  //   }else if(item.id==5) {
  //       setstate(!state);
  //       setNextstate(<Fifthappointment />);
  //   }
  //   else {
  //     setstate(!state);
  //     setNextstate(<Sixthappointment />);
  //   }

  // };
  const closeButton = () => {
    setstate(false);
  };

  const callAppointment = (id) => {
    // console.log("k bho yr");
    setstate(!state);
    setNextstate(<AppointmentComponent itemid={id} />);
  };

  return (
    <>
      <div className="body-div">
        <div className="time-title">
          <h5>Select Services</h5>
        </div>
        {console.log(Data.length)
        }

        <Row className="time-box">
          {Data.map((item) => {
            return (
              <>
                {/* //for less than 6 box */}
                <Col className="time-col">
                  <div className="inner-time">
                    <img
                      src={item.icon}
                      alt=""
                      className="clock-img"
                      style={{
                        height: "40px",
                        width: "40px",
                        marginTop: "8px",
                      }}
                    />
                    <div
                      className="second-div"
                      style={{ padding: "0.7rem 0 0 1.5rem" }}
                    >
                      <h6>
                        {item.heading}
                        <p className="time-p">{item.desc}</p>
                      </h6>
                    </div>
                  </div>
                  <div className="inner-second">
                    <button
                      className="more-btn"
                      key={item.id}
                      onClick={() => {
                        callAppointment(item.id);
                      }}
                    >
                      Details&nbsp;&nbsp;<BiSolidDownArrow />
                    </button>
                    <button className="nxt-btn">
                      <span className="tooltiptext">Next</span>
                      <Link to="Appointment">
                        <img
                          src={item.image}
                          alt=""
                          className="nxt-img"
                          style={{ height: "19px", width: "17px" }}
                        />
                      </Link>
                      <Outlet />
                    </button>
                  </div>
                </Col>
                {/* //purano code
              <Col className="time-col">
                <div className="inner-time">
                  <img
                    src={item.icon}
                    alt=""
                    className="clock-img"
                    style={{ height: "40px", width: "40px", marginTop: "8px" }}
                  />
                  <div
                    className="second-div"
                    style={{ padding: "0.7rem 0 0 1.5rem" }}
                  >
                    <h6>
                      {item.heading}
                      <p className="time-p">{item.desc}</p>
                    </h6>
                  </div>
                </div>
                <div className="inner-second">
                  <button
                    className="more-btn"
                    key={item.id}
                    onClick={() => {
                      callAppointment(item.id);
                    }}
                  >
                    Details&nbsp;&nbsp;
                  </button>
                  <button className="nxt-btn">
                    <span className="tooltiptext">Next</span>
                    <Link to="Appointment">
                      <img
                        src={item.image}
                        alt=""
                        className="nxt-img"
                        style={{ height: "19px", width: "17px" }}
                      />
                    </Link>
                    <Outlet />
                  </button>
                </div>
              </Col> */}
              </>
            );
          })}
        </Row>

        <Modal
          show={state}
          onHide={closeButton}
          className="modal-box"
          dialogClassName="modal-width"
        >
          <Modal.Header closeButton className="modalheader"></Modal.Header>
          <Modal.Body className="body-modal">{nextstate}</Modal.Body>
        </Modal>
      </div>
    </>
  );
}

export default Timedetail;