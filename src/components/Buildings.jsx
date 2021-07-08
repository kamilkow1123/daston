import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

const Buildings = () => {
	const [ isOpen, setIsOpen ] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div>
			<Sidebar isOpen={isOpen} toggle={toggle} />
			<Navbar toggle={toggle} />
		</div>
	);
};

export default Buildings;
