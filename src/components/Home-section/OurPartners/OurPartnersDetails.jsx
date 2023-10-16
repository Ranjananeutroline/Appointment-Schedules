import React from 'react'

function OurPartnersDetails({ourPartnersDetail}) {
    const { description, img} = ourPartnersDetail;
  return (
        <div className="item" style={{width:"",textAlign:"center"}}>
            <div className="shadow-effect">
            <img className="img-circle" src={img} alt="review of the company" />
            <p>{description}</p>
            </div>
        </div>

  )
}

export default OurPartnersDetails