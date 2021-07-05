import React from 'react';

const ContactForm = () => {
	return (
		<form className="contact-section-form">
			<div className="contact-section-form-group">
				<label htmlFor="firstname">Imię</label>
				<input type="text" name="firstname" id="firstname" />
			</div>
			<div className="contact-section-form-group">
				<label htmlFor="lastname">Nazwisko</label>
				<input type="text" name="lastname" id="lastname" />
			</div>
			<div className="contact-section-form-group">
				<label htmlFor="email">E-mail</label>
				<input type="email" name="email" id="email" />
			</div>
			<div className="contact-section-form-group">
				<label htmlFor="phone">Numer telefonu</label>
				<input type="tel" name="phone" id="phone" />
			</div>
			<div className="contact-section-form-group">
				<label>Wiadomość</label>
				<textarea id="message" type="text" autocomplete="off" />
			</div>
			<div className="button-wrapper">
				<input type="submit" value="WYŚLIJ" className="submit-button" />
			</div>
		</form>
	);
};

export default ContactForm;
