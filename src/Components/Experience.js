import React, { useEffect } from "react";
import "./Experience.css";

const experiences = [
  {
    company: "CurbScout ♻️",
    position: "Co-Founder",
    location: "Remote / Champaign, IL",
    date: "September 2023 – Present",
    description:
      "Co-founded CurbScout, a mobile app enabling college students to exchange secondhand items, and continued development while abroad by coordinating remotely with teammates, conducting user research, and refining features. Managed day to day operation of the LLC including finances and mobile certifications. Competed in the Cozad Accelerator New Venture Competition and won honorary award and capital. Developed and presented an investor pitch deck, successfully securing investments to launch the venture.",
  },
  {
    company: "Travel Gap Year 🗺️",
    position: "Solo Travel",
    location: "Europe & South America",
    date: "May 2024 - August 2025",
    description:
      "Traveled solo through 28 countries across two continents, independently managing all trip logistics, accommodations, and budgeting. Strengthened adaptability, cross-cultural communication, and problem-solving through navigating unfamiliar environments and engaging with diverse communities. Enhanced language skills through immersive Spanish practice and cultural exchange.",
  },
  {
    company: "Motorola Solutions 👩🏽‍💻",
    position: "Software Engineering Intern",
    location: "Champaign, IL",
    date: "February 2023 - May 2024",
    description:
      "Developed a full-stack web application connecting individuals experiencing homelessness with local service providers, using Angular, React, and Node.js. Restructured and optimized a PostgreSQL database schema in PGAdmin, improving query efficiency and better aligning data models with application goals.",
  },
    {
    company: "Motorola Solutions 👩🏽‍💻",
    position: "Software Engineering Intern",
    location: "Champaign, IL",
    date: "May 2022 - August 2022",
    description:
      "Designed and implemented a mobile resource locator for unhoused individuals and a crowdsourced employee learning platform, leveraging Flutter, React, Go, and Node.js. Delivered end-to-end solutions across front-end and back-end development, ensuring responsive, user-friendly experiences across multiple platforms.",
  },
  {
    company: "WYSE 👩🏽‍🏫",
    position: "STEM Engagement Team Leader",
    location: "Urbana, IL",
    date: "October 2021 - May 2022",
    description:
      "Championed the next generation of underrepresented STEM leaders in K-12 by providing immersive, hands-on mentorship and cultivating a passion for innovation and discovery. Researched and wrote a successful grant proposal to secure funding for materials that community organizations can use to provide more inclusive environments for family STEM engagement.",
  },
];

export default function Experience() {
  useEffect(() => {
    // Animate left content
    const leftContents = document.querySelectorAll(".left-content");
    leftContents.forEach((el, i) => {
      setTimeout(() => el.classList.add("slide-in"), i * 200);
    });

    // Animate right content
    const rightContents = document.querySelectorAll(".right-content");
    rightContents.forEach((el, i) => {
      setTimeout(() => el.classList.add("slide-in"), i * 200);
    });
  }, []);

  return (
    <section className="experience-section">
      <h1 className="experience-heading">Professional Experience</h1>
      <div className="vertical-line"></div>

      {experiences.map((exp, index) => (
        <div key={index} className="experience-item">
          {/* Left side */}
          <div className="left-content">
            <h3 style={{ color: "#374151" }}>{exp.company}</h3>
            <p className="position">{exp.position}</p>
            <p className="location">{exp.location}</p>
            <p className="date">{exp.date}</p>
          </div>

          {/* Dot */}
          <div className="dot"></div>

          {/* Right side */}
          <div className="right-content">
            <p className="description">{exp.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
