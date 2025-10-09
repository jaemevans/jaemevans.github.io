import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";

import About from "./Components/About";
import HomePage from "./Components/HomePage";
import Navbar from "./Components/Shared/NavBar";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects/>} />
      </Routes>
    </Router>
  );
}

export default App;
