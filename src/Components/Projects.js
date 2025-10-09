import React, { useEffect } from "react";
import "./Projects.css";

import personalsite from "../assets/personalsite.png";
import curbscout from "../assets/curbscout.png";

const projects = [
  {
    name: "CurbScout",
    image: curbscout,
    languages: "Flutter, Dart, Firebase",
    description:
      "CurbScout is a mobile application designed as a free online marketplace for students, making it easy to buy, sell, and trade items on campus. I co-founded the project and collaborated with a team of six to bring it from concept to launch. My contributions focused on front-end development, including building the photo capture and display features to ensure a seamless user experience. I also worked closely on app design using Figma, integrating user feedback to improve usability, and contributed to deploying the final product using Flutter.",
      link: "https://curbscout.io/",
  },
  {
    name: "Personal Website",
    image: personalsite,
    languages: "React, CSS, JavaScript",
    description:
      "My personal website (this one!) built from scratch to showcase my background, projects, and experience.",
    link: "https://github.com/jaemevans/jaemevans.github.io",
  },
];

export default function Projects() {
  useEffect(() => {
    const cards = document.querySelectorAll(".project-card");
    cards.forEach((card, i) => {
      setTimeout(() => card.classList.add("slide-in-card"), i * 200);
    });
  }, []);

  return (
    <section className="projects-section">
      <h1 className="projects-heading">Projects</h1>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-image-container">
              <img
                src={project.image}
                alt={project.name}
                className="project-image"
              />
            </div>
            <div className="project-text">
              <h2 className="project-name">{project.name}</h2>
              <p className="project-languages">{project.languages}</p>
              <p className="project-description">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                See More
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
