import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { logo } from "./our-clients";
import "./ourClients.css";
const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
  <img src="clients-arrow.png" alt="prevArrow" {...props} />
);

const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
  <img src="clients-arrow-right.png" alt="nextArrow" {...props} />
);

function OurClients() {
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    accessibility: true,
    initialSlide: 0,
    autoplay: false,
    speed: 3000,
    autoplaySpeed: 8000,
    // cssEase: "linear",
    nextArrow: <SlickArrowRight />,
    prevArrow: <SlickArrowLeft />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <div className="ourClients_container">
      <h2 className="text-center">Our Clients</h2>
      <Slider {...settings} className="d-flex flex-column">
        {" "}
        {logo.map((item) => (
          <div
            className="company-logo d-flex flex-column justify-content-center align-items-center"
            key={item.id}
          ><a href={item.url}> 
            <div className="clients_logo">
            <img src={item.image} alt="company-logo" />
             
             
            </div>
            </a>
            {/* <h2 className="logo-name">{item.name}</h2> */}
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default OurClients;