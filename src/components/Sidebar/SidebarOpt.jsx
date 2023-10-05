import React, { useState } from "react";
import menu from "../assets/menu.png";
import dashboard from "../assets/dashboard.png";
import appointment from "../assets/appointment.png";
import announcement from "../assets/announcement.png";
import settings from "../assets/settings.png";
import profile from "../assets/admin-photo.png";
import logout from "../assets/logout-icon.png";
import { Link } from "react-router-dom";
import { BiSolidDashboard } from "react-icons/bi";
import { FaUserClock } from "react-icons/fa";
import { PiSpeakerSimpleHighFill } from "react-icons/pi";
import { IoMdSettings } from "react-icons/io";
import "./SidebarOpt.css";


const SidebarOpt = () => {
  const [open, setOpen] = useState(true);

  const handleMenu = () => {
    setOpen(!open);
    console.log("menu clicked");
  };


  return (
      <div
        className={`h-screen  flex flex-col items-center border-r cursor-pointer pt-5 pl-3 pr-3 width-responsive
         `}
      >
       
          <div
            className={`flex w-[220px] h-[40px]  items-center
            rounded-md  mt-2 pt-3 pr-1 pl-1 sidebar-menu
             ${
               open ? "w-[260px] pl-[32px]" : "w-[60px] flex justify-center "
             } relative duration-300 `}
             
          >
            <div className="flex justify-start items-center">
              <img src={menu} className="h-[16px] " onClick={handleMenu} />
            </div>
          </div>

          <Link to="/dashboard">
            <div className= "sidebar-btn">
            <div className="flex justify-center gap-4 items-center ">
             <div className="menu-responsive app-btn">
            <p style={{color:"white"}}><BiSolidDashboard/></p>
            <h3 className={`${!open && "hidden"} text-[15px] `} style={{fontFamily:"Arial", color:"white"}}>Dashboard</h3>
              </div>
            </div>
           </div>
           </Link>

           <Link to="/appointment">
          <div
             className={`flex  h-[48px] bg-[#1a98ecbd] items-center    w-[190px] mt-[10px]
             rounded-md  sidebar-btn 
             ${
               open ? "w-[190px] items-center" : "w-[60px] p-[5px] ml-0"
             } relative duration-300 `}
             
          >
             <div className="flex justify-center gap-4 items-center ">
            <div className="menu-responsive app-btn">
            <p style={{color:"white"}}><FaUserClock /></p>
            <h3 className={`${!open && "hidden"} text-[15px]`} style={{fontFamily:"Arial", color:"white"}}>Appointment</h3>
            </div>
            </div>
           </div>
           </Link>

          <Link to="/announcement">
          <div
            className={`flex  h-[48px] bg-[#1a98ecbd] items-center    w-[190px] mt-[10px]
            rounded-md  sidebar-btn 
             ${
               open ? "w-[190px] items-center" : "w-[60px] p-[5px] ml-0"
             } relative duration-300 `}
            
          >
            <div className="flex justify-center gap-4 items-center ">
            <div className="menu-responsive app-btn">
            <p style={{color:"white"}}><PiSpeakerSimpleHighFill /></p>
              <h3 className={`${!open && "hidden"} text-[15px]`} style={{fontFamily:"Arial", color:"white"}}>Announcement</h3>
              </div>
            </div>
           </div>
           </Link>

          <Link to="/settings" className="link-active">
          <div
              className={`flex  h-[48px] bg-[#1a98ecbd] items-center    w-[190px] mt-[10px]
              rounded-md sidebar-btn 
             ${
               open ? "w-[190px] items-center" : "w-[60px] p-[5px] ml-0"
             } relative duration-300 `}
            
          >
            <div className="flex justify-center gap-4 items-center ">
            <div className="menu-responsive sett-btn">
            <p style={{color:"white"}}><IoMdSettings /></p>
            <h3 className={`${!open && "hidden"}  text-[15px]`} style={{fontFamily:"Arial", color:"white"}}>Settings</h3>{" "}
            </div>
            </div>
           </div>
           </Link>
         
        </div>
     
    
  );
};

export default SidebarOpt;
