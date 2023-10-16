import React from 'react';
import careersheader from "../Careersimages/careerbg.jpg"
import "./Banner.css";

const Banner = () => {
  return (
    <>
      <div className='jobs-header-image'>
        <img src={careersheader} alt ="career header"></img>
          <div className='jobs-text'>
              <h2 className='jobs-heading-career'>Careers</h2>
              <p>Neutrosys is an IT staffing and software development company.
              We are currently providing IT services mainly in the US and Nepal. We provide 
              services from USA, Nepal, India and Finland.</p>
          </div>
      </div>
    </>
   
  )
}

export default Banner