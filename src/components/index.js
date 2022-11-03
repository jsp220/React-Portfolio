import React, { useState } from 'react';
import Header from './Header';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Footer from './Footer';

const MainPage = () => {
	// set initial state of currentPage as Home
	const [currentPage, setCurrentPage] = useState('Home');

	// renders the page depending on what "currentPage" is
	const renderPage = () => {
		if (currentPage === 'About') {
			return <About />;
		}
		if (currentPage === 'Portfolio') {
			return <Portfolio />;
		}
		if (currentPage === 'Contact') {
			return <Contact />;
		}
		if (currentPage === 'Resume') {
			return <Resume />;
		}
		return <Home currentPage={currentPage} handlePageChange={handlePageChange} />;
	};

	// when page is changed, state of currentPage is also changed
	const handlePageChange = (page) => setCurrentPage(page);

	return (
		<>
			{/* currentPage and handlePageChange are passed into Header as props */}
			<Header currentPage={currentPage} handlePageChange={handlePageChange} />
			<main>
				<section className="container-fluid main-section">
				{renderPage()}
				</section>
			</main>
			<Footer />
		</>
	);
}

export default MainPage;
