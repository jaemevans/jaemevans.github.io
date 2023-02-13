import "./Navigation.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

function Navigation() {
  return (
    <div>
       <nav>
        <div class="logo">
          
            {/* <Link to="/">jaelyn</Link> */}
        jaelyn
        </div>
		<input type="checkbox" id="click" />
         <label for="click" class="menu-btn" >
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
            <Link to="/journal">journal</Link>
          </li>
          <li>
            <Link to="/contact">contact</Link>
          </li>
        </ul>
		</nav> 
		<div class="content">
         <div>
            Responsive Navigation Menu Bar Design
         </div>
         <div>
            using only HTML & CSS
         </div>
      </div>
    
    </div>
  );
}

export default Navigation;

{
  /* <ul className="navigation">
					<li >jaelyn evans</li>
				</ul>
				<ul className="navigation">
					<div className="top">
						<li>
							about
						</li>
						<li>
							experience
						</li>
						<li>
							projects
						</li>
						<li>
							notebook
						</li>
					</div>
					<div className="bottom">
						<li>
							contact
						</li>
					</div>
				</ul> */
}

// .useless {
// 	/* display: flex; */
// 	/* z-index: 3; */
// 	/* flex-direction: row; */
// 	/* flex: none; */
// 	/* background-color: lawngreen; */
// 	background-color: yellow;
// 	list-style: none;
// }

// 	<div >
// 	<div class="navbar">
// 	 <div class="container nav-container">
// 		 <input class="checkbox" type="checkbox" name="" id="" />
// 		 <div class="hamburger-lines">
// 		   <span class="line line1"></span>
// 		   <span class="line line2"></span>
// 		   <span class="line line3"></span>
// 		 </div>
// 	   <div class="logo">
// 		 <h1>Jaelyn Evans</h1>
// 	   </div>
// 	   <div class="menu-items">
// 		 <li>home</li>
// 		 <li>about</li>
// 		 <li>blogs</li>
// 		 <li>cool</li>
// 		 <li>school</li>
// 	   </div>
// 	 </div>
//    </div>
// 	 </div>

// .wrapper {
// 	display: grid;
// 	grid-gap: 30px;

// 	/* grid-template-columns: 100%; */
// 	grid-template-rows: 10% 90%;
// 	background-color: white;
// 	/* background-color: #F5F5FA; */
// 	color: blue;
//   }
//   .a {
// 	/* grid-column: 1; */
// 	grid-row: 2/3;
// 	background-color: darkgreen;
// 	/* background-color: #F5F5FA; */
//   }

//   .b {
// 	/* grid-column: 1 ; */
// 	grid-row: 1;
// 	background-color: lightgrey;

// 	/* background-color: #F5F5FA; */
//   }



