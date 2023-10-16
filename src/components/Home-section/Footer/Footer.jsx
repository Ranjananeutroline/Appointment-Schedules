import React from "react";
import "./footer.css";
import { HiOutlineMail } from 'react-icons/hi';
import { BiPhoneCall } from 'react-icons/bi';
import { MdLocationOn } from 'react-icons/md';

function Footer() {
  return (
    <section className="footer">
      <div className="footer_logo">
        <img src="/neutrosys-logo-cropped.png" alt="" />
      </div>
      <div className="footer_getintouch">
        <h6>Get in Touch</h6>
        <p><HiOutlineMail/>&ensp;<a href="#" style={{color:'#23ABE5'}}>info@neutrosys.com</a></p>
        <p><BiPhoneCall/>&ensp;1-214-382-6161</p>
        <p><MdLocationOn/>&ensp;1431 Greenway Dr, 8th floor, Irving</p>
        <p>&ensp;&ensp;&ensp;TX 75038, United States</p>
      </div>
      <div className="footer_links">
        <h6>Useful Links</h6>
        <p>
          {" "}
          <a href="/">About Us</a>
        </p>
        <p>
          <a href="/">Services</a>
        </p>
        <p>
          <a href="/">Employers</a>
        </p>
        <p>
          <a href="/">Careers</a>
        </p>
      </div>
      <div className="footer_socials">
        <h6>Socials</h6>
        <div className="social">
        <div style={{width:"30px", height:"30px",  margin:"0 .2rem 0 0"}}>
          <a href="https://www.linkedin.com/company/neutrosys/" target="_blank" rel="noopener noreferrer"><img src="https://play-lh.googleusercontent.com/kMofEFLjobZy_bCuaiDogzBcUT-dz3BBbOrIEjJ-hqOabjK8ieuevGe6wlTD15QzOqw" alt=""/></a>
          </div>
         
          <div style={{width:"30px", height:"30px", margin:"0 .2rem"}} >
          <a href="https://www.facebook.com/Neutrosys" target="_blank" rel="noopener noreferrer"><img src="https://logodownload.org/wp-content/uploads/2014/09/facebook-logo-3-1.png" alt=""/></a>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default Footer;
