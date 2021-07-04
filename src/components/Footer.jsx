import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
	return (
		<div className="footer">
			<div className="footer-container">
				<div className="footer-logo">DASTON</div>
				<div className="footer-rights">
					All rights reserved &copy; {new Date().getFullYear()} By Kamil Kowalewski
				</div>
				<div className="footer-social">
					<a
						className="footer-social-link"
						href="//www.facebook.com/dawid.kowalewski.12/"
						target="_blank"
						rel="noreferrer"
						aria-label="Facebook"
					>
						<FaFacebook />
					</a>
					<a
						className="footer-social-link"
						href="//www.instagram.com/daston_render/"
						target="_blank"
						rel="noreferrer"
						aria-label="Instagram"
					>
						<FaInstagram />
					</a>
					<a
						className="footer-social-link"
						href="//www.linkedin.com/in/dawid-kowalewski-109073202/"
						target="_blank"
						rel="noreferrer"
						aria-label="Linkedin"
					>
						<FaLinkedin />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Footer;
