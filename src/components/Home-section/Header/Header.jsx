import React, { useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "./header.css";
function Header() {
  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };
const particlesLoaded=(container)=>{
console.log(container);
}


return (
    <section className="header_container">
      <div className="header_center">

        <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={
          {
            "fullScreen": {
                "enable": true,
                "zIndex": 1
            },
            particles: {
              number: {
                value: 400,
                density: {
                  enable: true,
                  value_area: 800
                }
              },
              color: {
                value: "#ffffff"
              },
              shape: {
                type: "circle",
                stroke: {
                  width: 0,
                  color: "#000000"
                },
                polygon: {
                  nb_sides: 5
                },
                image: {
                  src: "img/github.svg",
                  width: 100,
                  height: 100
                }
              },
              opacity: {
                value: 0.5,
                random: true,
                anim: {
                  enable: false,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: false
                }
              },
              size: {
                value: 10,
                random: true,
                anim: {
                  enable: true,
                  speed: 2.4362316369040355,
                  size_min: 0,
                  sync: true
                }
              },
              line_linked: {
                enable: false,
                distance: 500,
                color: "#ffffff",
                opacity: 0.4,
                width: 2
              },
              move: {
                enable: true,
                speed: 3,
                direction: "bottom",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200
                }
              }
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: {
                  enable: true,
                  mode: "bubble"
                },
                onclick: {
                  enable: true,
                  mode: "repulse"
                },
                resize: true
              },
              modes: {
                grab: {
                  distance: 400,
                  line_linked: {
                    opacity: 0.5
                  }
                },
                bubble: {
                  distance: 400,
                  size: 4,
                  duration: 0.3,
                  opacity: 1,
                  speed: 3
                },
                repulse: {
                  distance: 200,
                  duration: 0.4
                },
                push: {
                  particles_nb: 4
                },
                remove: {
                  particles_nb: 2
                }
              }
            },
            retina_detect: true
          
        }}
      />
        <h2 className="header-heading heading">Connecting Top Talent with Leading Companies.</h2>
        <p className="header-paragraph heading">
          "We provide IT staffing and software development services to businesses, helping them to achieve
          their technology goals with the right people and solutions".
        </p>

        <div className="header_btn_container">
        <a href="./careers" target="_blank" rel="noopener noreferrer"><button className="header_btn blue_background">View all jobs</button></a>
        <a href="./employers" target="_blank" rel="noopener noreferrer"><button className="header_btn blue_border">request resources</button></a>
        </div>
      </div>

    
    
    </section>
  );
}

export default Header;
