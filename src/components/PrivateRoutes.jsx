import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Settings from "../pages/Settings";
import Announcement from "../pages/Announcement";
import AppointmentsPage from "../pages/AppointmentsPage";


const PrivateRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appointment" element={<AppointmentsPage />}/>
        <Route path="/announcement" element={<Announcement />}/>
        <Route path="/settings" element={<Settings />} />
        
      </Routes>
    </>
  );
};

export default PrivateRoutes;
