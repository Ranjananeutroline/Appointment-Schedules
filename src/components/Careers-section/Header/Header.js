import React from 'react';
import './Header.css';
import careersheader from "../Careersimages/careerbg.jpg"


export default function Header() {
    return(
        <>
            <div className='header-image'>
                <img src={careersheader} alt=""></img>
                <div className='text'>
                    <h2 className='heading-career'>Careers</h2>
                    <p>As an innovative and growing company, we offer a dynamic and challenging work
                    environment with opportunities for professional growth and development.</p>
                </div>
            </div>
        </>
    )
}