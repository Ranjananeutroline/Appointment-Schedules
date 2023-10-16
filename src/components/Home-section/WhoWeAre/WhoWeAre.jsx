import React from "react";
import "./whoWeAre.css";
function WhoWeAre() {
  return (
    <section className="whoweare_container">
      <div className="whoweare_image"><img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG9mZmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" alt="people sitting in office" /></div>
      <div className="whoweare_desc">
      <h2>Who We Are</h2>
      <p>
      <span style={{fontSize:"20px", fontWeight:"500"}}>W</span>e are a leading IT staffing and software development company that was established in 2015.
      Our company is committed to providing exceptional services that help businesses achieve their
      goals and succeed in a fast-paced and rapidly changing market.
      </p>
      <div className="know-more-btn-div">
      <a href="./aboutus" target="_blank" rel="noopener noreferrer"><button className="know-btn">Know more</button></a>
      </div>
      </div>
      
    </section>
  );
}

export default WhoWeAre;
