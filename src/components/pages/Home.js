import React from 'react';
import imgOne from '../../assets/images/bg-1.jpeg'
import imgTwo from '../../assets/images/bg-2.jpeg'
import imgThree from '../../assets/images/bg-3.jpeg'

export default function Home({ currentPage, handlePageChange }) {
	return (
		<div className="row justify-content-around">
			<div className="tile about-me mt-2 p-0">
				<a
					href="#about"
					onClick={() => handlePageChange('About')}
				>
					<img src={imgOne} alt="about-me" />
					<div className="overlay p-2">
						<h2>About Me</h2>
					</div>
				</a>
			</div>
			<div className="tile portfolio mt-2 p-0">
				<a 
					href="#portfolio"
					onClick={() => handlePageChange('Portfolio')}
				>
					<img src={imgTwo} alt="portfolio" />
					<div className="overlay p-2">
						<h2>Portfolio</h2>
					</div>
				</a>
			</div>
			<div className="tile contact-me mt-2 p-0">
				<a 
					href="#contact"
					onClick={() => handlePageChange('Contact')}
				>
					<img src={imgThree} alt="contact-me" />
					<div className="overlay p-2">
						<h2>Contact Me</h2>
					</div>
				</a>
			</div>
		</div>
	);
}



