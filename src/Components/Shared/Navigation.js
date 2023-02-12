import './Navigation.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

function Navigation() {
    return (
      <div >
       {/* <div class="navbar"> */}
        <div class="container nav-container">
		<li><Link to="/">jaelyn</Link></li>
		
          <div class="test">
            <li><Link to="/about">about</Link></li>
            <li><Link to="/projects">projects</Link></li>			
            <li><Link to="/journal">journal</Link></li>
            <li><Link to="/contact">contact</Link></li>
          </div>
        </div>
      {/* </div> */}
    </div>
    );
}

export default Navigation;




{/* <ul className="navigation">
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
				</ul> */}


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