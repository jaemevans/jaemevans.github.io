import logo from './logo.svg';
import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import About from "./Components/About";
import HomePage from "./Components/HomePage";
import Navbar from "./Components/Shared/NavBar";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />

      </Routes>
    </Router>
  );
}

export default App;
