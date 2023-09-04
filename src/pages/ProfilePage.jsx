import React from 'react';
// import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
// import SidebarOpt from '../components/SidebarOpt'
import NavSidebar from '../components/NavSidebar'
import { Profile2 } from '../components/Profile/Profile'


const ProfilePage = () => {
  return (
    <div>
        {/* <Header/> */}
        <Sidebar/>
        <div className='flex'> 
        {/* <SidebarOpt/> */}
        <NavSidebar/>
       <Profile2/>
        </div>
             

    </div>
  )
}

export default ProfilePage;
