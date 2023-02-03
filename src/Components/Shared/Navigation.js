import './Navigation.css';
import React from 'react';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

function Navigation() {
    return (
      <div >
      <ul className="navigation">
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
				</ul>
        </div>
    );
}

export default Navigation;
