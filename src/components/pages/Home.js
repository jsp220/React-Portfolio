import React from 'react';
import imgOne from '../../assets/images/bg-1.jpeg'
import imgTwo from '../../assets/images/bg-2.jpeg'
import imgThree from '../../assets/images/bg-3.jpeg'
import imgFour from '../../assets/images/bg-4.jpeg'

export default function Home({ currentPage, handlePageChange }) {
	return (
		// each tile is also a link to different pages, and on click the handlePageChange function is executed, updating the state of currentPage
		<div className="row justify-content-around">
			<div className="tile about-me mt-2 p-0">
				<a
					href="#about"
					onClick={() => handlePageChange('About')}
				>
					<img className="home-btn" src={imgOne} alt="about-me" />
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
					<img className="home-btn" src={imgTwo} alt="portfolio" />
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
					<img className="home-btn" src={imgThree} alt="contact-me" />
					<div className="overlay p-2">
						<h2>Contact Me</h2>
					</div>
				</a>
			</div>
			<div className="tile resume mt-2 p-0">
				<a 
					href="#resume"
					onClick={() => handlePageChange('Resume')}
				>
					<img className="home-btn" src={imgFour} alt="resume" />
					<div className="overlay p-2">
						<h2>Resume</h2>
					</div>
				</a>
			</div>
		</div>
	);
}



