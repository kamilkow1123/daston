import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { CSSTransition } from 'react-transition-group';
import { Link as LinkS } from 'react-scroll';

const Sidebar = ({ isOpen, toggle }) => {
	return (
		<CSSTransition in={isOpen} unmountOnExit timeout={500} classNames="sidebar-transition">
			<aside className="sidebar" onClick={toggle}>
				<div className="close-icon" onClick={toggle}>
					<FaTimes />
				</div>
				<ul className="sidebar-wrapper">
					<LinkS
						to="portfolio"
						smooth={true}
						duration={500}
						spy={true}
						exact="true"
						offset={-80}
						className="sidebar-link"
					>
						Portfolio
					</LinkS>
					<LinkS
						to="info"
						smooth={true}
						duration={500}
						spy={true}
						exact="true"
						offset={-80}
						className="sidebar-link"
					>
						Firma
					</LinkS>
					<LinkS
						to="contact"
						smooth={true}
						duration={500}
						spy={true}
						exact="true"
						offset={-80}
						className="sidebar-link"
					>
						Kontakt
					</LinkS>
				</ul>
			</aside>
		</CSSTransition>
	);
};

export default Sidebar;
