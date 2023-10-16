import React from "react";
import "./Outsourcing.css";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
const Outsourcing = () => {
  return (
    <div className="outsourcingmain">
      <h4>Outsourcing</h4>
      
      <div className="outsourcingbox">
        <div className="outbox1">
          <div className="box11">
          <div className="box111">
          <RadioButtonCheckedIcon
           fontSize="small"
          className="staffBoxHeadicon"
          />
            <h5>Professional</h5></div>
          
            <p>
            Enhance your IT capabilities while saving on overhead costs by outsourcing to our team of
            experienced IT professionals.
            </p>
          </div>
          <div className="box11">
           
          <div className="box111">
          <RadioButtonCheckedIcon
           fontSize="small"
          className="staffBoxHeadicon"
          />
            <h5>Software Testing</h5></div>
            <p>
            Ensure high-quality software free of bugs and issues by outsourcing your software testing needs
            to our experienced team.
            </p>
          </div>
        </div>
        <div className="outbox2">
          <img src="../Servicesimages/outsourcing.png" alt="" />
        </div>
        <div className="outbox3">
          <div className="box11">
            
          <div className="box111">
          <RadioButtonCheckedIcon
           fontSize="small"
          className="staffBoxHeadicon"
          />
            <h5>Call Center</h5></div>
            <p>
            Enhance your customer support capabilities with our cost-saving call center outsourcing
            services, offering 24/7 support for your business needs.
            </p>
          </div>
          <div className="box11 boxproject">
            
          <div className="box111">
          <RadioButtonCheckedIcon
           fontSize="small"
          className="staffBoxHeadicon"
          />
            <h5>Project</h5></div>
            <p>
            Streamline project management and focus on your core business by outsourcing your projects to
            our expert team.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Outsourcing;