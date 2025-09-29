import "./About.css";
import React from "react";

import portrait from "../assets/portrait.png"; 

function About() {
  return (
       <div className="about-container">
      <div className="about-portrait">
        <img src={portrait} alt="Portrait of me" />
      </div>

      <div className="about-content">
        <h1>About Me</h1>
        <h2>Offline</h2>
        <p>
          Dilly dally here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.
        </p>
        <p>
          Dilly dally again. Nulla facilisi. Donec aliquet dolor libero, eget venenatis mauris finibus dictum.
        </p>
        <p>
          More dilly dally. Suspendisse potenti. Integer non sem vel turpis tempor fermentum.
        </p>
      </div>
    </div>
  );
}

export default About;