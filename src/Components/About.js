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
        <p>
          Hi! I am Jaelyn Evans. I grew up on the North Side of Chicago &
          graduated with a Bachelor’s in Computer Science from the University of
          Illinois at Urbana-Champaign in May 2024. Since then, I’ve taken a
          non-traditional path—traveling through Europe and South America,
          meeting new people, and exploring different cultures. During this
          time, I co-founded CurbScout, a mobile application enabling college
          students to exchange secondhand items, and continued developing the
          platform remotely while refining features, coordinating with
          teammates, and managing day-to-day operations. These experiences
          strengthened my adaptability, problem-solving skills, and
          entrepreneurial mindset, which I now bring to software development.
          I’m passionate about building user-centered applications that solve
          real-world problems and make a meaningful impact.
        </p>
        <h2>Offline</h2>
        <p>
          When I am not coding, you can find me outside enjoying nature. I am an
          avid cyclist, runner and hiker. I am always looking for ways to
          challenge myself and stay active. I also enjoy spending time with my
          friends. Whether that be a trip to the lake in the summer, a shopping
          trip or simply grabbing a bite to eat they are some of the most
          important people in my life.
        </p>
      </div>
    </div>
  );
}

export default About;
