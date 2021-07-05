import React from 'react';
import { Link as LinkS } from 'react-scroll';

const InfoSection = () => {
	return (
		<div className="info-section" id="info">
			<div className="info-section-image">
				<div className="info-section-content">
					<h1>Firma</h1>
					<p>
						Firma Daston specjalizuje się w tworzeniu realistycznych wizualizacji budynków jak i ich wnętrz.
						Wizualizacje tworzone są indywidualnie na potrzeby klienta.
					</p>
					<LinkS
						to="contact"
						smooth={true}
						duration={500}
						spy={true}
						exact="true"
						offset={-80}
						className="info-section-content-button"
					>
						dowiedz się więcej
					</LinkS>
				</div>
			</div>
		</div>
	);
};

export default InfoSection;
