import React from "react";
import "./mission.css";
import { GiMissileLauncher } from "react-icons/gi";
import { AiOutlineEye } from "react-icons/ai";
import { MdCenterFocusStrong } from "react-icons/md";
import { BiUserCircle } from "react-icons/bi";

function Mission() {
  return (
    <div className="mainmission">
      <h2 className="titleM">Our Mission</h2>
      <div>
        <div className="Mgrid">
          <div className="mleft1">
            <p className="missleft">
            “Our mission is to help businesses of all sizes achieve their goals by providing high-quality
            services and solutions that are customized to meet their specific needs.”
            </p>
          </div>
          <div className="box">
            <div className="mission-icon">
              <GiMissileLauncher className="i1" size={40} color="green"/>
            </div>
            <h4 className="box-heading mission">Mission</h4>
          </div>

          <div className="box">
            <div className="focus-icon">
              <AiOutlineEye className="i2" size={40} color="green" />
            </div>
            <h4 className="box-heading mission-focus">Vision</h4>
          </div>

          <div className="mright1">
            <p className="missright">
            Neutrosys aims to be the industry's top provider of IT staffing and software development
            services, trusted by businesses of all sizes for our commitment to excellence, innovation, and
            customer satisfaction.
            </p>
          </div>

          <div className="mleft2">
            <p className="missleft">
            We pride ourselves in our ability to understand the unique needs of each client and provide
            them with customized solutions that are tailored to meet those needs. 
            </p>
          </div>
          <div className="box">
            <div className="expertise-icon">
              <BiUserCircle className="i3" size={40} color="green"/>
            </div>
            <h4 className="box-heading mission-expertise">Expertise</h4>
          </div>
          <div className="box">
            <div className="focus-icon">
              <MdCenterFocusStrong className="i4" size={40} color="green" />
            </div>
            <h4 className="box-heading mission-vision">Focus</h4>
          </div>
          <div className="mright2">
            <p className="missright">
            We strive to stay up to date with the latest advancements in technology and continuously
            expand our expertise to provide our clients with the best services possible.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mission;
