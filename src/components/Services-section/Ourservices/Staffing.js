import React from 'react'
import './staffing.css'
import AlbumIcon from '@mui/icons-material/Album';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';

const Staffing = () => {
  return (
    <div className="staffheading">
    <h4>Talent Solution</h4>
    
    <div className="mainStaffBox bg-gradient">
    <div className="mainStaffBox1">
    <div className="mainStaffBox11 box111">
    <RadioButtonCheckedIcon fontSize="small" className='staffBoxHeadicon' />
    <div className="staffBoxHead">
    <h5>Contract Staffing</h5>
    <p>We provide flexible contract staffing solutions for short-term projects, with fully vetted and
    qualified professionals that deliver immediate value to your team.</p>
    </div> </div>
    <div className="mainStaffBox11">
    
    <RadioButtonCheckedIcon fontSize="small" className='staffBoxHeadicon' />
    <div className="staffBoxHead">
    <h5>Contract to Hire</h5>
    <p>Our contract-to-hire services let clients assess a candidate's skills and compatibility before
      committing to a full-time hire, making it an ideal option for uncertain or exploratory hiring
      needs.</p>
    </div> </div>
    <div className="mainStaffBox11">
    
    <RadioButtonCheckedIcon fontSize="small" className='staffBoxHeadicon' />
    <div className="staffBoxHead">
    <h5>Direct Hire</h5>
    <p>Our direct hire services connect clients with top talent, ensuring a smooth and efficient hiring
      process that is tailored to specific role requirements.</p>
    </div> </div>
    </div>
    <div className="mainStaffBox2">
    <img src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" alt="" class="center" />
    </div>
    </div>
    </div>
  )
}

export default Staffing