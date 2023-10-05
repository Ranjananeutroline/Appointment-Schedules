import React from "react";
import { GoClock } from "react-icons/go";
// import "./Firstappointment.css";
import data from "./Data";

function AppointmentComponent({ itemid }) {
  console.log(itemid);
  console.log(data);
  const id = itemid -1
  return (
    <>
      <div className="inner-main">
        <div className="inner-time-detail">
          {/* <p className='modaltime-icon'><GoClock /></p>  */}
          <img
            src="first1.png"
            alt=""
            className="modaltime-icon"
            style={{ height: "47px", width: "47px" }}
          />
          <h6>
            {data[id]?.heading}
            <p className="modaltime-p">{data[id].desc}</p>
          </h6>
        </div>
      </div>

      <div className="second">
        <p>{data[id]?.completedesc}</p>
      </div>
    </>
  );
}

export default AppointmentComponent;
