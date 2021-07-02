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
					<LinkS className="sidebar-link">Portfolio</LinkS>
					<LinkS className="sidebar-link">Firma</LinkS>
					<LinkS className="sidebar-link">Kontakt</LinkS>
				</ul>
			</aside>
		</CSSTransition>
	);
};

export default Sidebar;
