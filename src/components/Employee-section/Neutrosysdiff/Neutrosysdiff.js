import React from 'react';
// import team from "../Components/team.png";
import "./Neutrosysdiff.css";
import DifferentA from "../Employeeimages/A.png"
import DifferentB from "../Employeeimages/B.png"
import DifferentC from "../Employeeimages/C.png"
import DifferentD from "../Employeeimages/D.png"


const Different = () => {
  return (
      <div className="features">
          <h2 className="section-title">What Makes Us Different?</h2>
          <div className="content">
          <div className="part1">
              <div className="part-content">
                  <div className="different-title">Reputation</div>
                  <div className="content">Our years of experience in staffing, reputation for quality service, and passion for
                    providing exceptional service make us a reliable choice. We have a strong track record of placing
                    high-quality consultants in various industries.</div>
              </div>
                  <div className="part-content">
                    <div className="different-title">Speed of Service</div>
                  <div className="content">We provide pre-screened candidates through an efficient recruitment process,
                    staying up to date with market demand and prioritizing excellent customer service for fast
                    staffing solutions.</div>   
              </div>
          </div>
        <div className="part2">
        <div className='difference-circle'></div>
        {/* <div className='diff-img-white'> */}
          <img src={DifferentA} alt="" className='difference-image1 diff-img'/>
          {/* </div> */}
          <img src={DifferentB} alt="" className='difference-image2 diff-img'/>
          <img src={DifferentC} alt="" className='difference-image3 diff-img'/>
          <img src={DifferentD} alt="" className='difference-image4 diff-img'/>
          </div>
              <div className="part3">
                <div className="part-content">
                  <div className="different-title">Quality of Candidates</div>
                  <div className="content">We source top-tier talent from a vast network, carefully screen them and
                    use advanced technology to streamline staffing, ensuring efficient and effective results.</div>
                </div>
                  <div className="part-content">
                    <div className="different-title">Long-term Goal</div>
                  <div className="content">We prioritize our clients&#39; success by building long-term relationships,
                  anticipating staffing needs, and providing personalized and attentive service with ongoing support.</div>   
              </div>
        </div>
        
              </div>
    </div>
  )
}

export default Different;