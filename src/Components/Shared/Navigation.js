import "./Navigation.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { WiHorizonAlt } from "react-icons/wi";

function Navigation() {
  return (
    <div>
      <nav>
        <div class="logo">
          <Link to="/">jaelyn</Link>
        </div>
        <input type="checkbox" id="click" />
        <label for="click" class="menu-btn">
          <i class="fa fas fa-bars"></i>
        </label>

        <ul>
          <li>
            <Link to="/aboout">about</Link>
          </li>
          <li>
            <Link to="/projects">projects</Link>
          </li>
          <li>
            <Link to="/journal">journal</Link>
          </li>
          <li>
            <Link to="/contact">contact</Link>
          </li>
          <li>
            <button>< WiHorizonAlt color="white" size="25px" /></button>
            
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;

