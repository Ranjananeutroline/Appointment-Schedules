import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import { BiSolidDashboard } from "react-icons/bi";
import { FaUserClock } from "react-icons/fa";
import { PiSpeakerSimpleHighFill } from "react-icons/pi";
import { IoMdSettings } from "react-icons/io";

export const SidebarData = [
{
	title: "Dashboard",
	path: "/",
	icon: <BiSolidDashboard/>,
	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,
},
{
	title: "Appointment",
	path: "/appointment",
	icon: <FaUserClock />,
	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,
	
},
{
	title: "Accouncement",
	path: "/announcement",
	icon: <PiSpeakerSimpleHighFill />,
},
{
	title: "Settings",
	path: "/settings",
	icon: <IoMdSettings />,

	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,
},
];
