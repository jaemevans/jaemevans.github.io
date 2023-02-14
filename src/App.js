import "./App.css";
import './index.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


import Navigation from "./Components/Shared/Navigation";
import Homepage from "./Components/Homepage";
import About from "./Components/About";
import Contact from "./Components/Contact";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="wrapper">
          <div className="b">
            <Navigation></Navigation>
          </div>

          <div className="a">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/contact" element={<Contact/>} />
              <Route path="/about" element={<About/>} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
