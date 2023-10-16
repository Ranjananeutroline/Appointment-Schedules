import React from 'react'
import './Header.css'
const Header = () => {
  return (
    // <div>
    // <div className="gridcontainer">
    // <div className="content">
    // <div className="contentheader">
    // <h1>Our Services</h1>
    // <p>Neutrosys is an IT staffing and software development company. We are a young, innovative, motivated, skilled, ambitious, and trusted group of people working together on providing IT solutions globally.We are currently providing IT services mainly in the US and Nepal. We provide services from USA, Nepal, India, and Finland.</p>
    // </div>
    // </div>
    // <div className="headerimage">
    // <img src="https://www.pngall.com/wp-content/uploads/2016/05/Man-PNG-File.png" alt="" />
    // </div>
    // </div>
    // </div>

    <div className="header-container">
    <div className="header-photo">
      <img className="header-photo" src="./service-header-crop.jpeg" alt="" />

      <div className="about-text ">
        <h2>Services</h2>
        <p>
        Neutrosys has all the comprehensive solutions for your technology needs -
        Staffing, Development, Outsourcing, Testing - All in One Place!
        </p>
      </div>
    </div>
  </div>
  )
}

export default Header