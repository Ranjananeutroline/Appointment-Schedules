import React from "react";
import "./corevalues.css";
import imageabout1 from "../Aboutimage/cs.jpg"
import imageabout2 from "../Aboutimage/cs3.jpg"
import imageabout3 from "../Aboutimage/cv.png"


const Corevalues = () => {
  return (
    <div>
      <h2 className="ctext"> Our Core Values</h2>

      <div className="coregrid">
        <div className="valuetext1">
          <img className="core-icon1" src={imageabout1} alt="" />
          <p className="cvp">Customer Satisfaction</p>
          <p className="corep">
          We prioritize customer satisfaction as a core value, going above and beyond to provide expert
          solutions and exceptional service. We put the needs of our clients first and are committed to
          their success.
          </p>
        </div>
<div className="line">
  <hr />
</div>

        <div className="valuetext2">
          <img className="core-icon2" src={imageabout2} alt="" />
          {/* <hr
        className="line"
        style={{
           color: "blue",
           transform: "rotate(90deg)",
        }}
      /> */}
          <p className="cvp">Far-sightedness</p>

          <p className="corep">
          We take a strategic and holistic approach to every project, committed to creating lasting value
          for our clients. With transparency, open communication, and collaboration, we develop
          customized solutions that align with their unique needs and long-term business goals.
          </p>
        </div>
        <div className="line">
          <hr />
        </div>
        <div className="valuetext3">
          <img className="core-icon3" src={imageabout3} alt="" />
          <p className="cvp">Integrity</p>
          <p className="corep"> 
          Integrity is a core value that guides everything we do, and we believe in doing the right thing,
          even when it's hard. We hold ourselves to the highest standards of integrity, take responsibility
          for our actions, and strive to learn and improve.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Corevalues;
