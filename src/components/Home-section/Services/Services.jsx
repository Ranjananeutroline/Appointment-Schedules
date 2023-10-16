import React from "react";
import ServiceItemProps from "./ServiceItemProps";
import "./services.css";

function Services() {
  return (
    <section className="services_container">
      <h2>Services</h2>

      <div className="services_items">
        <div className="services_design"></div>
        <ServiceItemProps
          image="images/services/mobile_app1.png"
          desc="We offer comprehensive talent acquisition by sourcing and screening candidates based on
          clients' preferences and requirements."
          name="Talent solution"
        />
        <ServiceItemProps
          image="images/services/mobile_app2.png"
          desc="Our software development services deliver tailored solutions using the latest platforms and
          frameworks to help clients build innovative and quality products."
          name="Software development"
        />
        <ServiceItemProps
          image="images/services/mobile_app4.svg"
          desc="We offer customized outsourcing services that are efficient, cost-effective, and deliver high-
          quality results, allowing clients to focus on their core business."
          name="Outsourcing"
        />
      </div>
       <p className="services_learnmore">
        {" "}
        <a href="/services" target="_blank">Learn more <svg className="learnmore_svg" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" style={{fill: "rgba(22, 65, 251, 1)",transform: "rotate(180deg)",msFilter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)"}}><path d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z"></path></svg> </a>
      </p> 
      {/* <div className="learn-more-btn-div">
      <a href="./services" target="_blank" rel="noopener noreferrer"><button className="learn-btn">Learn more</button></a>
      </div> */}
    </section>
  );
}

export default Services;
