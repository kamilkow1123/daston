import React, { useState } from 'react';

const ContactForm = ({ sendMessage }) => {
	const [ details, setDetails ] = useState({ firstname: '', lastname: '', email: '', phone: '', message: '' });

	const handleSubmit = (e) => {
		e.preventDefault();
		sendMessage(e.target);
		setDetails({ firstname: '', lastname: '', email: '', phone: '', message: '' });
	};

	return (
		<form className="contact-section-form" onSubmit={handleSubmit}>
			<div className="contact-section-form-wrapper">
				<div className="contact-section-form-group">
					<label htmlFor="firstname">Imię</label>
					<input
						type="text"
						name="firstname"
						id="firstname"
						onChange={(e) => setDetails({ ...details, firstname: e.target.value })}
						value={details.firstname}
					/>
				</div>
				<div className="contact-section-form-group">
					<label htmlFor="lastname">Nazwisko</label>
					<input
						type="text"
						name="lastname"
						id="lastname"
						onChange={(e) => setDetails({ ...details, lastname: e.target.value })}
						value={details.lastname}
					/>
				</div>
			</div>
			<div className="contact-section-form-wrapper">
				<div className="contact-section-form-group">
					<label htmlFor="email">E-mail</label>
					<input
						type="email"
						name="email"
						id="email"
						onChange={(e) => setDetails({ ...details, email: e.target.value })}
						value={details.email}
					/>
				</div>
				<div className="contact-section-form-group">
					<label htmlFor="phone">Numer telefonu</label>
					<input
						type="tel"
						name="phone"
						id="phone"
						onChange={(e) => setDetails({ ...details, phone: e.target.value })}
						value={details.phone}
					/>
				</div>
			</div>
			<div className="contact-section-form-group">
				<label>Wiadomość</label>
				<textarea
					id="message"
					name="message"
					type="text"
					autoComplete="off"
					onChange={(e) => setDetails({ ...details, message: e.target.value })}
					value={details.message}
				/>
			</div>
			<div className="button-wrapper">
				<input type="submit" value="WYŚLIJ" className="submit-button" />
			</div>
		</form>
	);
};

export default ContactForm;
