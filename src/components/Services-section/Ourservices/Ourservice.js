import React, { useState ,useEffect} from "react";
import "./Ourservices.css";
import data from "./data";
import { servicedata } from "./ServiceData";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import Staffing from "./Staffing";
import Softwaretesting from "./Softwaretesting";
import Outsourcing from "./Outsourcing";
import ServiceData from "./ServiceData";
import Softwarequality from "./Softwarequality";
import CloseIcon from '@mui/icons-material/Close';
import { AiOutlineArrowRight } from "react-icons/ai";

const Ourservice = ({closeme}) => {
  const [state, setstate] = useState(false);
  const [nextstate, setNextstate] = useState();
 

  const callMe = (item) => {
    if (item.id == 1) {
      setstate(!state);
      setNextstate(<Staffing />);
    } else if (item.id == 2) {
      setstate(!state);
      setNextstate(<Softwaretesting />);
    } else if(item.id==3) {
      setstate(!state);
      setNextstate(<Outsourcing />);
    }
    else {
      setstate(!state);
      setNextstate(<Softwarequality />);
    }
    
  };
  const closeButton = () => {
    setstate(false);
  };

  return (
    <div className="Servicemainbody ">
    <h2>Services We Provide</h2>
   
      <div className="mainbox">
        {data.map((item) => {
          return (
            <div
              className="mainData"
              key={item.id}
              onClick={() => callMe(item)}
            > 
            <div className="serviceimage">
            <img src={item.image} alt="" />
            </div>
              
              <h4>{item.heading}</h4>
              <p>{item.disc}</p>
              <span className="services-readmore">Read more <AiOutlineArrowRight/></span>
            </div>
          );
        })}
      </div>
      <Modal   dialogClassName="modalmain" style={{paddingLeft:"0px"}}  show={state} onHide={closeButton} className="dbyaModal" >
        <Modal.Header closeButton  className="modalheader"> 
        </Modal.Header>
        <Modal.Body className="modalbody">{nextstate}</Modal.Body>
      </Modal>
    </div>
  );
};

export default Ourservice;