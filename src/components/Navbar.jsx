import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link as LinkS } from 'react-scroll';

const Navbar = ({ toggle }) => {
	const [ solidNav, setSolidNav ] = useState(false);

	const changeNav = () => {
		if (window.scrollY >= 80) {
			//80px - navbar's height
			setSolidNav(true);
		} else {
			setSolidNav(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', changeNav);
		console.log(solidNav);
	});

	return (
		<nav className="nav" style={{ background: `${solidNav ? '#fff' : 'transparent'}` }}>
			<div className="nav-container">
				<div className="logo" style={{ color: `${solidNav ? '#303131' : '#fff'}` }}>
					DASTON
				</div>
				<ul className="nav-menu">
					<li className="nav-item">
						<LinkS className="nav-link" style={{ color: `${solidNav ? '#303131' : '#fff'}` }}>
							Portfolio
						</LinkS>
					</li>
					<li className="nav-item">
						<LinkS className="nav-link" style={{ color: `${solidNav ? '#303131' : '#fff'}` }}>
							Firma
						</LinkS>
					</li>
					<li className="nav-item">
						<LinkS className="nav-link" style={{ color: `${solidNav ? '#303131' : '#fff'}` }}>
							Kontakt
						</LinkS>
					</li>
				</ul>
				<div className="mobile-icon" onClick={toggle} style={{ color: `${solidNav ? '#303131' : '#fff'}` }}>
					<FaBars />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
