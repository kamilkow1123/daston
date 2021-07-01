import React from 'react';
import { FaBars } from 'react-icons/fa';
import { Link as LinkS } from 'react-scroll';

const Navbar = () => {
	return (
		<nav className="nav">
			<div className="nav-container">
				<div className="logo">DASTON</div>
				<ul className="nav-menu">
					<li className="nav-item">
						<LinkS className="nav-link">Portfolio</LinkS>
					</li>
					<li className="nav-item">
						<LinkS className="nav-link">Firma</LinkS>
					</li>
					<li className="nav-item">
						<LinkS className="nav-link">Kontakt</LinkS>
					</li>
				</ul>
				<div className="mobile-icon">
					<FaBars />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
