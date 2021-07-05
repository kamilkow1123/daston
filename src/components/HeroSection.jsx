import React from 'react';
import { Link as LinkS } from 'react-scroll';

const HeroSection = () => {
	return (
		<div className="home">
			<div className="home-content">
				<h1>DASTON</h1>
				<p>REALISTYCZNE WIZUALIZACJE</p>
				<LinkS
					className="home-content-button"
					to="portfolio"
					smooth={true}
					duration={500}
					spy={true}
					exact="true"
					offset={-80}
				>
					zobacz nasze realizacje
				</LinkS>
			</div>
		</div>
	);
};

export default HeroSection;
