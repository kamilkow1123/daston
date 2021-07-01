import React from 'react';
import { FaBars } from 'react-icons/fa';
import { Link as LinkS } from 'react-scroll';

const Header = () => {
	return (
		<nav>
			<div className="logo">DASTON | DAWID KOWALEWSKI</div>
			<div className="mobile-icon">
				<FaBars />
			</div>
			<ul className="nav-menu">
				<li className="nav-item">
					<LinkS>Portfolio</LinkS>
				</li>
				<li className="nav-item">
					<LinkS>Firma</LinkS>
				</li>
				<li className="nav-item">
					<LinkS>Kontakt</LinkS>
				</li>
			</ul>
		</nav>
	);
};

export default Header;
