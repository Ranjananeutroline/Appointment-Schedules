import React from 'react';
// import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
// import SidebarOpt from '../components/SidebarOpt'
import NavSidebar from '../components/NavSidebar'
import OfferPage from '../components/Announcement/OfferPage'
const Announcement = () => {
  return (
    <div>
        {/* <Header/> */}
        <Sidebar/>
        <div className='flex'> 
        {/* <SidebarOpt/> */}
        <NavSidebar/>
        <OfferPage/>
        </div>
             

    </div>
  )
}

export default Announcement;
