import React from "react";
import "./JobsBtn.css";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import Contractjob from "./Contractjob";
import Internaljob from "./Internaljob";

export default function JobsBtn() {
  const [job, setJob] = useState(<Contractjob />);
  const [button1Color, setButton1Color] = useState("#0d6efd");
  const [button2Color, setButton2Color] = useState("");
  const [color, setColor] = useState(false);
  const cont = () => {
    setJob(<Contractjob />);
  };
  const inte = () => {
    setJob(<Internaljob />);
  };

  const handleButton1Click = () => {
    setButton1Color("#0d6efd");
    setButton2Color("");
  };

  const handleButton2Click = () => {
    setButton1Color("white");
    setButton2Color("#0d6efd");
  };

  return (
    <>
      <div className="buttonjobs-maindiv">
      <div className="jobsbtn-bg">
        <div className="btns-div">
          <Button
            variant="outline"
            size="lg"
            className="contract-btn"
            style={{
              backgroundColor: button1Color,
              color: button1Color === "#0d6efd" ? "white" : "black",
            }}
            onClick={() => {
              cont();
              handleButton1Click();
            }}
          >
            Contract Jobs
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="primary-btn"
            style={{
              backgroundColor: button2Color,
              color: button2Color === "#0d6efd" ? "white" : "black",
            }}
            onClick={() => {
              inte();
              handleButton2Click();
            }}
          >
            Internal Jobs
          </Button>
        </div>
      </div>
        <div className="job-btn">{job}</div>
      </div>
    </>
  );
}
