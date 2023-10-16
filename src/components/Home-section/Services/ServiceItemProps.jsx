import React from "react";

function ServiceItemProps({image,name,desc}) {
  return (
    <div className="services_item">
      {/* <img src="" alt="" /> */}
      <div className="service_item_img" >
      <img src={image} alt="services of the company" />
      </div>
      <h4>{name}</h4>
      <p>
       {desc}
      </p>
    </div>
  );
}

export default ServiceItemProps;
