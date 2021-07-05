import React from 'react';
import { FaPhone, FaEnvelope, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import ContactForm from './ContactForm';

const ContactSection = () => {
	return (
		<div className="contact-section" id="contact">
			<div className="contact-section-container">
				<div className="contact-section-content">
					<h1>Kontakt</h1>
					<p>W celu wyceny wizualizacji proszę o kontakt.</p>
					<div className="icon-text">
						<FaEnvelope />
						<span>dastonm@gmail.com</span>
					</div>
					<div className="icon-text">
						<FaPhone />
						<span>+48 511 179 054</span>
					</div>
					<div className="contact-social">
						<a
							className="contact-social-link"
							href="//www.facebook.com/dawid.kowalewski.12/"
							target="_blank"
							rel="noreferrer"
							aria-label="Facebook"
						>
							<FaFacebook />
						</a>
						<a
							className="contact-social-link"
							href="//www.instagram.com/daston_render/"
							target="_blank"
							rel="noreferrer"
							aria-label="Instagram"
						>
							<FaInstagram />
						</a>
						<a
							className="contact-social-link"
							href="//www.linkedin.com/in/dawid-kowalewski-109073202/"
							target="_blank"
							rel="noreferrer"
							aria-label="Linkedin"
						>
							<FaLinkedin />
						</a>
					</div>
				</div>
				<div className="contact-section-wrapper">
					<ContactForm />
				</div>
			</div>
		</div>
	);
};

export default ContactSection;
