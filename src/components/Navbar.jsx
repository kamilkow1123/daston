import React from 'react';
import { FaBars } from 'react-icons/fa';
import { Link as LinkS } from 'react-scroll';

const Navbar = () => {
	return (
		<nav>
			<div className="logo">DASTON | DAWID KOWALEWSKI</div>
			<div className="mobile-icon">
				<FaBars />
			</div>
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
		</nav>
	);
};

export default Navbar;
