import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Settings from "../pages/Settings";
import Announcement from "../pages/Announcement";
// import Appointment from "../pages/Appointment";


const PrivateRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/appointment" element={<Appointment />}/> */}
        <Route path="/announcement" element={<Announcement />}/>
        <Route path="/settings" element={<Settings />} />
        
      </Routes>
    </>
  );
};

export default PrivateRoutes;
