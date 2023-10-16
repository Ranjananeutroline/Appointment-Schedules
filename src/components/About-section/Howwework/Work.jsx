import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./work.css";
import imagecard1 from "../Aboutimage/card1.png"
import imagecard2 from "../Aboutimage/card2.png"
import imagecard3 from "../Aboutimage/card3.png"
import imagecard4 from "../Aboutimage/card4.png"
import imagecard5 from "../Aboutimage/card5.png"
import linefirst from "../Aboutimage/l1.png"
import linesecond from "../Aboutimage/l2.png"
import linethird from "../Aboutimage/l1.png"
import linefourth from "../Aboutimage/l2.png"


const work = () => {
  return (
    <div className='maindiv-work'>
      <h2 className="howtitle">Our Staffing Process</h2>

      <div className="work container-fluid">
        <div className="row">
          <div className="card1 col-sm-4">
            <h6>step 1</h6> 
            <h3>Identify job openings</h3>
            <p className="workprocess-p">
             We firstly identify job openings within client companies that require IT talent.
            </p>
            <img 
            className="how1img"

              src={imagecard1}
              alt="working mechanism"
              width="50%"
            />
          </div>
          <div className="line1 col-sm-4">
            <img className="mline1" src={linefirst} alt="" width="100%" />
          </div>
          <div className="card2 col-sm-4">
            <h6>step 2</h6> 
            <h3>Source candidates</h3>
            <p className="workprocess-p">
              We then source candidates through job boards, social media, database, and other channels.
            </p>
            <img
            className="how2img"
              src={imagecard2}
              alt="working mechanism"
              width="40%"
            />
          </div>
        </div>
        <div className="row">
          <div className="line2 col-sm-12 ">
            <img className="mline2" src={linesecond} alt="" width="100%" />
          </div>
        </div>
        <div className="row">
          <div className="card3 col-sm-4">
            <h6>step 3</h6> 
            <h3>Screen and evaluate candidates</h3>
            <p className="workprocess-p">
              {" "}
              We screen and evaluate candidates to ensure they have the required skills and experience and are a good fit 
              for the job and client company's culture.
            </p>
            <img
            className="how3img"
              src={imagecard3}
              alt="working mechanism"
              width="40%"
            />
          </div>
          <div className="line3 col-sm-4">
            <img className="mline3" src={linethird} alt="" width="100%" />
          </div>
          <div className="card4 col-sm-4">
            <h6>step 4</h6> 
            <h3>Submit candidates to clients</h3>
            <p className="workprocess-p">
              Once suitable candidates are identified, we submit their resume to the client for review and potential selection.
            </p>
            <img
            className="how4img"
              src={imagecard4}
              alt="working mechanism"
              width="40%"
            />
          </div>
        </div>
        <div className="row">
          <div className="line2 col-sm-12">
            <img className="mline4" src={linefourth} alt="" width="100%" />
          </div>
        </div>
        <div className="row">
          <div className="card5 col-sm-4">
            <h6>step 5</h6> 
            <h3>Facilitate hiring process</h3>
            <p className="workprocess-p">
              We facilitate the hiring process, which may include negotiating salaries and employment terms, conducting background
              checks, and onboarding the candidate.
            </p>
            <img
            className="howimg5"
              src={imagecard5}
              alt="working mechanism"
              width="40%"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default work;
