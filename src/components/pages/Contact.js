import React, { useState } from 'react';

export default function Contact() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	
	const handleInputChange = (e) => {
		// Getting the value and name of the input which triggered the change
		const { name, value } = e.target;
		
		if (name == "name") return setName(value);
		if (name == "email") return setEmail(value);
		if (name == "message") return setMessage(value);
	};

	const handleBlur = (e) => {
		const { name, value } = e.target;
		if (name == "email") {
			if (!email.toLowerCase().match(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/)) {
				alert("Please enter a valid email address.");
				return;
			}
		}
		if (!value) {
			alert(`${name} is a required field.`);
			return;
		}
	}

	const handleFormSubmit = (event) => {
		event.preventDefault();
		if (!email.toLowerCase().match(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/)) {
			alert("Please enter a valid email address.");
			return;
		}
		if (!name || !email || !message) {
			alert("Please enter all required fields.");
			return;
		}
		alert("Thank you for your message!");
		setName('');
		setEmail('');
		setMessage('');
		return;
	}
	
	return (
		<div className="pt-1">
			<h1 className="pb-1">Contact Me</h1>
			<form id="contact-form">
				<div className="mb-3">
					<label for="contact-name" className="form-label">Name</label>
					<input 
						value={name}
						name="name"
						onChange={handleInputChange}
						onBlur={handleBlur}
						type="email" 
						className="form-control" 
						id="contact-name" 
						placeholder="Your Name" />
				</div>
				<div className="mb-3">
					<label for="contact-email" className="form-label">Email address</label>
					<input 
						value={email}
						name="email"
						onChange={handleInputChange}
						onBlur={handleBlur}
						type="email" 
						className="form-control" 
						id="contact-email" 
						placeholder="name@example.com" />
				</div>
				<div className="mb-3">
					<label for="contact-message" className="form-label">Message:</label>
					<textarea 
						value={message}
						name="message"
						onChange={handleInputChange}
						onBlur={handleBlur}
						className="form-control" 
						id="contact-message" 
						rows="3"
					></textarea>
				</div>
				<div className="col-auto">
					<button type="submit" onClick={(event) => handleFormSubmit(event)} className="btn btn-primary mb-3">Submit</button>
				</div>
			</form>
		</div>
	);
}
