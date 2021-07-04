import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import Portfolio from './Portfolio';
import InfoSection from './InfoSection';
import ContactSection from './ContactSection';
import Footer from './Footer';

const Home = () => {
	const [ isOpen, setIsOpen ] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="home-container" id="home-container">
			<Sidebar isOpen={isOpen} toggle={toggle} />
			<Navbar toggle={toggle} />
			<HeroSection />
			<Portfolio />
			<InfoSection />
			<ContactSection />
			<Footer />
		</div>
	);
};

export default Home;
