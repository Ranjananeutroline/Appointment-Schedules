import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Settings from "../pages/Settings";
import Announcement from "../pages/Announcement";


const PrivateRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/dashboard" element={<Home />} />
        <Route path="/announcement" element={<Announcement />}/>
      </Routes>
    </>
  );
};

export default PrivateRoutes;
