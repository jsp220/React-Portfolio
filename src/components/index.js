import React, { useState } from 'react';
import Header from './Header';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Footer from './Footer';

const MainPage = () => {
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

	const handlePageChange = (page) => setCurrentPage(page);

	return (
		<>
			<Header {...currentPage} {...handlePageChange} />
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
