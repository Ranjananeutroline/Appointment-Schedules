import React from "react";
// import Header from "../components/Header";
import Sidebar from '../components/Sidebar'
// import SidebarOpt from '../components/SidebarOpt'
import NavSidebar from '../components/NavSidebar'
import Service from "../components/Service";
import BhoursC from "../components/BHoursC";
import "./Settings.css";

const Settings = () => {
  return (
    <div>
      {/* <Header /> */}
      <Sidebar />
      <div className="flex relative">
        {/* <SidebarOpt/> */}
        <NavSidebar/>
        <div className="settings-main">
          <h1 className="text-[27px] text-[#3F26A5] sett-title">Settings</h1>
          <BhoursC />
        <Service/>
        </div>
        
      </div>
    </div>
  );
};

export default Settings;
