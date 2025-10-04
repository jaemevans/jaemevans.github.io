import "./About.css";
import React from "react";
import { Link } from "react-router-dom";

import portrait from "../assets/portrait4.JPG";
// Font Awesome icons
import { FaGithub, FaLinkedin, FaSpotify } from "react-icons/fa";

// Material Design icons
import { MdEmail } from "react-icons/md";

function FadeDownSection({ children, delay = 0 }) {
  return (
    <div
      className="fade-down"
      style={{
        animation: `slideDown 1s ease-out ${delay}ms forwards`,
      }}
    >
      {children}
    </div>
  );
}

function About() {
  return (
    <div className="about-container">
      <div className="about-portrait">
        <img src={portrait} alt="Portrait of me" />
      </div>

      <div className="about-content">
        <FadeDownSection delay={1300}>
          <h1>About Me</h1>
          <h3 style={{ color: "#333" }}>Who I am</h3>
          <p>
            Hi! I am Jaelyn Evans, and I grew up on the North Side of Chicago.
            When I am not coding, you can find me outside enjoying nature. I am
            an avid cyclist, runner and hiker. I am always looking for ways to
            challenge myself and stay active. I also enjoy traveling the globe
            and meeting new people.
          </p>
        </FadeDownSection>
        <FadeDownSection delay={600}>
          <h3 style={{ color: "#333" }}>What I've Done</h3>
          <p>
            I graduated with my Bachelor’s in Computer Science from the
            University of Illinois at Urbana-Champaign in May 2024. While in
            college, I interned with Motorola Solutions at their Research Park
            location, contributing to full-stack web applications and managing
            database deployments—an experience that allowed me to sharpen both
            my technical skills and my ability to work collaboratively on
            complex projects.
          </p>
          <p>
            During my time at university, I co-founded CurbScout, a mobile app
            designed to help students exchange secondhand items. I focused on
            developing seamless photo features, refining the front-end
            experience, and coordinating with teammates to keep the project
            moving forward. After graduation, I continued working on the project
            while traveling through Europe and South America, gaining even more
            experience in remote collaboration and project management. You can
            read more about my professional journey and the projects I’ve worked
            on <Link to="/experience">here</Link>.
          </p>
        </FadeDownSection>
        <FadeDownSection delay={200}>
          <h3 style={{ color: "#333" }}>What I'm Looking For</h3>
          <p>
            I’m passionate about building user-centered applications that solve
            real-world problems and create meaningful impact. Right now, I’m
            looking for opportunities where I can contribute as a software
            engineer—particularly roles where I can grow my technical expertise
            while working on collaborative, mission-driven projects. I’m
            especially drawn to environments that encourage creativity,
            continuous learning, and a balance of technical challenge with human
            connection.
          </p>
        </FadeDownSection>
        <FadeDownSection delay={100}>
          <div className="socials">
            <h3 style={{ color: "#333" }}>Let's connect</h3>
            <p>
              I would love to connect with you. Whether it's shooting me an
              email or checking out some of my playlists, feel free to use the
              links down below!
            </p>
          </div>
          <div className="social-links">
            <a href="https://github.com/jaemevans" target="_blank">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/jaelyn-evans/" target="_blank">
              <FaLinkedin />
            </a>
            <a href="https://open.spotify.com/user/j.m.e74" target="_blank">
              <FaSpotify />
            </a>
            <a href="mailto:jaelynevans1@gmail.com">
              <MdEmail />
            </a>
          </div>
        </FadeDownSection>
      </div>
    </div>
  );
}

export default About;
