import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Employers from "./pages/Employers";
import Services from "./pages/Services";
import Careers from "./pages/Careers";
import ContactUs from "./pages/ContactUs";
import JobSection from "./pages/JobSection";
import SalesIntern from "./pages/SalesIntern";
import SalesNoida from "./pages/SalesNoida";



function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/employers" element={<Employers />} />
        <Route path="/services" element={<Services />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/careers/jobSection" element={<JobSection />} />
        <Route path="/careers/salesIntern" element={<SalesIntern />} />
        <Route path="/careers/salesNoida" element={<SalesNoida />} />
        <Route path="/contactus" element={<ContactUs />} />
       

        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
