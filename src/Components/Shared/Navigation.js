import "./Navigation.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { WiHorizonAlt } from "react-icons/wi";




function Navigation() {
// const hamburger = document.querySelector("nav .menu-btn i");
// const navLinks = document.querySelector("nav ul");
// const link = document.querySelectorAll("nav ul li a");












  

//   function hideNav(){
//     if(hamburger.display=='block') {   
//         navLinks.display = 'none'   
//     }    
//     else navLinks.display='flex';
//     }


//     link.addEventListener('click', hideNav, false)


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
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/projects">projects</Link>
          </li>
          {/* <li>
            <Link to="/journal">journal</Link>
          </li> */}
          <li>
            <Link to="/contact">contact</Link>
          </li>
          
            {/* unfortunately implementing dark mode is a lot more complicated than i thought it would be  */}
            {/* <button>< WiHorizonAlt color="white" size="25px" /></button> */}


        </ul>
      </nav>
    </div>
  );
}

export default Navigation;

