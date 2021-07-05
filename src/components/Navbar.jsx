import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link as LinkS, animateScroll as scroll } from 'react-scroll';
import { Link as LinkR } from 'react-router-dom';

const Navbar = ({ toggle }) => {
	const [ solidNav, setSolidNav ] = useState(false);

	const changeNav = () => {
		// document.getElementById('home-container')
		if (window.scrollY >= 80) {
			//80px - navbar's height
			setSolidNav(true);
		} else {
			setSolidNav(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', changeNav);
	});

	const toggleHome = () => {
		scroll.scrollToTop();
	};

	return (
		<nav className="nav" style={{ background: `${solidNav ? '#fff' : 'transparent'}` }}>
			<div className="nav-container">
				<LinkR
					to="/"
					className="logo"
					onClick={toggleHome}
					style={{ color: `${solidNav ? '#303131' : '#fff'}` }}
				>
					DASTON
				</LinkR>
				<ul className="nav-menu">
					<li className="nav-item">
						<LinkS
							to="portfolio"
							smooth={true}
							duration={500}
							// spy={true}
							exact="true"
							offset={-80}
							className="nav-link"
							style={{ color: `${solidNav ? '#303131' : '#fff'}` }}
						>
							Portfolio
						</LinkS>
					</li>
					<li className="nav-item">
						<LinkS
							to="info"
							smooth={true}
							duration={500}
							// spy={true}
							exact="true"
							offset={-80}
							className="nav-link"
							style={{ color: `${solidNav ? '#303131' : '#fff'}` }}
						>
							Firma
						</LinkS>
					</li>
					<li className="nav-item">
						<LinkS
							to="contact"
							smooth={true}
							duration={500}
							// spy={true}
							exact="true"
							offset={-80}
							className="nav-link"
							style={{ color: `${solidNav ? '#303131' : '#fff'}` }}
						>
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
