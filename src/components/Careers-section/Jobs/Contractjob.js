import React, { useState } from "react";
import "./Contractjob.css";
import Textcoldescribe from "./Textcoldescribe";
import Textcoldescribe2 from "./Textcoldescribe2";
import Textcoldescribe3 from "./Textcoldescribe3";
import Textcoldescribe4 from "./Textcoldescribe4";
import Textcoldescribe5 from "./Textcoldescribe5";
import Textcoldescribe6 from "./Textcoldescribe6";
import OpenJobs from "./OpenJobs";

const Contractjob = () => {
  // const [describe, setJob] = useState(<Textcoldescribe />);
  const [number, setNumber] = useState(0);
  const widths = ["0%", "20%", "40%", "60%", "80%", "100%"];
  const heights = ["0%", "22%", "42%", "62%", "80%", "100%"];
  const titles = [
    {
      id: "1",
      name: "Know your Needs",
      desc: "Our team will evaluate your qualifications and work history to recommend the best path for your professional development. With training from our experts, we are confident that we can guide you to success in your desired field.",
    },
    {
      id: 2,
      name: "Align Skills with Opportunities",
      desc: "Our advanced matching program, developed through years of industry expertise, will match you to the right job, ensuring your career growth and stability, regardless of your level of experience.",
    },
    {
      id: 3,
      name: "Prepare for Interviews",
      desc: "We provide training and support in resume and cover letter preparation, as well as multiple rounds of mock interviews. Our team of technical recruiting experts will help you prepare for and succeed in interviews.",
    },
    {
      id: 4,
      name: "Smooth Onboarding",
      desc: "We will make your transition to and from client projects as smooth and easy as possible. Our onboarding process is streamlined and user-friendly.",
    },
    {
      id: 5,
      name: "Continuous Support",
      desc: "You will always be a part of the Neutrosys family, and we will maintain constant communication with you even after you land your dream job. Our dedication to our consultants has led to high retention rates on multiple projects.",
    },
    {
      id: 6,
      name: "Access Top Opportunities",
      desc: "Our partnerships with industry-leading clients and Fortune 500 companies across various sectors such as healthcare, banking, finance, and more, provide you with ample opportunities to secure your ideal role.",
    },
  ];
  const [currentTab, setCurrentTab] = useState("1");

  return (
    <>
    
    
    
      <div className="contract-div">
        <h2>Work as a Consultant</h2>
        <p className="contract-div-firstp">
        "Advance your career by joining our team and working with top clients in various industries,
        including healthcare, banking and finance, across the nation."
        </p> 
      
        <div className="work-for-us-progress-bar-container">
          <ul>
            {titles.map((title, i) => {
              return (
                <li
                  name={title.name}
                  key={i}
                  id={title.id}
                  className={`work-for-us-step ${i <= number && "active"}`}
                  onMouseOver={(e) => {
                    setNumber(i);
                    setCurrentTab(e.target.getAttribute("id"));
                  }}
                >
                  <div
                    className="step-box"
                    name={title.name}
                    id={title.id}
                  ></div>{" "}
                  <div className="step-inner" id={title.id}>
                    {title.name}
                  </div>
                </li>
              );
            })}
          </ul>
          <br />

          <div className="work-for-us-line-container">
            <div className="work-for-us-line">
              <div
                className="work-for-us-line-process"
                style={{ width: widths[number] }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ textAlign: "center" }} className="work-for-us-content">
        {currentTab === "1" ? (
          <Textcoldescribe />
        ) : currentTab === "2" ? (
          <Textcoldescribe2 />
        ) : currentTab === "3" ? (
          <Textcoldescribe3 />
        ) : currentTab === "4" ? (
          <Textcoldescribe4 />
        ) : currentTab === "5" ? (
          <Textcoldescribe5 />
        ) : (
          <Textcoldescribe6 />
        )}
      </div>
      {/* responsiveness */}
   
        {/* <ul> */}
    <div className="contract-job-responsive-bg">
      <div className="work-for-us-progress-bar-responsive-container
      
      "  >
          <div className="work-for-us-line-responsive-container">
            <div className="work-for-us-line">
              <div
                className="work-for-us-line-process"
                style={{ height: heights[number] }}
              ></div>
            </div>
          </div>
          {titles.map((title, i) => {
            return (
              <div
                name={title.name}
                key={i}
                id={title.id}
                className={`work-for-us-step ${i <= number && "active"}`}
                onClick={(e) => {
                  setNumber(i);
                  setCurrentTab(e.target.getAttribute("id"));
                }}
              >
                {/* <div className="step-box" name={title.name} id={title.id}></div>{" "} */}
                {/* <div className="step-inner" id={title.id}> */}
                  <h2>{title.name}</h2>
                  <p> {title.desc}</p>
                {/* </div> */}
              </div>
            );
          })}
        {/* </ul> */}
        <br />
        {/* 
          <div className="work-for-us-line-responsive-container">
            <div className="work-for-us-line">
          
              <div
                className="work-for-us-line-process"
                style={{ width: widths[number] }}
              >
            

              </div>
            </div>
          </div> */}
      </div>
    </div>
      {/* open position */}
      <OpenJobs />
    </>
  );
};
export default Contractjob;
