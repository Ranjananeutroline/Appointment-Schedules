import React, { useState } from "react";
import Neutroline_logo from "../assets/Neutroline_logo.png";
import header_bell from "../assets/header_bell.svg";
import header_avatar from "../assets/header_avatar.png";
import header_down from "../assets/header_down.png";
import "./Header.css";


const Header = () => {
  
  return (
    <div>
      <div className="header-div">
        <div className="flex items-center logo-title">
          <img
            src={Neutroline_logo} 
            className=" w-[60px] h-[50px]  md:w-[117px] md:h-[70px]"
          />
          <h3 className=" text-[15px] text-white md:text-[30px] drop-shadow-lg ">
            Neutrosys Inc.
          </h3>
        </div>

        <div className="flex justify-self-end items-center mr-3">
          <img
            src={header_bell}
            className=" h-[30px] w-[23px] md:h-[30px] md:w-[30px] md:mr-[8px] "
          />
          <h3 className=" text-[13px] hidden md:mr-[8px] md:text-[15px] md:block ">
            Pooja Tiwari
          </h3>
          <h3 className=" md:hidden text-[13px] p-1">
            Pooja 
          </h3>
          <img
            src={header_avatar}
            className="h-[30px] w-[30px] mr-[10px] md:h-[30px] md:w-[30px]"
          />
          <img
            src={header_down}
            className="h-[13px] w-[13xpx] mr-[32px] md:h-[16px] md:w-[16px]"
          />
        </div>
      </div>
    </div>

  );
};

export default Header;
