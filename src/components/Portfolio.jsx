import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
	return (
		<div className="portfolio" id="portfolio">
			<h1>Portfolio</h1>
			<div className="portfolio-wrapper">
				<div className="portfolio-card">
					<h2>RZUTY</h2>
					<div className="portfolio-card-button">otwórz</div>
				</div>
				<div className="portfolio-card">
					<h2>BUDYNKI</h2>
					<Link className="portfolio-card-button" to="/buildings">
						otwórz
					</Link>
				</div>
				<div className="portfolio-card">
					<h2>WNĘTRZA</h2>
					<div className="portfolio-card-button">otwórz</div>
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
