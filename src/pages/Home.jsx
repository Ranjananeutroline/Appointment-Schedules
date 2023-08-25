import React from 'react'
// import Header from '../components/Header'
// import SidebarOpt from '../components/SidebarOpt'
import NavSidebar from '../components/NavSidebar'
import Sidebar from '../components/Sidebar'
import Dashboard from '../components/Dashboard/Dashboard'

const Home = () => {
  return (
    <div>
      {/* <Header/> */}
      <Sidebar/>
      <div className='flex '>
        {/* <SidebarOpt/> */}
        <NavSidebar/>
        <Dashboard/>
      </div>
    </div>
  )
}

export default Home
