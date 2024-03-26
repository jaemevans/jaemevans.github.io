import "./Navigation.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { WiHorizonAlt } from "react-icons/wi";

function Navigation() {
  return (
    <div>
      <nav>
        <div class="logo">
          <Link to="/">Jaelyn</Link>
        </div>

        <input type="checkbox" id="click" />
        <label for="click" class="menu-btn">
          <i class="fa fas fa-bars"></i>
        </label>

        <ul>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/projects">projects</Link>
          </li>
          <li>
            <Link to="/contact">contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
