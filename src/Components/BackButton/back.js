import React from 'react';
import './back.css';
import { IoIosArrowBack } from 'react-icons/io';

function back() {
  return (
    <>
        <div className='main-back'>
            <button className='backbtn'><IoIosArrowBack/></button>
        </div>    
    </>
  );
}

export default back;