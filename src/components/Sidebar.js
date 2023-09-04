import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";
import Neutroline_logo from "../assets/Neutroline_logo.png";
import header_bell from "../assets/header_bell.svg";
import header_avatar from "../assets/header_avatar.png";
import header_down from "../assets/header_down.png";
import { ImUser } from 'react-icons/im';
import "./Sidebar.css";
import profile from "../assets/admin-photo.png";
import logout from "../assets/logout-icon.png";

const Nav = styled.div`
background: #1a98ecbd;
height: 65px;
display: flex;
justify-content: space-between;
align-items: center;

`;

const NavIcon = styled(Link)`
margin-left: 2rem;
font-size: 2rem;
height: 80px;
display: flex;
justify-content: flex-start;
align-items: center;
`;

const SidebarNav = styled.nav`
// background: #068fffa6;
background: white;
padding: 0.5rem 1rem;
width: 195px;
height: 100vh;
display: flex;
justify-content: center;
position: absolute;
left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
transition: 300ms;
z-index: 10;
`;

const SidebarWrap = styled.div`
width: 100%;
`;

const Sidebar = () => {
const [sidebar, setSidebar] = useState(false);

const showSidebar = () => setSidebar(!sidebar);


return (
	<>
	<IconContext.Provider value={{ color: "#fff" }}>
		<Nav className="header-nav">
		 <NavIcon to="#" className="nav-menu menu-bar">
			<FaIcons.FaBars onClick={showSidebar} />
			
		</NavIcon> 
		<div style={{display:"flex", textAlign:"center"}} className="logo-div">
		<img
            src={Neutroline_logo} 
            className="logo-img"
          />
		<h3
			style={{ textAlign: "center",
					color: "white",
					fontWeight:"normal",
					fontSize:"30px",
					paddingTop:"5px",
				 }}
		>
			 Neutrosys Inc.
		</h3>
		</div>
		
		<div>
        <div className="flex justify-self-end items-center mr-5 nav-right">
          <img
            src={header_bell}
            className=" h-[25px] w-[23px] md:h-[25px] md:w-[23px] md:mr-[6px] bell-img"
          />
		  <Link to="/profile">
		  <div style={{display:"flex"}}>
		  <h3 className=" text-[13px] hidden md:mr-[8px] md:text-[15px] md:block ">
            Pooja Tiwari
          </h3>
          <h3 className=" md:hidden text-[13px] p-1">
            Pooja 
          </h3>
          {/* <img
            src={header_avatar}
            className="h-[30px] w-[30px] mr-[5px] md:h-[30px] md:w-[30px] avatar-img"
          /> */}
		  <p style={{paddingRight:"5px", fontSize:"17px"}}><ImUser style={{color:"#adff2fd4"}} /></p>
		  </div>
		  </Link>
          <img
            src={header_down}
            className="h-[13px] w-[13xpx] mr-[10px] mb-[3px] md:h-[16px] md:w-[16px] down-img"
          />
        </div>
          
        </div>
		</Nav>
		<SidebarNav sidebar={sidebar}>
		<SidebarWrap>
			{/* <NavIcon to="#"> */}
			<AiIcons.AiOutlineClose onClick={showSidebar} />
			{/* </NavIcon> */}
			{SidebarData.map((item, index) => {
			return <SubMenu item={item} key={index} />;
			
			})}
			
		</SidebarWrap>
		</SidebarNav>
	</IconContext.Provider>
	</>
);
};

export default Sidebar;
