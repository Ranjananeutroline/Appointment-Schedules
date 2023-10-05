import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";
// import Neutroline_logo from "../assets/Neutroline_logo.png";
// import header_bell from "../assets/header_bell.svg";
// import header_avatar from "../assets/header_avatar.png";
// import header_down from "../assets/header_down.png";
import { ImUser } from 'react-icons/im';
import "./sidebar.css";
// import profile from "../assets/admin-photo.png";
// import logout from "../assets/logout-icon.png";


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
z-index: 12;
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
