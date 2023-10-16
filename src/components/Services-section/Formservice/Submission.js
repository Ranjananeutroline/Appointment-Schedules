import React from 'react'
import './submission.css' 
import { useState} from "react"; 
import Modal from "react-bootstrap/Modal";
import CloseIcon from '@mui/icons-material/Close';
const Submission = () => {
    const [state, setstate] = useState(false);
    const closeButton = () => {
        setstate(false);
      };
  return (
  <div className="sub">
  <Modal   dialogClassName="modalmain" style={{paddingLeft:"0px"}}  show={state} onHide={closeButton} className="dbyaModal" >
  <Modal.Header onClick={closeButton}  className="modalheader border-0">
  <div className="micon bg-danger"><CloseIcon   className="closeicon" /></div> 
  </Modal.Header>
  <Modal.Body className="modalbody">"dibbya</Modal.Body>
</Modal>
  </div>
  )
}

export default Submission