import React from 'react';
// import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
// import SidebarOpt from '../components/SidebarOpt'
import NavSidebar from '../components/NavSidebar'
import Appointment from '../components/Appointment/Appointment'


const AppointmentsPage = () => {
  return (
    <div>
        {/* <Header/> */}
        <Sidebar/>
        <div className='flex'> 
        {/* <SidebarOpt/> */}
        <NavSidebar/>
        <Appointment />
        </div>
             

    </div>
  )
}

export default AppointmentsPage;
