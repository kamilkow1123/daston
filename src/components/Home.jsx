import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import Footer from './Footer';

const Home = () => {
	const [ isOpen, setIsOpen ] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div>
			<Sidebar isOpen={isOpen} toggle={toggle} />
			<Navbar toggle={toggle} />
			<HeroSection />
			<Footer />
		</div>
	);
};

export default Home;
