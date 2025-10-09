import React, { useState, useEffect } from "react";
import "./HomePage.css";
import portrait from "../assets/grad.JPG"; 

const greetings = [
  "Hello",
  "Hej Hej",
  "Hola",
  "Bonjour",
  "Ciao",
  "Hallo",
  "Olá",
  "Zdravo",
];

const HomePage = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // fade out current greeting
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % greetings.length); // update greeting
        setFade(true); // fade in new greeting
      }, 500); // fade duration
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="homepage-hero">
      <div className="hero-left">
        <h1 className={`hero-greeting ${fade ? "fade-in" : "fade-out"}`}>
          {greetings[index]}
        </h1>
        <h2 className="hero-static">my name is Jaelyn.</h2>
        <h3 style={{ color: "#333" }}>
          I am a software engineer, traveler, and problem solver from Chicago,
          IL USA
        </h3>
      </div>
      <div className="hero-right">
        <img src={portrait} alt="Jaelyn" className="hero-portrait" />
      </div>
    </div>
  );
};

export default HomePage;
